const HomeCollection = () => {
  return (
    <section
      id="home-collection"
      className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-red-600">

          {/* Decorative Circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-16">

            {/* Left Content */}
            <div className="text-center lg:text-left">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                🏠 Free Home Service
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Get Your Sample
                <span className="block text-red-100">
                  Collected at Home
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-red-50 sm:text-base lg:text-lg">
                Can't visit the lab? No problem. Book our free home
                sample collection service and our trained staff will
                collect your sample at your convenient time.
              </p>

              {/* Features */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">
                    Free Collection
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">
                    Trained Staff
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">
                    Convenient Timing
                  </span>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">
                    Safe Sample Handling
                  </span>
                </div>

              </div>

              {/* Button */}
              <button className="mt-8 rounded-lg bg-white px-7 py-3.5 font-bold text-red-600 shadow-md transition hover:bg-red-50 active:scale-95">
                Book Home Collection
              </button>

            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">

              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10 sm:h-80 sm:w-80">

                <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white shadow-2xl sm:h-64 sm:w-64">
                  <div className="text-center">

                    <div className="text-6xl sm:text-7xl">
                      🏠
                    </div>

                    <p className="mt-3 text-lg font-extrabold text-gray-900">
                      FREE
                    </p>

                    <p className="text-sm font-semibold text-gray-500">
                      HOME SAMPLE
                    </p>

                    <p className="text-sm font-semibold text-gray-500">
                      COLLECTION
                    </p>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCollection;