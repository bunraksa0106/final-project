import React from 'react';

// Reusable Book Card Component
const BookCard = ({ image, title, category, description }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
    <img src={image} alt={title} className="w-24 h-32 object-cover rounded shadow" />
    <div className="flex-1">
      <span className="text-blue-600 text-xs font-semibold bg-blue-50 px-2 py-1 rounded">{category}</span>
      <h3 className="font-bold text-gray-800 mt-2">{title}</h3>
      <p className="text-gray-500 text-xs mt-1 line-clamp-3">{description}</p>
      <div className="mt-3 flex justify-end">
        <button className="text-gray-400 hover:text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </button>
      </div>
    </div>
  </div>
);

const LibraryPage = () => {
  const categories = ["All", "Programming", "Math For CS", "Web/UX UI"];
  
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header / Navbar */}
      {/* <nav className="flex justify-between items-center px-12 py-6">
        <div className="text-2xl font-bold flex items-center gap-2">
           <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white">KL</div>
        </div>
        <div className="flex gap-8 items-center text-gray-600 font-medium">
          <a href="#">Courses</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600">Library</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <button className="ml-4 p-2">🌙</button>
          <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg">Login</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative flex px-12 py-20 overflow-hidden">
        <div className="w-1/2 z-10">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Search & review <br /> your <span className="text-indigo-800 border-b-4 border-indigo-800">favorite book</span>
          </h1>
          <p className="mt-6 text-gray-600 max-w-md">
            Library application! Introducing a seamless experience that transcends traditional boundaries.
          </p>
        </div>
        {/* Abstract Background Shape */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-indigo-900 -skew-x-12 translate-x-20 rounded-bl-[100px]" />
      </section>

      {/* Trending Section */}
      <section className="px-12 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-pink-500">Top Trending Books</h2>
          <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg">See more</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <BookCard title="C/C++ Programming" category="Programming" description="Emelie Forsberg is a renown Sky runner..." image="https://via.placeholder.com/150" />
          <BookCard title="Data Analytics" category="Programming" description="Emelie Forsberg is a renown Sky runner..." image="https://via.placeholder.com/150" />
        </div>
      </section>

      {/* Main Explorer Section */}
      <section className="px-12 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">Explore All Books Here</h2>
        
        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button key={idx} className={`${idx === 0 ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-gray-700'} px-6 py-2 rounded-md font-medium`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-2 gap-8">
           {/* Map your book data here */}
           <BookCard title="Database System" category="Programming" description="..." image="https://via.placeholder.com/150" />
           <BookCard title="C# Programming" category="Programming" description="..." image="https://via.placeholder.com/150" />
           <BookCard title="Data Science" category="Programming" description="..." image="https://via.placeholder.com/150" />
           <BookCard title="Software Engineering" category="Programming" description="..." image="https://via.placeholder.com/150" />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2">
           <button className="px-3 py-1 border rounded">Back</button>
           <button className="px-3 py-1 bg-indigo-900 text-white rounded">2</button>
           <button className="px-3 py-1 border rounded">3</button>
           <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="px-12 py-16 border-t mt-10 grid grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">Organized by</h4>
          <img src="https://via.placeholder.com/60" alt="ISTAD" />
        </div>
        <div>
          <h4 className="font-bold mb-4">KHdemy</h4>
          <p className="text-sm text-gray-500">Where Industry Experts Build Tomorrow's Innovators.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Course</li><li>Library</li><li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact us</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Facebook</li><li>Telegram</li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};

export default LibraryPage;