import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChatModal from "./ChatModal";
import { useRouter } from "next/navigation";
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, updateDoc, where, writeBatch } from "firebase/firestore";
import { db } from "@/app/firebase";
import Lottie from "react-lottie";
import animationData from '../utils/animations/noChatAnimation';
import loadingData from '../utils/animations/loading';
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  const [isChat, setIsChat] = useState(false);
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const scrollRef = useRef(null);

  const handleChatModalClose = () => {
    // Handle closing of chat modal
    router.push('/');
    setIsChat(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // console.log(userEmail)
    const emailRegex = /\.com$/i;
    setIsLoading(true);
    if (emailRegex.test(userEmail)) {
      // console.log('email correct')
      const usersCollectionRef = collection(db, 'users');
      const userQuery = query(usersCollectionRef, where('userEmail', '==', userEmail));

      try {
        const userSnapshot = await getDocs(userQuery);
        if (userSnapshot.empty) {
          // User email doesn't exist in the users collection
          // Save the user in the collection
          const docRef = await addDoc(collection(db, 'users'), { userEmail: userEmail, userName: userName });
          await updateDoc(doc(db, 'users', docRef.id), {
            userId: docRef.id,
          });
          const jsonData = {
            userEmail: userEmail,
            userName: userName,
            userId: docRef.id
          }
          localStorage.setItem('userData', JSON.stringify(jsonData));
          setUserId(docRef.id)
          setIsLoading(false);
          setIsChat(false); // Close the chat modal
          // Now you can fetch messages related to the user from the messages collection
          // FetchMessagesFunction(userEmail);
        } else {
          // User email exists in the users collection
          // Fetch messages related to the user from the messages collection
          // FetchMessagesFunction(userEmail);
          const docArray = userSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const jsonData = {
            userEmail: docArray[0].userEmail,
            userName: docArray[0].userName,
            userId: docArray[0].userId
          }
          setUserEmail(docArray[0].userEmail);
          setUserName(docArray[0].userName);
          setUserId(docArray[0].userId);
          localStorage.setItem('userData', JSON.stringify(jsonData));
          fetchMessagesByListingId(docArray[0].userId)
          setIsLoading(false)
          setIsChat(false); // Close the chat modal
        }

      } catch (error) {
        setIsLoading(false)
        console.log(error.messages)
      }

    } else {
      // Email is not valid
      setError('Please enter a valid email address');
      // console.log('hello mother suckers')
      setIsLoading(false)
    }
  };

  const findChatroomByListingId = async (clientId) => {
    const chatroomsRef = collection(db, "chatRooms");
    const q = query(chatroomsRef, where("clientId", "==", clientId));
    const querySnapshot = await getDocs(q);

    // Assuming there's only one chatroom per listing ID
    if (!querySnapshot.empty) {
      const chatroomDoc = querySnapshot.docs[0];
      return { id: chatroomDoc.id, ...chatroomDoc.data() };
    } else {
      return null; // No chatroom found for the listing ID
    }
  }

  const fetchMessagesByListingId = async (clientId) => {
    setIsLoading(true);
    const chatroom = await findChatroomByListingId(clientId);
    if (chatroom) {
      setChatroom(chatroom);
      console.log(chatroom);
      const messagesRef = collection(db, `chatRooms/${chatroom.id}/messages`);
      const querySnapshot = await getDocs(messagesRef);
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messages);
      setIsLoading(false);
      // onSnapshot(messagesRef, (snapshot) => {
      //   const messages = [];
      //   snapshot.forEach((doc) => {
      //     messages.push({ id: doc.id, ...doc.data() });
      //   });
      //   setIsLoading(false)
      //   setMessages(messages)
      // });
    } else {
      console.log("No chatroom found for the given listing ID.");
      setIsLoading(false)
      setMessages([]);
    }
  }

  const fetchMessagesOfUser = async (clientId) => {
    setIsLoading(true);
    const chatroom = await findChatroomByListingId(clientId);
    // console.log(chatroom, "chat room is")
    if (chatroom) {
      setChatroom(chatroom);
      // console.log(chatroom);
      const messagesRef = collection(db, `chatRooms/${chatroom.id}/messages`);
      const q = query(messagesRef, orderBy('sentAt', 'asc'));
      onSnapshot(q, (snapshot) => {
        const messages = [];
        snapshot.forEach((doc) => {
          messages.push({ id: doc.id, ...doc.data() });
        });
        setIsLoading(false)
        setMessages(messages)
      });
    } else {
      console.log("No chatroom found for the given listing ID.");
      setIsLoading(false)
      setMessages([]);
    }
  }

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    e.target.reset();
    // console.log(message);
    if (chatroom) {
      await addMessageToChatroom();
      // console.log('Im in if condition')
    } else {
      await createChatroomAndAddMessage();
    }
    setMessage('')

  }

  const addMessageToChatroom = async () => {
    const messagesRef = collection(db, `chatRooms/${chatroom.id}/messages`);
    const newMessage = {
      message: message,
      sentAt: new Date(),
      sentBy: userId
    };

    const batch = writeBatch(db);

    const newMessageDocRef = doc(messagesRef); // Get a new document reference for the new message
    batch.set(newMessageDocRef, newMessage);

    const chatroomDocRef = doc(db, "chatRooms", chatroom.id);
    const updatedChatroom = {
      lastMessage: message,
      lastMessageTime: new Date(),
    };
    batch.update(chatroomDocRef, updatedChatroom);

    try {
      await batch.commit();
      setChatroom({ ...chatroom, lastMessage: message });
      setMessages([...messages, { id: newMessageDocRef.id, ...newMessage }]);
      setIsLoading(false)
    } catch (error) {
      console.error("Error writing batch: ", error);
      setIsLoading(false)
    }
  };


  const createChatroomAndAddMessage = async () => {
    const newChatroom = {
      clientId: userId,
      userId: "receiverUserId", // Replace with actual receiver ID
      lastMessage: message,
      lastMessageTime: new Date(),
      clientUnreadCount: 1,
      userUnreadCount: 0,
    };

    const batch = writeBatch(db);

    try {
      // Create the chatroom
      const chatroomRef = doc(collection(db, "chatRooms"));
      const chatroomId = chatroomRef.id; // Get the ID of the new chatroom
      newChatroom.chatId = chatroomId; // Add the chatroom ID to the newChatroom object
      batch.set(chatroomRef, newChatroom);

      // Create the first message in the chatroom
      const messagesRef = collection(chatroomRef, "messages");
      const newMessage = {
        message: message,
        sentAt: new Date(),
        sentBy: userId
      };
      const newMessageDocRef = doc(messagesRef); // Get a new document reference for the new message
      batch.set(newMessageDocRef, newMessage);

      // Commit the batch
      await batch.commit();

      // Update the state
      setChatroom({ ...newChatroom, id: chatroomId }); // Include the chatroom ID in the state
      setMessages([{ id: newMessageDocRef.id, ...newMessage }]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating chatroom and adding message: ", error);
      setIsLoading(false);
    }
  };

  const dateOptions = { hour12: true, hour: "numeric", minute: "numeric" }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: 'svg'
  }
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    renderer: 'svg'
  }

  const formatTimestamp = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
    return '';
  };

  useEffect(() => {
    // Check if user email is stored in cookies
    const userData = localStorage.getItem('userData');
    let unsubscribe;
    if (userData) {
      // If user email is found in cookies, set it in state
      const data = JSON.parse(userData)
      setUserEmail(data.userEmail);
      setUserName(data.userName);
      setUserId(data.userId);
      (async () => {
        unsubscribe = await fetchMessagesOfUser(data.userId);
      })();
    } else {
      // If user email is not found in cookies, open the chat modal
      setIsChat(true);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };

  }, [])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="flex w-full border-t border-blue-150 border-opacity-40">
        <div className="basis-1/3 border-r border-blue-150/40 w-full hidden lg:block">
          <div className="border-b border-blue-150/40 w-full">
            <h1 className="px-6 py-3 text-gray-350 font-semibold">
              All Messages
            </h1>
          </div>
          <div className="flex justify-between bg-blue-180/20 px-6 py-6">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-2xl bg-blue-170">
                W
              </div>
              <div>
                <h1 className="font-semibold text-gray-150">{userName || "user Name"}</h1>
                <p className="text-sm text-gray-450 mt-2 truncate">
                  {chatroom?.lastMessage}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-450">{formatTimestamp(chatroom?.lastMessageTime)}</p>
          </div>
        </div>
        <div className="lg:basis-3/4 w-full ">
          <h1 className="px-6 py-3 text-gray-350 font-semibold">Chats</h1>
          <div className="border-y">
            <div className="flex justify-between px-6 py-2">
              <div>
                <h1 className="font-semibold text-gray-150">Wajahat Malek</h1>
                <p className="text-sm text-gray-150 mt-1">
                  Wajahatmalek@gmail.com
                </p>
              </div>
              <p className="text-sm text-gray-450">{new Date().toLocaleDateString('en-US')} {new Date().toLocaleTimeString('en-US', dateOptions)}</p>
            </div>
          </div>
          {/* <div className="flex justify-between items-center w-full gap-2">
            <hr className="bg-gray-350/30 h-px border-0 w-full" />
            <p className="text-gray-350 text-sm uppercase">Today</p>
            <hr className="bg-gray-350/30 h-px w-full" />
          </div> */}
          <div className="py-2 h-[56.7vh] md:h-[60vh] overflow-y-scroll scroll-smooth custom-scrollbar space-y-5">
            {
              isLoading ?
                <div className="flex items-center max-h-full h-full">
                  <Lottie options={defaultOptions2} className='max-w-md' height={300} />
                </div>
                :

                messages.length > 0 ?
                  messages.map((x, index) => (
                    <div key={index} className="px-6 font-sans">
                      <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold uppercase text-lg bg-blue-150">
                          {userName[0]}
                        </div>
                        <div className="space-y-1">
                          <h1 className="font-semibold text-gray-150 text-sm">{x?.sentBy == userId ? userName : "Wajahat Malek"} <span className="text-gray-350 font-normal text-xs">{formatTimestamp(x.sentAt)}</span>
                          </h1>
                          <div className="text-sm text-gray-450 max-w-2xl">
                            {x.message}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div className="text-center px-6 text-sm font-medium">
                    <Lottie
                      className='max-w-md'
                      options={defaultOptions}
                      height={500}
                    />
                    <p>No chat records found. You can start your new chat bellow.</p>
                  </div>
            }
            <div ref={scrollRef} />
          </div>
          <div className="w-full border-t border-gray-900/15 lg:border-blue-150/40 py-4">
            <form onSubmit={handleSubmitMessage}>
              <div className="flex items-center justify-between gap-1 px-6">
                {/* <div className="flex text-center gap-7"> */}
                {/* <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6 12.8C25.6 9.40523 24.2514 6.1495 21.851 3.74903C19.4505 1.34857 16.1948 0 12.8 0C9.40523 0 6.1495 1.34857 3.74903 3.74903C1.34857 6.1495 0 9.40523 0 12.8C0 16.1948 1.34857 19.4505 3.74903 21.851C6.1495 24.2514 9.40523 25.6 12.8 25.6C16.1948 25.6 19.4505 24.2514 21.851 21.851C24.2514 19.4505 25.6 16.1948 25.6 12.8ZM1.6 12.8C1.6 11.3292 1.8897 9.87279 2.45255 8.51395C3.0154 7.1551 3.84039 5.92042 4.8804 4.8804C5.92042 3.84039 7.1551 3.0154 8.51395 2.45255C9.87279 1.8897 11.3292 1.6 12.8 1.6C14.2708 1.6 15.7272 1.8897 17.0861 2.45255C18.4449 3.0154 19.6796 3.84039 20.7196 4.8804C21.7596 5.92042 22.5846 7.1551 23.1475 8.51395C23.7103 9.87279 24 11.3292 24 12.8C24 15.7704 22.82 18.6192 20.7196 20.7196C18.6192 22.82 15.7704 24 12.8 24C9.82958 24 6.98081 22.82 4.8804 20.7196C2.78 18.6192 1.6 15.7704 1.6 12.8ZM18.4 10.4C18.4 9.97565 18.2314 9.56869 17.9314 9.26863C17.6313 8.96857 17.2243 8.8 16.8 8.8C16.3757 8.8 15.9687 8.96857 15.6686 9.26863C15.3686 9.56869 15.2 9.97565 15.2 10.4C15.2 10.8243 15.3686 11.2313 15.6686 11.5314C15.9687 11.8314 17.9757 10.4 18.4 10.4C18.8243 10.4 17.6313 11.8314 17.9314 11.5314C18.2314 11.2313 18.4 10.8243 18.4 10.4ZM10.4 10.4C10.4 9.97565 10.2314 9.56869 9.93137 9.26863C9.63131 8.96857 9.22435 8.8 8.8 8.8C8.37565 8.8 7.96869 8.96857 7.66863 9.26863C7.36857 9.56869 7.2 9.97565 7.2 10.4C7.2 10.8243 7.36857 11.2313 7.66863 11.5314C7.96869 11.8314 8.37565 12 8.8 12C9.22435 12 9.63131 11.8314 9.93137 11.5314C10.2314 11.2313 10.4 10.8243 10.4 10.4ZM7.8224 16.824C7.75632 16.7423 7.67479 16.6743 7.58246 16.6241C7.49013 16.5739 7.38881 16.5423 7.28429 16.5313C7.17977 16.5202 7.07409 16.5298 6.97329 16.5596C6.87248 16.5894 6.77853 16.6387 6.6968 16.7048C6.61507 16.7709 6.54715 16.8524 6.49692 16.9447C6.4467 17.0371 6.41515 17.1384 6.40408 17.2429C6.39301 17.3474 6.40264 17.4531 6.43241 17.5539C6.46218 17.6547 6.51152 17.7487 6.5776 17.8304C7.32705 18.7588 8.275 19.5074 9.3518 20.0213C10.4286 20.5352 11.6069 20.8013 12.8 20.8C15.312 20.8 17.5568 19.64 19.0224 17.8304C19.0886 17.7487 19.138 17.6547 19.1679 17.5539C19.1978 17.453 19.2075 17.3473 19.1965 17.2427C19.1855 17.1381 19.154 17.0367 19.1038 16.9443C19.0536 16.8518 18.9857 16.7702 18.904 16.704C18.8223 16.6378 18.7283 16.5884 18.6275 16.5585C18.5266 16.5286 18.4209 16.5189 18.3163 16.5299C18.2117 16.5409 18.1103 16.5724 18.0179 16.6226C17.9254 16.6728 17.8438 16.7407 17.7776 16.8224C17.1784 17.5656 16.4202 18.165 15.5588 18.5764C14.6974 18.9879 13.7546 19.201 12.8 19.2C11.8455 19.2012 10.9028 18.9883 10.0414 18.5771C9.18003 18.166 8.42175 17.5669 7.8224 16.824Z" fill="#95979D" />
                </svg> */}
                {/* <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6673 6.41667L11.6673 19.8333C11.6673 22.4117 9.57899 24.5 7.00065 24.5C4.42232 24.5 2.33398 22.4117 2.33398 19.8333L2.33398 5.25C2.33398 4.47646 2.64127 3.73459 3.18826 3.18761C3.73524 2.64063 4.4771 2.33334 5.25065 2.33334C6.0242 2.33334 6.76606 2.64063 7.31305 3.18761C7.86003 3.73459 8.16732 4.47646 8.16732 5.25L8.16732 17.5C8.16732 18.1417 7.64232 18.6667 7.00065 18.6667C6.35898 18.6667 5.83398 18.1417 5.83398 17.5L5.83398 6.41667L4.08398 6.41667L4.08398 17.5C4.08398 18.2735 4.39128 19.0154 4.93826 19.5624C5.48524 20.1094 6.2271 20.4167 7.00065 20.4167C7.7742 20.4167 8.51606 20.1094 9.06305 19.5624C9.61003 19.0154 9.91732 18.2735 9.91732 17.5L9.91732 5.25C9.91732 2.67167 7.82898 0.583336 5.25065 0.583336C2.67232 0.583336 0.583983 2.67167 0.583983 5.25L0.583984 19.8333C0.583984 23.38 3.45398 26.25 7.00065 26.25C10.5473 26.25 13.4173 23.38 13.4173 19.8333L13.4173 6.41667L11.6673 6.41667Z" fill="#95979D" />
                  </svg> */}
                {/* </div> */}
                <div className="w-full">
                  <input type="text" onChange={e => setMessage(e.target.value)} className="block outline-none bg-gray-200 px-2.5 py-2 w-full text-sm text-gray-150 focus:ring-blue-500 rounded-full focus:border-blue-500 placeholder:text-gray-150" placeholder="Write a message" />
                </div>
                {isLoading
                  ?
                  <button type="submit" className="p-2.5 duration-200 text-sm rounded-xl bg-blue-150/40 whitespace-nowrap text-blue-150 hidden md:block font-semibold">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-100 animate-spin fill-blue-150" viewBox="0 0 100 101" fill="" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                  </button>
                  :
                  <>
                    <div>
                      <button type="submit" disabled={!message && true} className="md:px-4 lg:px-7 py-2.5 disabled:bg-blue-150/5 disabled:text-opacity-40 duration-200 text-sm rounded-xl bg-blue-150/15 whitespace-nowrap text-blue-150 hidden md:block font-semibold">Send Message</button>
                    </div>
                    <div>
                      <button type="submit" disabled={!message && true} className="p-2 rounded-xl disabled:bg-blue-150/10 disabled:text-opacity-40 duration-200 bg-blue-150/15 whitespace-nowrap text-blue-150 font-semibold md:hidden"><IoIosSend className="w-5 h-5" /></button>
                    </div>
                  </>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      <ChatModal
        isOpen={isChat}
        closeModal={handleChatModalClose}
        handleEmailSubmit={handleEmailSubmit}
        setUserEmail={setUserEmail}
        setUserName={setUserName}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default Chat;
