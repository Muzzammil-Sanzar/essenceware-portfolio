import CasestudyDetailPage from "@/app/components/customMobileDevelopment/CasestudyDetailPage";

export default async function page() {
  const industry = {
    id: "Social-Media",
    banner:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/App%20Industries%20Banner/Mockups/Partnr%20Social/Banner-Mockup_pkf48r.webp",
    images: [
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179936/App%20Industries%20Banner/Mockups/Partnr%20Social/22_jbcsa4.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179963/App%20Industries%20Banner/Mockups/Partnr%20Social/1_wqnevb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179965/App%20Industries%20Banner/Mockups/Partnr%20Social/2_vwfi3z.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179967/App%20Industries%20Banner/Mockups/Partnr%20Social/3_eiowfh.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179970/App%20Industries%20Banner/Mockups/Partnr%20Social/4_qv3zgg.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179945/App%20Industries%20Banner/Mockups/Partnr%20Social/5_b1fqf7.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179944/App%20Industries%20Banner/Mockups/Partnr%20Social/6_levc36.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179945/App%20Industries%20Banner/Mockups/Partnr%20Social/7_io3bhv.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179947/App%20Industries%20Banner/Mockups/Partnr%20Social/8_g8swik.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179947/App%20Industries%20Banner/Mockups/Partnr%20Social/9_w6jugb.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179949/App%20Industries%20Banner/Mockups/Partnr%20Social/10_dyywli.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179951/App%20Industries%20Banner/Mockups/Partnr%20Social/11_chp61b.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179953/App%20Industries%20Banner/Mockups/Partnr%20Social/12_vnbdnr.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179955/App%20Industries%20Banner/Mockups/Partnr%20Social/13_hbkqvc.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179957/App%20Industries%20Banner/Mockups/Partnr%20Social/14_z4ijyv.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179959/App%20Industries%20Banner/Mockups/Partnr%20Social/15_mgbm7n.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179961/App%20Industries%20Banner/Mockups/Partnr%20Social/16_ivvjz6.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179934/App%20Industries%20Banner/Mockups/Partnr%20Social/17_qqu4lf.webp",
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718179935/App%20Industries%20Banner/Mockups/Partnr%20Social/18_n0jj02.webp",
    ],
    img: "https://res.cloudinary.com/dprxdqfxc/image/upload/v1718114735/App%20Industries%20Banner/7_brr4qu.webp",
    title: "Social Media",
    extension: "Mobile Apps",
    tagLine:
      "We create custom social media mobile apps that simplify experiences by offering features such as easy content sharing, real-time interaction, personalized feeds, secure account management, and optimization of social networking activities",
    shortTagline:
      "We create custom social media mobile apps with content sharing, real-time interaction, personalized feeds, and secure account management.",
    app: "Partner Social",
    introduction:
      "Introducing Partner Social, a unique social app that stands out from the rest of the social media apps. With easy account setup, personalized profiles, and advanced communication features, Partner Social offers a welcoming experience like no other. Here's how we assisted Partner Social in their operations online.",
    introBulletPoints: [
      "Content sharing",
      "Real-time interaction",
      "Personalized feeds,",
      "Secure account management",
      "Optimization of social networking activities",
    ],
    introEnd:
      "Enhance your digital experience with our smart, secure, and user-friendly social media apps.",
    problemStatement:
      "Users often switch between multiple apps for various social media activities, leading to confusion. A single app that combines all these features in a single mobile app.",
    problemExplanation:
      "Partner Social combines all social media features in one easy app, simplifying your online experience. With photo sharing, messaging, and more in one place, it keeps your private information safe and makes connecting easy. A better choice among social media platforms, Partner Social makes social media simpler",
    solutionStatement:
      "Partner Social combines all your social media needs into a single app, featuring photo sharing, messaging, and more. It simplifies your life and makes social interactions easier and more enjoyable.",
    solutionExplanation:
      "Partner Social combines key social media features in one app, simplifying your online experience. Share photos, chat, and more without switching between apps. This streamlined approach makes social media use more organized and less complicated. Enjoy smooth and easy social interactions with friends and family",
  };
  return <CasestudyDetailPage industry={industry} />;
}
