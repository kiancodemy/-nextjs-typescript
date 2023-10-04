import React from "react";
import Image from "next/image";

const servicecotent = {
  heading: {
    sub: "Our Awesome Services",
    title: "Our Services",
    des: "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      icon: "/images/icon-1.svg",
      title: "Child Safety Solutions",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-2.svg",
      title: "Elderly Care Monitoring",
      description:
        "Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.",
    },
    {
      icon: "/images/icon-3.svg",
      title: "Home Fire Safety",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "/images/icon-4.svg",
      title: "Financial Planning",
      description:
        "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security.",
    },
    {
      icon: "/images/icon-5.svg",
      title: "Personal Safety Devices",
      description:
        "Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      icon: "/images/icon-6.svg",
      title: "Insurance Coverage",
      description:
        "Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance.",
    },
  ],
};
const elements = servicecotent.items.map((element) => {
  return (
    <div key={element.title} className="flex space-x-5 ">
      <div className="w-1/6 self-start  bg-white shadow-[0_5px_20px_0px_rgba(0,0,0,0.2)] rounded-lg">
        <Image
          className="p-2 w-full h-full"
          alt="s"
          width={50}
          height={100}
          src={element.icon}
        ></Image>
      </div>
      <div className="w-5/6">
        <span className="font-bold inline-block text-primary mb-3">
          {element.title}
        </span>
        <h2 className="text-body w-[90%]">{element.description}</h2>
      </div>
    </div>
  );
});

export default function Service() {
  return (
    <section className="bg-light">
      <div className=" container mx-auto py-10 mt-10 mb-20  ">
        <div className="max-w-xl text-center mx-auto mt-5">
          <span className="before:content-[''] relative before:w-0 before:hover:w-full before:transition-all before:duration-500 before:rounded-md py-1 px-2 ease-in before:absolute before:top-0 before:left-0 before:z-[-5] before:bottom-0 before:bg-yellow-500 z-50 font-semiboldl text-xl ">
            {servicecotent.heading.sub}
          </span>
          <h1 className="font-bold text-2xl lg:text-4xl py-5 ">
            {servicecotent.heading.title}
          </h1>
          <p className=" text-body mx-auto leading-7">
            {servicecotent.heading.des}
          </p>
        </div>
        {/*second  */}
        <div className="py-16 px-10  gap-10 grid-col-1  lg:grid md:grid-cols-2  lg:grid-cols-3 grid grid-col1-1">
          {elements}
        </div>
      </div>
    </section>
  );
}
