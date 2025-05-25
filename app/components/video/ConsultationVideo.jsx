"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ConsultationVideo({ data }) {
  const [play, setplay] = useState(false);
  const videoId = data?.link?.split("v=")[1];
  const srcUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
  if (!play) {
    return (
      <Image
        priority={false}
        loading="lazy"
        onClick={() => setplay(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={data?.thumbnail}
        fill
        alt="youtube"
      />
    );
  }
  if (play) {
    return (
      <iframe
        src={srcUrl}
        width={"100%"}
        height={"100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
    );
  }
}
