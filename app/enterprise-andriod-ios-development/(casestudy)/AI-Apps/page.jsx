import CasestudyDetailPage from "@/app/components/mobileAppDevelopment/CasestudyDetailPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "AI-Apps",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116561/App%20Industries%20Banner/Mockups/SuperGPT/Banner-Mockup_dehrtx.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116546/App%20Industries%20Banner/Mockups/SuperGPT/1_bdfrtq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116548/App%20Industries%20Banner/Mockups/SuperGPT/2_vwdd1u.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116550/App%20Industries%20Banner/Mockups/SuperGPT/3_qxvaqt.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116552/App%20Industries%20Banner/Mockups/SuperGPT/4_esqxxz.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116553/App%20Industries%20Banner/Mockups/SuperGPT/5_oytduj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116555/App%20Industries%20Banner/Mockups/SuperGPT/6_gidlsz.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116557/App%20Industries%20Banner/Mockups/SuperGPT/7_qgtrrj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718116559/App%20Industries%20Banner/Mockups/SuperGPT/8_maahz6.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/12_oq5zpe.webp",
    title: "AI",
    extension: "Mobile Apps",
    tagLine:
      "We develop customized AI mobile apps that enhance experiences with features like smooth machine learning integration, real-time predictive analytics, secure natural language processing, optimization of AI models, intelligent computer vision capabilities, and automated decision-making control.",
    shortTagline:
      "We create customized AI mobile apps with machine learning integration, predictive analytics, natural language processing, and intelligent decision-making.",
    app: "Super GPT",
    introduction:
      "Super GPT is the AI Chatbot designed to revolutionize how you interact with technology. Ideal for first-time users or everyday users, it simplifies complex tasks and offers smooth engaging interactions. Discover how Super GPT enhances digital communication:",
    introBulletPoints: [
      "AI-Driven Content Generation",
      "AI Text Summarization",
      "Voice Commands",
      "Document Upload Feature",
      "AI Content Creation",
      "AI Social Media Post",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly AI apps.",
    problemStatement:
      "Many online tools and chatbots require paid memberships and limit usage, making it difficult for users to access the help they need",
    problemExplanation:
      "Many tools and chatbots let you use them only a few times. This is a big problem these days. But Super GPT, an AI app, has fixed this. They let you talk as much as you want if you join their membership. You can also give voice commands and upload documents. Plus, Super GPT gives fast and on-time answers that really fit what you need.",
    solutionStatement:
      "Super GPT made a successful solution where there are no limits. You can chat as much as you want, and the responses are just what you're looking for.",
    // "Super GPT saw that many chatbots limit how much you can talk to them. So, they made a successful solution where there are no limits. You can chat as much as you want, and the responses are just what you're looking for.",
    solutionExplanation:
      "Super GPT noticed a big problem: many chatbots set limits on how much you could talk to them. Seeing this common issue among AI apps, Super GPT developed a solution that removes these barriers entirely. Now, with Super GPT, there are no restrictions on the number of interactions. This change has overcome a major hurdle, making it easier for users to communicate as much as they need. The app responds precisely as users require, ensuring every interaction is smooth and helpful.",
  };
  return <CasestudyDetailPage industry={industry} link='/enterprise-andriod-ios-development' />;
}
