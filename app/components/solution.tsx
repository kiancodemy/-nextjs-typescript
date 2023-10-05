import React from "react";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
const solutions = {
  text: {
    head: "Our Solutions",
    title: "From safeguarding your home with state-of-the-art alarm systems",
    des: "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
  },
  features: [
    { title: "Home Fire Safety" },
    { title: "Cybersecurity Solutions" },
    { title: "Emergency Preparedness" },
    { title: "Identity Theft Protection" },
  ],

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
const featuresection = solutions.features.map((element) => {
  return (
    <div className="flex py-1 space-x-4">
      <span className="text-3xl text-primary">
        <BsFillCheckCircleFill />
      </span>
      <span className="text-md">{element.title}</span>
    </div>
  );
});

export default function Solution() {
  return (
    <section className="py-32 bg-light overflow-x-hidden">
      <div className="px-4 mx-auto container">
        <div className="lg:flex lg:justify-between lg:space-x-4 ">
          <div className="lg:w-6/12 lg:p-7 z-50 relative before:w-screen before:-top-20 before:-bottom-20 before:rounded-tr-[200px] before:rounded-br-3xl before:z-[-2] before:absolute before:content-[''] before:">
            <div className="flex space-x-2">
              <div className="flex w-1/2 gap-y-2 flex-col">
                <div className="rounded-md  overflow-hidden">
                  <Image
                    alt="kian"
                    src={solutions.images.img1}
                    width={620}
                    height={620}
                    className="w-full h-full object-cover"
                  ></Image>
                </div>
                <div className="flex justify-end space-x-2 ">
                  <div className="w-4/12">
                    <div className="bg-greenlight rounded-2xl rounded-bl-[200px] w-10 h-10 lg:h-24 lg:w-24"></div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      alt="hi"
                      src={solutions.images.img3}
                      width={620}
                      height={620}
                      className="w-full h-full object-cover rounded-lg"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 gap-y-2 flex-col">
                <div className="flex justify-start">
                  <div className="w-10 h-10 lg:w-20 lg:h-20 bg-purplelight rounded-xl rounded-tr-[200px]"></div>
                </div>
                <div>
                  <Image
                    alt="hi"
                    src={solutions.images.img2}
                    width={420}
                    height={420}
                    className="w-full h-full object-cover rounded-lg"
                  ></Image>
                </div>
                <div className="bg-white py-7 rounded flex flex-col">
                  <p className=" pl-7 font-bold text-2xl lg:text-5xl text-primary ">
                    25+
                  </p>
                  <p className="pl-7 text-body">years of experience</p>
                </div>
              </div>
            </div>
            <div className="flex w-1/2"></div>
          </div>
          <div className="lg:w-6/12">
            <span className="before:content-[''] mb-5 relative before:w-1/3 before:hover:w-full before:transition-all before:duration-500 before:rounded-md py-1 px-2 ease-in before:absolute before:top-0 before:left-0 before:z-[-5] before:bottom-0 before:bg-yellow-300 z-50 font-boldl text-xl ">
              {solutions.text.head}
            </span>
            <h1 className="font-bold mb-5 py-4 text-2xl max-w-xl lg:text-4xl text-heading">
              {solutions.text.title}
            </h1>
            <p className="text-body text-md ">{solutions.text.des}</p>

            <div className="lg:grid py-5 my-4 lg:grid-cols-2">
              {featuresection}
            </div>
            <div className="flex space-x-3  text-white">
              <Link
                href="/"
                className="bg-primary hover:shadow-lg hover:translate-y-1 duration-300 ease-outinline-block rounded-lg py-4 px-5"
              >
                Get Started
              </Link>
              <Link
                href="/"
                className="bg-secondary hover:shadow-lg hover:translate-y-1 duration-300 ease-outcapitalize inline-block rounded-lg py-4 px-5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
