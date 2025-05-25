import IndustryDetailPage from "@/app/components/enterprise-andriod-ios-development/IndustryDetailPage";

export default function page({ industries }) {
  const industry = {
    name: "IOT",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341586/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/IOT_sfojy5.png",
    des1: "This mobile app is designed to streamline your experience. With our app, you can easily use the Internet of Things technology. Sit back and enjoy the leisure provided by using the app. Our app makes the IoT experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or book a meeting with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} backLink={"/enterprise-andriod-ios-development"} />
    </div>
  );
}
