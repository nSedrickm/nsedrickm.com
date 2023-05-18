import Image from "next/image";
import Link from "next/link";
import headerBg from "images/header-background.png";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <header className="flex flex-col space-y-8 lg:flex-row col-span-full">
        <div className="flex flex-col self-center flex-1 gap-8 px-4 md:p-12">
          <h1 className="text-5xl font-extrabold tracking-wide md:text-6xl">
            About Me
          </h1>
          <p className="text-2xl font-light leading-tight md:text-5xl">
            Ngwa Sedrick Meh
          </p>
          <p className="">
            Ngwa Sedrick Meh is a freelance software developer with a passion
            for web and mobile application development. He is particularly known
            for his expertise in building ReactJS applications and is a Top
            Rated freelancer on Upwork. Ngwa Sedrick Meh holds a Bachelor of
            Technology in Computer Networking and Systems Maintenance and was a
            Google Summer of Code participant in 2022. He is also a two-time IBM
            Master the Mainframe Part 3 finisher. Since 2018, he has been
            helping businesses achieve their goals and turn a profit through the
            innovative and effective apps he builds. Ngwa Sedrick Meh cares
            deeply about his clients’ success and is dedicated to delivering
            top-quality results that meet their needs. When not working, Ngwa
            Sedrick Meh, who also goes by the pseudonym nsedrickm, spends his
            time learning, contributing to open source projects, and spending
            time with his loved ones. With his expertise, dedication, and
            commitment to continuous learning and growth, Ngwa Sedrick Meh
            delivers top-quality results to his clients.
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
    </div>
  );
};

export default About;
