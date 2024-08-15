import {
  faChevronLeft,
  faChevronRight,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Home Buyer",
    text: "“I found my dream home through this platform. The process was smooth and the support was fantastic!”",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Michael Brown",
    position: "Real Estate Agent",
    text: "“This website has been a game-changer for my business. It’s easy to use and connects me with motivated buyers.”",
    image:
      "https://images.unsplash.com/photo-1506748686214e9df14f3e4b9d6a032b6c8e6c7c5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDgxfHxydWFsbHx8MHx8fDE2Njc0MjA4MTc&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Home Seller",
    text: "“Selling my property was effortless. The platform provided excellent exposure and I got a great offer quickly.”",
    image:
      "https://images.unsplash.com/photo-1567767461-3b85d22c5962?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0eXxlbnwwfHx8fDE2Njc0MjA4MTc&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Investor",
    text: "“I found several profitable investment opportunities through this site. The tools and insights are incredibly valuable.”",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14f3e4b9d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGludmVzdG9yfHx8fDE2Njc0MjA4MTc&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 5,
    name: "Laura Martinez",
    position: "First-Time Buyer",
    text: "“As a first-time homebuyer, I was nervous, but the resources and guidance provided here were outstanding.”",
    image:
      "https://images.unsplash.com/photo-1544972381-080a3de28790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkwfHxmaXJzdC10aW1lfHx8fDE2Njc0MjA4MTc&ixlib=rb-1.2.1&q=80&w=400",
  },
];
const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsToShow = 1; // Number of testimonials to show at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonial = testimonials[currentIndex];

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-teal-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <div className="flex items-center  justify-center gap-3">
          <FontAwesomeIcon
            className="w-7 text-teal-700"
            size="2xl"
            icon={faPaw}
          />
          <span className="md:hidden lg:block text-teal-700 font-extrabold">
            {import.meta.env.VITE_APP_NAME}
          </span>
        </div>
        <figure className="mt-10">
          <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{visibleTestimonial.text}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt={visibleTestimonial.name}
              src={visibleTestimonial.image}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {visibleTestimonial.name}
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{visibleTestimonial.position}</div>
            </div>
          </figcaption>
        </figure>
        <div className="relative mt-10 flex justify-between">
          <button
            className="absolute left-0 z-10 p-2 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700"
            onClick={prevSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            className="absolute right-0 z-10 p-2 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
