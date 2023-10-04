import React from "react";
import Image from "next/image";
import Link from "next/link";
const solutions = {
  text: {
    head: "Our Solutions",
    title: "From safeguarding your home with state-of-the-art alarm systems",
    des: "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
    features: [
      { title: "Home Fire Safety" },
      { title: "Cybersecurity Solutions" },
      { title: "Emergency Preparedness" },
      { title: "Identity Theft Protection" },
    ],
  },
  images: {
    img1: "/images/solution-img-1-min.jpg",
    img2: "/images/solution-img-2-min.jpg",
    img3: "/images/solution-img-3-min.jpg",
  },
  experience: {
    years: "25+",
    label: "years of experience",
  },
};

export default function Solution() {
  return (
    <section className="bg-light py-32 overflow-x-hidden">
      <div className="px-4 mx-auto container">
        <div className="lg:flex justify-between space-x-2">
          <div className="lg:w-6/12">ffffff</div>
          <div className="lg:w-6/12">
            <span className="before:content-[''] mb-5 relative before:w-1/3 before:hover:w-full before:transition-all before:duration-500 before:rounded-md py-1 px-2 ease-in before:absolute before:top-0 before:left-0 before:z-[-5] before:bottom-0 before:bg-yellow-300 z-50 font-boldl text-xl ">
              {solutions.text.head}
            </span>
            <h1 className="font-bold mb-5 py-4 text-2xl lg:text-5xl text-black">
              {solutions.text.title}
            </h1>
            <p className="text-body text-md ">{solutions.text.des}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
