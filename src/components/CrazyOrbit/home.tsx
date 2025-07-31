import Navbar from "./nav";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

const InfiniteScrollText = () => (
  <div className="relative w-full overflow-x-hidden py-8 select-none">
    <div
      className="whitespace-nowrap animate-marquee text-[5vw] md:text-[6vw] font-extrabold tracking-tight"
      style={{
        color: "transparent",
        WebkitTextFillColor: "transparent",
        WebkitTextStroke: "2px #7c3aed",
        background: "none",
        WebkitBackgroundClip: "border-box",
        backgroundClip: "border-box",
      }}
    >
      Digital Creative Agency &nbsp; Digital Creative Agency &nbsp; Digital
      Creative Agency &nbsp; Digital Creative Agency &nbsp;
    </div>
  </div>
);

const processImages = [1, 2, 3, 5, 7, 8].map((n) => `/images/image-${n}.webp`);

function SlideshowImages() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % processImages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex-1 flex items-center justify-center md:w-auto w-1/4">
      <div className="relative w-90 h-100">
        {processImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Process ${i + 1}`}
            className={`absolute top-0 left-0 w-100 h-100 object-cover rounded-3xl transition-opacity duration-700 ${index === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ transitionProperty: "opacity" }}
          />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a2f] to-black text-white relative flex flex-col items-center pt-24">
      {/* Tagline */}
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-light mb-2">
            “Your Imagination, Our Creation”
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-white inline-block" />
            <span className="text-sm text-[#b5e3e3]">
              the destination to your imagination
            </span>
          </div>
        </div>
        {/* Logo and Brand */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"> */}
        <img
          src="images/main-logo.png"
          alt="CrazyOrbit Logo"
          className="w-150 "
        />
      </div>
      {/* Infinite Scrolling Text */}
      <InfiniteScrollText />
      {/* Subheading */}
      <div className="text-center mt-12 space-y-4 font-light">
        <h3 className="text-3xl md:text-3xl   ">
          You Bring The Vision We Bring The Interface
        </h3>
        <p className="text-3xl">
          <span className="text-pink-500 font-semibold">CrazyOrbit</span> is an
          innovative
          <span className="inline-block align-middle">
            <img
              src="/images/abstract2.svg"
              alt="Abstract2"
              className="inline w-8 h-8"
            />
          </span>{" "}
          design agency
        </p>
        <p className="text-3xl">
          that crafts captivating
          <span className="inline-block align-middle">
            <img
              src="/images/Abstract1.svg"
              alt="Abstract2"
              className="inline w-8 h-8"
            />
          </span>{" "}
          digital
          <span className="inline-block align-middle">
            <img
              src="/images/abstract3.svg"
              alt="Abstract2"
              className="inline w-8 h-8"
            />
          </span>{" "}
        </p>
        <p className="text-3xl">platforms,unforgettable brand experiences,</p>
        <p className="text-3xl">and insightful consulting.</p>
      </div>
      {/* Add more sections as needed */}

      {/* Our Process Section with scrolling images */}
      <section className="w-full bg-black py-20 flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-20">
        {/* Image carousel (horizontal scroll) */}
        <SlideshowImages />
        {/* Fixed text content */}
        <div className="flex-1 max-w-2xl text-left w-3/4">
          <h2 className="text-lg text-gray-300 mb-2">OUR PROCESS</h2>
          <h3 className="text-4xl  font-light mb-6">
            You provide the inspiration,
            <br />
            We create the plan
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            We specialise in helping businesses reach their goals through
            creative and effective strategies. Our process is designed to help
            businesses identify their goals and develop a comprehensive plan to
            achieve them. We start by understanding your business, its goals,
            and the challenges you face. We then create a tailored strategy to
            help you reach those goals. We use a combination of digital
            marketing tactics, such as SEO, content marketing, and social media,
            to help you reach your target audience. Our team of experienced
            professionals will work with you every step of the way to ensure
            that your strategy is successful. We are committed to helping you
            succeed and will provide ongoing support and guidance throughout the
            process.
          </p>
          <button className="bg-violet-700 hover:bg-violet-800 text-white px-8 py-3 rounded-md font-semibold transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Experience/Content & Design Section */}
      <section className="w-full bg-black px-4 md:px-20 flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="flex-1 flex flex-col justify-center w-full relative">
          <div className="flex flex-col">
            <h2 className="text-4xl font-light leading-tight mb-4 max-w-2xl">
              With more than <span className="font-semibold">10+ years</span>
              <br />
              of industry experience, our team
              <br />
              has become a leader in
              <br />
              social media content and design.
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Growing brands through bold, scroll-stopping creative
            </p>
          </div>
          <a
            href="#"
            className="text-lg text-gray-200 hover:text-pink-400 flex items-center transition gap-2 absolute right-0 top-1/2 -translate-y-1/2"
            style={{ minWidth: "max-content" }}
          >
            Check Out Our Work <span className="">&rarr;</span>
          </a>
        </div>
      </section>
      <section className="w-full bg-black px-4 md:px-20 flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="flex items-end gap-8">
          <img
            src="/images/achivements-image-copy.webp"
            alt="Abstract1"
            className="w-150"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
          <div className="space-y-6 text-base text-gray-200">
            <p>
              Using year-over-year best in class approaches to social media and
              design along with the latest technologies/platforms.
            </p>
            <p>
              Our social media marketing team will ensure that your brand will
              be visible, and will resonate with your customers.
            </p>
            <p>
              Our philosophy is built on people who love their craft, learning
              and growing together.
            </p>
            <p>
              These are the fundamentals that allow our team to grow together
              allowing us to pick on trends where others miss.
            </p>
          </div>
          <div className="space-y-6 text-base text-gray-200">
            <p>
              Modern and cutting-edge strategies for creating digitally
              connected brands, services, and products driving engaging
              experiences through social media and design.
            </p>
            <p>Better than your old social media marketing agency</p>
            <div className="mt-8">
              <div className="h-1 w-full bg-gray-700 rounded-full relative">
                <div
                  className="h-1 bg-yellow-400 rounded-full absolute left-0 top-0"
                  style={{ width: "90%" }}
                ></div>
                <span className="absolute right-0 -top-7 text-xs bg-gray-900 px-2 py-1 rounded shadow">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Tailwind animation for marquee
// Add this to your global CSS if not present:
// @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// .animate-marquee { animation: marquee 8s linear infinite; }

// For auto-scrolling images:
// @keyframes marquee-imgs { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// .animate-marquee-imgs { animation: marquee-imgs 18s linear infinite; }

export default Home;
