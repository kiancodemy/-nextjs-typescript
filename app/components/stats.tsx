import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const statcontent = {
  stat: [
    { number: "99.9%", label: "Child Safety Solutions" },
    { number: "3,912", label: "Happy Customers" },
    { number: "4.8", label: "Rating Reviews" },
  ],

  getstarted: {
    heading: "Get started with our service?",
    des: "We understand that protecting your loved ones is of utmost importance.",
    images: "imagesillustration-woman.svg",
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
                    <strong className="text-primary block font-bold text-4xl leading-tight">
                      {a.number}
                    </strong>
                    <span>{a.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12"></div>
        </div>
      </div>
    </section>
  );
}
