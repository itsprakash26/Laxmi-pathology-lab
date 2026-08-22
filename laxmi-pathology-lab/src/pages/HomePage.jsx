import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              L
            </div>

            <div>
              <h1 className="text-lg font-bold text-blue-700">
                Laxmi Pathology Lab
              </h1>

              <p className="text-xs text-slate-500">
                Accurate • Reliable • Trusted
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="font-medium text-blue-600">
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              About Us
            </a>

            <a
              href="#tests"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Tests
            </a>

            <a
              href="#services"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-600 hover:text-blue-600"
            >
              Contact
            </a>
          </div>

          {/* Button */}
          <button className="hidden rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 md:block">
            Book a Test
          </button>

          {/* Mobile Menu */}
          <button className="rounded-lg border border-slate-300 p-2 md:hidden">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Trusted Diagnostic Laboratory
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Accurate Diagnostics.
              <span className="block text-blue-600">
                Trusted Care.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Get reliable laboratory testing with accurate results,
              modern diagnostic technology, and trusted healthcare
              professionals at Laxmi Pathology Lab.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-700">
                Book a Test
              </button>

              <button className="rounded-lg border border-blue-600 px-7 py-3.5 font-semibold text-blue-600 hover:bg-blue-50">
                View Tests
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-5">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  10K+
                </h3>
                <p className="text-sm text-slate-500">
                  Tests Done
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  99%
                </h3>
                <p className="text-sm text-slate-500">
                  Accuracy
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">
                  24/7
                </h3>
                <p className="text-sm text-slate-500">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-3 shadow-2xl">

              <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100">

                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-lg">
                    🧪
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-800">
                    Modern Diagnostic Lab
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Advanced testing with trusted results
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
                  ✓
                </div>

                <div>
                  <p className="font-bold text-slate-800">
                    Reliable Results
                  </p>

                  <p className="text-sm text-slate-500">
                    Quality assured testing
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">

          <div className="text-center">
            <p className="font-semibold text-blue-600">
              OUR SERVICES
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Complete Diagnostic Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Reliable diagnostic services designed for your healthcare needs.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🩸
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Blood Tests
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Accurate blood testing for routine and diagnostic needs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🏠
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Home Collection
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Convenient sample collection from your home.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                📋
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Health Packages
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Comprehensive health checkup packages.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Digital Reports
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Get your reports quickly in digital format.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;