import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const statcontent = {
  stat: [
    { number: "99.9%", label: "Child Safety Solutions" },
    { number: "3,912", label: "Happy Customers" },
    { number: "4.8", label: "Rating Reviews" },
  ],

  getstarted: {
    heading: "Get started with our service?",

    des: "We understand that protecting your loved ones is of utmost importance.",
    images: "/images/illustration-woman.svg",
  },
};

export default function Stats() {
  return (
    <section className="pt-20 pb-10">
      <div className="px-4 container mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statcontent.stat.map((a, b) => {
                return (
                  <div key={a.label} className="text-center lg:text-left  ">
                    <strong className="text-primary block font-bold text-3xl lg:text-4xl leading-tight">
                      {a.number}
                    </strong>
                    <span>{a.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-[#e5e7eb] py-10 px-7 lg:px-10 !pr-28  rounded-lg md:!pr-32 lg:pr-40 relative">
              <Image
                alt="d"
                width={510}
                height={150}
                src={statcontent.getstarted.images}
                className="absolute lg:right-6 -top-14 w-24 right-0"
              ></Image>
              <h3 className="text-xl font-bold mb-3 ">
                {statcontent.getstarted.heading}
              </h3>
              <p className="font-md text-body">{statcontent.getstarted.des}</p>
              <Link href="#" className="group mt-2 flex items-center space-x-2">
                <span className="capitalize font-bold text-md text-primary text-bold">
                  learn more
                </span>
                <span className="text-primary transition-all duration-300 ease-out  group-hover:text-secondary inline-flex justify-center items-center text-2xl">
                  <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
