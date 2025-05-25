import IndustryDetailPage from "@/app/components/enterprise-andriod-ios-development/IndustryDetailPage";

export default function page() {
  const industry = {
    name: "Navigational",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341614/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/NAVIGATIONAL_lq8ahp.png",
    des1: "This mobile app is designed to streamline your navigational experience. With our app, you can easily find the best roads and get alerts for any blockages or road accidents. Sit back and enjoy the leisure provided by using the app. Our app makes the navigational experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or book a meeting with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} />
    </div>
  );
}
