import Image from "next/image";
import Link from "next/link";
import headerBg from "images/header-background.png";
import { Technologies, Awards } from "./components";
import { PageAnimationWrapper } from "components/PageAnimationWrapper";

const About = () => {
  return (
    <PageAnimationWrapper layoutId="about">
      <header className="flex flex-col space-y-8 lg:flex-row col-span-full">
        <div className="flex flex-col self-center flex-1 gap-6 p-6 sm:p-16">
          <h1 className="text-3xl font-extrabold tracking-wide md:text-4xl">
            About Me
          </h1>
          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Ngwa Sedrick Meh
          </h2>

          <p className="">
            Ngwa Sedrick Meh is a freelance software developer with a passion
            for developing web applications. He is particularly known for his
            expertise in building ReactJS applications and is a Top Rated
            freelancer on Upwork. Since 2018, he has been helping businesses
            achieve their goals through the innovative and effective apps he
            builds. Caring deeply about his clients success he is dedicated to
            delivering top-quality results that help them thrive.
          </p>

          <p>
            He holds a Bachelor of Technology in Computer Networking and Systems
            Maintenance and was a Google Summer of Code participant in 2022 with
            RedHat, now IBM Ceph Dashboard team. He is also a two-time IBM
            Master the Mainframe Part 3 finisher.
          </p>

          <p>
            When not working, Ngwa Sedrick Meh, who also goes by the pseudonym
            nsedrickm, spends his time exploring cars, contributing to open
            source projects, and spending time with his loved ones. With his
            expertise, dedication, and commitment to continuous learning and
            growth, he actively participates in his local developer community
            and joins conversations on social hubs.
          </p>
        </div>
        <div className="relative flex-1">
          <Image
            src={headerBg}
            alt="header banner"
            className="block object-contain w-full shadow-xl"
          />
        </div>
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
