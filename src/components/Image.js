import React from "react";
import Image from "next/image";

export default function CustomImage({ src, alt }) {
  return (
    <div style={{ position: "relative", width: "auto", height: "500px" }}>
      <Image src={src} alt={alt} objectFit="contain" layout="fill" />
    </div>
  );
}
