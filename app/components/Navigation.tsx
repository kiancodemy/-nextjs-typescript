"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
import logo from "@/public/images/logo.svg";
import { FiChevronRight } from "react-icons/fi";

import { RxHamburgerMenu } from "react-icons/rx";

const navigationmenue = [
  { href: "#", label: "Home" },
  { href: "#", label: "How we work" },
  { href: "#", label: "Our mission" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export default function Navigation() {
  const [isopen, setopen] = useState<boolean>(false);
  const mobilemenuehandler = () => {
    setopen(!isopen);
  };
  return (
    <>
      <header className="py-7">
        <div className="px-4 mx-auto container">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image width={157} height={30} alt="it logo part" src={logo} />
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex space-x-7">
                {navigationmenue.map((value, key) => {
                  return (
                    <li key={value.label}>
                      <Link href={value.href}>{value.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link
                href="#"
                className="px-5 py-4  bg-primary rounded-lg text-white hidden lg:inline-block"
              >
                Get started
              </Link>

              <button
                onClick={mobilemenuehandler}
                className="lg:hidden block text-3xl "
              >
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/*menu baar*/}
      <div
        className={
          isopen
            ? "w-screen h-screen fixed top-0 z-[11] block"
            : "w-screen h-screen fixed top-0 z-[11] hidden"
        }
      >
        <div className="fixed w-screen h-screen z-[11] top-0 bg-black bg-opacity-50">
          <div className="bg-white h-screen w-[380px] fixed z-[12] top-0 right-0 ">
            <div className="flex items-center h-14 px-10 border-b ">
              <button className="flex items-center space-x-3 ">
                <TfiClose></TfiClose>
                <span onClick={mobilemenuehandler}>Close</span>
              </button>
            </div>
            <div className=" h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
              <ul className="block mb-7">
                {navigationmenue.map((value, key) => {
                  return (
                    <li key={value.label}>
                      <Link
                        className="group flex py-2 duration-300 ease-in-out transition-all hover:text-primary items-center"
                        href={value.href}
                      >
                        <span>{value.label}</span>
                        <span className=" text-xl opacity-0 ease-in-out duration-300  relative left-2 group-hover:left-4 group-hover:opacity-100 ">
                          <FiChevronRight />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/*menu baar*/}
      </div>
    </>
  );
}
