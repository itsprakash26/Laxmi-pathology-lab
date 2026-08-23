import { useState } from "react";

const DownloadReport = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();

    if (mobile.length === 10) {
      setOtpSent(true);
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    console.log("OTP:", otp);

    // Backend connect hone ke baad
    // actual verification yahan hogi.
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-blue-950 px-4 py-8 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wider">
          Online Reports
        </p>

        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Download Your Report
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-red-100 sm:text-base">
          Enter your registered mobile number to securely access
          your laboratory reports.
        </p>
      </div>

      <div className="flex min-h-[calc(100vh-220px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
            📄
          </div>

          <h2 className="mt-5 text-center text-2xl font-bold text-gray-900">
            Secure Report Access
          </h2>

          <p className="mt-2 text-center text-sm text-gray-500">
            {otpSent
              ? "Enter the OTP sent to your mobile number."
              : "Enter your registered mobile number."}
          </p>

          {!otpSent ? (
            <form onSubmit={sendOtp}>

              {/* Mobile */}
              <label
                htmlFor="mobile"
                className="mt-7 mb-2 block text-sm font-semibold text-gray-700"
              >
                Mobile Number
              </label>

              <div className="flex overflow-hidden rounded-lg border border-gray-300 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-100">

                <span className="flex items-center border-r border-gray-300 bg-gray-50 px-3 text-sm font-medium text-gray-600">
                  +91
                </span>

                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  maxLength={10}
                  placeholder="Enter 10 digit number"
                  className="w-full px-4 py-3 outline-none"
                  required
                />

              </div>

              <button
                type="submit"
                disabled={mobile.length !== 10}
                className="mt-5 w-full rounded-lg bg-red-600 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Send OTP
              </button>

            </form>
          ) : (
            <form onSubmit={verifyOtp}>

              {/* OTP */}
              <label
                htmlFor="otp"
                className="mt-7 mb-2 block text-sm font-semibold text-gray-700"
              >
                Enter OTP
              </label>

              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                maxLength={6}
                placeholder="Enter 6 digit OTP"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-lg tracking-[0.5em] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
                required
              />

              <button
                type="submit"
                disabled={otp.length !== 6}
                className="mt-5 w-full rounded-lg bg-red-600 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Verify OTP
              </button>

              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
                className="mt-4 w-full text-sm font-semibold text-red-600 hover:text-red-700"
              >
                Change Mobile Number
              </button>

            </form>
          )}

          {/* Security Note */}
          <div className="mt-6 rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">
              🔒 Your report is protected with secure OTP
              verification.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadReport;