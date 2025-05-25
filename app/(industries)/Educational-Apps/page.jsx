import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Educational-Apps",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115310/App%20Industries%20Banner/Mockups/Edu%20Connect/Banner-Mockup_ruwsiz.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115294/App%20Industries%20Banner/Mockups/Edu%20Connect/1_otwsvj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115295/App%20Industries%20Banner/Mockups/Edu%20Connect/2_ybniqm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115296/App%20Industries%20Banner/Mockups/Edu%20Connect/3_pxoro6.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115297/App%20Industries%20Banner/Mockups/Edu%20Connect/4_ee8c74.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115298/App%20Industries%20Banner/Mockups/Edu%20Connect/5_yjhumm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115299/App%20Industries%20Banner/Mockups/Edu%20Connect/6_v6qxnq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115300/App%20Industries%20Banner/Mockups/Edu%20Connect/7_j64vn7.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115302/App%20Industries%20Banner/Mockups/Edu%20Connect/8_yhspfb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115302/App%20Industries%20Banner/Mockups/Edu%20Connect/9_m0xjo9.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115303/App%20Industries%20Banner/Mockups/Edu%20Connect/10_vjcsjw.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115304/App%20Industries%20Banner/Mockups/Edu%20Connect/11_wg3xdn.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115305/App%20Industries%20Banner/Mockups/Edu%20Connect/12_jtpcaj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115306/App%20Industries%20Banner/Mockups/Edu%20Connect/13_odd6zo.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115307/App%20Industries%20Banner/Mockups/Edu%20Connect/14_fwbk0c.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115309/App%20Industries%20Banner/Mockups/Edu%20Connect/15_hp8lxx.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/13_mprije.webp",
    title: "Educational",
    extension: "Mobile Apps",
    tagLine:
      "We create educational mobile apps with interactive lessons, progress tracking, secure data management, service optimization, parental control, performance analytics, and automated scheduling",
    shortTagline:
      "We create educational mobile apps with interactive lessons, progress tracking, parental control, and performance analytics.",
    shortTaglineMobile:
      "interactive lessons, progress tracking, parental control, and more.",
    app: "EduConnect",
    introduction:
      "EduConnect is an online learning platform that simplifies learning for students, teachers, and parents. Teachers visit your home to teach, and you can track their route on the app to know their arrival time. The app is user-friendly and seamlessly connects everyone involved in education. Here's how we assisted EduConnect in their operations online.",
    introBulletPoints: [
      "Online Quizzes and Assessment",
      "Parental Controls",
      "Certification and Badging",
      "Speech Recognition for Language Learning ",
      "Performance Reports",
      "Automated Scheduling",
    ],
    introEnd:
      "Improve your Educational process with our simple, secure, and efficient digital app.",
    problemStatement:
      "In the market, there was a need for an app that clearly shows when teachers are available. This would make it easier for parents to find and book the right time and day for their lessons.",
    problemExplanation:
      "EduConnect solves a common problem: not knowing when teachers are available for lessons. Our app shows clear schedules, letting parents easily pick the best times. This makes booking simple and quick, reducing frustration for everyone involved.",
    solutionStatement:
      "EduConnect shows teacher availability in the app, allowing parents to easily book lessons at convenient times. This makes scheduling easy and ensures students get help when they need it.",
    solutionExplanation:
      "EduConnect's new feature lets parents see when teachers are available and book lessons at convenient times. This simplifies scheduling and ensures students get lessons when needed. Duseca helped develop the app, focusing on making it easy for parents to use. Now, it's one of the top platforms for educational apps",
  };
  return <IndustryPage industry={industry} />;
}
