import IndustryDetailPage from "@/app/components/mobileAppDevelopment/IndustryDetailPage";

export default function page({ industries }) {
  const industry = {
    name: "Social Networking",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341593/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/SOCIAL_NETWORKING_t4avj3.png",
    des1: "This mobile app is designed to streamline your social networking experience. With our app, you can easily find friends and share your daily life routines. Sit back and enjoy the leisure provided by using the app. Our app makes the social networking experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or book a meeting with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} link={"/flutter-app-development"} />
    </div>
  );
}
