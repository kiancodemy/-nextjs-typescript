import React from "react";

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

export default function Service() {
  return (
    <section>
      <div className="container bg-light py-10 mt-10 mx-auto ">
        <div className="text-center mt-5">
          <span className="before:content-[''] relative before:w-0 before:hover:w-full before:transition-all before:duration-[1500ms] before:rounded-md py-1 px-2 ease-in before:absolute before:top-0 before:left-0 before:z-[-5] before:bottom-0 before:bg-yellow-500 z-50 font-semiboldl text-xl ">
            {servicecotent.heading.sub}
          </span>
          <h1 className="font-bold text-4xl py-5 ">
            {servicecotent.heading.title}
          </h1>
          <p className="w-1/2 px-[28px] text-body mx-auto py-5">
            {servicecotent.heading.des}
          </p>
        </div>
      </div>
    </section>
  );
}
