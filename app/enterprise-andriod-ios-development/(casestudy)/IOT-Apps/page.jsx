import CasestudyDetailPage from "@/app/components/mobileAppDevelopment/CasestudyDetailPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "IOT-Apps",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115866/App%20Industries%20Banner/Mockups/KNAAP/Banner-Mockup_orntw0.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115792/App%20Industries%20Banner/Mockups/KNAAP/1_bsmob5.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115793/App%20Industries%20Banner/Mockups/KNAAP/2_bxetu2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115795/App%20Industries%20Banner/Mockups/KNAAP/3_ectyxw.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115796/App%20Industries%20Banner/Mockups/KNAAP/4_gxlycd.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115797/App%20Industries%20Banner/Mockups/KNAAP/5_alvdax.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115799/App%20Industries%20Banner/Mockups/KNAAP/6_pzyrwk.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115800/App%20Industries%20Banner/Mockups/KNAAP/7_ff6npd.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115802/App%20Industries%20Banner/Mockups/KNAAP/8_teojl0.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115803/App%20Industries%20Banner/Mockups/KNAAP/9_evysh2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115804/App%20Industries%20Banner/Mockups/KNAAP/10_w6vney.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115806/App%20Industries%20Banner/Mockups/KNAAP/11_ackcvm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115808/App%20Industries%20Banner/Mockups/KNAAP/12_trdcky.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115809/App%20Industries%20Banner/Mockups/KNAAP/13_lyyryw.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115811/App%20Industries%20Banner/Mockups/KNAAP/14_yt4in1.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115812/App%20Industries%20Banner/Mockups/KNAAP/15_jb0vwx.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115814/App%20Industries%20Banner/Mockups/KNAAP/16_l053ib.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115815/App%20Industries%20Banner/Mockups/KNAAP/17_jantvq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115817/App%20Industries%20Banner/Mockups/KNAAP/18_j1imja.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718115819/App%20Industries%20Banner/Mockups/KNAAP/19_acnzjn.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/8_zcfup5.webp",
    title: "IOT",
    extension: "Mobile Apps",
    tagLine:
      "We develop customized IoT mobile apps that enhance experiences with features like seamless device connectivity, real-time data monitoring, secure data management, optimization of IoT services, intelligent data analytics, and automated device control",
    shortTagline:
      "We create customized IoT mobile apps with seamless connectivity, real-time monitoring, secure data management, and intelligent analytics.",
    app: "KNAAP",
    introduction:
      "KNAAP is a mobile app built with IoT technology, specially created for e-bikes and e-scooters. It simplifies tracking your e-bike and makes it accessible. Discover how KNAAP simplifies digital communication by connecting easily with IoT devices for smarter interactions.",
    introBulletPoints: [
      "Seamless Device Connectivity",
      "IoT Integration",
      "Advanced Monitoring",
      "Enhanced Security",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly IoT apps.",
    problemStatement:
      "In the Netherlands, e-bikes were not widely available. Those that were available often had short battery life and limited places for repairs. Also, tracking and protecting e-bikes from theft was difficult. These problems have limited the use of e-bikes in the country.",
    problemExplanation:
      "E-bikes were often hard to find, and the ones available typically had batteries that didn’t last long with few repair options. There were no effective IoT applications to track and protect e-bikes from theft, making them less reliable for transportation. Additionally, there weren't enough charging stations, limiting their use for longer trips, and the available e-bikes lacked advanced features like IoT-based tracking to monitor performance and maintenance. This problem was quite common, and we have implemented solutions to address these issues.",
    solutionStatement:
      "To solve these problems, we created a new app for e-bikes. This app helps users keep track of their e-bikes and protect them from theft. It also gives details on where to have e-bikes fixed.",
    solutionExplanation:
      "To tackle e-bike challenges, we created a new app with the help of Duseca's IoT app development expertise. This app helps users keep track of their bikes and keep them safe from theft. It also shows where you can get your e-bike fixed. Our app makes sure e-bikes last longer and get better service, so you can rely on them every day.",
  };
  return <CasestudyDetailPage industry={industry} link='/enterprise-andriod-ios-development' />;
}
