import { useState } from "react";
import { Mail, Lock, Link } from "lucide-react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    console.log("Login Data:", formData);
    alert("Login Successful 🚀");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Login to EduStream
        </h2>

        {/* EMAIL */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18}/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4 relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 cursor-pointer">
            Sign Up
          </a>
          {/* <Link href="/register" className="text-indigo-600 cursor-pointer">
            Sign Up
          </Link> */}
        </p>
      </form>
    </div>
  );
}
