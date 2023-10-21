import React from "react";

export default function Testimonial() {
  const testimoialcontent = {
    heading: {
      header: "Hear What Our Customers Say",
      des: "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with Get Started",
    },
    testimonial: [
      {
        img: "/images/person-1-min-jpg",
        name: "Jane Cooper",
        description:
          "“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”",
        address: "Customer - Dallas, TX",
      },
      {
        img: "/images/person-1-min-jpg",
        name: "Alisa Richardson",
        description:
          "“Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.”",
        address: "Customer - Miami, FL",
      },
      {
        img: "/images/person-1-min-jpg",
        name: "Davon McKenny",
        description:
          "“After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”",
        address: "Customer - Seattle, WA",
      },
    ],
  };
  return (
    <section className="bg-light">
      <div className="container px- mx-auto">
        <div className="lg:grid lg:grid-cols-3">
          <div className="lg:py-6 px-3">
            <h1 className="text-heading font-bold text-2xl lg:text-4xl py-4">
              {testimoialcontent.heading.header}
            </h1>
            <p className="text-body py-4">{testimoialcontent.heading.des}</p>
            <button className="bg-primary hover:translate-y-[-5px] duration-300 inline-block p-4 text-md rounded-md text-light">
              Get started
            </button>
          </div>
        </div>
        {/*second  */}
        <div></div>
      </div>
    </section>
  );
}
