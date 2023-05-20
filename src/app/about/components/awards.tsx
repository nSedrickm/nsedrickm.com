"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import credlyBadges from "./credly-badges.json";
import customBadges from "./custom-badges.js";
import { NextjsLine, ReactOriginal } from "devicons-react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

export const Awards = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="max-w-full p-4 my-20 prose md-p-8 scroll-mt-20 md:scroll-mt-5 prose-invert md:text-center">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        Awards and Credentials
      </h2>
      <p className="text-lg">
        I have participated in serveral programs over the years earning some
        credentials along the way. I am most grateful for the journey and
        experiences, the people I met and the things I learned.
      </p>

      <div className="grid gap-4 mx-auto text-left md:gap-8 max-w-screen-2xl md:grid-cols-2 lg:grid-cols-3 auto-cols-fr">
        {customBadges.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 transition duration-300 ease-in-out border rounded-md md:gap-6 md:p-6 group border-gray-500/25 backdrop-blur shadow-3xl"
          >
            <Image
              src={item.image_url}
              width={125}
              height={125}
              alt={item.name}
            />
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
          </div>
        ))}

        {show &&
          credlyBadges.data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 transition duration-300 ease-in-out border rounded-md md:gap-6 md:p-6 group border-gray-500/25 backdrop-blur shadow-3xl"
            >
              <Image
                src={item.image_url}
                width={125}
                height={125}
                alt={item.badge_template.name}
              />
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
            </div>
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
    </section>
  );
};
