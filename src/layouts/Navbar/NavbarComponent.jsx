import { useState } from "react";

export default function NavbarComponent() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="bg-white dark:bg-gray-950 shadow-md px-6 py-3 flex items-center justify-between w-full transition-colors duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-[#1e2a6e] flex items-center justify-center">
            <span className="text-[#f0c040] font-bold text-xl font-serif">K</span>
          </div>
          <span className="text-[#1e2a6e] dark:text-[#f0c040] font-bold text-lg tracking-tight">
            KhDemy
          </span>
          {/* <img src="/src/assets/images/khdemyLogo.png" className="h-24 w-12" alt="khdemy-logo" /> */}
        </div>
        {/* Nav Links */}
        <ul className="flex items-center gap-10 list-none m-0 p-0">
          {["Courses", "Library", "Blog", "About Us"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-200 font-medium text-[15px] hover:text-[#1e2a6e] dark:hover:text-[#f0c040] transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#f0c040] rounded group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-lg"
            title="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Login button */}
          <a href="/login" className="bg-[#1e2a6e] hover:bg-[#2d3fa0] text-white font-semibold text-sm px-6 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}