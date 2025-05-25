"use server";

export async function getIndustry(name) {
  const appIndustriesData = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
      app: "Lease Verfication",
      introduction:
        "Lease Verification is the Home Rental App that simplifies finding your next house, apartment, or condo. Perfect for first-timers or seasoned movers, it makes your property search straightforward and stress-free.",
      introBulletPoints: [
        "Accurate Listings:",
        "Quick Sign-Ups",
        "Detailed Property Info",
        "Safe and Secure",
      ],
      introEnd:
        "Improve your rental process with our simple, secure, and efficient digital app.",
      problemStatement:
        "Tenants find difficulty in reaching verified rental properties in many areas, our main challenge was to provide verified property through Rental Apps.",
      problemExplanation:
        "The main problem Lease Verification solves is helping renters find dependable and accurately described properties. Often, what renters see in listings doesn't match the real properties, causing frustration. This app aims to fix that, making it a reliable choice among other apps",
      solutionStatement:
        "Lease Verification promises accurate property listings and straightforward rental processes",
      solutionExplanation:
        "Lease Verification checks all listings carefully to ensure they are valid and match the real properties. Lease Verification uses a data parsing algorithm. This careful checking helps avoid confusion and problems, making Lease Verification a trusted real estate app.",
    },
    {
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
      app: "Fiturismo",
      introduction:
        "Fiturismo is a healthcare app, featuring our Online Doctor Consultation that simplifies communication between you and healthcare professionals. With this feature, you can access medical advice anytime and anywhere, making healthcare more convenient than ever. Discover how Fiturismo simplifies digital communication by connecting patients with doctors.",
      introBulletPoints: [
        "Doctor appointment scheduling",
        "Medical record management",
        "Telemedicine Consultations",
        "Secure payment gateways.",
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
    },
    {
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
      app: "Khedma",
      introduction:
        "Introducing Khedma, a delivery app that's different from the rest. Easy to use, it lets customers and drivers set up profiles quickly. Khedma promises on-time delivery, every time. Here's how we assisted Air Drive in their operations online.",
      introBulletPoints: [
        "Easy order tracking,",
        "Inventory management ",
        "Accurate order delivery time,",
        "Secure payment processing",
        "Effectively streamlining whole delivery operations",
      ],
      introEnd:
        "Enhance your digital experience with our smart, secure, and user-friendly delivery apps.",
      problemStatement:
        "Tenants find difficulty in reaching verified rental properties in many areas, our main challenge was to provide verified property through Rental Apps.",
      problemExplanation:
        "The main problem Lease Verification solves is helping renters find dependable and accurately described properties. Often, what renters see in listings doesn't match the real properties, causing frustration. This app aims to fix that, making it a reliable choice among other apps",
      solutionStatement:
        "Lease Verification promises accurate property listings and straightforward rental processes",
      solutionExplanation:
        "Lease Verification checks all listings carefully to ensure they are valid and match the real properties. Lease Verification uses a data parsing algorithm. This careful checking helps avoid confusion and problems, making Lease Verification a trusted real estate app.",
    },
    {
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
        "Intelligent Responses:",
        "Voice Commands and Document Upload Feature",
        "Comprehensive Knowledge Base",
        "Privacy and Security",
      ],
      introEnd:
        "Enhance your digital experience with our smart, secure, and user-friendly AI apps.",
      problemStatement:
        "Many online tools and chatbots require paid memberships and limit usage, making it difficult for users to access the help they need",
      problemExplanation:
        "Many tools and chatbots let you use them only a few times. This is a big problem these days. But Super GPT, an AI app, has fixed this. They let you talk as much as you want if you join their membership. You can also give voice commands and upload documents. Plus, Super GPT gives fast and on-time answers that really fit what you need.",
      solutionStatement:
        "Super GPT saw that many chatbots limit how much you can talk to them. So, they made a successful solution where there are no limits. You can chat as much as you want, and the responses are just what you're looking for.",
      solutionExplanation:
        "Super GPT noticed a big problem: many chatbots set limits on how much you could talk to them. Seeing this common issue among AI apps, Super GPT developed a solution that removes these barriers entirely. Now, with Super GPT, there are no restrictions on the number of interactions. This change has overcome a major hurdle, making it easier for users to communicate as much as they need. The app responds precisely as users require, ensuring every interaction is smooth and helpful.",
    },
    {
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
      app: "EduConnect",
      introduction:
        "EduConnect is an online learning platform that simplifies learning for students, teachers, and parents. Teachers visit your home to teach, and you can track their route on the app to know their arrival time. The app is user-friendly and seamlessly connects everyone involved in education. Here's how we assisted EduConnect in their operations online.",
      introBulletPoints: [
        "secure data management",
        "service optimization, parental control",
        "performance analytics",
        "automated scheduling",
      ],
      introEnd:
        "Improve your Educational process with our simple, secure, and efficient digital app.",
      problemStatement:
        "In the market, there was a need for an app that clearly shows when teachers are available. This would make it easier for parents to find and book the right time and day for their lessons",
      problemExplanation:
        "EduConnect solves a common problem: not knowing when teachers are available for lessons. Our app shows clear schedules, letting parents easily pick the best times. This makes booking simple and quick, reducing frustration for everyone involved.",
      solutionStatement:
        "EduConnect shows teacher availability in the app, allowing parents to easily book lessons at convenient times. This makes scheduling easy and ensures students get help when they need it",
      solutionExplanation:
        "EduConnect's new feature lets parents see when teachers are available and book lessons at convenient times. This simplifies scheduling and ensures students get lessons when needed. Duseca helped develop the app, focusing on making it easy for parents to use. Now, it's one of the top platforms for educational apps",
    },
    {
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
      app: "Lease Verfication",
      introduction:
        "Ride-sharing apps help you get where you want to go. Air Drive is a new app that helps you get a ride with just a few taps on your phone. With Air Drive, you can enjoy a convenient and hassle-free ride to your destination. Here's how we assisted Air Drive in their operations online.",
      introBulletPoints: [
        "Easy ride booking",
        "Real-time tracking",
        "Secure account management",
        "Optimization of transportation services",
      ],
      introEnd:
        "Enhance your digital experience with our smart, secure, and user-friendly Ride Sharing apps.",
      problemStatement:
        "Traveling with family or friends can be challenging when it comes to transportation. Public transport only picks up from one location, making it impractical for groups. A minivan or bus service that offers pickup from individual locations and provides sufficient seating is a convenient solution",
      problemExplanation:
        "Air Drive noticed a problem: when groups of friends or families want to travel together, regular cars don't have enough space, and public buses only stop at one place, which isn't easy for everyone. To fix this, Air Drive started a ride sharing platform with mini vans and buses. These vehicles can pick up each person from wherever they are, so everyone can travel together easily. This makes it simpler for large groups to plan trips without worrying about fitting into one car or meeting at a single bus stop. It's a simple way to ensure that everyone gets to join in the fun, no matter where they are starting from.",
      solutionStatement:
        "Air Drive is an app that provides a mini bus and van service to make group travel easy. Through this app, you can book a van or bus that picks up each person from their chosen location",
      solutionExplanation:
        "Air Drive is an app that helps you book mini buses and vans for group trips with ride-sharing apps, there's no need for everyone to gather in one location. Instead, the vehicle comes to you, wherever you are, and picks you up. This makes it perfect for family outings or trips with friends. You just tell the app where to go, and it takes care of the rest. Air Drive is more than just a taxi app. With Air Drive, you can enjoy a comfortable journey surrounded by your favorite people",
    },
    {
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
      app: "UBU",
      introduction:
        "Introducing UBU which is a fintech mobile app, whether you're sending cash to a friend or receiving payments, UBU makes it easy with its simple interface and quick processing. You can trust UBU to keep your transactions safe and secure, thanks to our top-notch security features. Here's how we assisted UBU in their operations online.",
      introBulletPoints: [
        "Security ",
        "Payment gateways",
        "financial management",
        "real-time analytics",
        "Crypto and Fintech Integration.",
      ],
      introEnd:
        "Enhance your digital experience with our smart, secure, and user-friendly fintech apps.",
      problemStatement:
        "There was no fintech app that allowed the functionality to send crypto coins to others, which was highly needed in the market.",
      problemExplanation:
        "In the market, many apps let you send money, but none let you send both regular money and cryptocurrency at the same time. People wanted a simple way to do both in one place. As cryptocurrency became more popular, this need became even clearer. People wanted an app where they could easily handle all their money, whether regular or digital, without any difficulty. This showed there was a big demand for a simple app that could handle both types of money smoothly",
      solutionStatement:
        "UBU noticed the gap and came up with the idea to create an app that has functionalities for sending money as well as cryptocurrency",
      solutionExplanation:
        "UBU noticed people needed an app for both regular money and cryptocurrency. So, they made an app that's easy for everyone to use. It lets you switch between different types of money and UBU has a feature called a payment gateway, which makes transactions smooth and easy. UBU wanted to help everyone, whether they prefer banks or digital money. Their aim was to make money transactions simple, including the option for cryptocurrency.",
    },
  ];
  try {
    const industry = appIndustriesData.find((ind) => ind.id === name);
    return industry;
  } catch (e) {
    console.log(e);
  }
}
