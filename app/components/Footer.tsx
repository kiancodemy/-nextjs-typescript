import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";

export default function Footer() {
  const data = {
    contact: [
      "Contact",
      "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",

      "23 Main Street, Cityville, State, Zip Code",
      "(555) 123-4567",
      "https://joefreycodes.com",
    ],
    source: [
      "Resources",
      " Blog",
      "Support",
      "Terms & conditions",
      "Privacy policy",
    ],
    place: [
      "Company",
      "Home",
      "How we work",
      "Our mission",
      "About",
      "Careers",
      " Contact",
    ],
    descrription:
      "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
  };
  return (
    <main>
      <footer className="py-5 container mx-auto gap-8 flex flex-col justify-center  lg:grid lg:grid-cols-3 ">
        <div className="flex flex-col gap-6 px-4 lg:pr-6">
          <div className="w-[150px]">
            <Image alt="logo-part" src={logo} width={560} height={460}></Image>
          </div>

          <p className="text-body">{data.descrription}</p>
          <div className="flex gap-1  items-center">
            <p className="text-primary font-semibold">Learn More</p>

            <span className="rounded-full text-primary text-3xl">
              <AiFillRightCircle></AiFillRightCircle>
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <ul className="flex px-6 gap-4 flex-col">
            {data.place.map((item) => (
              <li
                className={` ${item === "Company" ? "font-bold" : " "}
               text-body `}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex px-6 gap-6 flex-col ">
            {data.source.map((item) => (
              <li
                className={` ${item === "Resources" ? "font-bold" : " "}
              text-body `}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col px-6 gap-4">
          {data.contact.map((item) => (
            <li
              className={` ${item === "Contact" ? "font-bold" : " "}
            text-body `}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
