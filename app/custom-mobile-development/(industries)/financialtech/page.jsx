import IndustryDetailPage from "@/app/components/customMobileDevelopment/IndustryDetailPage";

export default function page() {
  const industry = {
    name: "Fintech",
    image:
      "https://res.cloudinary.com/dprxdqfxc/image/upload/v1722341680/Duseca%20Landing%20Page-1/App%20Ind-Thumbnails/FINTECH_2_vtw3bk.png",
    des1: "This mobile app is designed to streamline your fintech experience. With our app, you can easily send and receive money. Sit back and enjoy the leisure provided by using the app. Our app makes the fintech experience a breeze.",
    des2: "If you're inspired by our app and want a custom mobile app that looks this nice, contact us now. Send us an email at info@dusecasoftware.com, or get in touch with us. We're excited for the opportunity to create a mobile app that makes people say WOW",
  };
  return (
    <div>
      <IndustryDetailPage industry={industry} />
    </div>
  );
}
