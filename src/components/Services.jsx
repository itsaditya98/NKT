import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function Services() {
  const [ref1, visible1] = useInViewAnimation();
  const [ref2, visible2] = useInViewAnimation();
  const [ref3, visible3] = useInViewAnimation();

  return (
    <section
      id="services"
      className="py-16 px-4 text-center bg-gradient-to-r from-yellow-100 via-white to-gray-50"
    >
      <h3 className="text-4xl font-bold mb-12 text-gray-800">
        Our Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div
          ref={ref1}
          className={`bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible1 ? "animate-slideUp" : "opacity-0"
          }`}
        >
          <img
            src="./public/images/service.png"
            alt="Cement Delivery"
            className="w-60 h-60 mx-auto object-contain mb-4"
          />
          <h4 className="font-semibold text-lg mb-2">
            Delivery via Our Partners
          </h4>
          <p className="text-gray-600">
            Reliable and timely delivery of UltraTech Cement directly to your site.
          </p>
        </div>

        {/* Service 2 
        <div
          ref={ref2}
          className={`bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible2 ? "animate-slideUp delay-200" : "opacity-0"
          }`}
        >
          <img
            src="/images/service.png"
            alt="Bulk Orders"
            className="w-32 h-32 mx-auto object-contain mb-4"
          />
          <h4 className="font-semibold text-lg mb-2">Bulk Orders</h4>
          <p className="text-gray-600">
            Special pricing and logistics support for large construction projects.
          </p>
        </div>

        Service 3 

        <div
          ref={ref3}
          className={`bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible3 ? "animate-slideUp delay-300" : "opacity-0"
          }`}
        >
          <img
            src="/images/service.png"
            alt="Customer Support"
            className="w-32 h-32 mx-auto object-contain mb-4"
          />
          <h4 className="font-semibold text-lg mb-2">Customer Support</h4>
          <p className="text-gray-600">
            Expert guidance and assistance to ensure hassle-free construction supply.
          </p>
        </div> */}
      </div>
    </section>
  );
}
