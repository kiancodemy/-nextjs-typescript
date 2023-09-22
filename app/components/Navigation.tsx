import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const navigationmenue = [
  { href: "#", label: "Home" },
  { href: "#", label: "How we work" },
  { href: "#", label: "Our mission" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export default function Navigation() {
  return (
    <>
      <header className="py-7">
        <div className="px-4 mx-auto ">
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

              <button className="lg:hidden block text-3xl ">
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
