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
    desc: "Looking to create a visually stunning and highly functional React application? Look no further! I specialize in building data-rich applications such as admin and user dashboards, back offices, SPAs and much more. Let me help you WOW your users with an exceptional React app.",
    border: "border-sky-400",
    text: "text-sky-400",
  },
  {
    tag: "consultation",
    name: "Project Consultation",
    icon: <FileCode size={52} className="text-amber-500" />,
    desc: "Have a new project in mind but need help ironing out the details? Let’s hop on a call and work through it together. With my expertise and guidance, we’ll have your project planned out in no time.",
    border: "border-amber-500",
    text: "text-amber-500",
  },

  {
    tag: "prog-and-debug",
    name: "Peer Programing & Debugging",
    icon: <Users size={52} className="text-red-500" />,
    desc: "Stuck on a tricky coding problem? Let me lend a helping hand. I love working through code bugs and helping others find solutions. Join me for a peer programming and debugging session and let’s tackle that issue together.",
    border: "border-red-500",
    text: "text-red-500",
  },
  {
    tag: "feature-customization",
    name: "Feature Updates & Theme Customization",
    icon: <Paintbrush size={52} className="text-green-500" />,
    desc: "Need to add a new feature to your app or website? Want to customize a theme or template to fit your brand? Look no further! I’m the man for the job. Let me help you enhance your digital presence with my feature update and theme customization services.",
    border: "border-green-500",
    text: "text-green-500",
  },
  {
    tag: "web-dev",
    name: "Web Development",
    icon: <LayoutDashboard size={52} className="text-indigo-500" />,
    desc: "In need of a professional website for your business, event or community? Look no further! With my web development expertise, I can create a website that’s tailored to your unique needs and perfectly represents your brand.",
    border: "border-indigo-500",
    text: "text-indigo-500",
  },
  {
    tag: "hosting-deployments",
    name: "Deployments & Web Hosting",
    icon: <CloudCog size={52} className="text-blue-700" />,
    desc: "Setting up apps and websites can be a headache. From choosing the right hosting service to configuring cloud services and more, there’s a lot to consider. Let me take the hassle out of the process for you. With my deployment and web hosting services, you can sit back and relax while I handle everything.",
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
      layout
      id="services"
      className="p-6 mx-auto my-20 prose max-w-full lg:max-w-[85%]  md:scroll-mt-5 md:text-center prose-invert md:prose-lg min-h-screen flex flex-col items-center justify-center"
      {...sectionAnimation}
    >
      <motion.h2
        variants={variants}
        className="mb-8 text-3xl font-bold tracking-wide md:text-4xl"
      >
        Services
      </motion.h2>

      <motion.p variants={variants}>
        Boost your digital strategy with my premium web development services. I
        provide custom development, smooth deployments and large-scale codebase
        migrations for businesses and individuals alike. Contact me today to
        explore tailor-made solutions that cater to your unique demands.
      </motion.p>

      <div className="grid gap-12 my-10 text-left md:grid-cols-2 lg:grid-cols-3">
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

      <div className="flex justify-center my-20">
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
