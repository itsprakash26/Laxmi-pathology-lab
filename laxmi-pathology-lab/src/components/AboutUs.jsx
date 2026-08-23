const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-red-600">
              About Us
            </p>

            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Trusted Care,
              <span className="block text-red-600">
                Accurate Results
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Lakshmi Pathology Lab is a computerised pathology
              laboratory committed to providing accurate, reliable
              and timely diagnostic testing services.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We provide a wide range of laboratory tests with
              convenient booking options, professional sample
              collection and easy online report access.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Accurate Testing
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Reliable laboratory testing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Quick Reports
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Timely and convenient reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Home Collection
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Convenient sample collection at home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Easy Online Access
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Secure access to your reports.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="relative">

            <div className="rounded-3xl bg-red-50 p-6 sm:p-8">

              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">
                    🧬
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-gray-900">
                    Lakshmi Pathology Lab
                  </h3>

                  <p className="mt-2 text-sm font-medium text-red-600">
                    COMPUTERISED PATHOLOGY LAB
                  </p>

                </div>

                {/* Lab Information */}
                <div className="mt-8 space-y-4">

                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-sm text-gray-500">
                      Laboratory Tests
                    </span>
                    <span className="font-bold text-gray-900">
                      100+
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-sm text-gray-500">
                      Home Collection
                    </span>
                    <span className="font-bold text-red-600">
                      FREE
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-sm text-gray-500">
                      Lab Timing
                    </span>
                    <span className="font-bold text-gray-900">
                      8 AM – 8 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Online Reports
                    </span>
                    <span className="font-bold text-green-600">
                      Available
                    </span>
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

export default AboutUs;