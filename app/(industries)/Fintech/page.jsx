import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Fintech",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718265850/App%20Industries%20Banner/Mockups/UBU/Banner-Mockup_lovgh2.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182845/App%20Industries%20Banner/Mockups/UBU/Splash_rmrrvq.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182843/App%20Industries%20Banner/Mockups/UBU/Spend-Phone-Refills_fftys7.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182842/App%20Industries%20Banner/Mockups/UBU/Spend-Gift-Cards_fo5ock.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182839/App%20Industries%20Banner/Mockups/UBU/Spend-Details_vtaofi.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182837/App%20Industries%20Banner/Mockups/UBU/Recieve_u5qb9x.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182835/App%20Industries%20Banner/Mockups/UBU/Profile_ktufo2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182833/App%20Industries%20Banner/Mockups/UBU/Portfolio_bhicny.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182832/App%20Industries%20Banner/Mockups/UBU/My-Activities_b9lpuw.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182830/App%20Industries%20Banner/Mockups/UBU/Home-Screen_gnnqp2.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182828/App%20Industries%20Banner/Mockups/UBU/Discover_yxx6js.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182826/App%20Industries%20Banner/Mockups/UBU/Coin-Details_d6dnwj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182824/App%20Industries%20Banner/Mockups/UBU/Activities-Today_htbaub.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718182823/App%20Industries%20Banner/Mockups/UBU/Wallet_ccfsdj.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/15_hgt5qq.webp",
    title: "Fintech",
    extension: "Mobile Apps",
    tagLine:
      "We create custom fintech mobile apps that provide features such as tracking your expenses, budget management, real-time financial monitoring, personalized financial recommendations, and secure data management.",
    shortTagline:
      "We create custom fintech mobile apps with expense tracking, budget management, real-time financial monitoring, personalized recommendations, and secure management.",
    shortTaglineMobile:
      "expense tracking, budget management, real-time financial monitoring, and more.",
    app: "UBU",
    introduction:
      "Introducing UBU which is a fintech mobile app, whether you're sending cash to a friend or receiving payments, UBU makes it easy with its simple interface and quick processing. You can trust UBU to keep your transactions safe and secure, thanks to our top-notch security features. Here's how we assisted UBU in their operations online.",
    introBulletPoints: [
      "Crypto and Fintech Integration",
      "Investment and Savings Modules",
      "Loan and Credit Management",
      "Financial Management",
      "Secure Payment gateways",
      "Real-time Analytics",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly fintech apps.",
    problemStatement:
      "There was no fintech app that allowed the functionality to send crypto coins to others, which was highly needed in the market.",
    problemExplanation:
      "In the market, many apps let you send money, but none let you send both regular money and cryptocurrency at the same time. People wanted a simple way to do both in one place. As cryptocurrency became more popular, this need became even clearer. People wanted an app where they could easily handle all their money, whether regular or digital, without any difficulty. This showed there was a big demand for a simple app that could handle both types of money smoothly.",
    solutionStatement:
      "UBU noticed the gap and came up with the idea to create an app that has functionalities for sending money as well as cryptocurrency.",
    solutionExplanation:
      "UBU noticed people needed an app for both regular money and cryptocurrency. So, they made an app that's easy for everyone to use. It lets you switch between different types of money and UBU has a feature called a payment gateway, which makes transactions smooth and easy. UBU wanted to help everyone, whether they prefer banks or digital money. Their aim was to make money transactions simple, including the option for cryptocurrency.",
  };
  return <IndustryPage industry={industry} />;
}
