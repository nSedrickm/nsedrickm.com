import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import upworkLogo from "@/images/upwork.png";

export default function HireMeMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-1 p-1.5 text-black transition duration-300 ease-in-out delay-150 bg-white rounded-md sm:p-2 md:p-4 hover:-translate-y-1">
          Hire Me!
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 flex flex-col w-56 gap-2 mt-2 text-gray-800 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item
            as="a"
            target="_blank"
            href="https://www.upwork.com/freelancers/~010a12bb6327f60ed1"
            className="p-1 bg-white rounded-md "
          >
            <Image
              src={upworkLogo}
              width={100}
              height={5}
              alt="upwork"
              className="p-0 m-0 mx-auto"
            />
          </Menu.Item>

          <Menu.Item
            as={Link}
            href="/contact"
            className="p-3 text-center bg-white rounded-md"
          >
            Contact
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
