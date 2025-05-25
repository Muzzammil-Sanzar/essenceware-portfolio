import IndustryPage from "@/app/components/IndustyPage";
import React from "react";

export default async function page() {
  const industry = {
    id: "Rental-Apps",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180716/App%20Industries%20Banner/Mockups/Lease%20Verification/Banner-Mockup_mchrxc.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180717/App%20Industries%20Banner/Mockups/Lease%20Verification/1_qpiu7a.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180719/App%20Industries%20Banner/Mockups/Lease%20Verification/2_j85ipy.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180721/App%20Industries%20Banner/Mockups/Lease%20Verification/3_vuselw.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180724/App%20Industries%20Banner/Mockups/Lease%20Verification/4_qzinmg.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180725/App%20Industries%20Banner/Mockups/Lease%20Verification/5_qgiyvi.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180728/App%20Industries%20Banner/Mockups/Lease%20Verification/6_vt0kje.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180734/App%20Industries%20Banner/Mockups/Lease%20Verification/7_yfkbj4.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180736/App%20Industries%20Banner/Mockups/Lease%20Verification/8_vgp36q.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180738/App%20Industries%20Banner/Mockups/Lease%20Verification/9_fja6il.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180739/App%20Industries%20Banner/Mockups/Lease%20Verification/10_xr0kk8.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180741/App%20Industries%20Banner/Mockups/Lease%20Verification/11_shxej6.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180714/App%20Industries%20Banner/Mockups/Lease%20Verification/12_crpia7.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718180714/App%20Industries%20Banner/Mockups/Lease%20Verification/13_xxinf6.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/9_xqpmtn.webp",
    title: "Rental",
    extension: "Mobile Apps",
    tagLine:
      "We create custom home rental apps that make renting easy, with features like easy tenant screening, lease management, maintenance requests, and secure payment processing, streamlining the entire rental operations",
    shortTagline:
      "We create custom home rental mobile apps with tenant screening, lease management, maintenance requests, and secure payments.",
    shortTaglineMobile:
      "tenant screening, lease management, maintenance requests, and more.",
    app: "Lease Verfication",
    introduction:
      "Lease Verification is the Home Rental App that simplifies finding your next house, apartment, or condo. Perfect for first-timers or seasoned movers, it makes your property search straightforward and stress-free.",
    introBulletPoints: [
      "Accurate Listings:",
      "Lease Management",
      "Quick Sign-Ups",
      "Detailed Property Info",
      "AI-Driven Recommendations",
      "Seamless Payment Solutions",
    ],
    introEnd:
      "Improve your rental process with our simple, secure, and efficient digital app.",
    problemStatement:
      "Tenants find difficulty in reaching verified rental properties in many areas, our main challenge was to provide verified property through Rental Apps.",
    problemExplanation:
      "The main problem Lease Verification solves is helping renters find dependable and accurately described properties. Often, what renters see in listings doesn't match the real properties, causing frustration. This app aims to fix that, making it a reliable choice among other apps.",
    solutionStatement:
      "Lease Verification promises accurate property listings and straightforward rental processes.",
    solutionExplanation:
      "Lease Verification checks all listings carefully to ensure they are valid and match the real properties. Lease Verification uses a data parsing algorithm. This careful checking helps avoid confusion and problems, making Lease Verification a trusted real estate app.",
  };
  return <IndustryPage industry={industry} />;
}
