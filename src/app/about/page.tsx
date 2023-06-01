"use client";
import Image from "next/image";
import Link from "next/link";
import headerBg from "images/header-background.png";
import { Technologies, Awards } from "./components";
import { PageAnimationWrapper } from "@/components";
import { motion } from "framer-motion";
import { heroImageAnimation } from "@/utils/animations";

const About = () => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: -20 },
  };
  return (
    <PageAnimationWrapper layoutId="about">
      <header className="flex flex-col space-y-8 lg:flex-row col-span-full">
        <div className="flex flex-col self-center flex-1 gap-6 p-6 text-gray-300 sm:p-16 lg:p-20">
          <motion.h1
            variants={variants}
            className="text-3xl font-extrabold tracking-wide text-white md:text-4xl"
          >
            About Me
          </motion.h1>
          <motion.h2
            variants={variants}
            className="text-4xl font-light leading-tight text-white md:text-5xl"
          >
            Ngwa Sedrick Meh
          </motion.h2>

          <motion.p variants={variants}>
            Ngwa Sedrick Meh is a freelance software developer with a passion
            for developing web applications. He is particularly known for his
            expertise in building ReactJS applications and is a Top Rated
            freelancer on Upwork. Since 2018, he has been helping businesses
            achieve their goals through the innovative and effective apps he
            builds. Caring deeply about his clients success he is dedicated to
            delivering top-quality results that help them thrive.
          </motion.p>

          <motion.p variants={variants}>
            He holds a Bachelor of Technology in Computer Networking and Systems
            Maintenance and was a Google Summer of Code participant in 2022 with
            RedHat, now IBM Ceph Dashboard team. He is also a two-time IBM
            Master the Mainframe Part 3 finisher.
          </motion.p>

          <motion.p variants={variants}>
            When not working, Ngwa Sedrick Meh, who also goes by the pseudonym
            nsedrickm, spends his time exploring cars, contributing to open
            source projects, and spending time with his loved ones. With his
            expertise, dedication, and commitment to continuous learning and
            growth, he actively participates in his local developer community
            and joins conversations on social hubs.
          </motion.p>
        </div>
        <motion.div {...heroImageAnimation} className="relative flex-1">
          <Image
            src={headerBg}
            alt="header banner"
            className="block object-contain w-full shadow-xl"
          />
        </motion.div>
      </header>

      <Awards />

      <Technologies />

      <div className="flex justify-center my-20">
        <Link
          href="/contact"
          className="px-8 py-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:animate-none animate-pulse hover:-translate-y-1 hover:scale-110"
        >
          Get In Touch
        </Link>
      </div>
    </PageAnimationWrapper>
  );
};

export default About;
