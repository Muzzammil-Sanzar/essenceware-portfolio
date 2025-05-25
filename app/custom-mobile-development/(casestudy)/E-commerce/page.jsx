import CasestudyDetailPage from "@/app/components/customMobileDevelopment/CasestudyDetailPage";

export default async function page() {
  const industry = {
    id: "E-commerce",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/Banner-Mockup_fpod3q.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/1_rbvmrl.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/2_ravntm.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/3_tgyljj.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/4_favepu.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/5_mhik7v.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/6_ogonwc.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/7_hvrxxd.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/8_cr98bn.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/9_alde9z.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/10_zjv52k.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/11_tcdelp.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/12_ptykxx.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/13_egjj98.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/14_hjyjhk.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/15_wvofpi.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/16_bobr9x.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/17_h6smp7.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Romolo/18_hzqtsj.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/6_lkqpn3.webp",
    title: "E-commerce",
    extension: "Mobile Apps",
    tagLine:
      "We create custom ecommerce mobile apps that simplify shopping experiences by offering features such as easy online browsing, product discovery, easy order tracking, and secure payment processing, effectively streamlining retail operations.",
    shortTagline:
      "We create custom ecommerce mobile apps with online browsing, product discovery, order tracking, and secure payments.",
    app: "Romolo",
    introduction:
      "Romolo is an ecommerce app where users and sellers can connect, personalize their profiles, and chat with each other. It offers a simple interface for easy online shopping, with clear delivery details. Here's how we assisted Romolo in their operations online.",
    introBulletPoints: [
      "Easy online browsing",
      "Product discovery",
      "Easy order tracking",
      "Secure payment processing",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly ecommerce apps.",
    problemStatement:
      "Shopping can be frustrating when the ecommerce payment gateway doesn’t work right, causing interruptions and problems during online transactions.",
    problemExplanation:
      "Romolo makes shopping easy and safe. Our app offers various payment options, making it user-friendly. We've partnered with Duseca to make payments faster, secure, and reliable, ensuring a smooth shopping experience.",
    solutionStatement:
      "Romolo offers a dependable payment system and a smooth shopping experience.",
    solutionExplanation:
      "Romolo makes shopping easy and safe with reliable payment technologies. Our app offers various payment methods, making it easy and trustworthy. Romolo worked with Duseca for ecommerce app development services. Romolo is a simple and secure platform for enjoyable shopping.",
  };
  return <CasestudyDetailPage industry={industry} />;
}
