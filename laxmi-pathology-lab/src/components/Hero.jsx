import { Link } from "react-router-dom";
import banner from "../assets/banner1.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* {remove} */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-white-50 py-2">
        <div className="inline-block animate-marquee text-xl font-bold">
          <span className="text-red-500">H</span>
          <span className="text-orange-500">A</span>
          <span className="text-yellow-400">P</span>
          <span className="text-green-500">P</span>
          <span className="text-cyan-400">Y</span>

          <span className="mx-2 text-white"> </span>

          <span className="text-blue-500">B</span>
          <span className="text-purple-500">I</span>
          <span className="text-pink-500">R</span>
          <span className="text-red-400">T</span>
          <span className="text-orange-400">H</span>
          <span className="text-yellow-400">D</span>
          <span className="text-green-400">A</span>
          <span className="text-cyan-400">Y</span>

          <span className="mx-2 text-white"> </span>

          <span className="text-purple-400">B</span>
          <span className="text-pink-400">H</span>
          <span className="text-red-500">A</span>
          <span className="text-orange-500">I</span>
          <span>❤️</span>
        </div>
      </div>
      {/* {remove} */}
      {/*i remove this and also update py-2 to py-12*/}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-2 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-15">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            Trusted Computerised Pathology Lab
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-devanagari  font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Accurate Testing.
            <span className="block text-red-600">Reliable Reports.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Get accurate and reliable laboratory tests with professional care.
            Book your test online and receive your reports conveniently.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              className="rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg active:scale-95"
              to="/book-test"
            >
              Book a Test Now
            </Link>

            <Link
              className="rounded-lg border-2 border-red-600 bg-white px-7 py-3.5 font-bold text-red-600 transition hover:bg-red-50 active:scale-95"
              to="/download-report"
            >
              Download Report
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="text-2xl flex flex-col items-center ">
                🧪
                <p className="mt-2 text-sm font-bold text-gray-900">
                  500+ Tests
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="text-2xl flex flex-col items-center">
                🏠
                <p className="mt-2 text-sm lg:ml-6 font-bold text-gray-900">
                  Home Collection
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="text-2xl flex flex-col items-center">
                ⏰
                <p className="mt-2 text-sm font-bold text-gray-900">
                  8 AM – 8 PM
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="text-2xl flex flex-col items-center">
                📄
                <p className="mt-2 text-sm font-bold text-gray-900">
                  Online Reports
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-red-200 opacity-60 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">
            <img
              src={banner}
              alt="Laxmi Pathology Lab"
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px] lg:h-[480px]"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 left-4 rounded-xl bg-white px-5 py-4 shadow-xl sm:left-8">
            <p className="text-sm font-medium text-gray-500">Lab Timing</p>
            <p className="font-bold text-red-600">8:00 AM – 8:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
