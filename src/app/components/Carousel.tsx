"use client";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const MotionImage = motion(Image);

interface Props {
  images: string[];
}

const variants = {
  show: { opacity: 1, transition: { duration: 1 } },
  hide: { opacity: 0 },
};

export const Carousel = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  function changeImage(direction: string) {
    switch (direction) {
      case "prev":
        if (index > 0) {
          setIndex(index - 1);
        }
        break;
      default:
        if (index < images.length - 1) {
          setIndex(index + 1);
        }
    }
  }

  return (
    <motion.div className="relative h-[15rem] md:h-[25rem] lg:h-[42rem] 4xl:h-[55rem]">
      <MotionImage
        fill
        key={index}
        variants={variants}
        initial="hide"
        animate="show"
        src={images[index]}
        alt="carousel image"
        className="object-fill w-full h-full p-0 m-0 rounded-lg aspect-auto"
        sizes="(max-width: 768px) 15rem, (min-width: 768px) 25rem, (min-width: 1280px) 42rem, (min-width: 2560px) 55rem"
      />
      <div className="absolute inset-0 flex items-end justify-center gap-3 pb-2 md:pb-4 bg-gradient-to-b from-transparent via-transparent to-black/40">
        <button
          aria-label="prev"
          onClick={() => changeImage("prev")}
          disabled={index === 0}
          className={clsx(
            "w-10 text-black bg-white h-10 p-2 rounded-full shadow md:w-12 md:h-12 md:p-3 transition duration-300 ease-in-out delay-150",
            index === 0
              ? "hover:bg-black hover:text-white cursor-not-allowed"
              : " hover:text-white hover:bg-blue-700"
          )}
        >
          <ChevronLeft />
        </button>
        <button
          aria-label="next"
          onClick={() => changeImage("next")}
          disabled={index === images.length - 1}
          className={clsx(
            "w-10 text-black bg-white h-10 p-2 rounded-full shadow md:w-12 md:h-12 md:p-3 transition duration-300 ease-in-out delay-150",
            index === images.length - 1
              ? "hover:bg-black hover:text-white cursor-not-allowed"
              : " hover:text-white hover:bg-blue-700"
          )}
        >
          <ChevronRight />
        </button>
      </div>
    </motion.div>
  );
};
