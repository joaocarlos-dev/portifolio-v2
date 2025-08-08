"use client";

import clsx from "clsx";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

export function ProjectImagesCarousel({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, sliderRefInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  if (!images || images.length === 0) return null;

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{ minHeight: "min(60vw, 400px)" }}
          >
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              fill
              className="w-full h-auto max-h-[min(60vw,400px)]"
              priority
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Previous Slide"
        onClick={() => sliderRefInstance.current?.prev()}
        className={clsx(
          "absolute top-1/2 left-2 md:-left-10 -translate-y-1/2",
          "bg-dark-background  dark:bg-black md:dark:bg-white text-white ",
          "dark:text-white md:dark:text-dark-background",
          "bg-opacity-50 hover:bg-opacity-70 ",
          "rounded-full p-2 md:p-3 text-lg md:text-base hover:cursor-pointer"
        )}
      >
        ‹
      </button>

      <button
        aria-label="Next Slide"
        onClick={() => sliderRefInstance.current?.next()}
        className={clsx(
          "absolute top-1/2 right-2 md:-right-10 -translate-y-1/2",
          "bg-dark-background dark:bg-black md:dark:bg-white text-white ",
          "dark:text-white md:dark:text-dark-background",
          "bg-opacity-50 hover:bg-opacity-70 ",
          "rounded-full p-2 md:p-3 text-lg md:text-base hover:cursor-pointer"
        )}
      >
        ›
      </button>

      <div className="flex justify-center mt-4 gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => sliderRefInstance.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-pink-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
