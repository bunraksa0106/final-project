import { useState } from "react";

function BookCard({ image, category, title, description }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex gap-4 bg-white rounded-2xl p-4 shadow-md w-[420px] border border-gray-100">
      {/* Book Cover — height 48 = 192px */}
      <div className="flex-shrink-0 w-[120px] h-48 rounded-xl overflow-hidden shadow-sm">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-2 relative">
        {/* Category Badge */}
        <span className="w-fit bg-purple-100 text-purple-500 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-gray-900 font-bold text-lg leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Bookmark Icon */}
        <button
          onClick={() => setBookmarked((b) => !b)}
          className="absolute bottom-0 right-0 p-1 transition-transform duration-150 hover:scale-110"
          title={bookmarked ? "Remove bookmark" : "Bookmark"}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              bookmarked ? "fill-[#1e2a6e] stroke-[#1e2a6e]" : "fill-none stroke-gray-400"
            }`}
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3h14a1 1 0 0 1 1 1v17l-8-4-8 4V4a1 1 0 0 1 1-1z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Demo usage ───────────────────────────────────────────────────
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
//       <BookCard
//         image="https://m.media-amazon.com/images/I/71kxa3yictL._AC_UF1000,1000_QL80_.jpg"
//         category="Programming"
//         title="C/C++ Programming"
//         description="Emelie Forsberg is a renown Sky runner recognised worldwide for her incredible strength, endurance and break neck speed..."
//       />
//     </div>
//   );
// }

export { BookCard };