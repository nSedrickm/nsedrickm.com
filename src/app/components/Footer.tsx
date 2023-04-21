import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2 row-auto gap-4">
      <div className="col-span-1 px-8">
        <p className="my-8 text-4xl">Logo</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          necessitatibus quae enim, dolorem fugiat, minus quos delectus hic,
          distinctio perspiciatis eligendi
        </p>
      </div>
      <div className="flex items-center justify-center col-span-1 px-8">
        <p className="font-sans text-4xl font-bold">
          For any queries, please feel free to contact me
        </p>
      </div>

      <div className="flex items-center justify-between h-20 col-span-2 px-8 mt-auto bg-blue-700">
        <p className="text-lg text-white">
          © 2021 nsedrickm all rights reserved
        </p>
        <div className="flex gap-8 jitems-center">
          <Linkedin />
          <Twitter />
          <Github />
          <Facebook />
        </div>
      </div>
    </footer>
  );
};
