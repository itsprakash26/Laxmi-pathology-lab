const steps = [
  {
    number: "01",
    icon: "🧪",
    title: "Select Your Test",
    description:
      "Choose one or more tests from our available laboratory tests.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Book Your Slot",
    description:
      "Select a convenient date and time slot for your sample collection.",
  },
  {
    number: "03",
    icon: "🩸",
    title: "Give Your Sample",
    description:
      "Visit our lab or choose our home sample collection service.",
  },
  {
    number: "04",
    icon: "📄",
    title: "Get Your Report",
    description:
      "Once your test is complete, securely download your report online.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-red-600">
            Simple Process
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Book your laboratory test in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center"
            >

              {/* Connecting Line - Desktop */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[calc(50%+50px)] top-12 hidden h-[2px] w-[calc(100%-100px)] bg-red-200 lg:block"></div>
              )}

              {/* Number + Icon */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-100 bg-white text-4xl shadow-md">
                {step.icon}

                {/* Number */}
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
                {step.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="rounded-lg bg-red-600 px-7 py-3.5 font-bold text-white shadow-md transition hover:bg-red-700 active:scale-95">
            Book Your Test
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;