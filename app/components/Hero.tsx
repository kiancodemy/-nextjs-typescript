import React from "react";
import Link from "next/link";
import Image from "next/image";
const herocontent = {
  text: {
    sub: "Welcome to FamSec",
    heading: "Welcome to FamSec Protecting Families, Securing Futures",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.",
  },
  images: {
    image1: "/images/hero-img-1-min.jpg",
    image2: "/images/hero-img-2-min.jpg ",
    image3: "/images/hero-img-3-min.jpg ",
    image4: "/images/hero-img-4-min.jpg ",
    image5: "/images/hero-img-5-min.jpg ",
  },
};

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-5/12 lg:mb-0 mb-10 ">
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
          {/*secondpart*/}
          <div className="lg:w-6/12 space-y-2">
            <div className="flex items-stretch space-x-2">
              <div className="w-8/12 ">
                <Image
                  alt="it is father image"
                  width={397}
                  height={400}
                  src={herocontent.images.image1}
                  className="rounded-lg object-cover h-full w-full"
                ></Image>
              </div>
              <div className="w-4/12 self-end space-y-2 ">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Image
                      alt="family"
                      className="rounded-md h-full w-full "
                      width={437}
                      height={437}
                      src={herocontent.images.image2}
                    ></Image>
                  </div>
                  <div className="bg-lightyellow rounded-2xl rounded-tr-[200px]"></div>
                </div>
              </div>
            </div>
            {/*second*/}
            <div className="flex space-x-2">
              <div className="w-4/12">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-greenlight rounded-2xl rounded-bl-[200px]"></div>
                  <div>
                    <Image
                      src={herocontent.images.image4}
                      alt="familt-2"
                      width={437}
                      height={437}
                      className="object-cover h-full w-full rounded-2xl"
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="w-5/12">
                <Image
                  alt="mom"
                  className="h-full w-full object-cover"
                  width={400}
                  height={400}
                  src={herocontent.images.image5}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
