"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/" className="text-white">
            Alex Bondarchuk
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-white text-lg mx-4">
            About
          </Link>
          <Link href="/Resume" className="text-white text-lg mx-4">
            Resume
          </Link>
          <a href="#contact" className="text-white text-lg mx-4">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-700 text-center">
          <nav>
            <Link href="/about" className="block py-2 text-white">
              About
            </Link>
            <Link href="/resume" className="block py-2 text-white">
              Resume
            </Link>
            <a href="#contact" className="block py-2 text-white">
              Contact
            </a>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
