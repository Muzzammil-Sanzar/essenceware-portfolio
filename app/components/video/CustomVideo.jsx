"use client";

function CustomVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      //   style={{ width: "100%", height: "500px" }}
      id="custom-video"
      className="object-cover md:hidden"
      width={"100%"}
      height={"300px"}
    >
      <source
        src={
          "https://res.cloudinary.com/dprxdqfxc/video/upload/v1720840199/Animated_Two_Mobile_Phone_Rotated_3D_Mockup_4_jbmm4x.mp4"
        }
        type="video/mp4"
      />
    </video>
  );
}
export default CustomVideo;
