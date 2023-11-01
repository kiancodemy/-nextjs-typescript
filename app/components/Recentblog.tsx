"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Recentblog() {
  const [slideindex, setslideindex] = useState<number>(0);
  const [isend, setisned] = useState<any>(null);
  const slideref = useRef(null);

  const content = {
    heading: {
      subtitle: "Our Writeups",
      title: "Our Latest Articles",
      description:
        "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
    },
    recentblog: [
      {
        paramlink: "#",
        featuring: "/image/post-1-min.jpg",
        title: "10 Essential Tips for Protecting Your Home from Burglaries",
        description:
          "Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.",
      },
      {
        paramlink: "#",
        featuring: "/image/post-2-min.jpg",
        title:
          "the ultimate guide to choosing the right life insurance for your family ",
        description:
          "Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
      },
      {
        paramlink: "#",
        featuring: "/image/post-3-min.jpg",
        title:
          "A Comprehensive Guide to Choosing the Right Family Health Insurance Plan",
        description:
          "This post could cover tips and factors to consider when selecting health insurance for the entire family, including coverage options, deductibles, and copayments.",
      },
      {
        paramlink: "#",
        featuring: "/image/post-3-min.jpg",
        title: "Understanding Homeowners Insurance",
        description:
          "This blog post might explain the basics of homeowners insurance, what it covers, and why it's crucial for safeguarding your family and home.",
      },
      {
        paramlink: "#",
        featuring: "/image/post-2-min.jpg",
        title: "Finances ",
        description:
          "This blog post might explain the basics of homeowners insurance, what it covers, and why it's crucial for safeguarding your family and home.",
      },
    ],
  };
  return (
    <section className="bg-light py-20 overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-8">
          <div className="lg:basis-5/12 mb-8 lg:mb-0">
            <span className="font-semibold before:absolute before:top-0 before:bottom-0 relative before:left-0 before:-z-10 before:rounded-md before:bg-lightyellow z-10  before:w-3/5  py-1 px-2 inline-block">
              {content.heading.subtitle}
            </span>
            <h1 className="lg:text-4xl text-heading text-2xl py-2 capitalize font-bold">
              {content.heading.title}
            </h1>
            <p className="py-4 text-md text-body">
              {content.heading.description}
            </p>
          </div>
          <div className="mb-8 lg:mb-0 gap-4 flex justify-center items-center ">
            <button className="text-primary cursor-pointer opacity-70 hover:opacity-100 text-xl font-bold hover:bg-primary hover:text-white duration-200 flex justify-center items-center bg-[#d7e2fa] p-4 rounded-full">
              <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
            </button>
            <button className="text-primary cursor-pointerv opacity-70 hover:opacity-100 text-xl font-bold hover:bg-primary hover:text-white duration-200 flex justify-center items-center bg-[#d7e2fa] p-4 rounded-full">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
