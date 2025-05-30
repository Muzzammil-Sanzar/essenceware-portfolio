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
          "https://videos.pexels.com/video-files/4629798/4629798-uhd_2560_1440_25fps.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
}
