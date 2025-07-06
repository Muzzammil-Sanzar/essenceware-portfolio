import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./serviceCarousel.css";
import mobile from "../../assets/mobile-apps.svg";
import digitalMarketing from "../../assets/degitalMarketing.svg";
import web from "../../assets/webdesign.svg";
import serviceTick from "../../assets/serviceTick.svg";
import ecom from "../../assets/ecom.svg";
import soft from "../../assets/soft.svg";
import It from "../../assets/IT.svg";
import deve from "../../assets/deve.svg";
import cloud from "../../assets/cloud.svg";
import Image from "next/image";

const services = [
  {
    title: "Mobile App Development",
    description: [
      "IOS App Development",
      "Mobile App Marketing",
      "App Design",
      "Cross-Platform Development",
      "Android App Development",
      "UX Design",
      "User Testing",
      "QA & Review",
      "Mobile App Maintenance",
    ],
    image: web,
    alt: "mobile",
  },
  {
    title: "UI/UX Design",
    description: [
      "Website Design",
      "Landing Page Design",
      "Ux Design",
      "App Design",
    ],
    image: mobile,
    alt: "ux ui",
  },
  {
    title: "App store optimisation",
    description: [
      "Apple store",
      "Google play store",
      "SEO",
      "Stat analytics",
      "Kpis",
    ],
    image: digitalMarketing,
    alt: "web",
  },
  {
    title: "SEO",
    description: [
      "Website Development",
      "Website Maintenance",
      "Website Design",
      "E-Commerce Marketing",
      "E-Commerce Management",
      "E-Commerce Product Videos",
      "SEO",
      "Web analytics",
    ],
    image: ecom,
    alt: "services",
  },
  {
    title: "Amazon A+ content",
    description: [
      "Amazon Lisitng",
      "Product Hunting",
      "SEO",
      "Product Images",
      "Maintanence",
    ],
    image: soft,
    alt: "services",
  },
  {
    title: "Product Development",
    description: [
      "Software Development",
      "AI Development",
      "Chatbot Development",
      "QA & Review",
      "User Testing",
      "Product Management",
      "DevOps & Cloud",
      "Ux Design",
    ],
    image: deve,
    alt: "services",
  },
  {
    title: "Web development",
    description: ["DevOps & Cloud", "AWS", "GCP"],
    image: It,
    alt: "services",
  },
  {
    title: "DevOps and Cloud",
    description: ["DevOps & Cloud", "Support & IT"],
    image: cloud,
    alt: "services",
  },
];

export default function ServicesCarousel({ openModal }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla4 relative">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport4" ref={emblaRef}>
        <div className="embla__container4 py-2 ">
          {services.map((service, index) => (
            <div key={index} className="embla__slide4">
              <div
                className="h-full rounded-lg bg-white border shadow hover:drop-shadow-md p-8 cursor-pointer"
                onClick={() => openModal(service)}
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
                        className="logo"
                      />
                    </div>
                    <div className="text-base space-y-2 list-none">
                      <h1 className="text-lg font-semibold">{service.title}</h1>
                      {service.description.slice(0, 3).map((des, index) => (
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
                    <div>
                      <p className="underline text-gray-450 text-base font-medium cursor-pointer ">
                        See more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
}
