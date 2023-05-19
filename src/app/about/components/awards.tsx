import Image from "next/image";
import Link from "next/link";
import credlyBadges from "./credly-badges.json";
import customBadges from "./custom-badges.js";
import { NextjsLine, ReactOriginal } from "devicons-react";
import { ChevronRight } from "lucide-react";

export const Awards = () => {
  return (
    <section className="max-w-full p-4 my-20 prose md-p-8 scroll-mt-20 md:scroll-mt-5 prose-invert md:text-center">
      <h2 className="mb-8 text-4xl font-bold">Awards and Credentials</h2>
      <p className="text-lg">
        I have participated in serveral programs over the years earning some
        credentials along the way. I am most grateful for the journey and
        experiences, the people I met and the things I learned.
      </p>
      <div className="grid gap-4 mx-auto text-left md:gap-8 max-w-screen-2xl md:grid-cols-2 lg:grid-cols-3">
        {customBadges.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 transition duration-300 ease-in-out border rounded-md md:p-4 group border-gray-500/25 backdrop-blur shadow-3xl"
          >
            <Image
              src={item.image_url}
              width={125}
              height={125}
              alt={item.name}
            />
            <div className="">
              <h4 className="inline font-medium">{item.name}</h4>
              <p>{item.issuer}</p>
              <a
                target="_blank"
                href={item.url}
                className="flex items-center gap-2 font-light no-underline transition duration-300 ease-in-out delay-150 hover:text-sky-200 group-hover:animate-pulse"
              >
                <span>Learn more</span>
                <ChevronRight />
              </a>
            </div>
          </div>
        ))}
        {credlyBadges.data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 transition duration-300 ease-in-out border rounded-md md:p-4 group border-gray-500/25 backdrop-blur shadow-3xl"
          >
            <Image
              src={item.image_url}
              width={125}
              height={125}
              alt={item.badge_template.name}
            />
            <div className="">
              <h4 className="inline font-medium">{item.badge_template.name}</h4>
              <p>{item.issuer.summary}</p>
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
      </div>
    </section>
  );
};
