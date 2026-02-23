import React from "react";

export default function AboutComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">
            About EduStream
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            EduStream is a modern E-Learning platform designed to help students
            gain real-world skills through high-quality online courses.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, affordable, and practical online education
              for everyone. We focus on hands-on learning and real-world
              projects to prepare students for successful careers.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              🚀 Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become a global learning community where students and
              instructors collaborate, grow, and innovate together.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Learn from experienced professionals and industry experts.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Flexible Learning
            </h3>
            <p className="text-gray-600">
              Study anytime, anywhere, and at your own pace.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Certification
            </h3>
            <p className="text-gray-600">
              Receive certificates after successfully completing courses.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}