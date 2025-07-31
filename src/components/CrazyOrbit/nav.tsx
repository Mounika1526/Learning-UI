import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a1a2f] backdrop-blur bg-opacity-80">
      <img
        src="https://crazyorbit-dev.netlify.app/img/main-logo.png"
        alt="CrazyOrbit Logo"
        className="h-12"
      />
      <div className="flex space-x-5 items-center text-lg">
        <a href="/home" className="text-white hover:text-pink-400">
          Home
        </a>
        <a
          href="/crazyorbit"
          className="text-pink-400 border-b-2 border-pink-400"
        >
          About Us
        </a>
        {/* Services Dropdown */}
        <div className="relative group" tabIndex={0}>
          <button
            className="flex items-center text-white hover:text-pink-400 focus:text-pink-400 transition outline-none"
            tabIndex={-1}
          >
            Services
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-72 bg-black rounded-lg shadow-lg z-50 hidden group-hover:block group-focus-within:block text-base font-extralight font-['Outfit']">
            <ul className="py-2">
              <li>
                <a
                  href="#"
                  className="block px-6 text-white hover:text-pink-600 transition font-extralight"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 text-white hover:text-pink-600 transition font-extralight"
                >
                  Graphic Designing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 text-white hover:text-pink-600 transition"
                >
                  Wordpress Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 text-white hover:text-pink-600 transition"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="block px-6 text-white hover:text-pink-600 transition">
                  Custom Ecommerce Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6  text-white hover:text-pink-600 transition"
                >
                  Mobile & Responsive App Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 text-white hover:text-pink-600 transition"
                >
                  Search Engine Optimization
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/careers" className="text-white hover:text-pink-400">
          Careers
        </a>
        <a href="/projects" className="text-white hover:text-pink-400">
          Our Projects
        </a>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
          Work with us
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
