import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function About() {
  const [ref, visible] = useInViewAnimation();

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-l from-yellow-100 via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div
          ref={ref}
          className={`relative w-full h-80 md:h-[400px] rounded-xl shadow-lg overflow-hidden transform transition duration-700 ${
            visible ? "animate-slideUp" : "opacity-0"
          }`}
        >
          <img
            src="https://itsaditya98.github.io/NKT/images/hero.png"
            alt="About NKT Cement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Right Side Text */}
        <div
          className={`text-center md:text-left transform transition duration-700 delay-200 ${
            visible ? "animate-slideUp" : "opacity-0"
          }`}
        >
          <h3 className="text-4xl font-bold text-gray-800 mb-6">About NKT</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-yellow-500">Neel Kanth Traders (NKT)</span>, 
            proudly serving as the{" "}
            <span className="font-semibold">authorized distributor of UltraTech Cement</span>, 
            has been delivering excellence in construction supply across{" "}
            <span className="text-gray-900 font-medium">
              Ghaziabad & Gautam Budh Nagar
            </span>. 
            We are committed to providing premium quality cement, reliable delivery, 
            and customer-first service.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With years of experience and strong partnerships, we ensure that every 
            construction project, big or small, is built on a foundation of trust 
            and strength.
          </p>
        </div>
      </div>
    </section>
  );
}
