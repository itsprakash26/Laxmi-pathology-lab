import { useState } from "react";
import logo from "../assets/logo.png";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">

      {/* Top Header */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <img
            src={logo}
            alt="Lakshmi Pathology Lab"
            className="h-14 w-auto object-contain sm:h-16"
          />

          {/* Desktop Info */}
          <div className="hidden items-center gap-10 lg:flex">

            {/* Home Collection */}
            <div className="flex items-center gap-3">
              <span className="text-3xl text-red-600"><BiSolidDonateBlood /></span>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  FREE HOME
                </p>
                <p className="text-sm font-bold text-gray-900">
                  SAMPLE COLLECTION
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-3xl text-red-600"><FaPhoneAlt/></span>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  7982625884
                </p>
                <p className="text-sm font-bold text-gray-900">
                  9871836218
                </p>
              </div>
            </div>

          </div>

          {/* Desktop Button */}
          <button className="hidden rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 md:block">
            Book a Test
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-800 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center px-6 lg:px-8">

          <a
            href="#"
            className="bg-red-600 px-6 py-3 text-sm font-semibold text-white"
          >
            Home
          </a>

          <a
            href="#tests"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            Tests & Prices
          </a>

          <a
            href="#book"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            Book a Test
          </a>

          <a
            href="#report"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            Download Report
          </a>

          <a
            href="#home-collection"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            Home Collection
          </a>

          <a
            href="#about"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            About Us
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-gray-800 transition hover:text-red-600"
          >
            Contact
          </a>

        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">

          <div className="flex flex-col px-4 py-3">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-red-600 px-4 py-3 font-semibold text-white"
            >
              Home
            </a>

            <a
              href="#tests"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              Tests & Prices
            </a>

            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              Book a Test
            </a>

            <a
              href="#report"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              Download Report
            </a>

            <a
              href="#home-collection"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              Home Collection
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              About Us
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-800 hover:bg-red-50 hover:text-red-600"
            >
              Contact
            </a>

            {/* Mobile Book Button */}
            <button className="mt-2 rounded-lg bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700">
              Book a Test
            </button>

          </div>
        </nav>
      )}

    </header>
  );
};

export default Navbar;