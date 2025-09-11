// Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center bg-[url('/images/hero.png')]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content with animation */}
      <div className="relative z-10 max-w-3xl px-4">
      {/*  <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          NKT Cement
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-white text-lg leading-relaxed"
        >
          Neel Kanth Traders (NKT) is authorized distributor of UltraTech Cement. Delivering excellence in construction supply across Ghaziabad & Gautam
          Budh Nagar. 
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-white text-lg leading-relaxed"
        >
          Delivering excellence in construction supply across Ghaziabad & Gautam
          Budh Nagar. Reliable supply, trusted brand.
        </motion.p> */}

        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition"
          >
            Get in Touch
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
