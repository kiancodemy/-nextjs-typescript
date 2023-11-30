"use client";
import React from "react";
import { AiFillRightCircle, AiOutlineMore } from "react-icons/ai";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Recentblog() {
  const [slideindex, setslideindex] = useState<number>(0);
  const [isend, setisned] = useState<number>(0);
  const [active, setactive] = useState<number>(0);

  const items = {
    heading: {
      subtitle: "Our Writeups",
      title: "Our Latest Articles",
      description:
        "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
    },
    recentblog: [
      {
        paramlink: "#",
        featuring: "/images/post-1-min.jpg",
        title: "10 Essential Tips for Protecting Your Home from Burglaries",
        description:
          "Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.",
      },
      {
        paramlink: "#",
        featuring: "/images/post-2-min.jpg",
        title:
          "the ultimate guide to choosing the right life insurance for your family ",
        description:
          "Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
      },
      {
        paramlink: "#",
        featuring: "/images/post-3-min.jpg",
        title:
          "A Comprehensive Guide to Choosing the Right Family Health Insurance Plan",
        description:
          "This post could cover tips and factors to consider when selecting health insurance for the entire family, including coverage options, deductibles, and copayments.",
      },
      {
        paramlink: "#",
        featuring: "/images/post-3-min.jpg",
        title: "Understanding Homeowners Insurance",
        description:
          "This blog post might explain the basics of homeowners insurance, what it covers, and why it's crucial for safeguarding your family and home.",
      },
      {
        paramlink: "#",
        featuring: "/images/post-2-min.jpg",
        title: "Finances ",
        description:
          "This blog post might explain the basics of homeowners insurance, what it covers, and why it's crucial for safeguarding your family and home.",
      },
    ],
  };

  useEffect(() => {
    const a = setTimeout(() => {
      if (window.innerWidth > 800) {
        if (active < items.recentblog.length - 1) {
          setactive((prev) => prev + 1);
        } else {
          setactive(0);
        }
      }
    }, 3000);
    return () => {
      return clearTimeout(a);
    };
  }, [active]);

  const increase = () => {
    if (active < items.recentblog.length - 1) {
      setactive((prev) => prev + 1);
    } else {
      setactive(0);
    }
  };
  const decrease = () => {
    if (active === 0) {
      setactive(items.recentblog.length - 1);
    } else {
      setactive((prev) => prev - 1);
    }
  };
  const getall = items.recentblog.map((a) => {
    return (
      <div
        key={a.title}
        className="inline-flex lg:flex-row flex-col space-y-4 lg:py-6 lg:px-2 justify-center items-center"
      >
        <Image
          className="object-cover rounded-md object-center"
          alt="d"
          src={a.featuring}
          width={350}
          height={150}
        ></Image>

        <div className="px-4 flex h-[500px] lg:h-[300px] lg:justify-center flex-col  items-center">
          <p className="text-primary whitespace-normal font-bold text-lg lg:text-2xl">
            {a.title}
          </p>
          <p className="text-body whitespace-normal ">{a.description}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="bg-light py-20 ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-8">
          <div className="lg:basis-5/12 mb-8 lg:mb-0">
            <span className="font-semibold before:absolute before:top-0 before:bottom-0 relative before:left-0 before:-z-10 before:rounded-md before:bg-lightyellow z-10  before:w-3/5  py-1 px-2 inline-block">
              {items.heading.subtitle}
            </span>
            <h1 className="lg:text-4xl text-heading text-2xl py-2 capitalize font-bold">
              {items.heading.title}
            </h1>
            <p className="py-4 text-md text-body">
              {items.heading.description}
            </p>
          </div>
          <div className="mb-8 lg:mb-0 gap-4 flex justify-center items-center ">
            <button
              onClick={decrease}
              className="text-primary cursor-pointer opacity-70 hover:opacity-100 text-xl font-bold hover:bg-primary hover:text-white duration-200 flex justify-center items-center bg-[#d7e2fa] p-4 rounded-full"
            >
              <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
            </button>
            <button
              onClick={increase}
              className="text-primary cursor-pointerv opacity-70 hover:opacity-100 text-xl font-bold hover:bg-primary hover:text-white duration-200 flex justify-center items-center bg-[#d7e2fa] p-4 rounded-full"
            >
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </button>
          </div>
        </div>

        <div>
          <div className="lg:w-[1000px] w-[500px] mx-auto overflow-x-hidden ">
            <div className="lg:w-[800px] w-[300px] justify-center  flex flex-col overflow-hidden lg:overflow-visible">
              <div
                style={{
                  transform: `translateX(-${active * 100}%)`,
                  transition: "transform 1s",
                }}
                className=" whitespace-nowrap"
              >
                {getall}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="inline-flex border space-x-1 border-light duration-500 hover:border-primary  rounded-full  px-1 py-2 justify-center items-center">
              <span className="capitalize text-body">to view all posts</span>
              <span className="text-primary font-bold">click here</span>
              <span className="text-2xl text-body">
                <AiOutlineMore></AiOutlineMore>
              </span>

              <span className="rounded-full text-primary text-4xl">
                <AiFillRightCircle></AiFillRightCircle>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
