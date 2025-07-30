import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full border-t border-gray-800 pt-10 pb-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              src="https://crazyorbit-dev.netlify.app/img/main-logo.png"
              alt="CrazyOrbit Logo"
              className="h-12"
            />
            <hr className="border-gray-700 mb-6" />
            <div className="flex justify-between gap-6 mb-8">
              <nav className="flex flex-col gap-6 text-lg mb-8">
                <a href="#" className=" transition">
                  Home
                </a>
                <a href="#" className=" transition">
                  About Us
                </a>
                <a href="#" className=" transition">
                  Careers
                </a>
              </nav>

              {/* Social icons placeholder */}
              <div className="flex gap-4 text-cyan-300 text-2xl">
                <img
                  src="images/social-media-1.svg"
                  alt="CrazyOrbit Logo"
                  className=""
                />
              </div>
            </div>
            <hr className="border-gray-700 mb-6" />
            <div className="flex flex-cols justify-between gap-4 text-base">
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  <i className="fas fa-phone"></i>
                </span>
                <span>916446947473</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>info@crazyorbit.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Inquire Form */}
        <div className="border border-gray-400 rounded-md p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-light mb-8">Inquire</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-1/2 bg-black border border-gray-400 rounded px-4 py-2 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-1/2 bg-black border border-gray-400 rounded px-4 py-2 text-white focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full bg-black border border-gray-400 rounded px-4 py-2 text-white focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full bg-black border border-gray-400 rounded px-4 py-2 text-white focus:outline-none"
            />
            <textarea
              placeholder="Message Us*"
              className="w-full bg-black border border-gray-400 rounded px-4 py-2 text-white focus:outline-none min-h-[80px]"
            />
            <button
              type="submit"
              className="w-40 border border-gray-400 rounded px-4 py-2 text-white flex items-center justify-between hover:bg-pink-600 transition group"
            >
              Submit
              <span className="ml-2 text-pink-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10">
        Copyright © 2025. CrazyOrbit. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
