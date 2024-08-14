import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShieldAlt,
  faHandshake,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    name: "Wide Selection of Homes",
    description:
      "Browse a wide variety of homes in different locations, styles, and price ranges to find the perfect match for you.",
    icon: faHome,
  },
  {
    name: "Secure Transactions",
    description:
      "Our platform ensures that all transactions are secure and protected, giving you peace of mind when buying or selling.",
    icon: faShieldAlt,
  },
  {
    name: "Professional Agents",
    description:
      "Work with our experienced agents who are dedicated to helping you navigate the real estate market with ease.",
    icon: faHandshake,
  },
  {
    name: "Best Price Guarantee",
    description:
      "Get the best deal possible on your home with our competitive pricing and expert negotiation skills.",
    icon: faDollarSign,
  },
];

const ServicesComponent: React.FC = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-50">
            Your Dream Home Awaits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            The best way to buy and sell real estate
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Explore our platform to find your dream home, work with top agents,
            and enjoy a seamless buying or selling experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-extrabold leading-7 text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      aria-hidden="true"
                      className="h-6 w-6 text-teal-500"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-100 font-semibold">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
