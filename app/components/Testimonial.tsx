import React from "react";
import Image from "next/image";

export default function Testimonial() {
  const testimoialcontent = {
    heading: {
      header: "Hear What Our Customers Say",
      des: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with Get Started",
    },
    testimonial: [
      {
        img: "/images/person-1-min.jpg",
        name: "Jane Cooper",
        description:
          "“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”",
        address: "Customer - Dallas, TX",
      },
      {
        img: "/images/person-2-min.jpg",
        name: "Alisa Richardson",
        description:
          "“Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.”",
        address: "Customer - Miami, FL",
      },
      {
        img: "/images/person-3-min.jpg",
        name: "Davon McKenny",
        description:
          "“After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”",
        address: "Customer - Seattle, WA",
      },
    ],
  };
  return (
    <section className="bg-light">
      <div className="container px-2 mx-auto mb-4">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="lg:py-6 py-3">
            <h1 className="text-heading font-bold text-2xl lg:text-4xl py-4">
              {testimoialcontent.heading.header}
            </h1>
            <p className="text-body max-w-sm py-4">
              {testimoialcontent.heading.des}
            </p>
            <button className="bg-primary hover:translate-y-[-5px] duration-300 inline-block p-4 text-md rounded-md text-light">
              Get started
            </button>
          </div>
          {/*second*/}
          <section>
            <div className="p-4 ">
              <div className="p-4 rounded-xl bg-white">
                <div className="flex gap-2 p-2 justify-start">
                  <div className="overflow-hidden rounded-full  w-[50px] h-[50px]">
                    <Image
                      src={testimoialcontent.testimonial[0].img}
                      className="object-cover h-full w-full"
                      width={100}
                      height={100}
                      alt="yes"
                    ></Image>
                  </div>
                  <div>
                    <p className="font-bold">
                      {testimoialcontent.testimonial[0].name}
                    </p>
                    <p className="text-body">
                      {testimoialcontent.testimonial[0].address}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-body">
                    {testimoialcontent.testimonial[0].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="p-4 rounded-xl bg-white">
                <div className="flex gap-2 p-2 justify-start">
                  <div className="overflow-hidden rounded-full  w-[50px] h-[50px]">
                    <Image
                      src={testimoialcontent.testimonial[1].img}
                      className="object-cover h-full w-full"
                      width={100}
                      height={100}
                      alt="yes"
                    ></Image>
                  </div>
                  <div>
                    <p className="font-bold">
                      {testimoialcontent.testimonial[1].name}
                    </p>
                    <p className="text-body">
                      {testimoialcontent.testimonial[1].address}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-body">
                    {testimoialcontent.testimonial[1].description}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*third  */}

          <section className="flex lg:py-6 flex-col space-y-4">
            <div className="h-1/4 lg:flex lg:justify-start lg:items-end hidden ">
              <div className="bg-secondary opacity-20 rounded-full w-[25px] h-[25px] lg:w-[70px] lg:h-[70px]"></div>
            </div>
            <div className="h-1/2">
              <div>
                <div className="p-4 rounded-xl bg-white">
                  <div className="flex gap-2 p-2 justify-start">
                    <div className="overflow-hidden rounded-full  w-[50px] h-[50px]">
                      <Image
                        src={testimoialcontent.testimonial[2].img}
                        className="object-cover h-full w-full"
                        width={100}
                        height={100}
                        alt="yes"
                      ></Image>
                    </div>
                    <div>
                      <p className="font-bold">
                        {testimoialcontent.testimonial[2].name}
                      </p>
                      <p className="text-body">
                        {testimoialcontent.testimonial[2].address}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-body">
                      {testimoialcontent.testimonial[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-1/4 lg:flex lg:justify-start lg:items-end hidden ">
              <div className="bg-pink rounded-xl  rounded-bl-[200px] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
