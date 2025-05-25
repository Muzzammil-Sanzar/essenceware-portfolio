import mobile from "@/app/assets/mobile-apps.svg";
import digitalMarketing from "@/app/assets/degitalMarketing.svg";
import web from "@/app/assets/webdesign.svg";
import serviceTick from "@/app/assets/serviceTick.svg";
import Image from "next/image";
import It from "@/app/assets/IT.svg";

const services = [
  {
    id: 1,
    title: "Our USP",
    description: [
      "Top Rated on Fiverr",
      "500+ 5-Star Reviews",
      "Quick Response Time",
      "1000 Orders Completed",
      "Our Clients Loves Us"
    ],
    image: mobile,
    alt: "mobile",
  },
  {
    id: 2,
    title: "Dedicated Team",
    description: [
      "You will have your own team",
      "Free Consultation",
      "Dream To Deployment",
      "QA and Testing of your app",
    ],
    image: digitalMarketing,
    alt: "web",
  },
  {
    id: 3,
    title: "Deployment",
    description: [
      "Free Consultation",
      "Design and Development",
      "Upload on Play store",
      "Upload on Appstore",
      "QA  and Testing"
    ],
    image: web,
    alt: "ux ui",
  },
  {
    id: 4,
    title: "Timeline",
    description: [
      "Intro Call",
      "Scope Document",
      "Design and Development",
      "Optimization and QA",
    ],
    image: It,
    alt: "ux ui",
  },
  // {
  //   title: "Ecommerce Store",
  //   description: [
  //     "Website Development",
  //     "Website Maintenance",
  //     "Website Design",
  //     "E-Commerce Marketing",
  //     "E-Commerce Management",
  //     "E-Commerce Product Videos",
  //     "SEO",
  //     "Web analytics",
  //   ],
  //   image: ecom,
  //   alt: "services",
  // },
  // {
  //   title: "Software Development",
  //   description: [
  //     "Software Development",
  //     "AI Development",
  //     "Chatbot Development",
  //     "QA & Review",
  //     "User Testing",
  //     "Databases",
  //   ],
  //   image: soft,
  //   alt: "services",
  // },
  // {
  //   title: "Product Development",
  //   description: [
  //     "Software Development",
  //     "AI Development",
  //     "Chatbot Development",
  //     "QA & Review",
  //     "User Testing",
  //     "Product Management",
  //     "DevOps & Cloud",
  //     "Ux Design",
  //   ],
  //   image: deve,
  //   alt: "services",
  // },
  // {
  //   title: "IT",
  //   description: ["DevOps & Cloud", "AWS", "GCP"],
  //   image: It,
  //   alt: "services",
  // },
  // {
  //   title: "DevOps and Cloud",
  //   description: ["DevOps & Cloud", "Support & IT"],
  //   image: cloud,
  //   alt: "services",
  // },
];

export default function WhyUs() {
  return (
    <div className="space-y-8">
      <div className="text-">
        <h1 className="text-[32px] font-semibold">Why Choose Us</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map(service => (
          <div key={service.id}
            className="h-full rounded-lg bg-white border shadow hover:drop-shadow-md p-8 cursor-pointer"
          >
            <div className="sm:max-w-80 w-full">
              <div className="space-y-3.5 text-[#404145]">
                <div className="">
                  <Image
                    priority={false}
                    loading="lazy"
                    src={service.image}
                    width={45}
                    height={45}
                    alt="service"
                  />
                </div>
                <div className="text-base space-y-2 list-none">
                  <h1 className="text-lg font-semibold">{service.title}</h1>
                  {service.description.slice(0, 5).map((des, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Image
                        priority={false}
                        loading="lazy"
                        src={serviceTick}
                        alt="service tick"
                      />

                      <p className="text-black">{des}</p>
                    </div>
                  ))}
                </div>
                {/* <div>
                <p className="underline text-gray-450 text-base font-medium cursor-pointer ">
                  See more
                </p>
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
