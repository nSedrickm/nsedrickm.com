"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { sectionAnimation } from "../utils/animations";
import img1 from "src/app/images/testimonials/img-1.png";
import img2 from "src/app/images/testimonials/img-2.png";
import img3 from "src/app/images/testimonials/img-3.png";
import img4 from "src/app/images/testimonials/img-4.png";
import img5 from "src/app/images/testimonials/img-5.png";
import img6 from "src/app/images/testimonials/img-6.png";

const reviews = [img1, img2, img3, img4, img5, img6];

export const Testimonials = () => {
  const conRef = useRef<HTMLDivElement>(null);

  function scrollContainer(direction: string) {
    if (conRef.current) {
      conRef.current.scrollBy({
        top: 0,
        left: direction === "back" ? -480 : 480,
        behavior: "smooth",
      });
    }
  }

  return (
    <motion.section
      {...sectionAnimation}
      className="p-6 mx-auto my-20 prose max-w-full lg:max-w-[85%] scroll-mt-20 md:scroll-mt-5 md:text-center prose-invert"
    >
      <h2 className="mb-8 text-3xl font-bold tracking-wide md:text-4xl">
        Testimonials
      </h2>
      <p className="text-lg">
        I am commited to providing the best service possible to my clients. Here
        are some of the reviews I have received from my clients on Upwork.
      </p>

      <div className="relative flex items-center justify-center gap-2 my-10 mb-10 ">
        <div className="absolute bottom-0 z-10 grid p-2 translate-y-1 rounded-full left-32 md:static md:left-20 place-items-center backdrop-blur">
          <ChevronLeft
            role="button"
            className="w-10 h-10 p-2 text-black bg-white rounded-full md:w-12 md:h-12 md:p-3"
            onClick={() => scrollContainer("back")}
          />
        </div>
        <div
          className="flex gap-6 overflow-x-auto snap-mandatory snap-x no-scrollbar"
          ref={conRef}
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative flex-none h-52 rounded-md md:h-72 group shadow-3xl w-[20rem] md:w-[30rem] shadow-3xl snap-start"
            >
              <Image
                fill
                key={index}
                src={item}
                alt="upwork review"
                className="object-contain p-0 m-0"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 z-10 grid p-2 translate-y-1 rounded-full right-32 md:static md:right-20 place-items-center backdrop-blur">
          <ChevronRight
            role="button"
            className="w-10 h-10 p-2 text-black bg-white rounded-full md:w-12 md:h-12 md:p-3"
            onClick={() => scrollContainer("forward")}
          />
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link
          href="/contact?service=upwork" // href="https://www.upwork.com/freelancers/~010a12bb6327f60ed1"
          className="p-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:bg-blue-700 hover:text-white md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
        >
          {"Let's Collaborate Today!"}
        </Link>
      </div>
    </motion.section>
  );
};
