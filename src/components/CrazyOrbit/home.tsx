import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-32 pb-20 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-full">
        {/* Left: Text Content */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Empowering <span className="text-pink-500">Innovation</span> for a
            Digital Tomorrow
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            We build scalable, robust, and user-centric digital solutions for
            startups and enterprises. Let’s create something amazing together.
          </p>
          <a
            href="#"
            className="inline-block bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-md text-white text-lg font-semibold shadow-lg transition"
          >
            Get Started
          </a>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/main-logo.webp"
            alt="CrazyOrbit Hero"
            className="w-72 md:w-96 drop-shadow-2xl animate-float"
            style={{ filter: "drop-shadow(0 10px 40px #ec4899aa)" }}
          />
        </div>
      </div>
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 opacity-20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Home;
