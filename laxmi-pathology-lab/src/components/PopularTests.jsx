import { useState } from "react";

const tests = [
  {
    name: "CBC",
    description: "Complete Blood Count",
    price: 200,
  },
  {
    name: "LFT",
    description: "Liver Function Test",
    price: 300,
  },
  {
    name: "KFT",
    description: "Kidney Function Test",
    price: 300,
  },
  {
    name: "Lipid Profile",
    description: "Cholesterol & Lipid Test",
    price: 350,
  },
  {
    name: "Blood Sugar",
    description: "Blood Glucose Test",
    price: 40,
  },
  {
    name: "Blood Group",
    description: "Blood Group Test",
    price: 40,
  },
  {
    name: "TSH",
    description: "Thyroid Stimulating Hormone",
    price: 200,
  },
  {
    name: "Typhidot",
    description: "Typhoid Test",
    price: 300,
  },
  {
    name: "Widal",
    description: "Typhoid Antibody Test",
    price: 100,
  },
  {
    name: "Urine R/M",
    description: "Urine Routine & Microscopy",
    price: 100,
  },
  {
    name: "Urine R/S",
    description: "Urine Routine Examination",
    price: 200,
  },
  {
    name: "Dengue NS1",
    description: "Dengue Antigen Test",
    price: 500,
  },
  {
    name: "Vitamin B12",
    description: "Vitamin B12 Test",
    price: 900,
  },
  {
    name: "Vitamin D3",
    description: "Vitamin D3 Test",
    price: 900,
  },
  {
    name: "Blood Group",
    description: "ABO & Rh Blood Group",
    price: 70,
  },
  {
    name: "Hemoglobin",
    description: "Hemoglobin Test",
    price: 100,
  },
];

const PopularTests = () => {
  const [showAll, setShowAll] = useState(false);

  // Initially only 8 tests
  const visibleTests = showAll ? tests : tests.slice(0, 8);

  return (
    <section
      id="tests"
      className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-red-600">
            Our Tests
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Health Tests
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Choose from our laboratory tests with accurate and
            reliable results.
          </p>
        </div>

        {/* Test Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {visibleTests.map((test) => (
            <div
              key={test.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                🧪
              </div>

              {/* Test Name */}
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {test.name}
              </h3>

              {/* Description */}
              <p className="mt-2 min-h-10 text-sm text-gray-500">
                {test.description}
              </p>

              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

                <div>
                  <p className="text-xs text-gray-500">
                    Test Price
                  </p>

                  <p className="text-xl font-extrabold text-red-600">
                    ₹{test.price}
                  </p>
                </div>

                <button className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700 active:scale-95">
                  Book Test
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* View All / Show Less */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-lg border-2 border-red-600 px-7 py-3 font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            {showAll ? "Show Less" : "View All Tests"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularTests;