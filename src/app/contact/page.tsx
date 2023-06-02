"use client";
import { Fragment, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { PageAnimationWrapper } from "@/components";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import useSWRMutation from "swr/mutation";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -20 },
};

async function sendMessage(
  url: string,
  { arg }: { arg: { [k: string]: FormDataEntryValue } }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

const Contact = async () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");

  const { trigger, isMutating, data, error } = useSWRMutation(
    "/api/contact",
    sendMessage
  );

  async function handleSumbit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.target as HTMLFormElement);
    const payload = Object.fromEntries(formData.entries());
    await trigger(payload);
  }

  return (
    <PageAnimationWrapper layoutId="contact">
      <div className="max-w-screen-lg p-6 mx-auto prose sm:p-16 prose-invert md:prose-lg">
        {data ? (
          <motion.div variants={variants}>
            <motion.h1 variants={variants}>Thank you, {data?.name}!</motion.h1>

            <motion.p variants={variants}>
              We can <strong className="font-bold">build better </strong>
              {"I'll"} be in touch soonest. You can also connect with me on
            </motion.p>

            <motion.div
              variants={variants}
              className="flex items-center col-span-1 gap-0 md:gap-2"
            >
              <a
                href="https://www.linkedin.com/in/ngwa-sedrick-meh/"
                target="_blank"
                className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/nsedrickm"
                target="_blank"
                className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/nsedrickm"
                target="_blank"
                className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
              >
                <Github />
              </a>
              <a
                href="https://web.facebook.com/nsedfalj"
                target="_blank"
                className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
              >
                <Facebook />
              </a>
            </motion.div>
          </motion.div>
        ) : (
          <Fragment>
            <motion.h1 variants={variants}>Contact</motion.h1>

            <motion.p variants={variants}>
              Wohoo! {"Let's"} make things happen. {"I'd"} love to hear from you
            </motion.p>

            <motion.p variants={variants}>
              Please fill out the form below or send an email to{" "}
              <a
                href="mailto:hello@nsedrickm.com"
                className="font-bold text-white"
              >
                hello@nsedrickm.com
              </a>
            </motion.p>

            {error && (
              <motion.div
                variants={variants}
                className="p-2 bg-red-500 rounded-md prose-p:my-1"
              >
                <motion.p variants={variants}>
                  Sorry, An error occured. Please try again.
                </motion.p>
              </motion.div>
            )}

            <motion.form
              variants={variants}
              className="my-16 text-xl"
              onSubmit={handleSumbit}
            >
              <div className="grid gap-2 mb-8">
                <label htmlFor="name">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="p-4 border-none rounded-md shadow outline-none bg-gray-500/25 focus:ring-gray-600"
                />
              </div>

              <div className="grid gap-2 mb-8">
                <label htmlFor="subject">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  defaultValue={subject || ""}
                  className="p-4 border-none rounded-md shadow outline-none bg-gray-500/25 focus:ring-gray-600"
                />
              </div>

              <div className="grid gap-2 mb-8">
                <label htmlFor="email">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="p-4 border-none rounded-md shadow outline-none bg-gray-500/25 focus:ring-gray-600"
                />
              </div>

              <div className="grid gap-2 mb-8">
                <label htmlFor="message">Message</label>
                <textarea
                  required
                  rows={8}
                  name="message"
                  className="p-4 border-none rounded-md shadow outline-none bg-gray-500/25 focus:ring-gray-600 caret-white"
                />
              </div>

              <button
                type="submit"
                disabled={isMutating}
                className="px-12 py-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:-translate-y-1 hover:scale-110"
              >
                {isMutating ? "Sending..." : "Send"}
              </button>
            </motion.form>
          </Fragment>
        )}
      </div>
    </PageAnimationWrapper>
  );
};

export default Contact;
