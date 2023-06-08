"use client";
import { useState } from "react";
import Image from "next/image";
import credlyBadges from "./credly-badges.json";
import customBadges from "./custom-badges.js";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { sectionAnimation, fadeInAnimation } from "@/utils/animations";
import { NextPage } from "next";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, y: -20 },
};

export const Awards: NextPage = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.section
      layout
      key="awards"
      {...sectionAnimation}
      className="p-6 mx-auto my-20 lg:mb-80 prose max-w-full lg:max-w-[85%] scroll-mt-20 md:scroll-mt-5 md:text-center prose-invert lg:post-lg "
    >
      <motion.h2
        variants={variants}
        className="mb-8 text-3xl font-bold md:text-4xl"
      >
        Awards and Credentials
      </motion.h2>
      <motion.p variants={variants} className="text-lg">
        I have participated in serveral programs over the years earning some
        credentials along the way. I am most grateful for the journey and
        experiences, the people I met and the things I learned.
      </motion.p>

      <div className="grid gap-4 mx-auto text-left md:gap-8 max-w-screen-2xl md:grid-cols-2 lg:grid-cols-3 auto-cols-fr">
        {customBadges.map((item, index) => (
          <motion.div
            custom={index + 0.2}
            key={index}
            className="flex flex-col gap-6 p-4 transition duration-300 ease-in-out border rounded-md md:flex-row md:gap-6 md:p-6 group border-gray-500/30 backdrop-blur shadow-3xl"
            {...fadeInAnimation}
          >
            <div className="relative  h-[100px] md:h-full w-[100px] md:w-[125px]">
              <Image
                fill
                src={item.image_url}
                alt={item.name}
                sizes="(max-width: 768px) 100px, (min-width: 768px) 125px"
                className="object-contain p-0 m-0 aspect-auto"
              />
            </div>
            <div className="">
              <h3 className="inline font-medium">{item.name}</h3>
              <p className="text-gray-400">{item.issuer}</p>
              <a
                target="_blank"
                href={item.url}
                className="flex items-center gap-2 font-light no-underline transition duration-300 ease-in-out delay-150 hover:text-blue-500 group-hover:animate-pulse"
              >
                <span>Learn more</span>
                <ChevronRight />
              </a>
            </div>
          </motion.div>
        ))}

        {show &&
          credlyBadges.data.map((item, index) => (
            <motion.div
              custom={index + 0.2}
              key={index}
              className="flex flex-col gap-6 p-4 transition duration-300 ease-in-out border rounded-md md:flex-row md:gap-6 md:p-6 group border-gray-500/30 backdrop-blur shadow-3xl"
              {...fadeInAnimation}
            >
              <div className="relative  h-[100px] md:h-full w-[100px] md:w-[125px]">
                <Image
                  fill
                  src={item.image_url}
                  alt={item.badge_template.name}
                  sizes="(max-width: 768px) 100px, (min-width: 768px) 125px"
                  className="object-contain p-0 m-0 aspect-auto"
                />
              </div>
              <div className="">
                <h3 className="inline font-medium">
                  {item.badge_template.name}
                </h3>
                <p className="text-gray-400">{item.issuer.summary}</p>
                <a
                  target="_blank"
                  href={`https://www.credly.com/credlyBadges/${item.id}`}
                  className="flex items-center gap-2 font-light no-underline transition duration-300 ease-in-out delay-150 hover:text-sky-200 group-hover:animate-pulse"
                >
                  <span>Learn more</span>
                  <ChevronRight />
                </a>
              </div>
            </motion.div>
          ))}

        <div
          className={clsx(
            "flex items-center justify-center rounded-md backdrop-blur",
            show ? "col-span-full" : "md:border border-gray-500/25"
          )}
        >
          <button
            onClick={() => setShow(!show)}
            className="px-8 py-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:-translate-y-1 hover:scale-110"
          >
            {show ? "Show Less" : " There's more"}
          </button>
        </div>
      </div>
    </motion.section>
  );
};
