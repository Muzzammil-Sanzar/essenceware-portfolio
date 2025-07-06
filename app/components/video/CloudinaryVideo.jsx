"use client";
export default function CloudinaryVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "100%" }}
      className="object-fill"
    >
      <source
        src={
          "https://res.cloudinary.com/db6xtkgm3/video/upload/v1751809940/202507061830_f4qmbi.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
}
