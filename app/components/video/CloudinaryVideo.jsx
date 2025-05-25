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
          "https://res.cloudinary.com/dprxdqfxc/video/upload/Intro%20Video/intro_video_all_pages_bgt0a0.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
}
