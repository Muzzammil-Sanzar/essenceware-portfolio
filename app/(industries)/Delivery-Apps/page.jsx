import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Delivery-Apps",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181776/App%20Industries%20Banner/Mockups/Khedma/Khedma_Banner_y3uvr8.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181778/App%20Industries%20Banner/Mockups/Khedma/1_c9wrvb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181780/App%20Industries%20Banner/Mockups/Khedma/2_sqlvss.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181781/App%20Industries%20Banner/Mockups/Khedma/3_zlyrfq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181783/App%20Industries%20Banner/Mockups/Khedma/4_v2jarj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181786/App%20Industries%20Banner/Mockups/Khedma/5_danoq9.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181788/App%20Industries%20Banner/Mockups/Khedma/6_iszgpc.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181790/App%20Industries%20Banner/Mockups/Khedma/7_zzt9rv.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181793/App%20Industries%20Banner/Mockups/Khedma/8_tn5358.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181795/App%20Industries%20Banner/Mockups/Khedma/9_ynajta.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181760/App%20Industries%20Banner/Mockups/Khedma/10_n5bdgj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181761/App%20Industries%20Banner/Mockups/Khedma/11_hzkzgh.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181762/App%20Industries%20Banner/Mockups/Khedma/12_ruiyx5.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181763/App%20Industries%20Banner/Mockups/Khedma/13_iuz1tb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181765/App%20Industries%20Banner/Mockups/Khedma/14_wg6yrk.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181767/App%20Industries%20Banner/Mockups/Khedma/15_i4pw3q.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181768/App%20Industries%20Banner/Mockups/Khedma/16_y1sanu.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181769/App%20Industries%20Banner/Mockups/Khedma/17_wfy0yy.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181771/App%20Industries%20Banner/Mockups/Khedma/18_wpytek.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181772/App%20Industries%20Banner/Mockups/Khedma/19_l96s6r.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718181774/App%20Industries%20Banner/Mockups/Khedma/20_w8uhuu.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/11_noage6.webp",
    title: "Delivery",
    extension: "Mobile Apps",
    tagLine:
      "We create custom delivery mobile apps that simplify delivery experiences by offering features such as easy order tracking, inventory management, accurate order delivery time, and secure payment processing, effectively streamlining whole delivery operations.",
    shortTagline:
      "We create custom delivery mobile apps with order tracking, inventory management, delivery time accuracy, and secure payments.",
    shortTaglineMobile:
      "order tracking, inventory management, delivery time accuracy, and more.",
    app: "Khedma",
    introduction:
      "Introducing Khedma, a delivery app that's different from the rest. Easy to use, it lets customers and drivers set up profiles quickly. Khedma promises on-time delivery, every time. Here's how we assisted Air Drive in their operations online.",
    introBulletPoints: [
      "Easy order tracking,",
      "Inventory management",
      "Automated Dispatch",
      "Accurate order delivery time,",
      "Secure payment processing",
      "Integrated Customer Service Chat",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly delivery apps.",
    problemStatement:
      "Many small businesses find it hard to grow because they can't easily access good logistics networks. This makes it difficult for them to reach more customers and expand their business.",
    problemExplanation:
      "The main problem Lease Verification solves is helping renters find dependable and accurately described properties. Often, what renters see in listings doesn't match the real properties, causing frustration. This app aims to fix that, making it a reliable choice among other apps",
    solutionStatement:
      "Khedma has created an app that helps small businesses by connecting them with a large network of logistics resources. This allows them to improve their delivery services and reach more markets.",
    solutionExplanation:
      "Lease Verification checks all listings carefully to ensure they are valid and match the real properties. Lease Verification uses a data parsing algorithm. This careful checking helps avoid confusion and problems, making Lease Verification a trusted real estate app.",
  };
  return <IndustryPage industry={industry} />;
}
