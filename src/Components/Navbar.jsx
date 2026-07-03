import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/productcard/" },
  { name: "Office", to: "/office" },
  { name: "About Us", to: "/aboutus" },
  // { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-b border-gray-200 bg-white/80 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex min-h-[72px] items-center justify-between gap-2 py-3 sm:gap-4 ">
          <div className="text-base font-bold whitespace-nowrap text-red-600 sm:text-xl lg:text-3xl ">
            <Link to="/" onClick={closeMenu} className="block leading-tight">
              ENAGIC BHARAT
            </Link>
          </div>

          <ul className="hidden gap-8 font-semibold lg:flex xl:gap-10 ">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hidden items-center justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 active:translate-y-0 sm:inline-flex sm:px-6 sm:py-3 sm:text-base"
            >
              Book Demo
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm transition hover:bg-gray-100 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="border-t border-gray-200 py-3 font-semibold text-gray-800">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mb-4 flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </nav>
  )
}
