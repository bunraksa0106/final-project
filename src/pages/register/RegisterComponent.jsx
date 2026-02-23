import React from "react";
 // ដាក់រូបនៅទីនេះ

export default function RegisterComponent() {
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
          <h2 className="text-2xl font-semibold mb-2">Welcome Aboard</h2>
          <p className="text-sm text-gray-200">
            Just a couple of clicks and we start
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#1f3b63] mb-8 text-center">
            Create Account
          </h1>

          <form className="space-y-4">
            
            {/* First & Last Name */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Password */}
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full border py-2 rounded-lg bg-white hover:bg-gray-50 transition"
            >
              Sign up with Google
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-center mt-4">
              Already a member?{" "}
              <a href="/login" className="text-orange-500 cursor-pointer">
                Sign In
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}