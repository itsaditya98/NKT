import React from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function Products() {
  const BASE_URL = import.meta.env.BASE_URL;

  const [ref1, visible1] = useInViewAnimation();
  const [ref2, visible2] = useInViewAnimation();
  const [ref3, visible3] = useInViewAnimation();

  return (
    <section
      id="products"
      className="min-h-screen bg-gradient-to-l from-yellow-100 via-white to-gray-50 flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <h3 className="text-4xl font-bold text-white mb-12">Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl">
        {/* Product Card 1  */}
        <div
          ref={ref1}
          className={`bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible1 ? "animate-slideUp" : "opacity-0"
          }`}
        >
          <img
            src="/NKT/images/opc.jpg"
            alt="Cement"
            className="mx-auto w-32 h-32 object-contain mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">Cement</h4>
        </div>

        {/* Product Card 2 */}
        <div
          ref={ref2}
          className={`bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible2 ? "animate-slideUp delay-200" : "opacity-0"
          }`}
        >
          <img
            src="/NKT/images/cement.jpg"
            alt="Ordinary Portland Cement (OPC)"
            className="mx-auto w-32 h-32 object-contain mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">
            Ordinary Portland Cement (OPC)
          </h4>
        </div>

        {/* Product Card 3 */}
        {/* Uncomment and update image path accordingly */}
        {/* <div
          ref={ref3}
          className={`bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
            visible3 ? "animate-slideUp delay-300" : "opacity-0"
          }`}
        >
          <img
            src={`${BASE_URL}images/products.png`}
            alt="Portland Slag Cement (PSC)"
            className="mx-auto w-32 h-32 object-contain mb-4"
          />
          <h4 className="font-semibold text-xl mb-2">
            Portland Slag Cement (PSC)
          </h4>
          <p className="text-gray-700 mb-4">
            Best for marine and coastal constructions, highly durable.
          </p>
        </div> */}
      </div>
    </section>
  );
}
