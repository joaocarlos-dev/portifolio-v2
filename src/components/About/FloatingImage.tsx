"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloatingImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function FloatingImage({ src, alt, width, height }: FloatingImageProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pt-4 mx-auto w-fit hover:scale-105"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
}
