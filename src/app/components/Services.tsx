"use client";
import Link from "next/link";
import clsx from "clsx";
import {
  Users,
  FileCode,
  CloudCog,
  Paintbrush,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";
import { ReactOriginal } from "devicons-react";
import { motion } from "framer-motion";
import { fadeInAnimation, sectionAnimation } from "src/app/utils/animations";

const services: Record<string, any>[] = [
  {
    tag: "react-dev",
    name: "React App Development",
    icon: <ReactOriginal size={56} />,
    desc: "I can help you build stunning React Applications that will WOW your users. These includes data heavy applications like admin and user dashboards, back offices, SPAs and so much more",
    border: "border-sky-400",
    text: "text-sky-400",
  },
  {
    tag: "consultation",
    name: "Project Consultation",
    icon: <FileCode size={52} className="text-amber-500" />,
    desc: "Looking to start a new project but don't have all the details dialed in yet? Join me on a call and we'll sort it out together",
    border: "border-amber-500",
    text: "text-amber-500",
  },

  {
    tag: "prog-and-debug",
    name: "Peer Programing & Debugging",
    icon: <Users size={52} className="text-red-500" />,
    desc: "Sometimes you get stuck and just need a guide to help you figure out and resolve code bugs. I love these sessions",
    border: "border-red-500",
    text: "text-red-500",
  },
  {
    tag: "feature-customization",
    name: "Feature Updates & Theme Customization",
    icon: <Paintbrush size={52} className="text-green-500" />,
    desc: "Need a new feature added to your app/website or just bought a new theme/template from themeforest and need it customized for your brand? I'm the man for the job",
    border: "border-green-500",
    text: "text-green-500",
  },
  {
    tag: "web-dev",
    name: "Web Development",
    icon: <LayoutDashboard size={52} className="text-indigo-500" />,
    desc: "Need a professional website for your business, event or community. Theres a thousand ways to build a website but I can make one thats just right for you",
    border: "border-indigo-500",
    text: "text-indigo-500",
  },
  {
    tag: "hosting-deployments",
    name: "Deployments & Web Hosting",
    icon: <CloudCog size={52} className="text-blue-700" />,
    desc: "Setting up apps and websites can be a real pain. Choosing the best hosting service, setting up a domain name, configuring a cloud service and so much more. Let me handle all that for you",
    border: "border-blue-700",
    text: "text-blue-700",
  },
];

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  hidden: { opacity: 0, y: -20 },
};

export const Services = () => {
  return (
    <motion.section
      id="services"
      className="p-6 mx-auto my-20 prose max-w-full lg:max-w-[85%]  md:scroll-mt-5 md:text-center prose-invert md:prose-lg"
      {...sectionAnimation}
    >
      <motion.h2
        variants={variants}
        className="mb-8 text-3xl font-bold tracking-wide md:text-4xl"
      >
        Services
      </motion.h2>

      <motion.p variants={variants}>
        From custom web development to deployments and large codebase
        migrations, here are some of the services I can offer you today. You can
        also contact me to discuss custom solutions for your specific business.
      </motion.p>

      <div className="grid gap-8 my-10 text-left md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            custom={index + 0.2}
            key={index}
            className={clsx(
              "p-5 md:h-80 group  flex flex-col items-start justify-end hover:h-auto transform transition-all duration-600 ease-in-out rounded-md delay-150 border-b-8 lg:border-b-0 lg:hover:border-b-8 hover:justify-center bg-gradient-to-br to-black via-gray-800/25 from-gray-500/25 hover:from-black hover:to-gray-500/25 md:p-8 shadow-3xl",
              service.border
            )}
            {...fadeInAnimation}
          >
            <div>{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="lg:hidden lg:group-hover:block">{service.desc}</p>

            <Link
              href={`/contact?service=${service.tag}&subject=${service.name}`}
              className={clsx(
                "items-center lg:hidden  gap-2 no-underline transition duration-300 ease-in-out delay-150 flex lg:group-hover:flex group-hover:animate-pulse",
                service.text
              )}
            >
              <span>Get In Touch</span>
              <ChevronRight />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <Link
          href="/contact?subject=I need a custom service"
          className="p-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
        >
          Request Custom Solution
        </Link>
      </div>
    </motion.section>
  );
};
