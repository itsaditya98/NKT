import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 bg-opacity-90 text-white p-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* NKT title (responsive + clickable) */}
        <a href="/" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold hover:text-yellow-400 transition duration-300">
          NKT
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Navigation links */}
        <nav
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } flex-col md:flex-row gap-2`}
        >
          <a
            href="#products"
            className="bg-yellow-400 text-black p-2 rounded text-center transition duration-300 hover:bg-yellow-500 hover:shadow-lg"
          >
            Products
          </a>
          <a
            href="#services"
            className="bg-yellow-400 text-black p-2 rounded text-center transition duration-300 hover:bg-yellow-500 hover:shadow-lg"
          >
            Services
          </a>
          <a
            href="#about"
            className="bg-yellow-400 text-black p-2 rounded text-center transition duration-300 hover:bg-yellow-500 hover:shadow-lg"
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-yellow-400 text-black p-2 rounded text-center transition duration-300 hover:bg-yellow-500 hover:shadow-lg"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
