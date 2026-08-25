import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Lab Info */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Laxmi
            <span className="text-red-500"> Pathology Lab</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Computerised Pathology Lab providing accurate,
            reliable and timely diagnostic testing services.
          </p>

          <div className="mt-5 flex gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
              🧪
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
              🏠
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
              📄
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-400">

            <li>
              <Link
              to="/"
                className="transition hover:text-red-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/#tests"
                className="transition hover:text-red-400"
              >
                Tests & Prices
              </Link>
            </li>

            <li>
              <Link
                to="/#about"
                className="transition hover:text-red-400"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/#contact"
                className="transition hover:text-red-400"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/#contact"
                className="transition hover:text-red-400"
              >
                Contact Us
              </Link >
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold">
            Our Services
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-gray-400">

            <li>
              <Link
                to="/#tests"
                className="transition hover:text-red-400"
              >
                Blood Tests
              </Link>
            </li>

            <li>
              <Link
                to="/#home-collection"
                className="transition hover:text-red-400"
              >
                Home Sample Collection
              </Link>
            </li>

            <li>
              <Link
                to="/#online-report"
                className="transition hover:text-red-400"
              >
                Online Report
              </Link>
            </li>

            <li>
              <Link
                to="/#online-test-booking"
                className="transition hover:text-red-400"
              >
                Online Test Booking
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4 text-sm text-gray-400">

            <p className="flex gap-3">
              <span>📍</span>
              <span>
                OM ENCLAVE MAIN MARKET FARIDABAD, HARYANA - 121013.
              </span>
            </p>

            <a
              href="tel:7982625884"
              className="flex gap-3 transition hover:text-red-400"
            >
              <span>📞</span>
              <span>7982625884</span>
            </a>

            <a
              href="tel:9871836218"
              className="flex gap-3 transition hover:text-red-400"
            >
              <span>📞</span>
              <span>9871836218</span>
            </a>

            <p className="flex gap-3">
              <span>🕐</span>
              <span>8:00 AM – 8:00 PM</span>
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Laxmi Pathology Lab.
            All rights reserved.
          </p>

          <p>
            Computerised Pathology Lab
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;