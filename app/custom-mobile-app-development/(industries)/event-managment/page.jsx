import IndustryDetailPage from "@/app/components/mobileAppDevelopment-1/IndustryDetailPage";

export default function page({ industries }) {
  const industry = {
    name: "Event Management",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341576/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/EVENT_MANAGEMNT_lj8evq.png",
    des1: "This mobile app is designed to streamline your event management experience. With our app, you can easily find the nearest events and parties. Sit back and enjoy the leisure provided by using the app. Our app makes the event management experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or book a meeting with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} />
    </div>
  );
}
