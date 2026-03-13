import React from "react";
// import registerImage from "../assets/register.png"; // អាចប្រើរូបដដែល

export default function LoginComponent() {
  return (
    <div className="min-h-screen flex">

      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-[#1f3b63] items-center justify-center relative">
        <div className="text-center text-white">
          <img
            src=""
            alt="Welcome"
            className="w-72 mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-sm text-gray-200">
            Login to continue your learning journey
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#1f3b63] mb-8 text-center">
            Login Account
          </h1>

          <form className="space-y-5">

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Remember & Forgot */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-orange-500 cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border py-2 rounded-lg bg-white hover:bg-gray-50 transition"
            >
              Sign in with Google
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <a href="/register" className="text-orange-500 cursor-pointer">
                Sign Up
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}