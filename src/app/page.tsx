"use client";
import Link from "next/link";
import Image from "next/image";
import headerBg from "@/images/header-background.png";
import { ArrowRight } from "lucide-react";
import { Services, Testimonials, PageAnimationWrapper } from "@/components";
import { motion } from "framer-motion";
import { heroImageAnimation } from "./utils/animations";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -20 },
};

const Home = () => {
  return (
    <PageAnimationWrapper layoutId="home">
      <header className="flex flex-col max-w-full space-y-8 prose lg:flex-row col-span-full prose-invert md:prose-lg prose-a:no-underline prose-p:my-4 prose-headings:font-heading">
        <div className="flex flex-col self-center flex-1 p-6 mt-20 overflow-hidden no-scrollbar sm:p-16 lg:p-24 3xl:p-36">
          <motion.h1 variants={variants} className="">
            Welcome!
          </motion.h1>
          <motion.p
            variants={variants}
            className="text-2xl font-light md:text-4xl"
          >
            {"I'm "}
            <strong className="font-semibold">Sedrick</strong> a frontend
            software developer. I build and maintain web applications.
          </motion.p>

          <motion.p
            variants={variants}
            className="text-2xl font-light md:text-4xl"
          >
            I am a force multiplier on the teams I work with and develop
            solutions that delight my clients.
          </motion.p>

          <motion.span variants={variants} className="self-start">
            <Link
              href="#services"
              className="flex items-center underline-offset-[1rem] gap-2 border-b py-3 border-white text-xl  transition duration-300 ease-in-out delay-150  group"
            >
              <span>Learn more</span>
              <ArrowRight size={24} />
            </Link>
          </motion.span>
        </div>

        <motion.div {...heroImageAnimation} className="relative flex-1">
          <Image
            priority
            src={headerBg}
            alt="image of Ngwa Sedrick Meh"
            className="block object-contain w-full shadow-xl"
          />
        </motion.div>
      </header>

      <Services />
      <Testimonials />
    </PageAnimationWrapper>
  );
};

export default Home;
