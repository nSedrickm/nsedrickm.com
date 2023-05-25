"use client";
import Link from "next/link";
import Image from "next/image";
import headerBg from "images/header-background.png";
import { ChevronRight } from "lucide-react";
import { Services, Testimonials, PageAnimationWrapper } from "components";
import { motion, useIsPresent } from "framer-motion";

const Home = () => {
  return (
    <PageAnimationWrapper layoutId="home">
      <header className="flex flex-col space-y-8 lg:flex-row col-span-full">
        <div className="flex flex-col self-center flex-1 gap-8 p-6 mt-20 sm:p-16">
          <h1 className="text-5xl font-extrabold tracking-wide md:text-6xl">
            Welcome!
          </h1>
          <p className="text-2xl font-light leading-normal md:text-5xl">
            My name is <strong className="font-semibold">Sedrick</strong> and I
            build and maintain web applications
          </p>

          <Link
            href="#services"
            className="flex items-center self-start justify-center gap-2 py-4 text-xl text-white transition duration-300 ease-in-out delay-150 border-b border-white md:text-2xl group"
          >
            <span>Learn more</span>
            <ChevronRight />
          </Link>
        </div>
        <div className="relative flex-1">
          <Image
            src={headerBg}
            alt="header banner"
            className="block object-contain w-full shadow-xl"
          />
        </div>
      </header>

      <Services />
      <Testimonials />
    </PageAnimationWrapper>
  );
};

export default Home;
