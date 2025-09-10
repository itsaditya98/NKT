import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">NKT</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row gap-2`}>
          <a href="#products" className="bg-yellow-400 text-black p-2 rounded text-center">Products</a>
          <a href="#services" className="bg-yellow-400 text-black p-2 rounded text-center">Services</a>
          <a href="#about" className="bg-yellow-400 text-black p-2 rounded text-center">About</a>
          <a href="#contact" className="bg-yellow-400 text-black p-2 rounded text-center">Contact</a>
        </nav>
      </div>
    </header>
  );
}
