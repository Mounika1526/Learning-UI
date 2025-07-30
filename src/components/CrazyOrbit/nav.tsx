const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a1a2f] backdrop-blur bg-opacity-80">
        <img
          src="https://crazyorbit-dev.netlify.app/img/main-logo.png"
          alt="CrazyOrbit Logo"
          className="h-12"
        />
        <div className="flex space-x-5 items-center text-lg">
          <a href="/" className="text-white hover:text-pink-400">
            Home
          </a>
          <a href="/crazyorbit" className="text-pink-400 border-b-2 border-pink-400">
            About Us
          </a>
          <a href="/services" className="text-white hover:text-pink-400">
            Services
          </a>
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
}
export default Navbar;