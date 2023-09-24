import React from "react";
import Link from "next/link";
const herocontent = {
  text: {
    sub: "Welcome to FamSec",
    heading: "Welcome to FamSec Protecting Families, Securing Futures",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.",
  },
  images: {
    image1: "/images/hero-img-1.jpg ",
    image2: "/images/hero-img-2.jpg ",
    image3: "/images/hero-img-3.jpg ",
    image4: "/images/hero-img-4.jpg ",
    image5: "/images/hero-img-5.jpg ",
  },
};

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-5/12 lg:mb-0 ">
            <span className="relative mb-10 text-heading before:hover:w-full before:duration-500  inline-block py-0.5 pl-3 font-semibold before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-lightyellow before:w-0 before:z-[-2] ">
              {herocontent.text.sub}
            </span>
            <h1 className="mb-7 font-bold text-4xl lg:text-5xl text-heading ">
              {herocontent.text.heading}
            </h1>
            <p className="leading-relaxed mb-10 text-body ">
              {herocontent.text.description}
            </p>
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
                how it works
              </Link>
            </div>
          </div>
        </div>
        {/*secondpart*/}
        <div></div>
      </div>
    </section>
  );
}
