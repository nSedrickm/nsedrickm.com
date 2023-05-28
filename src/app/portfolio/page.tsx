"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageAnimationWrapper, Carousel } from "components";
import { ExternalLink, Github } from "lucide-react";
import data from "./data";
import {} from "components/Carousel";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -20 },
};

const Portfolio = () => {
  return (
    <PageAnimationWrapper layoutId="portfolio">
      <div className="gap-6 p-6 mx-auto prose max-w-screen-2xl sm:p-16 prose-invert">
        <header className="">
          <motion.h1
            variants={variants}
            className="text-3xl font-extrabold tracking-wide md:text-4xl"
          >
            Portfolio
          </motion.h1>

          <motion.p variants={variants}>
            {"I've"} had the opportunity to work on some pretty interesting
            projects. {"There's"} just something rewarding in itself about
            helping someone bring their ideas to life. Working with others and
            learning a lot along the way is also a big plus. Here are some of
            the projects {"I've"} worked on.
          </motion.p>
        </header>

        <motion.section
          variants={variants}
          className="flex flex-col gap-8 my-20"
        >
          {data.map((project) => (
            <div key={project.id} className="mb-10">
              <div className="mb-6">
                <span className="text-xl font-light uppercase">
                  {project.organization}
                  {project.program ? ` | ${project.program}` : ""}
                </span>
                <h3 className="my-0 text-2xl">{project.title}</h3>
              </div>

              <Carousel images={project.images} />
              <p className="my-6 text-lg">{project.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-lg font-light">
                <a
                  href={project.links.preview}
                  className="inline-block py-3 no-underline border-b border-white"
                  target="_blank"
                >
                  <span>Learn more</span>
                  <ExternalLink className="inline-block ml-2" size={22} />
                </a>

                <a
                  href={project.links.github}
                  className="inline-block py-3 no-underline border-b border-white"
                  target="_blank"
                >
                  <span>GitHub</span>
                  <Github className="inline-block ml-2" size={22} />
                </a>
              </div>
            </div>
          ))}
        </motion.section>
      </div>
    </PageAnimationWrapper>
  );
};

export default Portfolio;
