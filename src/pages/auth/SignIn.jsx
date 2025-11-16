import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("UI-Only Login:", { email, password });
  };

  const handleCheckboxChange = (event) => setIsChecked(event.target.checked);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl px-5 py-10 md:px-10 md:py-20 bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="flex flex-col items-center justify-center w-full">
              <img src="/logo.svg" alt="" className="w-40 h-40" />
              <h1 className="text-2xl font-semibold">User Sign In</h1>
              <p className="text-lg text-gray-800">
                Enter your email and password to log in
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div className="w-full">
                <label className="text-xl font-bold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-[#6A6D76] rounded-md outline-none mt-5 placeholder:text-xl"
                  required
                />
              </div>

              {/* Password */}
              <div className="w-full">
                <label className="text-xl font-bold">Password</label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-[#6A6D76] rounded-md outline-none px-5 py-3 mt-5 placeholder:text-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-4 flex items-center text-[#6A6D76]"
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between my-5 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-xl">
                    {isChecked ? "✔" : ""} Remember Password
                  </span>
                </label>

                <Link to="/forgot-pass" className="text-[#00B047] text-xl">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-1/3 bg-[#85e211] text-white font-bold py-3 rounded-lg shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-10">
              <Link to="/courier-signIn">
                Courier Account?{" "}
                <span className="text-[#00B047] font-semibold">Login Here</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
