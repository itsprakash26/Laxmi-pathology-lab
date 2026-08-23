import { useState } from "react";

const tests = [
  { id: 1, name: "FEVER PANEEL", description: "CBC, MP, WIDAL", price: 400 },
  { id: 2, name: "CBC", description: "Complete Blood Count", price: 200 },
  { id: 3, name: "LFT", description: "Liver Function Test", price: 300 },
  { id: 4, name: "KFT", description: "Kidney Function Test", price: 300 },
  {
    id: 5,
    name: "Lipid Profile",
    description: "Cholesterol & Lipid Test",
    price: 350,
  },
  { id: 6, name: "Blood Sugar", description: "Blood Glucose Test", price: 40 },
  { id: 7, name: "Blood Group", description: "Blood Group Test", price: 70 },
  {
    id: 8,
    name: "TSH",
    description: "Thyroid Stimulating Hormone",
    price: 200,
  },
  { id: 9, name: "Typhidot", description: "Typhoid Test", price: 300 },
  { id: 10, name: "Widal", description: "Typhoid Antibody Test", price: 100 },
  {
    id: 11,
    name: "Urine R/M",
    description: "Urine Routine & Microscopy",
    price: 100,
  },
  {
    id: 12,
    name: "Urine R/S",
    description: "Urine Routine Examination",
    price: 200,
  },
  {
    id: 13,
    name: "Dengue NS1",
    description: "Dengue Antigen Test",
    price: 500,
  },
  { id: 14, name: "Vitamin B12", description: "Vitamin B12 Test", price: 900 },
  { id: 15, name: "Vitamin D3", description: "Vitamin D3 Test", price: 900 },
  { id: 16, name: "Hemoglobin", description: "Hemoglobin Test", price: 100 },
];

const BookTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  const toggleTest = (test) => {
    setSelectedTests((prev) => {
      const alreadySelected = prev.some((item) => item.id === test.id);

      if (alreadySelected) {
        return prev.filter((item) => item.id !== test.id);
      }

      return [...prev, test];
    });
  };

  const totalAmount = selectedTests.reduce(
    (total, test) => total + test.price,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 px-4 py-8 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wider">
          Online Booking
        </p>

        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Book Your Test
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-red-100 sm:text-base">
          Select your required tests and continue with your appointment booking.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Tests */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Select Tests
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Select one or more tests.
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-600">
                  {selectedTests.length} Selected
                </span>
              </div>

              {/* Test List */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {tests.map((test) => {
                  const selected = selectedTests.some(
                    (item) => item.id === test.id,
                  );

                  return (
                    <button
                      key={test.id}
                      onClick={() => toggleTest(test)}
                      className={`flex items-center justify-between rounded-xl border-2 p-4 text-left transition ${
                        selected
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 bg-white hover:border-red-300"
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-gray-900">{test.name}</h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {test.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-red-600">₹{test.price}</p>

                        <span
                          className={`mt-1 inline-block text-xs font-semibold ${
                            selected ? "text-red-600" : "text-gray-400"
                          }`}
                        >
                          {selected ? "✓ Selected" : "Select"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="sticky top-5 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Booking Summary
              </h2>

              {selectedTests.length === 0 ? (
                <div className="py-10 text-center">
                  <div className="text-4xl">🧪</div>

                  <p className="mt-3 text-sm text-gray-500">
                    No tests selected yet.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  {selectedTests.map((test) => (
                    <div key={test.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{test.name}</span>

                      <span className="font-semibold text-gray-900">
                        ₹{test.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 border-t border-gray-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-600">Total</span>

                  <span className="text-2xl font-extrabold text-red-600">
                    ₹{totalAmount}
                  </span>
                </div>
              </div>

              <button
                disabled={selectedTests.length === 0}
                className="mt-6 w-full rounded-lg bg-red-600 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTest;
