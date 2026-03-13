export default function FooterComponent() {
  const exploreLinks = ["Course", "Library", "Blog", "About us"];

  const socialLinks = [
    {
      name: "Facebook",
      bg: "bg-[#1877f2]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      bg: "bg-[#229ed9]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.75a2.25 2.25 0 0 0 .126 4.23l3.438 1.188 1.407 4.835a.75.75 0 0 0 1.277.29L12 18l3.857 2.89a2.25 2.25 0 0 0 3.485-1.47l2.25-15.75a2.25 2.25 0 0 0-2.394-2.237z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      bg: "bg-[#ff0000]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t-4 border-[#1e2a6e] pt-12 pb-6 font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 gap-8">

        {/* Organized By */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-[#1e2a6e] font-bold text-base mb-5 pb-2 border-b-2 border-[#f0c040]">
            Organized by
          </h4>
          {/* ISTAD Logo SVG */}
          <div className="w-24 h-24 mb-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="#c8102e" />
              <circle cx="50" cy="50" r="36" fill="white" />
              <circle cx="50" cy="50" r="24" fill="#c8102e" />
              <circle cx="50" cy="50" r="10" fill="white" />
              <text x="50" y="90" textAnchor="middle" fill="#1e2a6e" fontSize="8" fontWeight="bold" fontFamily="Arial">ISTAD</text>
              {/* decorative dots around */}
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
                <circle
                  key={i}
                  cx={50 + 42 * Math.cos((angle * Math.PI) / 180)}
                  cy={50 + 42 * Math.sin((angle * Math.PI) / 180)}
                  r="2"
                  fill="#f0c040"
                />
              ))}
            </svg>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Institute of Science and Techology<br />Advanced Development
          </p>
        </div>

        {/* KhDemy */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-[#1e2a6e] font-bold text-base mb-5 pb-2 border-b-2 border-[#f0c040]">
            KhDemy
          </h4>
          {/* KhDemy Logo SVG */}
          <div className="w-28 h-24 mb-4">
            <svg viewBox="0 0 110 95" className="w-full h-full">
              {/* Graduation cap */}
              <polygon points="55,5 100,28 55,28 10,28" fill="#1e2a6e" />
              <polygon points="55,5 100,28 55,51 10,28" fill="#2d3fa0" />
              {/* Tassel */}
              <line x1="100" y1="28" x2="100" y2="48" stroke="#f0c040" strokeWidth="2" />
              <circle cx="100" cy="50" r="4" fill="#f0c040" />
              {/* Book */}
              <rect x="22" y="50" width="66" height="38" rx="3" fill="#1e2a6e" />
              <rect x="24" y="52" width="30" height="34" rx="2" fill="#c8102e" />
              <rect x="56" y="52" width="30" height="34" rx="2" fill="#f0c040" />
              {/* K letter */}
              <text x="50%" y="76" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Georgia, serif">K</text>
              {/* Orange swoosh */}
              <ellipse cx="55" cy="90" rx="34" ry="5" fill="#f0a500" opacity="0.7" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed italic">
            Where Industry Experts Build<br />Tomorrow's Innovators.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-[#1e2a6e] font-bold text-base mb-5 pb-2 border-b-2 border-[#f0c040]">
            Explore
          </h4>
          <ul className="space-y-4 mt-2">
            {exploreLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-[#1e2a6e] transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact us */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-[#1e2a6e] font-bold text-base mb-5 pb-2 border-b-2 border-[#f0c040]">
            Contact us
          </h4>
          <ul className="space-y-4 mt-2 w-full">
            {socialLinks.map(({ name, bg, icon }) => (
              <li key={name}>
                <a
                  href="#"
                  className="flex items-center gap-3 group justify-start pl-4"
                >
                  <span
                    className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}
                  >
                    {icon}
                  </span>
                  <span className="text-gray-600 text-sm font-medium group-hover:text-[#1e2a6e] transition-colors duration-200">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} KhDemy. All rights reserved.
      </div>
    </footer>
  );
}