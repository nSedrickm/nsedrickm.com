import Link from "next/link";
import Image from "next/image";
import headerBg from "images/header-background.png";
import {
  Users,
  FileCode,
  CloudCog,
  Paintbrush,
  LayoutDashboard,
} from "lucide-react";
import { ReactOriginal } from "devicons-react";
import clsx from "clsx";

const services: Record<string, any>[] = [
  {
    tag: "react-dev",
    name: "React App Development",
    icon: <ReactOriginal size={56} />,
    desc: "I can help you build stunning React Applications that will WOW your users. These includes data heavy applications like admin and user dashboards, back offices, SPAs and so much more",
    border: "border-sky-400",
  },
  {
    tag: "consultation",
    name: "Project Consultation",
    icon: <FileCode size={52} className="text-amber-500" />,
    desc: "Looking to start a new project but don't have all the details dialed in yet? Join me on a call and we'll sort it out together",
    border: "border-amber-500",
  },

  {
    tag: "prog-and-debug",
    name: "Peer Programing & Debugging",
    icon: <Users size={52} className="text-red-500" />,
    desc: "Sometimes you get stuck and just need a guide to help you figure out and resolve code bugs. I love these sessions",
    border: "border-red-500",
  },
  {
    tag: "feature-customization",
    name: "Feature Updates & Theme Customization",
    icon: <Paintbrush size={52} className="text-green-500" />,
    desc: "Need a new feature added to your app/website or just bought a new theme/template from themeforest and need it customized for your brand? I'm the man for the job",
    border: "border-green-500",
  },
  {
    tag: "web-dev",
    name: "Web Development",
    icon: <LayoutDashboard size={52} className="text-indigo-500" />,
    desc: "Need a professional website for your business, event or community. Theres a thousand ways to build a website but I can make one thats just right for you",
    border: "border-indigo-500",
  },
  {
    tag: "hosting-deployments",
    name: "Deployments & Web Hosting",
    icon: <CloudCog size={52} className="text-blue-700" />,
    desc: "Setting up apps and websites can be a real pain. Choosing the best hosting service, setting up a domain name, configuring a cloud service and so much more. Let me handle all that for you",
    border: "border-blue-700",
  },
];

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <header className="flex flex-col space-y-8 lg:flex-row col-span-full">
        <div className="flex flex-col self-center flex-1 gap-8 px-4 pt-20 lg:p-24">
          <span className="text-5xl font-extrabold tracking-wide md:text-6xl lg:text-7xl">
            Welcome!
          </span>
          <p className="text-2xl font-light leading-tight md:text-5xl lg:text-6xl">
            My name is <strong className="font-semibold">Sedrick</strong> and I
            build and maintain web applications
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
      <section className="max-w-full p-4 mb-10 prose lg:text-center lg:p-40 col-span-full prose-invert">
        <h2 className="mb-8 text-4xl font-bold md:text-5xl">Services</h2>
        <p className="">
          From custom web development to deployments and large codebase
          migrations, here are some of the services I can offer you today. You
          can also contact me to discuss custom solutions for your specific
          business.
        </p>

        <div className="grid gap-8 my-10 text-left md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={clsx(
                "p-8 md:h-80 group flex flex-col items-start justify-end hover:h-auto transform transition-all duration-600 ease-in-out rounded-md delay-150 hover:border-b-8 hover:justify-center bg-gradient-to-br from-black to-gray-500/25 md:p-8 shadow-3xl",
                service.border
              )}
            >
              <div className="">{service.icon}</div>
              <h3 className="font-semibold lg:text-xl">{service.name}</h3>
              <p className="hidden text-base group-hover:block">
                {service.desc}
              </p>

              <Link
                href={`/contact?service=${service.tag}&subject=${service.name}`}
                className="hidden p-4 font-bold text-black no-underline transition ease-in-out delay-150 bg-white rounded-md group-hover:block hover:-translate-y-1 hover:scale-110"
              >
                Get In Touch
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <Link
            href="/contact?service=custom"
            className="px-4 py-2 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:animate-none animate-pulse md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
          >
            Custom Solution
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
