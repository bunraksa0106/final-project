
import './App.css'
import { Star, BookOpen, Palette, Briefcase, Megaphone } from "lucide-react";
import { Navbar } from "flowbite-react";
import { Footer } from 'flowbite-react';
export default function App() {
  const courses = [
    {
      title: "React for Beginners",
      instructor: "John Doe",
      rating: 4.8,
      price: "$49",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "UI/UX Design Mastery",
      instructor: "Jane Smith",
      rating: 4.6,
      price: "$59",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Business Strategy",
      instructor: "Michael Lee",
      rating: 4.7,
      price: "$39",
      image: "https://via.placeholder.com/400x250",
    },
    {
      title: "Digital Marketing",
      instructor: "Sara Kim",
      rating: 4.5,
      price: "$29",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  const categories = [
    { name: "Programming", icon: <BookOpen /> },
    { name: "Design", icon: <Palette /> },
    { name: "Business", icon: <Briefcase /> },
    { name: "Marketing", icon: <Megaphone /> },
  ];

  const testimonials = [
    { name: "Raksa", text: "EduStream helped me learn fast!" },
    { name: "Sophia", text: "Very clear instructors and good UI." },
    { name: "David", text: "Perfect for learning at your own pace." },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-indigo-50">
        <h2 className="text-4xl font-bold mb-4">
          Learn Anything, Anytime
        </h2>
        <p className="text-lg mb-6">
          Master new skills at your own pace.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 text-center py-10">
        <div>
          <h3 className="text-2xl font-bold text-indigo-700">10k+</h3>
          <p>Courses</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-700">500+</h3>
          <p>Instructors</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-700">1M+</h3>
          <p>Students</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="px-6 py-16 bg-gray-50">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Featured Courses
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="bg-white rounded-lg shadow">
              <img src={course.image} alt="" className="rounded-t-lg"/>
              <div className="p-4">
                <h4 className="font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-500">
                  {course.instructor}
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16}/> {course.rating}
                </div>
                <p className="font-bold mt-2">{course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-8">Categories</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg flex flex-col items-center gap-3 hover:bg-indigo-50"
            >
              {cat.icon}
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-16 bg-indigo-50">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Testimonials
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p>"{t.text}"</p>
              <h4 className="mt-4 font-semibold">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

