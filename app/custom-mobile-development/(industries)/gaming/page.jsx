import IndustryDetailPage from "@/app/components/customMobileDevelopment/IndustryDetailPage";

export default function page({ industries }) {
  const industry = {
    name: "Gaming",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341610/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/GAMING_ljncnf.png",
    des1: "This mobile app is designed to streamline your gaming experience. With our app, you can easily find online players for a dart match. Simply select the stage and time for the tournament. Sit back and enjoy the leisure provided by using the app. Our app makes the gaming experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or get in touch with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} />
    </div>
  );
}
