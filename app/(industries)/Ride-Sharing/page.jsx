import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Ride-Sharing",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115123/App%20Industries%20Banner/Mockups/Airdrive/Banner-Mockup_c9wdf9.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115125/App%20Industries%20Banner/Mockups/Airdrive/1_tb5hhv.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115126/App%20Industries%20Banner/Mockups/Airdrive/3_ilweq0.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115127/App%20Industries%20Banner/Mockups/Airdrive/4_knhopo.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115128/App%20Industries%20Banner/Mockups/Airdrive/5_svlrtd.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115129/App%20Industries%20Banner/Mockups/Airdrive/6_hf03xh.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115130/App%20Industries%20Banner/Mockups/Airdrive/7_wnvsb2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115132/App%20Industries%20Banner/Mockups/Airdrive/8_lpnaw9.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115133/App%20Industries%20Banner/Mockups/Airdrive/9_vo37wm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115096/App%20Industries%20Banner/Mockups/Airdrive/10_quxjj0.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115097/App%20Industries%20Banner/Mockups/Airdrive/11_an1nuk.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115097/App%20Industries%20Banner/Mockups/Airdrive/12_mlbfin.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115111/App%20Industries%20Banner/Mockups/Airdrive/13_uq9j5o.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115112/App%20Industries%20Banner/Mockups/Airdrive/14_lltbbc.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115113/App%20Industries%20Banner/Mockups/Airdrive/15_kqbzss.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115114/App%20Industries%20Banner/Mockups/Airdrive/16_qu9okq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115115/App%20Industries%20Banner/Mockups/Airdrive/17_dqinqj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115116/App%20Industries%20Banner/Mockups/Airdrive/18_aexd66.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115117/App%20Industries%20Banner/Mockups/Airdrive/19_imnh6t.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115118/App%20Industries%20Banner/Mockups/Airdrive/20_auchoc.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115119/App%20Industries%20Banner/Mockups/Airdrive/21_ofyprm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115120/App%20Industries%20Banner/Mockups/Airdrive/23_ccccsu.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115121/App%20Industries%20Banner/Mockups/Airdrive/24_chnaac.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115122/App%20Industries%20Banner/Mockups/Airdrive/25_j7atda.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115124/App%20Industries%20Banner/Mockups/Airdrive/Billing_m4mnlr.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/14_kvadpj.webp",
    title: "Ride Sharing",
    extension: "Mobile Apps",
    tagLine:
      "We create custom ride-sharing mobile apps that simplify experiences by offering features such as easy ride booking, real-time tracking, secure account management, and optimization of transportation services",
    shortTagline:
      "We create custom ride-sharing mobile apps with easy ride booking, real-time tracking, and secure account management.",
    shortTaglineMobile:
      "easy ride booking, real-time tracking, account management, and more.",
    app: "Air Drive",
    introduction:
      "Ride-sharing apps help you get where you want to go. Air Drive is a new app that helps you get a ride with just a few taps on your phone. With Air Drive, you can enjoy a convenient and hassle-free ride to your destination. Here's how we assisted Air Drive in their operations online.",
    introBulletPoints: [
      "Easy ride Booking",
      "Real-time Tracking",
      "On-Demand In-Car Services",
      "Dynamic Price Algorithm",
      "Ride Pooling Feature",
      "Rating and Feedback System",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly Ride Sharing apps.",
    problemStatement:
      "Traveling with family or friends can be challenging when it comes to transportation. Public transport only picks up from one location, making it impractical for groups.",
    problemExplanation:
      "Air Drive noticed a problem: when groups of friends or families want to travel together, regular cars don't have enough space, and public buses only stop at one place, which isn't easy for everyone. To fix this, Air Drive started a ride sharing platform with mini vans and buses. These vehicles can pick up each person from wherever they are, so everyone can travel together easily. This makes it simpler for large groups to plan trips without worrying about fitting into one car or meeting at a single bus stop. It's a simple way to ensure that everyone gets to join in the fun, no matter where they are starting from.",
    solutionStatement:
      "Air Drive is an app that provides a mini bus and van service to make group travel easy. Through this app, you can book a van or bus that picks up each person from their chosen location.",
    solutionExplanation:
      "Air Drive is an app that helps you book mini buses and vans for group trips with ride-sharing apps, there's no need for everyone to gather in one location. Instead, the vehicle comes to you, wherever you are, and picks you up. This makes it perfect for family outings or trips with friends. You just tell the app where to go, and it takes care of the rest. Air Drive is more than just a taxi app. With Air Drive, you can enjoy a comfortable journey surrounded by your favorite people",
  };
  return <IndustryPage industry={industry} />;
}
