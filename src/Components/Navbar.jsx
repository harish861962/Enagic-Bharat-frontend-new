import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex min-h-[72px] items-center justify-between gap-2 py-3 sm:gap-4">
          <div className="text-base font-bold whitespace-nowrap text-red-600 sm:text-xl lg:text-3xl">
            <a href="#" className="block leading-tight">
              ENAGIC BHARAT
            </a>
          </div>

          <ul className="hidden gap-8 font-semibold lg:flex xl:gap-10">
            {/* <Link to="/">HOME</Link>
            <Link to="/Productcard">PRODUCTS</Link>
            <Link to="/office">OFFICE</Link>
            <Link to="/contact">CONTACT</Link> */}

            <li><a href="#">HOME</a></li>
            <li><a href="#Product">PRODUCTS</a></li>
            <li><a href="#office">OFFICE</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 active:translate-y-0 sm:px-6 sm:py-3 sm:text-base"
          >
            Book Demo
          </a>
        </div>
      </div>
    </nav>
  )
}