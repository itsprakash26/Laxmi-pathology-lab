const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-red-600">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Have a question or need help with your test booking? Contact Laxmi
            Pathology Lab.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Address */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl">
                📍
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Visit Our Lab</h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  OM ENCLAVE MAIN MARKET FARIDABAD, HARYANA - 121013
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl">
                📞
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Call Us</h3>

                <a
                  href="tel:7982625884"
                  className="mt-2 block text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  7982625884
                </a>

                <a
                  href="tel:9871836218"
                  className="mt-1 block text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  9871836218
                </a>
              </div>
            </div>

            {/* Timing */}
            <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl">
                🕐
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Lab Timing</h3>

                <p className="mt-2 text-sm text-gray-500">Monday – Sunday</p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  8:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="h-[350px] w-full">
              <iframe
                src="https://www.google.com/maps?q=28.4921667,77.3293889&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                
                loading="lazy"
                
                title="Laxmi Pathology Lab Location"
                className="w-full"
              ></iframe>
            </div>

            {/* Get Directions */}
            <div className="flex  justify-center bg-white p-5">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=28.4921667,77.3293889"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg w-full items-center flex justify-center bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
