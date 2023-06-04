"use client";
import { motion } from "framer-motion";
import { PageAnimationWrapper, Carousel } from "@/components";
import { ExternalLink, Github } from "lucide-react";
import data from "./data";
import { sectionAnimation } from "@/utils/animations";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -20 },
};

const Portfolio = () => {
  return (
    <PageAnimationWrapper layoutId="portfolio">
      <div className="p-6 mx-auto prose max-w-full lg:max-w-[85%] 2xl:max-w-[70%] prose-invert md:prose-lg prose-img:m-0 prose-h2:mt-0">
        <header className="">
          <motion.h1
            variants={variants}
            // className="text-4xl font-extrabold tracking-wide md:text-5xl"
          >
            Portfolio
          </motion.h1>

          <motion.p variants={variants}>
            My portfolio features a blend of professional and personal projects.
            From working on exciting collaborations to experimenting with new
            ideas in my free time
          </motion.p>
        </header>

        <motion.section
          variants={variants}
          className="flex flex-col gap-8 my-20"
        >
          {data.map((project) => (
            <motion.div
              key={project.id}
              className="mb-10"
              {...sectionAnimation}
            >
              <div className="mb-6">
                <span className="my-2 text-xl font-light text-gray-200 uppercase">
                  {project.organization}
                  {project.program ? ` | ${project.program}` : ""}
                </span>
                <h2 className="mt-1 mb-4">{project.title}</h2>
              </div>

              <Carousel images={project.images} />

              <p className="my-6">{project.description}</p>

              <div className="flex flex-wrap items-center gap-6 font-light">
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
            </motion.div>
          ))}
        </motion.section>
      </div>
    </PageAnimationWrapper>
  );
};

export default Portfolio;
