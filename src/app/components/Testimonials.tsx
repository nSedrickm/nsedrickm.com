import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import img1 from "src/app/images/testimonials/img-1.png";
import img2 from "src/app/images/testimonials/img-2.png";
import img3 from "src/app/images/testimonials/img-3.png";
import img4 from "src/app/images/testimonials/img-4.png";
import img5 from "src/app/images/testimonials/img-5.png";
import img6 from "src/app/images/testimonials/img-6.png";

const reviews = [img1, img2, img3, img4, img5, img6];

export const Testimonials = () => {
  return (
    <section
      id="services"
      className="max-w-full p-6 my-20 prose sm:p-16 scroll-mt-20 md:scroll-mt-5 lg:text-center prose-invert"
    >
      <h2 className="mb-8 text-3xl font-bold tracking-wide md:text-4xl font-heading">
        Testimonials
      </h2>
      <p className="text-lg">
        I am commited to providing the best service possible to my clients. Here
        are some of the reviews I have received from my clients on Upwork.
      </p>

      <div className="grid gap-8 my-10 text-left md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-56 rounded-md md:h-72 group shadow-3xl"
          >
            <Image
              src={item}
              fill
              alt="upwork review"
              className="absolute inset-0 object-contain p-0 m-0"
            />

            <div className="absolute inset-0 items-center justify-center hidden group-hover:flex backdrop-blur-sm bg-black/40">
              <a
                href="https://www.upwork.com/freelancers/~010a12bb6327f60ed1"
                className="p-4 font-bold text-black no-underline transition duration-300 ease-in-out delay-150 bg-white rounded-md md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
              >
                View my profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
