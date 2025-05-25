import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Healthcare",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115515/App%20Industries%20Banner/Mockups/Futurismo/Banner-Mockup_vvhipz.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115490/App%20Industries%20Banner/Mockups/Futurismo/1_avh2vl.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115491/App%20Industries%20Banner/Mockups/Futurismo/2_khifp6.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115492/App%20Industries%20Banner/Mockups/Futurismo/3_hwbmpo.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115493/App%20Industries%20Banner/Mockups/Futurismo/4_vluef3.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115495/App%20Industries%20Banner/Mockups/Futurismo/5_paewp0.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115496/App%20Industries%20Banner/Mockups/Futurismo/6_bznvj4.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115497/App%20Industries%20Banner/Mockups/Futurismo/7_vx8zi3.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115498/App%20Industries%20Banner/Mockups/Futurismo/8_tzla3w.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115499/App%20Industries%20Banner/Mockups/Futurismo/9_xh0t8w.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115501/App%20Industries%20Banner/Mockups/Futurismo/10_cwsg7e.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115502/App%20Industries%20Banner/Mockups/Futurismo/11_f45faq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115503/App%20Industries%20Banner/Mockups/Futurismo/12_i5wsur.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115505/App%20Industries%20Banner/Mockups/Futurismo/13_ue3xgu.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115506/App%20Industries%20Banner/Mockups/Futurismo/14_dk4v9x.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115507/App%20Industries%20Banner/Mockups/Futurismo/15_rxoqp2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115509/App%20Industries%20Banner/Mockups/Futurismo/16_yrvpeb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115510/App%20Industries%20Banner/Mockups/Futurismo/17_t9jgb0.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115511/App%20Industries%20Banner/Mockups/Futurismo/18_m1ujqn.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115513/App%20Industries%20Banner/Mockups/Futurismo/19_cntfau.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115514/App%20Industries%20Banner/Mockups/Futurismo/20_lay9jk.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/10_gdvnid.webp",
    title: "Healthcare",
    extension: "Mobile Apps",
    tagLine:
      "We create custom healthcare mobile apps that simplify healthcare processes, with features like easy patient and doctor appointment scheduling, medical record management, Telemedicine Consultations, and secure payment processing, streamlining the entire healthcare workflow.",
    shortTagline:
      "We create custom healthcare mobile apps with easy appointment scheduling, medical record management, telemedicine, and secure payments.",
    shortTaglineMobile:
      "scheduling, medical record management, telemedicine, and more.",
    app: "Fiturismo",
    introduction:
      "Fiturismo is a healthcare app, featuring our Online Doctor Consultation that simplifies communication between you and healthcare professionals. With this feature, you can access medical advice anytime and anywhere, making healthcare more convenient than ever. Discover how Fiturismo simplifies digital communication by connecting patients with doctors.",
    introBulletPoints: [
      "Doctor appointment scheduling",
      "Medical record management",
      "Telemedicine Consultations",
      "Nutrition Planning",
      "Medication Tracking",
      "Symptom Checker",
    ],
    introEnd: "Here's how we assisted Fiturismo in their operations online.",
    problemStatement:
      "Many patients have busy schedules that make it hard to visit doctors in person. This often leads to neglected health issues. A reliable online healthcare solution is needed to address this problem.",
    problemExplanation:
      "Today, many patients find it hard to visit doctors because they are too busy, which can lead to ignored health problems. There was a need of telemedicine app and Fiturismo filled this gap that made it easy to talk to doctors through calls or voice messages. This mobile app helps everyone keep up with their health without messing up their daily schedules. It makes getting healthcare help easy and quick, right from your home or wherever you are. Now you can manage your health more easily than ever.",
    solutionStatement:
      "Fiturismo offers a solution by providing easy to use online consultations with doctors and clinical administrator addressing the need for accessible healthcare",
    solutionExplanation:
      "Fiturismo makes it very easy to consult a doctor online with just a tap, developed by Duseca, it's part of their Healthcare App Development Services. You can make a video call, audio call, or leave a message for the doctors right from the app. It's great for patients who are too busy to visit a doctor in person. With Fiturismo, you get medical help quickly and simply, without having to travel. This app is very user-friendly, helping you stay healthy even with a busy schedule.",
  };
  return <IndustryPage industry={industry} />;
}
