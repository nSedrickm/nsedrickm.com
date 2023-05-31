"use client";
import { PageAnimationWrapper } from "components/PageAnimationWrapper";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -20 },
};

const Resume = () => {
  return (
    <PageAnimationWrapper layoutId="contact">
      <div className="max-w-screen-lg gap-6 p-6 mx-auto text-lg prose sm:p-16 prose-invert">
        <motion.h1
          variants={variants}
          className="text-4xl font-extrabold tracking-wide md:text-5xl"
        >
          Resume
        </motion.h1>

        <motion.p variants={variants} className="mb-0 text-2xl">
          4+ years as a frontend engineer working with companies in the software
          engineering industry
        </motion.p>

        <motion.section variants={variants} className="resume">
          <div className="container">
            <div className="row">
              <div className="">
                <h2 className="text-3xl">Professional Experience</h2>
                <div className="resume-item">
                  <h3 className="">ReactJS Developer</h3>
                  <h4 className="font-mono text-gray-500">01/2023 - Present</h4>
                  <p>Upwork, Remote</p>
                  <ul>
                    <li>
                      I offer project consultation and web development services
                    </li>
                    <li>
                      Develop, maintain and improve web applications for
                      multi-national clients
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h3 className="">Frontend Engineer</h3>
                  <h4 className="font-mono text-gray-500">08/2020 - 12/2022</h4>
                  <p>Afkanerd Inc, Bamenda, Cameroon</p>
                  <ul>
                    <li>
                      Designed and developed key user interfaces which improved
                      signup rates by more than 50%
                    </li>
                    <li>Maintained codebases and production infrastructure</li>
                    <li>Mentored other developers and interns</li>
                    <li>
                      Setup development guidelines and tooling for multiple
                      projects
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h3 className="">
                    Google Summer of Code participant with Ceph
                  </h3>
                  <h4 className="font-mono text-gray-500">07/2022 - 09/2022</h4>
                  <p>Redhat Ceph Storage, Remote</p>

                  <ul>
                    <li>
                      Improved dashboard accessibility standards to meet WCAG
                      2.1 level A Compliance
                    </li>
                    <li>
                      Developed a new pagination component which enabled quick
                      access to large tabular data
                    </li>
                    <li>Updated dashboard branding with accessible colors</li>
                    <li>
                      Added end to end accessibility testing in the Cypress QA
                      suite to prevent future regressions
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h3 className="">FullStack Engineer</h3>
                  <h4 className="font-mono text-gray-500">10/2019 - 06/2020</h4>
                  <p>Light Outreach Foundation Intl, Bamenda, Cameroon</p>
                  <ul>
                    <li>Developed a donations platform for fund raising</li>
                    <li>
                      Integrated MTN mobile money and Orange money {"API's"} for
                      payment processing
                    </li>
                    <li>
                      Developed a raffling system for random gift allocation
                    </li>
                    <li>Managed production infrastructure on digitalocean</li>
                  </ul>
                </div>
              </div>

              <div className="">
                <h2 className="text-3xl">Freelance Experience</h2>
                <div className="resume-item">
                  <h3 className="">FullStack Engineer</h3>
                  <h4 className="font-mono text-gray-500">05/2021 - 08/2021</h4>
                  <p>VALDD, Remote</p>
                  <ul>
                    <li>
                      Developed backend APIs with email, SMS integrations,
                      scheduling and push notifications
                    </li>
                    <li>
                      Developed an intuitive timeline overview which reduced
                      user response times by up to 45s
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl">Education</h2>
                <div className="resume-item">
                  <h3 className="">Bachelors of Technology</h3>
                  <h4 className="font-mono text-gray-500">2017 - 2020</h4>
                  <p>College of Technology, University of Bamenda, Cameroon</p>
                  <p>
                    Studied for three years to obtain a Bachelors of technology
                    in computer networking and systems maintenance
                  </p>
                </div>
              </div>

              <a
                download
                target="_black"
                href="https://drive.google.com/file/d/1TIcfzShzhwvzsR91j8jlq77NVV9mpYVO/view?usp=sharing"
                className="inline-block px-12 py-4 my-10 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:-translate-y-1 hover:scale-110"
              >
                Download
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </PageAnimationWrapper>
  );
};

export default Resume;
