import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourierSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl px-5 py-10 md:px-10 md:py-20 bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex items-center justify-center mb-5">
              <div className="flex flex-col items-center justify-center w-full">
              <img src="/logo.svg" alt="" className="w-40 h-40" />
              <h1 className="text-2xl font-semibold">Courier Sign In</h1>
              <p className="text-lg text-gray-800">
                Enter your email and password to log in
              </p>
            </div>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div className="w-full">
                <label className="text-xl text-[#0D0D0D] mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="enter your gmail"
                  className="w-full px-5 py-3 border-2 border-[#6A6D76] rounded-md outline-none mt-5 placeholder:text-xl"
                  required
                />
              </div>

              {/* Password */}
              <div className="w-full">
                <label className="text-xl text-[#0D0D0D] mb-2 font-bold">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    className="w-full border-2 border-[#6A6D76] rounded-md outline-none px-5 py-3 mt-5 placeholder:text-xl"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-4 text-[#6A6D76]"
                  >
                    {showPassword ? (
                      <IoEyeOffOutline className="w-5 h-5" />
                    ) : (
                      <IoEyeOutline className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between my-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />

                  {isChecked ? (
                    <svg width="21" height="21" viewBox="0 0 21 21">
                      <rect
                        width="21"
                        height="21"
                        rx="4"
                        className="fill-[#00B047]"
                        stroke="#00B047"
                      />
                      <path
                        d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg width="21" height="21" viewBox="0 0 21 21">
                      <rect
                        width="21"
                        height="21"
                        rx="4"
                        className="fill-transparent"
                        stroke="#00B047"
                      />
                    </svg>
                  )}

                  <span className="text-xl text-[#424242]">
                    Remember Password
                  </span>
                </label>

                <Link to="/forgot-pass" className="text-[#00B047] text-xl">
                  Forgot Password?
                </Link>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="w-1/3 py-3 mt-5 font-bold text-white rounded-lg shadow-lg cursor-pointer bg-primary"
                >
                  Log In
                </button>
              </div>
            </form>

            {/* Switch Account */}
            <div className="flex items-center justify-center mt-10">
              <Link to="/sign-in">
                User Account?{" "}
                <span className="text-[#00B047] font-semibold">
                  Login Here
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourierSignIn;
