import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./nav";
import { ChevronDown, Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const processImages = [1, 2, 3, 5, 7, 8].map((n) => `/images/image-${n}.webp`);
function SlideshowImages() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const images = [...processImages, processImages[0]]; // duplicate first image for seamless loop

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // When the last (duplicate) image is reached, reset to 0 instantly (no transition)
  useEffect(() => {
    if (index === images.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700); // match duration-700
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [index, images.length]);

  return (
    <div className="flex-1 flex items-center justify-center md:w-auto w-1/4">
      <div className="relative overflow-hidden w-90 h-100">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700" : ""}`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Process ${(i % processImages.length) + 1}`}
              className="w-90 h-100 object-cover rounded-3xl flex-shrink-0"
              style={{ minWidth: "100%", minHeight: "100%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export function CrazyOrbitIndex() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const images = [
    "images/image-1.webp",
    "images/image-2.webp",
    "images/image-3.webp",
    "images/image-5.webp",
    "images/image-7.webp",
    "images/image8.webp",
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Crazy Orbit with Tailwind CSS</title>
      <link rel="icon" type="image/x-icon" href="Images/main-logo.webp" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      body {\n        overflow-x: hidden;\n      }\n\n      #navbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n\n        text-align: center;\n\n        /*Define a height for NavBar*/\n        height: 80px;\n        transition: 0.5s;\n        /*and a transition time for a smooth appearence*/\n      }\n      .section_1_style {\n        background: linear-gradient(\n          180deg,\n          #2c79db66 0%,\n          rgba(255, 255, 255, 0) 30%\n        );\n      }\n\n      .background {\n        background: linear-gradient(\n          90.16deg,\n          #05f4f06b -0.32%,\n          #044eb080 26.61%,\n          #6802f780 52.28%,\n          #f5057580 80.48%\n        );\n        background-size: cover;\n      }\n      .head-scroll-scrolling {\n        background: -webkit-linear-gradient(\n          -86deg,\n          #0332ef 5%,\n          #f30387 53%,\n          #02807a 91%\n        );\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 2px transparent;\n        webkit-text-stroke-width: 2.4893640279769897;\n        color: #050505;\n        font-size: clamp(2.4rem, 6.61vw, 7.93rem) !important;\n\n        font-weight: 500;\n        letter-spacing: 3px;\n        border: #f0e6e6;\n      }\n\n      .mobile_gradient {\n        background: -webkit-linear-gradient(\n          -86deg,\n          #0332ef 5%,\n          #f30387 53%,\n          #02807a 91%\n        );\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 2px transparent;\n        color: #050505;\n        font-size: clamp(2.4rem, 6.61vw, 7.93rem) !important;\n        color: transparent;\n        font-weight: 500;\n        letter-spacing: 3px;\n\n        border: #f0e6e6;\n\n        background: url("/images/graphic.webp") center center;\n        background-size: cover;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 3px;\n        font-weight: 400;\n        letter-spacing: 2.716px;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        color: transparent;\n      }\n\n      .head-scroll {\n        background: #06d1ce;\n        -webkit-background-clip: text;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        font-family: Outfit;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 100%; /* 188.653px */\n        letter-spacing: -3.716px;\n        text-transform: uppercase;\n        -webkit-text-stroke: 3px transparent;\n        color: #050505;\n      }\n      .group:hover .head-scroll {\n        background: url("/images/graphic.webp") center center;\n        background-size: cover;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 3px;\n        font-weight: 400;\n        letter-spacing: -3.716px;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        color: transparent; /* Ensures the image is visible */\n      }\n      .head-scroll1 {\n        background: #2c79db;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 2px transparent;\n        color: #050505;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        font-family: Outfit;\n        font-size: 158.653px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 100%; /* 188.653px */\n        letter-spacing: -3.716px;\n        text-transform: uppercase;\n      }\n      .group:hover .head-scroll1 {\n        background: url("/images/wordpress.webp") center center;\n        background-size: cover;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 3px;\n        font-weight: 400;\n        letter-spacing: -3.716px;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        color: transparent; /* Ensures the image is visible */\n      }\n      .head-scroll2 {\n        background: #f30387;\n        -webkit-background-clip: text;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        font-family: Outfit;\n        font-size: 158.653px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 100%; /* 188.653px */\n        letter-spacing: -3.716px;\n        text-transform: uppercase;\n        -webkit-text-stroke: 2px transparent;\n        color: #050505;\n      }\n      .group:hover .head-scroll2 {\n        background: url("/images/ecommerce.webp") center center;\n        background-size: cover;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 3px;\n        font-weight: 400;\n        letter-spacing: -3.716px;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        color: transparent; /* Ensures the image is visible */\n      }\n      .head-scroll3 {\n        background: #6100eb;\n        -webkit-background-clip: text;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        font-family: Outfit;\n        font-size: 158.653px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 100%; /* 188.653px */\n        letter-spacing: -3.716px;\n        text-transform: uppercase;\n        -webkit-text-stroke: 2px transparent;\n        color: #050505;\n      }\n\n      .group:hover .head-scroll3 {\n        background: url("/images/development.webp") center center;\n        background-size: cover;\n        -webkit-background-clip: text;\n        -webkit-text-stroke: 3px;\n        font-weight: 400;\n        letter-spacing: -3.716px;\n        -webkit-text-stroke-width: 1.4893640279769897;\n        color: transparent;\n      }\n\n      @keyframes infiniteScroll {\n        from {\n          transform: translateX(0);\n        }\n        to {\n          transform: translateX(-100vw);\n        }\n      }\n\n      .container {\n        width: 100vw;\n        overflow: hidden;\n      }\n\n      .horizontal-scrolling-items {\n        display: flex;\n        font-size: 90px;\n\n        animation: infiniteScroll 10s linear infinite;\n      }\n\n      .horizontal-scrolling-items__item {\n        white-space: nowrap;\n        flex-shrink: 0;\n      }\n\n      .animate-left-to-right {\n        opacity: 0;\n        transform: translateX(-100%);\n        transition: all 0.9s ease-in-out;\n      }\n\n      .animate-left-to-right-show {\n        opacity: 1;\n        transform: translateX(0);\n      }\n\n      .head_style {\n        background: linear-gradient(\n          180deg,\n          #2c79db66 0%,\n          rgba(255, 255, 255, 0) 30%\n        );\n\n           }\n      .nav_color {\n        /* background: #132d50; */\n        background: #2c79db66;\n        opacity: 0;\n      }\n    ',
        }}
      />
      {/* <Navbar /> */}
      <header className="sticky top-0 z-10 bg-[#1a3352]">
        <nav className="flex flex-row items-center justify-between text-[19px] leading-7 pt-3 py-2 px-6">
          {/* Logo */}
          <div className="flex flex-row gap-6">
            <img
              src="https://crazyorbit-dev.netlify.app/img/main-logo.png"
              className="w-[109.08px] h-[48.5px]"
              alt="Logo"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen((prev) => !prev)}>
              {/* <Menu className="w-8 h-10 text-white" /> */}
              {mobileOpen ? (
                <X className="w-8 h-10 text-white" />
              ) : (
                <Menu className="w-8 h-10 text-white" />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-row space-x-9 text-gray-700 md:mr-6 mt-1">
            <ul className="flex flex-row space-x-8 text-gray-700">
              <li>
                <a
                  href="index.html"
                  className="text-[#FE0078] font-Outfit font-[300]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="AboutUs.html"
                  className="text-white font-Outfit hover:text-[#FE0078] font-[200]"
                >
                  About Us
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDesktopServicesOpen((prev) => !prev)}
                  className="text-white font-Outfit hover:text-[#FE0078] font-[200] flex items-center"
                >
                  Services
                  <ChevronDown className="ml-2 w-4 h-4" />
                </button>
                {desktopServicesOpen && (
                  <div className="absolute bg-[#1a3352] text-white mt-1 shadow-lg rounded-md w-[300px]">
                    {[
                      "Digital Marketing",
                      "Graphical Designing",
                      "Wordpress Development",
                      "Web Development",
                      "Custom Ecommerce Designs",
                      "Mobile and Responsive Design",
                      "Search Engine Optimization",
                    ].map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-2 hover:text-[#FE0078]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FE0078] font-[200] font-Outfit text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FE0078] font-[200] font-Outfit text-white"
                >
                  Our Projects
                </a>
              </li>
            </ul>
            <button className="w-[103px] h-[30px] font-Outfit text-xs text-white bg-[#FE0078]">
              Work With Us
            </button>
          </div>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="bg-[#1a3352] lg:hidden ">
            <ul className="flex flex-col space-y-4 text-gray-700 p-6 items-center">
              <li>
                <a
                  href="index.html"
                  className="text-[#FE0078] font-Outfit font-[200]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="AboutUs.html"
                  className="text-white hover:text-[#FE0078] font-Outfit font-[200]"
                >
                  About Us
                </a>
              </li>
              <li className="relative ">
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="text-white font-Outfit hover:text-[#FE0078] font-[200] flex items-center"
                >
                  Services
                  <ChevronDown className="ml-2 w-4 h-4" />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-black text-white mt-1 shadow-lg rounded-md w-[300px] ">
                    {[
                      "Digital Marketing",
                      "Graphical Designing",
                      "Wordpress Development",
                      "Web Development",
                      "Custom Ecommerce Designs",
                      "Mobile and Responsive Design",
                      "Search Engine Optimization",
                    ].map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-2 hover:text-[#FE0078]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-[#FE0078] font-Outfit font-[200]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-[#FE0078] font-Outfit font-[200]"
                >
                  Our Projects
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
      {/* <header className="sticky top-0 z-10 nav_color opacity-[100%] overflow-hidden"></header> */}
      <main className="bg-[#030303] font-Outfit">
        {/*Banner*/}
        <section className="overflow-hidden pt-[10px] 2xl:pt-[60px] section_1_style">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[426px] items-center mb-6">
            <div className="order-2 lg:order-1 flex flex-col p-4 lg:p-0">
              <div className="flex justify-center">
                <p className="text-[19px] md:text-[34px] 2xl:text-[50px] leading-10 font-Outfit font-[200] text-[#FFFFFF]">
                  “Your Imagination, Our Creation”
                  <br />
                </p>
              </div>
              <div className="flex flex-row justify-end items-center md:hidden">
                <div className="flex flex-row">
                  <hr className="border-1 w-[18px] mt-4 mr-1 border-dashed bg-white" />
                  <span className="text-[#ffffff] text-xs font-Outfit font-[200] pt-2">
                    The destination to your imagination
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2">
                  <div className="col-span-1" />
                  <div className="col-span-1">
                    <div className="flex flex-row">
                      <hr className="border-1 w-[29px] mx-1 mt-5 2xl:mt-6 border-dashed bg-white" />
                      <span className="text-[#ffffff] text-sm md:text-[17px] 2xl:leading-7 2xl:text-[20px] font-Outfit font-[200] pt-2">
                        The destination to your imagination
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="flex flex-row ml-[95px] sm:ml-[200px] md:ml-[360px] lg:ml-[330px] 2xl:ml-[625px] ">
        <hr class="border-1 w-[29px] mr-1 mt-5 border-dashed bg-white"/>
        <span class="text-[#ffffff] text-sm md:text-md 2xl:tex-[20px] font-Outfit font-[200] pt-2">The destination to your imagination </span>

     </div> */}
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="images/main-logo.png"
                className="pt-5 mt-9 lg:mt-4 md:pt-0 h-[200px] w-[344px] md:h-[300px] md:w-[554px] 2xl:h-[420px] 2xl:w-[780px]"
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" container font-[200] my-3 xl:my-5">
            <div className="horizontal-scrolling-items ">
              <div className="horizontal-scrolling-items__item head-scroll-scrolling text-[35px] md:text-[85px] xl:text-[95px]">
                Digital Creative Agency &nbsp;
              </div>
              <div className="horizontal-scrolling-items__item head-scroll-scrolling pt-1 text-[35px] md:text-[85px] xl:text-[95px] ">
                <img
                  src="images/Star-3.svg"
                  className="inline-block h-[30px] md:h-[90px]"
                />{" "}
                &nbsp; Digital Creative Agency &nbsp;
              </div>
              <div className="horizontal-scrolling-items__item head-scroll-scrolling  text-[35px] md:text-[85px] xl:text-[95px] ">
                <img
                  src="images/Star-3.svg"
                  className="inline-block h-[30px] md:h-[90px]"
                />{" "}
                &nbsp; Digital Creative Agency
              </div>
            </div>
          </div>
        </section>
        {/* Horizontal Scrolling  */}
        <section className="overflow-hidden">
          <div className="flex justify-center text-white mt-1 lg:mt-12">
            <div className="flex flex-col justify-center items-center text-center p-12 ">
              {/* <p class="text-white text-[18px]  md:text-[40px] font-[200px] text-center m-6"> */}
              <h4 className="text-[18px] md:text-2xl font-Outfit font-[200]  xl:text-3xl 2xl:text-5xl 2xl:mb-1">
                You Bring The Vision We Bring The Interface
              </h4>
              <h4 className="text-[18px]   font-Outfit font-[200]  flex md:text-2xl xl:text-3xl md:pt-2 2xl:text-5xl ">
                <span className="text-[#FE0078] pl-1 mr-2 ">CrazyOrbit </span>{" "}
                is an innovative{" "}
                <img
                  src="images/abstract2.svg"
                  className="h-auto w-5 md:w-8 2xl:w-[60px] mx-1 2xl:my-2"
                />
                <span className="hidden lg:block ml-2"> design agency. </span>
              </h4>
              <h4 className="flex flex-row text-[18px]  font-Outfit font-[200]  flex md:text-2xl xl:text-3xl 2xl:text-5xl ">
                <span className="lg:hidden md:block pr-1 underline">
                  {" "}
                  design agency.
                </span>
              </h4>
              <h5 className="text-[18px]  font-Outfit font-[200] flex leading-relaxed md:text-2xl xl:text-3xl 2xl:text-5xl">
                that crafts captivating
                <img
                  src="/images/Abstract1.svg"
                  className="h-auto w-5 md:w-8 mx-2  2xl:w-[60px]  "
                />
                digital
                <img
                  src="/images/abstract3.svg"
                  className="h-auto w-5 md:w-8 mx-2  2xl:w-[60px] "
                />
              </h5>
              <h5 className="text-[18px]  font-Outfit font-[200] flex leading-relaxed  md:text-2xl xl:text-3xl 2xl:text-5xl 2xl:mt-1 2xl:mb-2 ">
                platforms,unforgettable brand experiences,
              </h5>
              <span className="text-[18px]  font-Outfit font-[200] flex leading-relaxed md:mb-6 md:text-2xl xl:text-3xl 2xl:text-5xl">
                and insightful consulting.
              </span>
              {/* <div class="text-lg font-extralight flex flex-col">
          </div>  */}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[123px] h-[38px] text-md bg-[#06d1ce] md:hidden mb-9 md:mt-4">
              Work With Us
            </button>
          </div>
        </section>
        <section className="overflow-hidden  my-6">
          <div className=" md:ml-0 mt-9 ">
            <div className="flex justify-center">
              <h1 className="text-[#ffffff] font-[300] font-Outfit  mb-3 text-[30px] lg:text-[55.6px]">
                Our Services
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center  lg:block lg:mx-[70px] 2xl:mx-[90px]  ">
              <div className="relative mb-6 lg:mb-0 group ">
                <div className="relative group  lg:mb-0 lg:flex justify-center items-center w-fit group  ">
                  <h2 className="head-scroll text-[50px] font-Outfit hidden lg:block  md:text-[95px] xl:text-[120px] 2xl:text-[160px] group-hover:transition duration-300">
                    GRAPHIC
                  </h2>
                  <h2 className="mobile_gradient font-Outfit text-[50px] lg:hidden ">
                    GRAPHIC
                  </h2>
                  <div className="absolute flex flex-row">
                    <p className="hidden lg:block top-full left-0 font-[400] font-Outfit translate-x-[-100%] text-[10px] md:text-[20px] text-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Designing Your Vision to Reality.
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="hidden lg:block top-full left-0 translate-x-[-100%] mb-3 text-[10px] lg:text-[20px] text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 h-9 pl-6"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center text-center  transform transition-transform duration-500 hover:-translate-x-5">
                    <p className="text-[10px]  md:text-md text-[#FFFFFF] text-center font-[400] font-Outfit font-[300] font-Outfit lg:hidden">
                      Designing Your Vision to Reality.
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="lg:hidden h-4 md:h-8 pl-2"
                    />
                  </div>
                </div>
              </div>
              <div className="relative  mb-6 lg:mb-0 group">
                <div className="relative group md:mb-0 lg:flex justify-center items-center group ">
                  <h2 className="head-scroll1 text-[50px] font-Outfit md:text-[90px] hidden lg:block  xl:text-[120px] 2xl:text-[160px] group-hover:transition duration-300">
                    WORDPRESS
                  </h2>
                  <h2 className="mobile_gradient font-Outfit text-[50px] lg:hidden ">
                    WORDPRESS
                  </h2>
                  <div className="absolute flex flex-row">
                    <p className="hidden lg:block top-full left-0 font-[400] font-Outfit translate-x-[-100%] text-[10px] md:text-[20px] text-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      A reliable WordPress development service
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="hidden lg:block top-full font-[400] font-Outfit left-0 translate-x-[-100%] text-[10px] lg:text-[20px] text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 h-9 pl-6"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center transform transition-transform duration-500 hover:-translate-x-5">
                    <p className="text-[10px]  md:text-md text-[#FFFFFF] text-center font-[400] font-Outfit font-[300] font-Outfit lg:hidden">
                      A reliable WordPress development service
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="lg:hidden h-4 md:h-8 pl-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-6 lg:mb-0 relative group justify-end ">
                <div className="relative group md:mb-0 font-[300] lg:flex justify-center items-center group ">
                  <h2 className="head-scroll2 text-[50px] font-Outfit  md:text-[90px] hidden lg:block  xl:text-[120px] 2xl:text-[160px] group-hover:transition duration-300">
                    ECOMMERCE
                  </h2>
                  <h2 className="mobile_gradient font-Outfit text-[50px] lg:hidden ">
                    ECOMMERCE
                  </h2>
                  <div className="absolute flex flex-row justify-center">
                    <p className="hidden lg:block top-full font-[400] font-Outfit left-0 translate-x-[-100%] text-[10px] md:text-[20px] text-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Way to Success with Our Custom Ecommerce Design
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="hidden lg:block top-full left-0 translate-x-[-100%] text-[10px] lg:text-[20px] text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 h-9 pl-6"
                    />
                  </div>
                  <div className="flex flex-row items-center  justify-center transform transition-transform duration-500 hover:-translate-x-5">
                    <p className="text-[10px]  md:text-md text-[#FFFFFF] text-center font-[400] font-Outfit font-[300] font-Outfit lg:hidden">
                      Way to Success with Our Custom Ecommerce Design
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="lg:hidden h-4 md:h-8 pl-2"
                    />
                  </div>
                </div>
              </div>
              <div className="relative mb-6 lg:mb-0 group">
                <div className="relative group lg:flex justify-center font-Outfit font-[400] items-center group w-fit">
                  <h2 className="head-scroll3 text-[50px] md:text-[90px] hidden lg:block   xl:text-[120px] 2xl:text-[160px] group-hover:transition duration-300">
                    DEVELOPMENT
                  </h2>
                  <h2 className="mobile_gradient font-Outfit text-[50px] lg:hidden ">
                    DEVELOPMENT
                  </h2>
                  <div className="absolute flex flex-row">
                    <p className="hidden lg:block top-full font-[400] font-Outfit left-0 translate-x-[-100%] text-[10px] md:text-[20px] text-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      Your Ideas with Our Coding &amp; Web Development Magic.
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="hidden lg:block top-full left-0 translate-x-[-100%] text-[10px] lg:text-[20px] text-[#FFFFFF] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 h-9 pl-6"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center transform transition-transform duration-500 hover:-translate-x-5">
                    <p className="text-[10px]  md:text-md text-[#FFFFFF] text-center font-[400] font-Outfit font-[300] font-Outfit lg:hidden">
                      Your Ideas with Our Coding &amp; Web Development Magic.
                    </p>
                    <img
                      src="/images/arrow.svg"
                      className="lg:hidden h-4 md:h-8 pl-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="grid grid-cols-9 gap-9 2xl:gap-0 mt-9 m-6 lg:ml-[80px]">
              <div className="hidden lg:block col-span-3 2xl:col-span-3  flex justify-center items-center">
                <div className="w-80 h-[450px] md:h-[470px] md:w-[350px] 2xl:h-[580px] 2xl:w-[430px] border border-gray-300 rounded-3xl overflow-hidden">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop
                    className="w-full h-full"
                  >
                    <SwiperSlide>
                      <img
                        src="images/image-1.webp"
                        alt="Slide1"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="images/image-2.webp"
                        alt="Slide2"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="images/image-3.webp"
                        alt="Slide3"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="images/image-5.webp"
                        alt="Slide5"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="images/image-7.webp"
                        alt="Slide7"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="images/image-8.webp"
                        alt="Slide8"
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-span-9  lg:col-span-6 2xl:col-span-6 m-2 lg:m- mt-8 md:my-16  lg:my-16  lg:p-[0px]">
                <div className="col-span-9  my-4 lg:hidden flex justify-center items-center">
                  <div className="swiper-container w-80  h-[400px] md:h-[470px] md:w-[350px]  border-1 border-gray-300 rounded-3xl overflow-hidden">
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 1500, disableOnInteraction: false }}
                      loop
                      className="w-full h-full"
                    >
                      <SwiperSlide>
                        <img
                          src="images/image-1.webp"
                          alt="Slide1"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="images/image-2.webp"
                          alt="Slide2"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="images/image-3.webp"
                          alt="Slide3"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="images/image-5.webp"
                          alt="Slide5"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="images/image-7.webp"
                          alt="Slide7"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="images/image-8.webp"
                          alt="Slide8"
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <h2 className="text-white text-[14px] font-Outfit  md:text-[18px] 2xl:text-[24px] font-[300] ">
                  OUR PROCESS
                </h2>
                <h1 className="text-white text-[27px] font-Outfit  md:text-[33px] 2xl:text-[40px] font-[200]  ">
                  You provide the inspiration,
                  <span>
                    <br className="hidden lg:block leading-none" /> We create
                    the plan
                  </span>
                </h1>
                <p className="text-white text-[15px] lg:text-[16px] 2xl:text-[21px]  my-2 lg:my-0 font-Outfit font-[200]">
                  We specialise in helping businesses reach their goals through
                  creative and effective strategies. Our process is designed to
                  help businesses identify their goals and develop a
                  comprehensive plan to achieve them. We start by understanding
                  your business, its goals, and the challenges you face. We then
                  create a tailored strategy to help you reach those goals. We
                  use a combination of digital marketing tactics, such as SEO,
                  content marketing, and social media, to help you reach your
                  target audience. Our team of experienced professionals will
                  work with you every step of the way to ensure that your
                  strategy is successful. We are committed to helping you
                  succeed and will provide ongoing support and guidance
                  throughout the process.
                </p>
                <button className="w-[142px] text-center h-[39px] font-Outfit font-[300] text-md text-white bg-[#6101eb] mt-3 lg:mt-9 hover:bg-white hover:text-black ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="bg-[#111111] mt-6">
            <div className="grid grid-cols-4 md:m-2 lg:m-1">
              <div className="col-span-4 md:col-span-3 md:p-9 lg:p-1 lg:col-span-2 m-3 p-6">
                <h1 className="text-[#FFFFFF] font-[200] font-Outfit text-[22px] lg:text-[33px] 2xl:text-[40px]">
                  With more than 10+ years of industry experience, our team has
                  become a leader in social media content and design.
                </h1>
                <p className="text-white text-[13px] lg:text-[22px] font-[200] font-Outfit mt-4 lg:mb-2">
                  Growing brands through bold, scroll-stopping creative
                </p>
              </div>
              <div className="hidden lg:block" />
              <div className="col-span-4 md:col-span-1 lg:col-span-1 ml-9 md:pt-12 lg:pt-0 md:pr-1s md:ml-0 flex flex-row lg:mt-6 lg:ml-9">
                <div>
                  <button className="text-[#FFFFFF] font-Outfit font-[100]">
                    Check Out Our Work
                  </button>
                </div>
                <div>
                  <span className="">&rarr;</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 lg:m-6 p-6 pt-0 mt-0">
              <div className="col-span-4 lg:col-span-2 m-2 mr-3">
                <img
                  src="/images/achivements-image-copy.webp"
                  alt="Abstract1"
                  className="w-150"
                />
              </div>
              <div className="col-span-4 lg:col-span-1 font-[200] font-Outfit m-1 ml-2">
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] pb-5">
                  Using year-over-year best in class approaches to social media
                  and design along with the latest technologies/platforms.
                </p>
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] pb-5">
                  Our social media marketing team will ensure that your brand
                  will be visible, and will resonate with your customers.
                </p>
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] mb-5">
                  Our philosophy is built on people who love their craft,
                  learning and growing together.
                </p>
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] mb-4">
                  These are the fundamentals that allow our team to grow
                  together allowing us to pick on trends where others miss.
                </p>
              </div>
              <div className="col-span-4 lg:col-span-1 ml-2 lg:ml-0 md:mt-0 md:col-span-4 font-[200] font-Outfit lg:pl-5">
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] pb-5">
                  Modern and cutting-edge strategies for creating digitally
                  connected brands, services, and products driving engaging
                  experiences through social media and design.
                </p>
                <p className="text-[#FFFFFF] text-[15px] lg:text-[18px] pb-9 mb-4">
                  Better than your old social media marketing agency
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
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white hidden md:block md:h-[50%] lg:h-auto pb-5">
          <section id="vertical" className="lenis_scrolling_section">
            <div className="w-full">
              <div className="flex items-start justify-center">
                <div className="w-[50%] col_left h-[100%] sticky top-0 lg:h-screen">
                  <div className="">
                    <h2 className="text-[15px] font-[Outfit] font-[200] md:text-[16px] lg:text-[20px] 2xl:text-[24px] pl-6 pt-[65px]">
                      CAPABILITIES
                    </h2>
                    <h2 className="text-[25px] font-Outfit md:text-[23px] lg:text-[40px] 2xl:text-[55px] font-[200] col-span-1 pl-5 pr-12">
                      We combine strategic
                      <br className="hidden 2xl:block" />
                      approach with studio
                      <br className="hidden 2xl:block" />
                      like creativity
                    </h2>
                    <img
                      src="/images/capabilities.webp"
                      alt="capabilities"
                      className="mt-5 hidden md:block  2xl:h-auto w-180"
                    />
                  </div>
                </div>
                <div className="w-[50%] col_right md:h-[20%] lg:h-auto">
                  <div className="mb-[80px] mt-[50px]">
                    <div className="rounded-3xl border-[1px] border-[#ffffff] h-[210px] w-[80%] 2xl:h-[330px] p-[18px] m-6">
                      <div className="flex-col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={120}
                          height={60}
                          viewBox="0 0 120 121"
                          fill="none"
                          className="svg replaced-svg 2xl:w-[200px] 2xl:h-[120px]"
                        >
                          <g id="network 1" clipPath="url(#clip0_8232_1714)">
                            <g id="Group">
                              <g id="Group_2">
                                <path
                                  id="Vector"
                                  d="M111.992 24.1748C107.58 24.1748 103.992 27.7629 103.992 32.1747C103.992 36.5866 107.58 40.1746 111.992 40.1746C116.404 40.1746 119.992 36.5868 119.992 32.1747C119.992 27.7629 116.404 24.1748 111.992 24.1748ZM111.992 36.1748C109.786 36.1748 107.992 34.3809 107.992 32.1747C107.992 29.9688 109.786 28.1746 111.992 28.1746C114.198 28.1746 115.992 29.9686 115.992 32.1747C115.992 34.3809 114.198 36.1748 111.992 36.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_3">
                              <g id="Group_4">
                                <path
                                  id="Vector_2"
                                  d="M7.99992 90.1748C3.58805 90.1748 0 93.7629 0 98.1747C0 102.587 3.58805 106.175 7.99992 106.175C12.412 106.175 15.9998 102.587 15.9998 98.1747C15.9998 93.7629 12.412 90.1748 7.99992 90.1748ZM7.99992 102.175C5.79398 102.175 3.99984 100.381 3.99984 98.1747C3.99984 95.9686 5.79375 94.1747 7.99992 94.1747C10.2059 94.1747 12 95.9686 12 98.1747C12 100.381 10.2061 102.175 7.99992 102.175Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_5">
                              <g id="Group_6">
                                <path
                                  id="Vector_3"
                                  d="M108.131 26.7047L90.8769 18.3748C89.8808 17.8927 88.6869 18.3127 88.2069 19.3069C87.7269 20.3009 88.1448 21.4969 89.139 21.9769L106.393 30.3068C106.673 30.4428 106.969 30.5068 107.261 30.5068C108.005 30.5068 108.719 30.0907 109.063 29.3747C109.543 28.3807 109.125 27.1847 108.131 26.7047Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_7">
                              <g id="Group_8">
                                <path
                                  id="Vector_4"
                                  d="M90.0077 104.173C85.5956 104.173 82.0078 107.761 82.0078 112.173C82.0078 116.585 85.5956 120.173 90.0077 120.173C94.4198 120.173 98.0077 116.585 98.0077 112.173C98.0077 107.761 94.4198 104.173 90.0077 104.173ZM90.0077 116.173C87.8018 116.173 86.0077 114.379 86.0077 112.173C86.0077 109.967 87.8018 108.173 90.0077 108.173C92.2137 108.173 94.0078 109.967 94.0078 112.173C94.0078 114.379 92.2137 116.173 90.0077 116.173Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_9">
                              <g id="Group_10">
                                <path
                                  id="Vector_5"
                                  d="M86.1231 106.703L68.8691 98.3732C67.873 97.8911 66.6791 98.3092 66.1991 99.3053C65.7191 100.299 66.137 101.495 67.1312 101.975L84.3852 110.305C84.6653 110.441 84.9613 110.505 85.2531 110.505C85.997 110.505 86.7111 110.089 87.0552 109.373C87.5349 108.379 87.1171 107.183 86.1231 106.703Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_11">
                              <g id="Group_12">
                                <path
                                  id="Vector_6"
                                  d="M60.0077 54.1748C55.5956 54.1748 52.0078 57.7629 52.0078 62.1747C52.0078 66.5868 55.5959 70.1746 60.0077 70.1746C64.4198 70.1746 68.0077 66.5866 68.0077 62.1747C68.0077 57.7629 64.4198 54.1748 60.0077 54.1748ZM60.0077 66.1748C57.8018 66.1748 56.0077 64.3809 56.0077 62.1747C56.0077 59.9688 57.8016 58.1747 60.0077 58.1747C62.2137 58.1747 64.0078 59.9686 64.0078 62.1747C64.0078 64.3809 62.2137 66.1748 60.0077 66.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_13">
                              <g id="Group_14">
                                <path
                                  id="Vector_7"
                                  d="M56.4922 56.9247L43.2383 46.5946C42.3662 45.9205 41.1104 46.0705 40.4303 46.9427C39.7522 47.8148 39.9062 49.0705 40.7783 49.7507L54.0322 60.0808C54.3983 60.3648 54.8303 60.5029 55.2604 60.5029C55.8564 60.5029 56.4444 60.239 56.8403 59.733C57.5183 58.8606 57.3643 57.6046 56.4922 56.9247Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_15">
                              <g id="Group_16">
                                <path
                                  id="Vector_8"
                                  d="M95.9923 52.1768C83.8622 52.1768 73.9922 62.0468 73.9922 74.1768C73.9922 86.3069 83.8622 96.1769 95.9923 96.1769C108.122 96.1769 117.992 86.3069 117.992 74.1768C117.992 62.0468 108.122 52.1768 95.9923 52.1768ZM95.9923 92.1766C86.0663 92.1766 77.9923 84.1026 77.9923 74.1766C77.9923 64.2506 86.0663 56.1766 95.9923 56.1766C105.918 56.1766 113.992 64.2506 113.992 74.1766C113.992 84.1026 105.918 92.1766 95.9923 92.1766Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_17">
                              <g id="Group_18">
                                <path
                                  id="Vector_9"
                                  d="M96.0077 60.1748C91.5956 60.1748 88.0078 63.7629 88.0078 68.1747C88.0078 72.5868 91.5959 76.1746 96.0077 76.1746C100.42 76.1746 104.008 72.5866 104.008 68.1747C104.008 63.7629 100.42 60.1748 96.0077 60.1748ZM96.0077 72.1748C93.8018 72.1748 92.0077 70.3809 92.0077 68.1747C92.0077 65.9688 93.8016 64.1747 96.0077 64.1747C98.2137 64.1747 100.008 65.9686 100.008 68.1747C100.008 70.3809 98.2137 72.1748 96.0077 72.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_19">
                              <g id="Group_20">
                                <path
                                  id="Vector_10"
                                  d="M101.802 80.1729H90.198C86.7802 80.1729 84 82.8789 84 86.2029V91.4749C84 92.1888 84.3799 92.8488 84.998 93.2069C88.35 95.1468 92.1539 96.1729 96 96.1729C99.8461 96.1729 103.65 95.1468 107.002 93.2069C107.62 92.8509 108 92.1888 108 91.477V86.205C108 82.8789 105.22 80.1729 101.802 80.1729ZM104 90.2828C99.022 92.7628 92.978 92.7628 87.9998 90.2828V86.205C87.9998 85.0849 88.9859 84.1729 90.1978 84.1729H101.802C103.014 84.1729 104 85.0849 104 86.205V90.2828H104Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_21">
                              <g id="Group_22">
                                <path
                                  id="Vector_11"
                                  d="M47.9923 76.1768C35.8622 76.1768 25.9922 86.0468 25.9922 98.1768C25.9922 110.307 35.8622 120.177 47.9923 120.177C60.1223 120.177 69.9923 110.307 69.9923 98.1766C69.9923 86.0465 60.1223 76.1768 47.9923 76.1768ZM47.9923 116.177C38.0663 116.177 29.9923 108.103 29.9923 98.1766C29.9923 88.2506 38.0663 80.1766 47.9923 80.1766C57.9183 80.1766 65.9923 88.2506 65.9923 98.1766C65.9923 108.103 57.9183 116.177 47.9923 116.177Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_23">
                              <g id="Group_24">
                                <path
                                  id="Vector_12"
                                  d="M48.0077 84.1748C43.5956 84.1748 40.0078 87.7629 40.0078 92.1747C40.0078 96.5868 43.5959 100.175 48.0077 100.175C52.4196 100.175 56.0077 96.5866 56.0077 92.1747C56.0077 87.7629 52.4198 84.1748 48.0077 84.1748ZM48.0077 96.1748C45.8018 96.1748 44.0077 94.3809 44.0077 92.1747C44.0077 89.9688 45.8016 88.1747 48.0077 88.1747C50.2137 88.1747 52.0078 89.9686 52.0078 92.1747C52.0078 94.3809 50.2137 96.1748 48.0077 96.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_25">
                              <g id="Group_26">
                                <path
                                  id="Vector_13"
                                  d="M53.802 104.173H42.198C38.7802 104.173 36 106.879 36 110.203V115.475C36 116.189 36.3799 116.849 36.998 117.207C40.35 119.147 44.1539 120.173 48 120.173C51.8461 120.173 55.65 119.147 59.002 117.207C59.6201 116.851 60 116.189 60 115.477V110.205C60 106.879 57.2201 104.173 53.802 104.173ZM55.9999 114.283C51.0218 116.763 44.978 116.763 39.9998 114.283V110.205C39.9998 109.085 40.9859 108.173 42.1978 108.173H53.8017C55.0137 108.173 55.9997 109.085 55.9997 110.205L55.9999 114.283Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_27">
                              <g id="Group_28">
                                <path
                                  id="Vector_14"
                                  d="M22.0001 26.1719C9.87 26.1719 0 36.0419 0 48.172C0 60.302 9.87 70.172 22.0001 70.172C34.1302 70.172 44.0002 60.302 44.0002 48.172C43.9999 36.0419 34.1299 26.1719 22.0001 26.1719ZM22.0001 66.172C12.0741 66.172 4.00008 58.098 4.00008 48.172C4.00008 38.2459 12.0741 30.172 22.0001 30.172C31.9261 30.172 40.0001 38.2459 40.0001 48.172C40.0001 58.098 31.9261 66.172 22.0001 66.172Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_29">
                              <g id="Group_30">
                                <path
                                  id="Vector_15"
                                  d="M21.9921 34.1768C17.58 34.1768 13.9922 37.7648 13.9922 42.1767C13.9922 46.5886 17.5802 50.1766 21.9921 50.1766C26.4042 50.1766 29.992 46.5886 29.992 42.1767C29.992 37.7648 26.404 34.1768 21.9921 34.1768ZM21.9921 46.1768C19.7862 46.1768 17.992 44.3829 17.992 42.1767C17.992 39.9705 19.7859 38.1766 21.9921 38.1766C24.198 38.1766 25.9922 39.9705 25.9922 42.1767C25.9922 44.3829 24.198 46.1768 21.9921 46.1768Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_31">
                              <g id="Group_32">
                                <path
                                  id="Vector_16"
                                  d="M27.8098 54.1748H16.2059C12.788 54.1748 10.0078 56.8809 10.0078 60.2048V65.4768C10.0078 66.1907 10.3877 66.8507 11.0058 67.2089C14.3578 69.1488 18.1617 70.1749 22.0078 70.1749C25.8539 70.1749 29.6578 69.1488 33.0098 67.2089C33.6279 66.8529 34.0078 66.1907 34.0078 65.4789V60.2069C34.0078 56.8809 31.2277 54.1748 27.8098 54.1748ZM30.0077 64.2848C25.0298 66.7647 18.9858 66.7647 14.0077 64.2848V60.2069C14.0077 59.0868 14.9937 58.1749 16.2056 58.1749H27.8095C29.0215 58.1749 30.0075 59.0868 30.0075 60.2069L30.0077 64.2848Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_33">
                              <g id="Group_34">
                                <path
                                  id="Vector_17"
                                  d="M70.0001 0.174805C57.87 0.174805 48 10.0448 48 22.1749C48 34.305 57.87 44.175 70.0001 44.175C82.1302 44.175 92.0002 34.305 92.0002 22.1749C91.9999 10.0448 82.1299 0.174805 70.0001 0.174805ZM70.0001 40.1749C60.0741 40.1749 52.0001 32.1009 52.0001 22.1749C52.0001 12.2489 60.0741 4.17488 70.0001 4.17488C79.9261 4.17488 88.0001 12.2489 88.0001 22.1749C88.0001 32.1009 79.9261 40.1749 70.0001 40.1749Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_35">
                              <g id="Group_36">
                                <path
                                  id="Vector_18"
                                  d="M69.9921 8.17285C65.58 8.17285 61.9922 11.7609 61.9922 16.1728C61.9922 20.5846 65.5802 24.1727 69.9921 24.1727C74.404 24.1727 77.992 20.5849 77.992 16.173C77.992 11.7611 74.404 8.17285 69.9921 8.17285ZM69.9921 20.1729C67.7862 20.1729 65.992 18.3789 65.992 16.1728C65.992 13.9668 67.7859 12.1727 69.9921 12.1727C72.1983 12.1727 73.9922 13.9666 73.9922 16.1728C73.992 18.3789 72.198 20.1729 69.9921 20.1729Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_37">
                              <g id="Group_38">
                                <path
                                  id="Vector_19"
                                  d="M75.8098 28.1768H64.2059C60.788 28.1768 58.0078 30.8829 58.0078 34.2068V39.4788C58.0078 40.1927 58.3877 40.8527 59.0058 41.2108C62.3578 43.1507 66.1617 44.1768 70.0078 44.1768C73.8539 44.1768 77.6578 43.1507 81.0098 41.2108C81.6279 40.8548 82.0078 40.1927 82.0078 39.4809V34.2089C82.0078 30.8826 79.2277 28.1768 75.8098 28.1768ZM78.0077 38.2868C73.0298 40.7667 66.9858 40.7667 62.0077 38.2868V34.2089C62.0077 33.0888 62.9937 32.1768 64.2056 32.1768H75.8095C77.0215 32.1768 78.0075 33.0888 78.0075 34.2089L78.0077 38.2868Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_39">
                              <g id="Group_40">
                                <path
                                  id="Vector_20"
                                  d="M51.5288 20.8707C50.8109 20.0347 49.5488 19.9346 48.7088 20.6528L34.8488 32.5128C34.0088 33.2307 33.9108 34.4928 34.6287 35.3328C35.0248 35.7948 35.5847 36.0329 36.1486 36.0329C36.6087 36.0329 37.0706 35.8749 37.4487 35.5508L51.3087 23.6907C52.1489 22.9728 52.2469 21.7107 51.5288 20.8707Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_41">
                              <g id="Group_42">
                                <path
                                  id="Vector_21"
                                  d="M95.5922 52.9745L83.5922 36.9745C82.9301 36.0885 81.6762 35.9144 80.7921 36.5744C79.908 37.2365 79.7301 38.4904 80.392 39.3724L92.392 55.3724C92.786 55.8965 93.386 56.1724 93.994 56.1724C94.41 56.1724 94.8321 56.0423 95.1921 55.7723C96.0762 55.1104 96.2543 53.8565 95.5922 52.9745Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_43">
                              <g id="Group_44">
                                <path
                                  id="Vector_22"
                                  d="M79.1782 80.7911C78.5161 79.9071 77.2622 79.7292 76.3781 80.391L65.2062 88.769C64.3221 89.4311 64.1442 90.685 64.8061 91.567C65.2001 92.091 65.8001 92.3669 66.408 92.3669C66.8259 92.3669 67.2459 92.235 67.6062 91.9668L78.7781 83.5889C79.6622 82.9272 79.8403 81.6731 79.1782 80.7911Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_45">
                              <g id="Group_46">
                                <path
                                  id="Vector_23"
                                  d="M28.0001 96.1748H13.9999C12.896 96.1748 12 97.0687 12 98.1747C12 99.2807 12.896 100.175 13.9999 100.175H27.9998C29.1038 100.175 29.9998 99.2807 29.9998 98.1747C29.9998 97.0687 29.104 96.1748 28.0001 96.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_47">
                              <g id="Group_48">
                                <path
                                  id="Vector_24"
                                  d="M21.9923 0.174805C17.5802 0.174805 13.9922 3.76285 13.9922 8.17473C13.9922 12.5868 17.5802 16.1746 21.9921 16.1746C26.4042 16.1746 29.992 12.5866 29.992 8.17473C29.9923 3.76285 26.4042 0.174805 21.9923 0.174805ZM21.9923 12.1748C19.7864 12.1748 17.9923 10.3809 17.9923 8.17473C17.9923 5.96879 19.7862 4.17465 21.9923 4.17465C24.1983 4.17465 25.9924 5.96855 25.9924 8.17473C25.9922 10.3809 24.1983 12.1748 21.9923 12.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                            <g id="Group_49">
                              <g id="Group_50">
                                <path
                                  id="Vector_25"
                                  d="M21.9921 12.1748C20.8882 12.1748 19.9922 13.0687 19.9922 14.1747V28.1747C19.9922 29.2807 20.8882 30.1746 21.9921 30.1746C23.096 30.1746 23.992 29.2807 23.992 28.1747V14.1747C23.992 13.0687 23.096 12.1748 21.9921 12.1748Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_8232_1714">
                              <rect
                                width={120}
                                height={120}
                                fill="white"
                                transform="translate(0 0.174805)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h2 className="text-[20px] md:text-[23px] 2xl:text-[37px] font-[200] text-white font-Outfit pt-5">
                          Social Media
                        </h2>
                        <p className="text-[12px] md:text-[15px] 2xl:text-[21px] text-white font-Outfit font-[200]">
                          We provide an always there approach to social media
                          marketing.this means posting timely and relavant
                          content for your audience to discover and engage with.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[80px]">
                    <div className="rounded-3xl border-[1px] border-[#ffffff] h-[210px] w-[80%] 2xl:h-[330px] p-[18px] m-6">
                      <div className="flex-col">
                        <img
                          src="images/review-1.svg"
                          className="h-[60px] pl-5 2xl:w-[200px] 2xl:h-[120px]"
                        />
                        <h2 className="text-[20px] font-[200] md:text-[23px] 2xl:text-[37px] font-Outfit text-white pt-5">
                          Content Creation
                        </h2>
                        <p className="text-[12px] md:text-[15px] 2xl:text-[21px] font-[200] font-Outfit text-[#FFFFFF]">
                          We craft scroll stopping content that is timely and
                          relevant for your audience to engage with.our team can
                          create anything from still images to custom branded
                          video content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[80px]">
                    <div className="rounded-3xl border-[1px] border-[#ffffff] h-[210px] w-[80%] 2xl:h-[330px] p-[18px] m-6">
                      <div className="flex-col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={120}
                          height={60}
                          viewBox="0 0 120 121"
                          fill="none"
                          className="svg replaced-svg 2xl:w-[200px] 2xl:h-[120px]"
                        >
                          <g id="prototype 1">
                            <g id="Outline">
                              <g id="Group">
                                <path
                                  id="Vector"
                                  d="M75 52.6748H84.375C84.8723 52.6748 85.3492 52.4773 85.7008 52.1256C86.0525 51.774 86.25 51.2971 86.25 50.7998C86.25 50.3025 86.0525 49.8256 85.7008 49.474C85.3492 49.1223 84.8723 48.9248 84.375 48.9248H75C74.5027 48.9248 74.0258 49.1223 73.6742 49.474C73.3225 49.8256 73.125 50.3025 73.125 50.7998C73.125 51.2971 73.3225 51.774 73.6742 52.1256C74.0258 52.4773 74.5027 52.6748 75 52.6748Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_2"
                                  d="M114.375 48.9248C113.878 48.9248 113.401 49.1223 113.049 49.474C112.698 49.8256 112.5 50.3025 112.5 50.7998V112.675H16.875C15.0208 112.675 13.2082 112.125 11.6665 111.095C10.1248 110.065 8.9232 108.601 8.21363 106.887C7.50406 105.174 7.3184 103.289 7.68014 101.471C8.04187 99.6523 8.93476 97.9818 10.2459 96.6707C11.557 95.3596 13.2275 94.4667 15.046 94.1049C16.8646 93.7432 18.7496 93.9289 20.4627 94.6384C22.1757 95.348 23.6399 96.5496 24.67 98.0913C25.7002 99.633 26.25 101.446 26.25 103.3C26.25 103.797 26.4475 104.274 26.7992 104.626C27.1508 104.977 27.6277 105.175 28.125 105.175C28.6223 105.175 29.0992 104.977 29.4508 104.626C29.8025 104.274 30 103.797 30 103.3V52.6748H35.625C36.1223 52.6748 36.5992 52.4773 36.9508 52.1256C37.3025 51.774 37.5 51.2971 37.5 50.7998C37.5 50.3025 37.3025 49.8256 36.9508 49.474C36.5992 49.1223 36.1223 48.9248 35.625 48.9248H30V43.2998C30 39.8188 28.6172 36.4804 26.1558 34.019C23.6944 31.5576 20.356 30.1748 16.875 30.1748C13.394 30.1748 10.0556 31.5576 7.59422 34.019C5.13281 36.4804 3.75 39.8188 3.75 43.2998V103.3C3.75397 106.78 5.13805 110.116 7.59861 112.576C10.0592 115.037 13.3953 116.421 16.875 116.425H114.375C114.872 116.425 115.349 116.227 115.701 115.876C116.052 115.524 116.25 115.047 116.25 114.55V50.7998C116.25 50.3025 116.052 49.8256 115.701 49.474C115.349 49.1223 114.872 48.9248 114.375 48.9248ZM7.5 43.2998C7.5 40.8134 8.48772 38.4288 10.2459 36.6707C12.004 34.9125 14.3886 33.9248 16.875 33.9248C19.3614 33.9248 21.746 34.9125 23.5041 36.6707C25.2623 38.4288 26.25 40.8134 26.25 43.2998V94.1123C25.0291 92.863 23.5709 91.8703 21.9609 91.1925C20.351 90.5148 18.6218 90.1656 16.875 90.1656C15.1282 90.1656 13.399 90.5148 11.7891 91.1925C10.1791 91.8703 8.72086 92.863 7.5 94.1123V43.2998Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_3"
                                  d="M90.1331 72.1223L93.1331 79.6223L97.6331 90.8723C97.772 91.2208 98.0122 91.5197 98.3227 91.7303C98.6333 91.9408 98.9998 92.0534 99.375 92.0534C99.7502 92.0534 100.117 91.9408 100.427 91.7303C100.738 91.5197 100.978 91.2208 101.117 90.8723L105.617 79.6223L108.617 72.1223C108.692 71.9219 108.732 71.7101 108.735 71.496C108.735 71.4717 108.75 71.451 108.75 71.4248V39.5498C108.75 39.0525 108.552 38.5756 108.201 38.224C107.849 37.8723 107.372 37.6748 106.875 37.6748C106.378 37.6748 105.901 37.8723 105.549 38.224C105.198 38.5756 105 39.0525 105 39.5498V69.5498H101.25V26.4248H105V32.0498C105 32.5471 105.198 33.024 105.549 33.3756C105.901 33.7273 106.378 33.9248 106.875 33.9248C107.372 33.9248 107.849 33.7273 108.201 33.3756C108.552 33.024 108.75 32.5471 108.75 32.0498V13.2998C108.75 10.8134 107.762 8.42883 106.004 6.67068C104.246 4.91252 101.861 3.9248 99.375 3.9248C96.8886 3.9248 94.504 4.91252 92.7459 6.67068C90.9877 8.42883 90 10.8134 90 13.2998V71.4248C90 71.451 90.0131 71.4717 90.015 71.4979C90.0181 71.7113 90.058 71.9225 90.1331 72.1223ZM97.6444 80.7998H101.106L99.375 85.1273L97.6444 80.7998ZM102.606 77.0498H96.1444L94.6444 73.2998H104.106L102.606 77.0498ZM97.5 69.5498H93.75V26.4248H97.5V69.5498ZM93.75 22.6748V18.9248H105V22.6748H93.75ZM93.75 13.2998C93.75 11.808 94.3426 10.3772 95.3975 9.32233C96.4524 8.26744 97.8832 7.6748 99.375 7.6748C100.867 7.6748 102.298 8.26744 103.352 9.32233C104.407 10.3772 105 11.808 105 13.2998V15.1748H93.75V13.2998Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_4"
                                  d="M44.9874 40.8658V41.7677C43.8914 42.1495 42.9414 42.8629 42.2691 43.8091C41.5968 44.7552 41.2356 45.887 41.2356 47.0477C41.2356 48.2083 41.5968 49.3402 42.2691 50.2863C42.9414 51.2324 43.8914 51.9458 44.9874 52.3277V52.6783C44.9909 55.0497 45.7428 57.3595 47.136 59.2785C48.5291 61.1976 50.4925 62.6279 52.7462 63.3658C50.7435 65.3785 48.2283 66.805 45.473 67.4908L42.6137 68.207C40.4189 68.7494 38.499 70.077 37.2168 71.939C35.9346 73.801 35.379 76.0682 35.6552 78.312C35.9313 80.5558 37.02 82.6207 38.7154 84.1162C40.4108 85.6118 42.5954 86.4343 44.8562 86.4283H48.7374C49.2347 86.4283 49.7116 86.2307 50.0632 85.8791C50.4149 85.5275 50.6124 85.0506 50.6124 84.5533C50.6124 84.056 50.4149 83.5791 50.0632 83.2275C49.7116 82.8758 49.2347 82.6783 48.7374 82.6783H44.8562C43.5157 82.677 42.2219 82.1858 41.2183 81.2972C40.2147 80.4086 39.5705 79.1838 39.4069 77.8534C39.2433 76.5229 39.5716 75.1786 40.33 74.0733C41.0885 72.968 42.2247 72.178 43.5249 71.852L46.3843 71.1377C50.7285 70.0479 54.5589 67.4822 57.2199 63.8795C60.021 63.6318 62.628 62.3449 64.5281 60.272C66.4282 58.1991 67.4838 55.4903 67.4874 52.6783V52.3333C68.5834 51.9514 69.5335 51.238 70.2057 50.2919C70.878 49.3458 71.2392 48.2139 71.2392 47.0533C71.2392 45.8927 70.878 44.7608 70.2057 43.8147C69.5335 42.8686 68.5834 42.1551 67.4874 41.7733V40.8658C70.3982 38.2696 72.3164 34.7427 72.914 30.8884C73.5115 27.0342 72.7511 23.092 70.763 19.7364C70.5102 19.308 70.0975 18.9976 69.6157 18.8735C69.134 18.7493 68.6227 18.8217 68.1943 19.0745C67.7659 19.3274 67.4555 19.7401 67.3313 20.2218C67.2072 20.7036 67.2795 21.2149 67.5324 21.6433C69.143 24.3579 69.7169 27.5637 69.1483 30.6685C68.5796 33.7733 66.9068 36.5675 64.4387 38.5352C64.2198 38.7109 64.0431 38.9335 63.9217 39.1867C63.8004 39.4398 63.7374 39.7169 63.7374 39.9977V41.4283H62.0818L63.7262 26.6345C63.7609 26.3218 63.7163 26.0055 63.5966 25.7145C63.477 25.4236 63.286 25.1674 63.0414 24.9696C62.7967 24.7719 62.5062 24.6388 62.1966 24.5828C61.8871 24.5267 61.5684 24.5495 61.2699 24.6489L56.2374 26.327L51.2049 24.6489C50.9064 24.5495 50.5878 24.5267 50.2782 24.5828C49.9686 24.6388 49.6781 24.7719 49.4335 24.9696C49.1888 25.1674 48.9979 25.4236 48.8782 25.7145C48.7585 26.0055 48.714 26.3218 48.7487 26.6345L50.393 41.4283H48.7374V40.0033C48.7375 39.7226 48.6745 39.4454 48.5531 39.1923C48.4317 38.9392 48.2551 38.7165 48.0362 38.5408C45.4389 36.471 43.7239 33.4928 43.2374 30.2076C42.7508 26.9223 43.5291 23.5749 45.4149 20.8412C47.3008 18.1075 50.1537 16.1913 53.3976 15.4795C56.6415 14.7677 60.0346 15.3134 62.8918 17.0064C63.3202 17.2593 63.8315 17.3316 64.3132 17.2075C64.795 17.0833 65.2077 16.7729 65.4605 16.3445C65.7134 15.9161 65.7857 15.4048 65.6616 14.9231C65.5375 14.4413 65.2271 14.0286 64.7987 13.7758C61.194 11.6536 56.9293 10.9469 52.8327 11.7928C48.7362 12.6388 45.1002 14.977 42.631 18.3534C40.1618 21.7298 39.0356 25.9034 39.471 30.0637C39.9065 34.2239 41.8726 38.0739 44.9874 40.8658ZM56.2374 60.1783C54.2483 60.1783 52.3406 59.3881 50.9341 57.9816C49.5276 56.5751 48.7374 54.6674 48.7374 52.6783H63.7374C63.7374 54.6674 62.9472 56.5751 61.5407 57.9816C60.1342 59.3881 58.2265 60.1783 56.2374 60.1783ZM52.8005 29.1339L55.6449 30.0827C56.0295 30.2108 56.4453 30.2108 56.8299 30.0827L59.6743 29.1339L58.3093 41.4283H54.1749L52.8005 29.1339ZM52.4874 45.1783H65.6124C66.1097 45.1783 66.5866 45.3758 66.9382 45.7275C67.2899 46.0791 67.4874 46.556 67.4874 47.0533C67.4874 47.5506 67.2899 48.0275 66.9382 48.3791C66.5866 48.7307 66.1097 48.9283 65.6124 48.9283H46.8624C46.3651 48.9283 45.8882 48.7307 45.5366 48.3791C45.185 48.0275 44.9874 47.5506 44.9874 47.0533C44.9874 46.556 45.185 46.0791 45.5366 45.7275C45.8882 45.3758 46.3651 45.1783 46.8624 45.1783H52.4874Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_5"
                                  d="M33.75 30.1748C34.7855 30.1748 35.625 29.3353 35.625 28.2998C35.625 27.2643 34.7855 26.4248 33.75 26.4248C32.7145 26.4248 31.875 27.2643 31.875 28.2998C31.875 29.3353 32.7145 30.1748 33.75 30.1748Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_6"
                                  d="M78.75 30.1748C79.7855 30.1748 80.625 29.3353 80.625 28.2998C80.625 27.2643 79.7855 26.4248 78.75 26.4248C77.7145 26.4248 76.875 27.2643 76.875 28.2998C76.875 29.3353 77.7145 30.1748 78.75 30.1748Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_7"
                                  d="M56.25 7.6748C57.2855 7.6748 58.125 6.83534 58.125 5.7998C58.125 4.76427 57.2855 3.9248 56.25 3.9248C55.2145 3.9248 54.375 4.76427 54.375 5.7998C54.375 6.83534 55.2145 7.6748 56.25 7.6748Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_8"
                                  d="M35.8203 18.6736C36.1414 18.859 36.5103 18.945 36.8804 18.9208C37.2504 18.8965 37.605 18.7631 37.8992 18.5374C38.1934 18.3116 38.4141 18.0037 38.5333 17.6525C38.6525 17.3014 38.6649 16.9228 38.5689 16.5645C38.473 16.2063 38.2729 15.8846 37.9941 15.6401C37.7153 15.3956 37.3702 15.2393 37.0026 15.1908C36.6349 15.1424 36.2611 15.2042 35.9285 15.3682C35.5959 15.5322 35.3194 15.7912 35.134 16.1123C34.8854 16.543 34.818 17.0547 34.9467 17.5351C35.0754 18.0154 35.3896 18.4249 35.8203 18.6736Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_9"
                                  d="M74.8046 41.1736C75.1258 41.359 75.4947 41.445 75.8648 41.4208C76.2348 41.3966 76.5894 41.2631 76.8836 41.0374C77.1778 40.8116 77.3985 40.5037 77.5177 40.1525C77.6369 39.8014 77.6493 39.4228 77.5533 39.0645C77.4573 38.7063 77.2573 38.3846 76.9785 38.1401C76.6997 37.8956 76.3546 37.7393 75.9869 37.6908C75.6193 37.6424 75.2455 37.7042 74.9129 37.8682C74.5803 38.0322 74.3038 38.2912 74.1184 38.6123C73.8698 39.043 73.8024 39.5547 73.9311 40.0351C74.0598 40.5154 74.374 40.9249 74.8046 41.1736Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_10"
                                  d="M67.977 10.636C68.9772 10.3679 69.5708 9.33981 69.3028 8.33956C69.0348 7.33931 68.0067 6.74572 67.0064 7.01374C66.0062 7.28175 65.4126 8.30988 65.6806 9.31013C65.9486 10.3104 66.9767 10.904 67.977 10.636Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_11"
                                  d="M76.6797 18.6736C77.0008 18.4882 77.2598 18.2117 77.4238 17.8791C77.5878 17.5465 77.6496 17.1727 77.6012 16.8051C77.5527 16.4374 77.3964 16.0923 77.1519 15.8135C76.9074 15.5347 76.5857 15.3347 76.2275 15.2387C75.8692 15.1427 75.4906 15.1551 75.1395 15.2743C74.7883 15.3935 74.4804 15.6142 74.2546 15.9084C74.0289 16.2026 73.8954 16.5572 73.8712 16.9272C73.847 17.2973 73.933 17.6662 74.1184 17.9874C74.3671 18.418 74.7766 18.7322 75.2569 18.8609C75.7373 18.9896 76.249 18.9222 76.6797 18.6736Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_12"
                                  d="M38.3816 38.6123C38.1962 38.2912 37.9197 38.0322 37.5871 37.8682C37.2545 37.7042 36.8807 37.6424 36.5131 37.6908C36.1454 37.7393 35.8003 37.8956 35.5215 38.1401C35.2427 38.3846 35.0427 38.7063 34.9467 39.0645C34.8507 39.4228 34.8631 39.8014 34.9823 40.1525C35.1015 40.5037 35.3222 40.8116 35.6164 41.0374C35.9106 41.2631 36.2652 41.3966 36.6352 41.4208C37.0053 41.445 37.3742 41.359 37.6954 41.1736C38.126 40.9249 38.4402 40.5154 38.5689 40.0351C38.6976 39.5547 38.6303 39.043 38.3816 38.6123Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_13"
                                  d="M45.9375 10.4314C46.2586 10.246 46.5176 9.96951 46.6816 9.63692C46.8457 9.30432 46.9074 8.93055 46.859 8.56288C46.8106 8.19521 46.6542 7.85015 46.4097 7.57133C46.1652 7.29252 45.8435 7.09248 45.4853 6.9965C45.1271 6.90052 44.7484 6.91292 44.3973 7.03213C44.0461 7.15134 43.7382 7.37201 43.5124 7.66623C43.2867 7.96044 43.1533 8.31499 43.129 8.68504C43.1048 9.05509 43.1908 9.42402 43.3762 9.74517C43.6249 10.1758 44.0344 10.49 44.5147 10.6187C44.9951 10.7474 45.5068 10.6801 45.9375 10.4314Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_14"
                                  d="M65.618 101.425H73.118C73.6152 101.425 74.0922 101.227 74.4438 100.876C74.7954 100.524 74.993 100.047 74.993 99.5498V96.3979C75.6294 96.0978 76.2402 95.746 76.8192 95.3461L79.5455 96.9211C79.9761 97.1697 80.4879 97.2371 80.9682 97.1084C81.4485 96.9797 81.8581 96.6654 82.1067 96.2348L85.8567 89.7398C86.1053 89.3092 86.1727 88.7974 86.044 88.3171C85.9153 87.8367 85.6011 87.4272 85.1705 87.1786L82.448 85.6054C82.478 85.2511 82.493 84.9004 82.493 84.5498C82.493 84.1992 82.478 83.8486 82.448 83.4942L85.1705 81.9211C85.6011 81.6724 85.9153 81.2629 86.044 80.7826C86.1727 80.3022 86.1053 79.7905 85.8567 79.3598L82.1067 72.8648C81.8581 72.4342 81.4485 72.1199 80.9682 71.9912C80.4879 71.8625 79.9761 71.9299 79.5455 72.1786L76.8192 73.7536C76.2402 73.3536 75.6294 73.0018 74.993 72.7017V69.5498C74.993 69.0525 74.7954 68.5756 74.4438 68.224C74.0922 67.8723 73.6152 67.6748 73.118 67.6748H65.618C65.1207 67.6748 64.6438 67.8723 64.2921 68.224C63.9405 68.5756 63.743 69.0525 63.743 69.5498V72.7017C63.1065 73.0018 62.4957 73.3536 61.9167 73.7536L59.1905 72.1786C58.7598 71.9299 58.248 71.8625 57.7677 71.9912C57.2874 72.1199 56.8779 72.4342 56.6292 72.8648L52.8792 79.3598C52.6306 79.7905 52.5632 80.3022 52.6919 80.7826C52.8206 81.2629 53.1348 81.6724 53.5655 81.9211L56.288 83.4942C56.258 83.8486 56.243 84.1992 56.243 84.5498C56.243 84.9004 56.258 85.2511 56.288 85.6054L53.5655 87.1786C53.3505 87.3008 53.1618 87.4643 53.0103 87.6597C52.8588 87.8552 52.7475 88.0786 52.6827 88.3173C52.6179 88.5559 52.601 88.805 52.6328 89.0502C52.6647 89.2954 52.7448 89.5319 52.8684 89.746C52.992 89.9602 53.1568 90.1478 53.3532 90.298C53.5497 90.4482 53.7739 90.558 54.0129 90.6212C54.252 90.6844 54.5012 90.6997 54.7462 90.6662C54.9912 90.6327 55.2271 90.5511 55.4405 90.4261L59.243 88.2248C59.5784 88.0314 59.8458 87.7388 60.0083 87.3873C60.1708 87.0358 60.2204 86.6426 60.1505 86.2617C59.9304 85.131 59.9304 83.9686 60.1505 82.8379C60.2204 82.4571 60.1708 82.0638 60.0083 81.7123C59.8458 81.3608 59.5784 81.0683 59.243 80.8748L57.0567 79.6111L58.9317 76.3636L61.118 77.6273C61.4538 77.8212 61.8415 77.9063 62.2277 77.8707C62.6138 77.8351 62.9795 77.6806 63.2742 77.4286C64.1485 76.6822 65.1527 76.1031 66.2367 75.7204C66.6032 75.5923 66.9209 75.3536 67.1459 75.0372C67.3709 74.7208 67.4922 74.3424 67.493 73.9542V71.4248H71.243V73.9542C71.2432 74.3415 71.3634 74.7193 71.587 75.0355C71.8106 75.3518 72.1266 75.5911 72.4917 75.7204C73.5757 76.1031 74.5799 76.6822 75.4542 77.4286C75.7489 77.6806 76.1146 77.8351 76.5007 77.8707C76.8869 77.9063 77.2746 77.8212 77.6105 77.6273L79.7967 76.3636L81.6717 79.6111L79.493 80.8748C79.1575 81.0683 78.8901 81.3608 78.7276 81.7123C78.5652 82.0638 78.5155 82.4571 78.5855 82.8379C78.8055 83.9686 78.8055 85.131 78.5855 86.2617C78.5155 86.6426 78.5652 87.0358 78.7276 87.3873C78.8901 87.7388 79.1575 88.0314 79.493 88.2248L81.6792 89.4886L79.8042 92.7361L77.618 91.4723C77.2821 91.2784 76.8944 91.1934 76.5082 91.2289C76.1221 91.2645 75.7564 91.419 75.4617 91.6711C74.5874 92.4174 73.5832 92.9965 72.4992 93.3792C72.1341 93.5085 71.8181 93.7478 71.5945 94.0641C71.3709 94.3803 71.2507 94.7581 71.2505 95.1454V97.6748H67.493V95.1454C67.4927 94.7581 67.3726 94.3803 67.149 94.0641C66.9254 93.7478 66.6093 93.5085 66.2442 93.3792C65.1602 92.9965 64.156 92.4174 63.2817 91.6711C62.987 91.419 62.6213 91.2645 62.2352 91.2289C61.849 91.1934 61.4613 91.2784 61.1255 91.4723L57.3155 93.6736C57.1005 93.7958 56.9118 93.9593 56.7603 94.1547C56.6088 94.3502 56.4975 94.5736 56.4327 94.8123C56.3679 95.0509 56.351 95.3 56.3828 95.5452C56.4147 95.7904 56.4948 96.0269 56.6184 96.241C56.742 96.4552 56.9068 96.6428 57.1032 96.793C57.2997 96.9432 57.5239 97.053 57.7629 97.1162C58.002 97.1794 58.2512 97.1947 58.4962 97.1612C58.7412 97.1277 58.9771 97.0461 59.1905 96.9211L61.9167 95.3461C62.4957 95.746 63.1065 96.0978 63.743 96.3979V99.5498C63.743 100.047 63.9405 100.524 64.2921 100.876C64.6438 101.227 65.1207 101.425 65.618 101.425Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_15"
                                  d="M75 84.5498C75 83.4373 74.6701 82.3498 74.052 81.4247C73.4339 80.4997 72.5554 79.7787 71.5276 79.353C70.4998 78.9272 69.3688 78.8158 68.2776 79.0329C67.1865 79.2499 66.1842 79.7857 65.3975 80.5723C64.6109 81.359 64.0751 82.3613 63.8581 83.4524C63.641 84.5436 63.7524 85.6746 64.1782 86.7024C64.6039 87.7302 65.3249 88.6087 66.2499 89.2268C67.1749 89.8449 68.2625 90.1748 69.375 90.1748C70.8668 90.1748 72.2976 89.5822 73.3525 88.5273C74.4074 87.4724 75 86.0416 75 84.5498ZM67.5 84.5498C67.5 84.179 67.61 83.8165 67.816 83.5081C68.022 83.1998 68.3149 82.9595 68.6575 82.8175C69.0001 82.6756 69.3771 82.6385 69.7408 82.7108C70.1045 82.7832 70.4386 82.9618 70.7008 83.224C70.9631 83.4862 71.1416 83.8203 71.214 84.184C71.2863 84.5477 71.2492 84.9247 71.1073 85.2673C70.9654 85.6099 70.725 85.9028 70.4167 86.1088C70.1084 86.3148 69.7458 86.4248 69.375 86.4248C68.8777 86.4248 68.4008 86.2273 68.0492 85.8756C67.6975 85.524 67.5 85.0471 67.5 84.5498Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_16"
                                  d="M71.25 108.925H93.75C95.7391 108.925 97.6468 108.135 99.0533 106.728C100.46 105.322 101.25 103.414 101.25 101.425V97.6748C101.25 97.1775 101.052 96.7006 100.701 96.349C100.349 95.9973 99.8723 95.7998 99.375 95.7998C98.8777 95.7998 98.4008 95.9973 98.0492 96.349C97.6975 96.7006 97.5 97.1775 97.5 97.6748V101.425C97.5 102.419 97.1049 103.373 96.4017 104.076C95.6984 104.78 94.7446 105.175 93.75 105.175H71.25C70.7527 105.175 70.2758 105.372 69.9242 105.724C69.5725 106.076 69.375 106.553 69.375 107.05C69.375 107.547 69.5725 108.024 69.9242 108.376C70.2758 108.727 70.7527 108.925 71.25 108.925Z"
                                  fill="white"
                                />
                                <path
                                  id="Vector_17"
                                  d="M37.5 101.425C37.5 102.537 37.8299 103.625 38.448 104.55C39.0661 105.475 39.9446 106.196 40.9724 106.622C42.0002 107.047 43.1312 107.159 44.2224 106.942C45.3135 106.725 46.3158 106.189 47.1025 105.402C47.8891 104.616 48.4249 103.613 48.6419 102.522C48.859 101.431 48.7476 100.3 48.3218 99.2722C47.8961 98.2444 47.1751 97.3659 46.2501 96.7478C45.3251 96.1297 44.2375 95.7998 43.125 95.7998C41.6332 95.7998 40.2024 96.3924 39.1475 97.4473C38.0926 98.5022 37.5 99.933 37.5 101.425ZM45 101.425C45 101.796 44.89 102.158 44.684 102.466C44.478 102.775 44.1851 103.015 43.8425 103.157C43.4999 103.299 43.1229 103.336 42.7592 103.264C42.3955 103.191 42.0614 103.013 41.7992 102.751C41.5369 102.488 41.3584 102.154 41.286 101.791C41.2137 101.427 41.2508 101.05 41.3927 100.707C41.5346 100.365 41.775 100.072 42.0833 99.8658C42.3916 99.6598 42.7542 99.5498 43.125 99.5498C43.6223 99.5498 44.0992 99.7473 44.4508 100.099C44.8025 100.451 45 100.928 45 101.425Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <h2 className="text-[20px] md:text-[23px] 2xl:text-[37px] font-[200] font-Outfit text-white pt-5">
                          Conversion Driven
                        </h2>
                        <p className="text-[12px] md:text-[15px] 2xl:text-[21px] text-white font-Outfit font-[200]">
                          We create conversion driven web experiences through
                          impactful design.we specialise in everything from new
                          websites builds to branded contest initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[80px]">
                    <div className="rounded-3xl border-[1px] border-[#ffffff] h-[210px] w-[80%] 2xl:h-[330px] p-[18px] m-6">
                      <div className="flex-col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={120}
                          height={60}
                          viewBox="0 0 120 121"
                          fill="none"
                          className="svg replaced-svg 2xl:w-[200px] 2xl:h-[120px]"
                        >
                          <g
                            id="copywriting 2"
                            clipPath="url(#clip0_8350_1690)"
                          >
                            <path
                              id="Vector"
                              d="M20.4422 15.3203C22.9547 15.3203 25.0008 13.2789 25.0008 10.7688C25.0008 8.25625 22.957 6.21016 20.4422 6.21016C17.9297 6.21016 15.8836 8.25391 15.8836 10.7688C15.8836 13.2789 17.9297 15.3203 20.4422 15.3203ZM20.4422 9.95781C20.8898 9.95781 21.2531 10.3211 21.2531 10.7688C21.2531 11.2047 20.8828 11.5727 20.4422 11.5727C19.9945 11.5727 19.6312 11.2117 19.6312 10.7688C19.6312 10.3211 19.9945 9.95781 20.4422 9.95781ZM30.832 15.3203C33.3445 15.3203 35.3906 13.2789 35.3906 10.7688C35.3906 8.25625 33.3469 6.21016 30.832 6.21016C28.3195 6.21016 26.2734 8.25391 26.2734 10.7688C26.2758 13.2789 28.3195 15.3203 30.832 15.3203ZM30.832 9.95781C31.2797 9.95781 31.643 10.3211 31.643 10.7688C31.643 11.2117 31.2797 11.5727 30.832 11.5727C30.3937 11.5727 30.0211 11.2047 30.0211 10.7688C30.0234 10.3211 30.3867 9.95781 30.832 9.95781ZM41.2312 15.3203C43.7414 15.3203 45.7828 13.2789 45.7828 10.7688C45.7828 8.25625 43.7414 6.21016 41.2312 6.21016C38.7188 6.21016 36.6727 8.25391 36.6727 10.7688C36.6727 13.2789 38.7164 15.3203 41.2312 15.3203ZM41.2312 9.95781C41.6742 9.95781 42.0352 10.3211 42.0352 10.7688C42.0352 11.2117 41.6742 11.5727 41.2312 11.5727C40.7836 11.5727 40.4203 11.2117 40.4203 10.7688C40.4203 10.3211 40.7836 9.95781 41.2312 9.95781ZM50.8641 10.7688C50.8641 9.73281 51.7031 8.89609 52.7367 8.89609H99.1172C100.153 8.89609 100.99 9.73516 100.99 10.7688C100.99 11.8023 100.151 12.6414 99.1172 12.6414H52.7367C51.7031 12.6438 50.8641 11.8047 50.8641 10.7688ZM43.2234 45.1445C43.2234 44.1086 44.0625 43.2719 45.0961 43.2719H59.7117C60.7477 43.2719 61.5844 44.1109 61.5844 45.1445C61.5844 46.1781 60.7453 47.0172 59.7117 47.0172H45.0961C44.0625 47.0172 43.2234 46.1781 43.2234 45.1445ZM43.2234 54.4703C43.2234 53.4344 44.0625 52.5977 45.0961 52.5977H59.7117C60.7477 52.5977 61.5844 53.4367 61.5844 54.4703C61.5844 55.5039 60.7453 56.343 59.7117 56.343H45.0961C44.0625 56.3453 43.2234 55.5063 43.2234 54.4703ZM43.2234 63.7984C43.2234 62.7625 44.0625 61.9258 45.0961 61.9258H79.3594C80.3953 61.9258 81.232 62.7648 81.232 63.7984C81.232 64.832 80.393 65.6711 79.3594 65.6711H45.0961C44.0625 65.6734 43.2234 64.8344 43.2234 63.7984ZM43.2234 73.1266C43.2234 72.0906 44.0625 71.2539 45.0961 71.2539H79.3594C80.3953 71.2539 81.232 72.093 81.232 73.1266C81.232 74.1602 80.393 74.9992 79.3594 74.9992H45.0961C44.0625 75.0016 43.2234 74.1625 43.2234 73.1266ZM43.2234 82.4547C43.2234 81.4188 44.0625 80.582 45.0961 80.582H78.8531C79.8891 80.582 80.7258 81.4211 80.7258 82.4547C80.7258 83.4883 79.8867 84.3273 78.8531 84.3273H45.0961C44.0625 84.3273 43.2234 83.4883 43.2234 82.4547ZM73.1391 91.7828C73.1391 92.8187 72.3 93.6555 71.2664 93.6555H45.0961C44.0602 93.6555 43.2234 92.8164 43.2234 91.7828C43.2234 90.7492 44.0625 89.9102 45.0961 89.9102H71.2664C72.3 89.9078 73.1391 90.7469 73.1391 91.7828ZM71.6508 101.111C71.6508 102.147 70.8117 102.984 69.7781 102.984H45.0961C44.0602 102.984 43.2234 102.145 43.2234 101.111C43.2234 100.077 44.0625 99.2383 45.0961 99.2383H69.7781C70.8141 99.2359 71.6508 100.075 71.6508 101.111ZM114.846 70.9961C114.848 69.7914 114.347 68.5984 113.47 67.7219L111.72 65.9711V9.21484C111.72 4.23203 107.667 0.179688 102.684 0.179688H14.1914C9.20859 0.179688 5.15625 4.23203 5.15625 9.21484V91.0328C5.15625 96.0156 9.20859 100.068 14.1914 100.068H25.4062V114.365C25.4062 117.566 28.0102 120.17 31.2141 120.17H78.0844C81.2906 120.17 83.8969 117.566 83.8969 114.365V112.598H85.6641C88.8703 112.598 91.4766 109.989 91.4766 106.785V100.068H102.684C107.667 100.068 111.72 96.0156 111.72 91.0328V75.843L113.651 73.9117C114.42 73.15 114.844 72.1141 114.846 70.9961ZM85.132 97.1312L81.3937 93.393L90.8836 83.9055C90.9117 83.8773 90.9398 83.8516 90.968 83.8211L103.076 71.7156L106.812 75.4516L85.132 97.1312ZM79.9359 97.2344L81.2953 98.5938L79.6242 98.9055L79.9359 97.2344ZM71.8242 40.0539L85.0734 53.3078H71.8242V40.0539ZM108.157 67.7078L108.457 68.0078C108.502 68.057 108.546 68.1016 108.595 68.1461L110.822 70.3727C110.995 70.5461 111.101 70.7781 111.101 70.9914C111.101 71.0711 111.084 71.1836 111.009 71.2586L109.465 72.8031L105.729 69.0672L107.278 67.518C107.348 67.4453 107.461 67.4313 107.541 67.4313C107.752 67.4313 107.981 67.5344 108.157 67.7078ZM14.1914 3.925H102.687C105.602 3.925 107.974 6.29688 107.974 9.2125V17.6125H8.90156V9.21484C8.90156 6.29922 11.2734 3.925 14.1914 3.925ZM14.1914 96.3203C11.2758 96.3203 8.90391 93.9484 8.90391 91.0328V21.3602H107.974V63.707C107.831 63.693 107.686 63.6836 107.541 63.6836C107.538 63.6836 107.536 63.6836 107.534 63.6836C106.416 63.6859 105.382 64.1102 104.623 64.8719L91.4766 78.0133V57.0672C91.4766 55.3305 90.825 53.7602 89.5922 52.5273L72.6047 35.5352C71.3695 34.3094 69.8016 33.6625 68.0695 33.6625H38.7914C35.5898 33.6625 32.9859 36.2664 32.9859 39.468V41.2352H31.2117C28.0102 41.2352 25.4039 43.8438 25.4039 47.0477V96.318H14.1914V96.3203ZM80.1492 114.365C80.1492 115.502 79.2234 116.425 78.082 116.425H31.2117C30.075 116.425 29.1516 115.502 29.1516 114.365V47.05C29.1516 45.9109 30.075 44.9828 31.2117 44.9828H32.9859V106.783C32.9859 109.989 35.5898 112.595 38.7914 112.595H80.1492V114.365ZM85.6641 108.85H38.7914C37.657 108.85 36.7312 107.922 36.7312 106.783V39.4703C36.7312 38.3336 37.6547 37.4102 38.7914 37.4102H68.0695H68.0836C68.0789 37.4617 68.0766 37.5156 68.0766 37.5695V55.1828C68.0766 56.2164 68.9156 57.0555 69.9492 57.0555H87.7266V57.0695V81.7609L77.5125 91.9727C77.1937 92.2914 76.9828 92.6828 76.8867 93.1375C76.8844 93.1539 76.8797 93.1703 76.8773 93.1867L75.5836 100.12C75.4336 100.905 75.6844 101.704 76.2586 102.271C76.718 102.735 77.3297 102.988 77.9578 102.988C78.1055 102.988 78.2508 102.974 78.3984 102.946L85.3406 101.65C85.357 101.648 85.3734 101.643 85.3898 101.641C85.8305 101.547 86.2312 101.331 86.5476 101.015L87.7266 99.8359V106.785C87.7289 107.924 86.8031 108.85 85.6641 108.85ZM107.972 91.0328C107.972 93.9484 105.6 96.3203 102.684 96.3203H91.4766V96.0859L107.972 79.5906V91.0328Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_8350_1690">
                              <rect
                                width={120}
                                height={120}
                                fill="white"
                                transform="translate(0 0.174805)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <h2 className="text-[20px] md:text-[23px] 2xl:text-[37px] font-[200] font-Outfit text-[#FFFFFF] pt-5">
                          Design and Copywriting
                        </h2>
                        <p className="text-[12px] md:text-[15px] 2xl:text-[21px] font-[200] font-Outfit text-white">
                          We design brands that connect to audience through
                          shared culture and values.we use the power of
                          creativity and storytelling to solve problems and
                          deliver results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="overflow-hidden md:hidden">
          <div className="text-white m-6">
            <h2 className="text-[15px] font-[Outfit] font-[200] md:text-[16px] lg:text-[20px] pl-6 pt-4">
              CAPABILITIES
            </h2>
            <h2 className="text-[25px] font-Outfit md:text-[23px] lg:text-[40px] font-[200] col-span-1 pl-5 pr-12">
              We combine strategic approach with studio like creativity
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="swiper-container h-[300px] overflow-hidden">
              <div className="swiper-wrapper">
                {/*-----------------1st -----------*/}
                <div className="swiper-slide w-[250px] lg:w-[25%] bg-black pt-6">
                  <div className="rounded-md border-[1px] border-white h-[240px] w-[80%] md:w-[380px] p-[20px] ml-9">
                    <div className="flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={120}
                        height={70}
                        viewBox="0 0 120 121"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <g id="network 1" clipPath="url(#clip0_8232_1714)">
                          <g id="Group">
                            <g id="Group_2">
                              <path
                                id="Vector"
                                d="M111.992 24.1748C107.58 24.1748 103.992 27.7629 103.992 32.1747C103.992 36.5866 107.58 40.1746 111.992 40.1746C116.404 40.1746 119.992 36.5868 119.992 32.1747C119.992 27.7629 116.404 24.1748 111.992 24.1748ZM111.992 36.1748C109.786 36.1748 107.992 34.3809 107.992 32.1747C107.992 29.9688 109.786 28.1746 111.992 28.1746C114.198 28.1746 115.992 29.9686 115.992 32.1747C115.992 34.3809 114.198 36.1748 111.992 36.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_3">
                            <g id="Group_4">
                              <path
                                id="Vector_2"
                                d="M7.99992 90.1748C3.58805 90.1748 0 93.7629 0 98.1747C0 102.587 3.58805 106.175 7.99992 106.175C12.412 106.175 15.9998 102.587 15.9998 98.1747C15.9998 93.7629 12.412 90.1748 7.99992 90.1748ZM7.99992 102.175C5.79398 102.175 3.99984 100.381 3.99984 98.1747C3.99984 95.9686 5.79375 94.1747 7.99992 94.1747C10.2059 94.1747 12 95.9686 12 98.1747C12 100.381 10.2061 102.175 7.99992 102.175Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_5">
                            <g id="Group_6">
                              <path
                                id="Vector_3"
                                d="M108.131 26.7047L90.8769 18.3748C89.8808 17.8927 88.6869 18.3127 88.2069 19.3069C87.7269 20.3009 88.1448 21.4969 89.139 21.9769L106.393 30.3068C106.673 30.4428 106.969 30.5068 107.261 30.5068C108.005 30.5068 108.719 30.0907 109.063 29.3747C109.543 28.3807 109.125 27.1847 108.131 26.7047Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_7">
                            <g id="Group_8">
                              <path
                                id="Vector_4"
                                d="M90.0077 104.173C85.5956 104.173 82.0078 107.761 82.0078 112.173C82.0078 116.585 85.5956 120.173 90.0077 120.173C94.4198 120.173 98.0077 116.585 98.0077 112.173C98.0077 107.761 94.4198 104.173 90.0077 104.173ZM90.0077 116.173C87.8018 116.173 86.0077 114.379 86.0077 112.173C86.0077 109.967 87.8018 108.173 90.0077 108.173C92.2137 108.173 94.0078 109.967 94.0078 112.173C94.0078 114.379 92.2137 116.173 90.0077 116.173Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_9">
                            <g id="Group_10">
                              <path
                                id="Vector_5"
                                d="M86.1231 106.703L68.8691 98.3732C67.873 97.8911 66.6791 98.3092 66.1991 99.3053C65.7191 100.299 66.137 101.495 67.1312 101.975L84.3852 110.305C84.6653 110.441 84.9613 110.505 85.2531 110.505C85.997 110.505 86.7111 110.089 87.0552 109.373C87.5349 108.379 87.1171 107.183 86.1231 106.703Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_11">
                            <g id="Group_12">
                              <path
                                id="Vector_6"
                                d="M60.0077 54.1748C55.5956 54.1748 52.0078 57.7629 52.0078 62.1747C52.0078 66.5868 55.5959 70.1746 60.0077 70.1746C64.4198 70.1746 68.0077 66.5866 68.0077 62.1747C68.0077 57.7629 64.4198 54.1748 60.0077 54.1748ZM60.0077 66.1748C57.8018 66.1748 56.0077 64.3809 56.0077 62.1747C56.0077 59.9688 57.8016 58.1747 60.0077 58.1747C62.2137 58.1747 64.0078 59.9686 64.0078 62.1747C64.0078 64.3809 62.2137 66.1748 60.0077 66.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_13">
                            <g id="Group_14">
                              <path
                                id="Vector_7"
                                d="M56.4922 56.9247L43.2383 46.5946C42.3662 45.9205 41.1104 46.0705 40.4303 46.9427C39.7522 47.8148 39.9062 49.0705 40.7783 49.7507L54.0322 60.0808C54.3983 60.3648 54.8303 60.5029 55.2604 60.5029C55.8564 60.5029 56.4444 60.239 56.8403 59.733C57.5183 58.8606 57.3643 57.6046 56.4922 56.9247Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_15">
                            <g id="Group_16">
                              <path
                                id="Vector_8"
                                d="M95.9923 52.1768C83.8622 52.1768 73.9922 62.0468 73.9922 74.1768C73.9922 86.3069 83.8622 96.1769 95.9923 96.1769C108.122 96.1769 117.992 86.3069 117.992 74.1768C117.992 62.0468 108.122 52.1768 95.9923 52.1768ZM95.9923 92.1766C86.0663 92.1766 77.9923 84.1026 77.9923 74.1766C77.9923 64.2506 86.0663 56.1766 95.9923 56.1766C105.918 56.1766 113.992 64.2506 113.992 74.1766C113.992 84.1026 105.918 92.1766 95.9923 92.1766Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_17">
                            <g id="Group_18">
                              <path
                                id="Vector_9"
                                d="M96.0077 60.1748C91.5956 60.1748 88.0078 63.7629 88.0078 68.1747C88.0078 72.5868 91.5959 76.1746 96.0077 76.1746C100.42 76.1746 104.008 72.5866 104.008 68.1747C104.008 63.7629 100.42 60.1748 96.0077 60.1748ZM96.0077 72.1748C93.8018 72.1748 92.0077 70.3809 92.0077 68.1747C92.0077 65.9688 93.8016 64.1747 96.0077 64.1747C98.2137 64.1747 100.008 65.9686 100.008 68.1747C100.008 70.3809 98.2137 72.1748 96.0077 72.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_19">
                            <g id="Group_20">
                              <path
                                id="Vector_10"
                                d="M101.802 80.1729H90.198C86.7802 80.1729 84 82.8789 84 86.2029V91.4749C84 92.1888 84.3799 92.8488 84.998 93.2069C88.35 95.1468 92.1539 96.1729 96 96.1729C99.8461 96.1729 103.65 95.1468 107.002 93.2069C107.62 92.8509 108 92.1888 108 91.477V86.205C108 82.8789 105.22 80.1729 101.802 80.1729ZM104 90.2828C99.022 92.7628 92.978 92.7628 87.9998 90.2828V86.205C87.9998 85.0849 88.9859 84.1729 90.1978 84.1729H101.802C103.014 84.1729 104 85.0849 104 86.205V90.2828H104Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_21">
                            <g id="Group_22">
                              <path
                                id="Vector_11"
                                d="M47.9923 76.1768C35.8622 76.1768 25.9922 86.0468 25.9922 98.1768C25.9922 110.307 35.8622 120.177 47.9923 120.177C60.1223 120.177 69.9923 110.307 69.9923 98.1766C69.9923 86.0465 60.1223 76.1768 47.9923 76.1768ZM47.9923 116.177C38.0663 116.177 29.9923 108.103 29.9923 98.1766C29.9923 88.2506 38.0663 80.1766 47.9923 80.1766C57.9183 80.1766 65.9923 88.2506 65.9923 98.1766C65.9923 108.103 57.9183 116.177 47.9923 116.177Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_23">
                            <g id="Group_24">
                              <path
                                id="Vector_12"
                                d="M48.0077 84.1748C43.5956 84.1748 40.0078 87.7629 40.0078 92.1747C40.0078 96.5868 43.5959 100.175 48.0077 100.175C52.4196 100.175 56.0077 96.5866 56.0077 92.1747C56.0077 87.7629 52.4198 84.1748 48.0077 84.1748ZM48.0077 96.1748C45.8018 96.1748 44.0077 94.3809 44.0077 92.1747C44.0077 89.9688 45.8016 88.1747 48.0077 88.1747C50.2137 88.1747 52.0078 89.9686 52.0078 92.1747C52.0078 94.3809 50.2137 96.1748 48.0077 96.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_25">
                            <g id="Group_26">
                              <path
                                id="Vector_13"
                                d="M53.802 104.173H42.198C38.7802 104.173 36 106.879 36 110.203V115.475C36 116.189 36.3799 116.849 36.998 117.207C40.35 119.147 44.1539 120.173 48 120.173C51.8461 120.173 55.65 119.147 59.002 117.207C59.6201 116.851 60 116.189 60 115.477V110.205C60 106.879 57.2201 104.173 53.802 104.173ZM55.9999 114.283C51.0218 116.763 44.978 116.763 39.9998 114.283V110.205C39.9998 109.085 40.9859 108.173 42.1978 108.173H53.8017C55.0137 108.173 55.9997 109.085 55.9997 110.205L55.9999 114.283Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_27">
                            <g id="Group_28">
                              <path
                                id="Vector_14"
                                d="M22.0001 26.1719C9.87 26.1719 0 36.0419 0 48.172C0 60.302 9.87 70.172 22.0001 70.172C34.1302 70.172 44.0002 60.302 44.0002 48.172C43.9999 36.0419 34.1299 26.1719 22.0001 26.1719ZM22.0001 66.172C12.0741 66.172 4.00008 58.098 4.00008 48.172C4.00008 38.2459 12.0741 30.172 22.0001 30.172C31.9261 30.172 40.0001 38.2459 40.0001 48.172C40.0001 58.098 31.9261 66.172 22.0001 66.172Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_29">
                            <g id="Group_30">
                              <path
                                id="Vector_15"
                                d="M21.9921 34.1768C17.58 34.1768 13.9922 37.7648 13.9922 42.1767C13.9922 46.5886 17.5802 50.1766 21.9921 50.1766C26.4042 50.1766 29.992 46.5886 29.992 42.1767C29.992 37.7648 26.404 34.1768 21.9921 34.1768ZM21.9921 46.1768C19.7862 46.1768 17.992 44.3829 17.992 42.1767C17.992 39.9705 19.7859 38.1766 21.9921 38.1766C24.198 38.1766 25.9922 39.9705 25.9922 42.1767C25.9922 44.3829 24.198 46.1768 21.9921 46.1768Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_31">
                            <g id="Group_32">
                              <path
                                id="Vector_16"
                                d="M27.8098 54.1748H16.2059C12.788 54.1748 10.0078 56.8809 10.0078 60.2048V65.4768C10.0078 66.1907 10.3877 66.8507 11.0058 67.2089C14.3578 69.1488 18.1617 70.1749 22.0078 70.1749C25.8539 70.1749 29.6578 69.1488 33.0098 67.2089C33.6279 66.8529 34.0078 66.1907 34.0078 65.4789V60.2069C34.0078 56.8809 31.2277 54.1748 27.8098 54.1748ZM30.0077 64.2848C25.0298 66.7647 18.9858 66.7647 14.0077 64.2848V60.2069C14.0077 59.0868 14.9937 58.1749 16.2056 58.1749H27.8095C29.0215 58.1749 30.0075 59.0868 30.0075 60.2069L30.0077 64.2848Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_33">
                            <g id="Group_34">
                              <path
                                id="Vector_17"
                                d="M70.0001 0.174805C57.87 0.174805 48 10.0448 48 22.1749C48 34.305 57.87 44.175 70.0001 44.175C82.1302 44.175 92.0002 34.305 92.0002 22.1749C91.9999 10.0448 82.1299 0.174805 70.0001 0.174805ZM70.0001 40.1749C60.0741 40.1749 52.0001 32.1009 52.0001 22.1749C52.0001 12.2489 60.0741 4.17488 70.0001 4.17488C79.9261 4.17488 88.0001 12.2489 88.0001 22.1749C88.0001 32.1009 79.9261 40.1749 70.0001 40.1749Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_35">
                            <g id="Group_36">
                              <path
                                id="Vector_18"
                                d="M69.9921 8.17285C65.58 8.17285 61.9922 11.7609 61.9922 16.1728C61.9922 20.5846 65.5802 24.1727 69.9921 24.1727C74.404 24.1727 77.992 20.5849 77.992 16.173C77.992 11.7611 74.404 8.17285 69.9921 8.17285ZM69.9921 20.1729C67.7862 20.1729 65.992 18.3789 65.992 16.1728C65.992 13.9668 67.7859 12.1727 69.9921 12.1727C72.1983 12.1727 73.9922 13.9666 73.9922 16.1728C73.992 18.3789 72.198 20.1729 69.9921 20.1729Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_37">
                            <g id="Group_38">
                              <path
                                id="Vector_19"
                                d="M75.8098 28.1768H64.2059C60.788 28.1768 58.0078 30.8829 58.0078 34.2068V39.4788C58.0078 40.1927 58.3877 40.8527 59.0058 41.2108C62.3578 43.1507 66.1617 44.1768 70.0078 44.1768C73.8539 44.1768 77.6578 43.1507 81.0098 41.2108C81.6279 40.8548 82.0078 40.1927 82.0078 39.4809V34.2089C82.0078 30.8826 79.2277 28.1768 75.8098 28.1768ZM78.0077 38.2868C73.0298 40.7667 66.9858 40.7667 62.0077 38.2868V34.2089C62.0077 33.0888 62.9937 32.1768 64.2056 32.1768H75.8095C77.0215 32.1768 78.0075 33.0888 78.0075 34.2089L78.0077 38.2868Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_39">
                            <g id="Group_40">
                              <path
                                id="Vector_20"
                                d="M51.5288 20.8707C50.8109 20.0347 49.5488 19.9346 48.7088 20.6528L34.8488 32.5128C34.0088 33.2307 33.9108 34.4928 34.6287 35.3328C35.0248 35.7948 35.5847 36.0329 36.1486 36.0329C36.6087 36.0329 37.0706 35.8749 37.4487 35.5508L51.3087 23.6907C52.1489 22.9728 52.2469 21.7107 51.5288 20.8707Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_41">
                            <g id="Group_42">
                              <path
                                id="Vector_21"
                                d="M95.5922 52.9745L83.5922 36.9745C82.9301 36.0885 81.6762 35.9144 80.7921 36.5744C79.908 37.2365 79.7301 38.4904 80.392 39.3724L92.392 55.3724C92.786 55.8965 93.386 56.1724 93.994 56.1724C94.41 56.1724 94.8321 56.0423 95.1921 55.7723C96.0762 55.1104 96.2543 53.8565 95.5922 52.9745Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_43">
                            <g id="Group_44">
                              <path
                                id="Vector_22"
                                d="M79.1782 80.7911C78.5161 79.9071 77.2622 79.7292 76.3781 80.391L65.2062 88.769C64.3221 89.4311 64.1442 90.685 64.8061 91.567C65.2001 92.091 65.8001 92.3669 66.408 92.3669C66.8259 92.3669 67.2459 92.235 67.6062 91.9668L78.7781 83.5889C79.6622 82.9272 79.8403 81.6731 79.1782 80.7911Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_45">
                            <g id="Group_46">
                              <path
                                id="Vector_23"
                                d="M28.0001 96.1748H13.9999C12.896 96.1748 12 97.0687 12 98.1747C12 99.2807 12.896 100.175 13.9999 100.175H27.9998C29.1038 100.175 29.9998 99.2807 29.9998 98.1747C29.9998 97.0687 29.104 96.1748 28.0001 96.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_47">
                            <g id="Group_48">
                              <path
                                id="Vector_24"
                                d="M21.9923 0.174805C17.5802 0.174805 13.9922 3.76285 13.9922 8.17473C13.9922 12.5868 17.5802 16.1746 21.9921 16.1746C26.4042 16.1746 29.992 12.5866 29.992 8.17473C29.9923 3.76285 26.4042 0.174805 21.9923 0.174805ZM21.9923 12.1748C19.7864 12.1748 17.9923 10.3809 17.9923 8.17473C17.9923 5.96879 19.7862 4.17465 21.9923 4.17465C24.1983 4.17465 25.9924 5.96855 25.9924 8.17473C25.9922 10.3809 24.1983 12.1748 21.9923 12.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <g id="Group_49">
                            <g id="Group_50">
                              <path
                                id="Vector_25"
                                d="M21.9921 12.1748C20.8882 12.1748 19.9922 13.0687 19.9922 14.1747V28.1747C19.9922 29.2807 20.8882 30.1746 21.9921 30.1746C23.096 30.1746 23.992 29.2807 23.992 28.1747V14.1747C23.992 13.0687 23.096 12.1748 21.9921 12.1748Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_8232_1714">
                            <rect
                              width={120}
                              height={120}
                              fill="white"
                              transform="translate(0 0.174805)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h2 className="text-[20px]  text-white font-Outfit font-[200] pt-5">
                        Social Media
                      </h2>
                      <p className="text-[12px] text-white font-Outfit font-[200]">
                        We provide an always there approach to social media
                        marketing.this means posting timely and relavant content
                        for your audience to discover and engage with.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide w-[250px] bg-black pt-6">
                  {/*2nd one-*/}
                  <div className="rounded-md border-[1px] border-white h-[240px] w-[80%] md:w-[380px] p-[20px] ml-9">
                    <div className="flex-col">
                      <img
                        src="Images/review 1.svg"
                        className="h-[60px] pl-5"
                      />
                      <h2 className="text-[20px] font-[200] font-Outfit text-white pt-5">
                        Content Creation
                      </h2>
                      <p className="text-[12px] font-[200] text-white font-Outfit">
                        We craft scroll stopping content that is timely and
                        relevant for your audience to engage with.our team can
                        create anything from still images to custom branded
                        video content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide w-[250px] bg-black pt-6">
                  {/*-3rd one*/}
                  <div className="rounded-md border-[1px] border-white h-[240px] w-[80%] md:w-[380px] p-[20px] ml-9">
                    <div className="flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={120}
                        height={70}
                        viewBox="0 0 120 121"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <g id="prototype 1">
                          <g id="Outline">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M75 52.6748H84.375C84.8723 52.6748 85.3492 52.4773 85.7008 52.1256C86.0525 51.774 86.25 51.2971 86.25 50.7998C86.25 50.3025 86.0525 49.8256 85.7008 49.474C85.3492 49.1223 84.8723 48.9248 84.375 48.9248H75C74.5027 48.9248 74.0258 49.1223 73.6742 49.474C73.3225 49.8256 73.125 50.3025 73.125 50.7998C73.125 51.2971 73.3225 51.774 73.6742 52.1256C74.0258 52.4773 74.5027 52.6748 75 52.6748Z"
                                fill="white"
                              />
                              <path
                                id="Vector_2"
                                d="M114.375 48.9248C113.878 48.9248 113.401 49.1223 113.049 49.474C112.698 49.8256 112.5 50.3025 112.5 50.7998V112.675H16.875C15.0208 112.675 13.2082 112.125 11.6665 111.095C10.1248 110.065 8.9232 108.601 8.21363 106.887C7.50406 105.174 7.3184 103.289 7.68014 101.471C8.04187 99.6523 8.93476 97.9818 10.2459 96.6707C11.557 95.3596 13.2275 94.4667 15.046 94.1049C16.8646 93.7432 18.7496 93.9289 20.4627 94.6384C22.1757 95.348 23.6399 96.5496 24.67 98.0913C25.7002 99.633 26.25 101.446 26.25 103.3C26.25 103.797 26.4475 104.274 26.7992 104.626C27.1508 104.977 27.6277 105.175 28.125 105.175C28.6223 105.175 29.0992 104.977 29.4508 104.626C29.8025 104.274 30 103.797 30 103.3V52.6748H35.625C36.1223 52.6748 36.5992 52.4773 36.9508 52.1256C37.3025 51.774 37.5 51.2971 37.5 50.7998C37.5 50.3025 37.3025 49.8256 36.9508 49.474C36.5992 49.1223 36.1223 48.9248 35.625 48.9248H30V43.2998C30 39.8188 28.6172 36.4804 26.1558 34.019C23.6944 31.5576 20.356 30.1748 16.875 30.1748C13.394 30.1748 10.0556 31.5576 7.59422 34.019C5.13281 36.4804 3.75 39.8188 3.75 43.2998V103.3C3.75397 106.78 5.13805 110.116 7.59861 112.576C10.0592 115.037 13.3953 116.421 16.875 116.425H114.375C114.872 116.425 115.349 116.227 115.701 115.876C116.052 115.524 116.25 115.047 116.25 114.55V50.7998C116.25 50.3025 116.052 49.8256 115.701 49.474C115.349 49.1223 114.872 48.9248 114.375 48.9248ZM7.5 43.2998C7.5 40.8134 8.48772 38.4288 10.2459 36.6707C12.004 34.9125 14.3886 33.9248 16.875 33.9248C19.3614 33.9248 21.746 34.9125 23.5041 36.6707C25.2623 38.4288 26.25 40.8134 26.25 43.2998V94.1123C25.0291 92.863 23.5709 91.8703 21.9609 91.1925C20.351 90.5148 18.6218 90.1656 16.875 90.1656C15.1282 90.1656 13.399 90.5148 11.7891 91.1925C10.1791 91.8703 8.72086 92.863 7.5 94.1123V43.2998Z"
                                fill="white"
                              />
                              <path
                                id="Vector_3"
                                d="M90.1331 72.1223L93.1331 79.6223L97.6331 90.8723C97.772 91.2208 98.0122 91.5197 98.3227 91.7303C98.6333 91.9408 98.9998 92.0534 99.375 92.0534C99.7502 92.0534 100.117 91.9408 100.427 91.7303C100.738 91.5197 100.978 91.2208 101.117 90.8723L105.617 79.6223L108.617 72.1223C108.692 71.9219 108.732 71.7101 108.735 71.496C108.735 71.4717 108.75 71.451 108.75 71.4248V39.5498C108.75 39.0525 108.552 38.5756 108.201 38.224C107.849 37.8723 107.372 37.6748 106.875 37.6748C106.378 37.6748 105.901 37.8723 105.549 38.224C105.198 38.5756 105 39.0525 105 39.5498V69.5498H101.25V26.4248H105V32.0498C105 32.5471 105.198 33.024 105.549 33.3756C105.901 33.7273 106.378 33.9248 106.875 33.9248C107.372 33.9248 107.849 33.7273 108.201 33.3756C108.552 33.024 108.75 32.5471 108.75 32.0498V13.2998C108.75 10.8134 107.762 8.42883 106.004 6.67068C104.246 4.91252 101.861 3.9248 99.375 3.9248C96.8886 3.9248 94.504 4.91252 92.7459 6.67068C90.9877 8.42883 90 10.8134 90 13.2998V71.4248C90 71.451 90.0131 71.4717 90.015 71.4979C90.0181 71.7113 90.058 71.9225 90.1331 72.1223ZM97.6444 80.7998H101.106L99.375 85.1273L97.6444 80.7998ZM102.606 77.0498H96.1444L94.6444 73.2998H104.106L102.606 77.0498ZM97.5 69.5498H93.75V26.4248H97.5V69.5498ZM93.75 22.6748V18.9248H105V22.6748H93.75ZM93.75 13.2998C93.75 11.808 94.3426 10.3772 95.3975 9.32233C96.4524 8.26744 97.8832 7.6748 99.375 7.6748C100.867 7.6748 102.298 8.26744 103.352 9.32233C104.407 10.3772 105 11.808 105 13.2998V15.1748H93.75V13.2998Z"
                                fill="white"
                              />
                              <path
                                id="Vector_4"
                                d="M44.9874 40.8658V41.7677C43.8914 42.1495 42.9414 42.8629 42.2691 43.8091C41.5968 44.7552 41.2356 45.887 41.2356 47.0477C41.2356 48.2083 41.5968 49.3402 42.2691 50.2863C42.9414 51.2324 43.8914 51.9458 44.9874 52.3277V52.6783C44.9909 55.0497 45.7428 57.3595 47.136 59.2785C48.5291 61.1976 50.4925 62.6279 52.7462 63.3658C50.7435 65.3785 48.2283 66.805 45.473 67.4908L42.6137 68.207C40.4189 68.7494 38.499 70.077 37.2168 71.939C35.9346 73.801 35.379 76.0682 35.6552 78.312C35.9313 80.5558 37.02 82.6207 38.7154 84.1162C40.4108 85.6118 42.5954 86.4343 44.8562 86.4283H48.7374C49.2347 86.4283 49.7116 86.2307 50.0632 85.8791C50.4149 85.5275 50.6124 85.0506 50.6124 84.5533C50.6124 84.056 50.4149 83.5791 50.0632 83.2275C49.7116 82.8758 49.2347 82.6783 48.7374 82.6783H44.8562C43.5157 82.677 42.2219 82.1858 41.2183 81.2972C40.2147 80.4086 39.5705 79.1838 39.4069 77.8534C39.2433 76.5229 39.5716 75.1786 40.33 74.0733C41.0885 72.968 42.2247 72.178 43.5249 71.852L46.3843 71.1377C50.7285 70.0479 54.5589 67.4822 57.2199 63.8795C60.021 63.6318 62.628 62.3449 64.5281 60.272C66.4282 58.1991 67.4838 55.4903 67.4874 52.6783V52.3333C68.5834 51.9514 69.5335 51.238 70.2057 50.2919C70.878 49.3458 71.2392 48.2139 71.2392 47.0533C71.2392 45.8927 70.878 44.7608 70.2057 43.8147C69.5335 42.8686 68.5834 42.1551 67.4874 41.7733V40.8658C70.3982 38.2696 72.3164 34.7427 72.914 30.8884C73.5115 27.0342 72.7511 23.092 70.763 19.7364C70.5102 19.308 70.0975 18.9976 69.6157 18.8735C69.134 18.7493 68.6227 18.8217 68.1943 19.0745C67.7659 19.3274 67.4555 19.7401 67.3313 20.2218C67.2072 20.7036 67.2795 21.2149 67.5324 21.6433C69.143 24.3579 69.7169 27.5637 69.1483 30.6685C68.5796 33.7733 66.9068 36.5675 64.4387 38.5352C64.2198 38.7109 64.0431 38.9335 63.9217 39.1867C63.8004 39.4398 63.7374 39.7169 63.7374 39.9977V41.4283H62.0818L63.7262 26.6345C63.7609 26.3218 63.7163 26.0055 63.5966 25.7145C63.477 25.4236 63.286 25.1674 63.0414 24.9696C62.7967 24.7719 62.5062 24.6388 62.1966 24.5828C61.8871 24.5267 61.5684 24.5495 61.2699 24.6489L56.2374 26.327L51.2049 24.6489C50.9064 24.5495 50.5878 24.5267 50.2782 24.5828C49.9686 24.6388 49.6781 24.7719 49.4335 24.9696C49.1888 25.1674 48.9979 25.4236 48.8782 25.7145C48.7585 26.0055 48.714 26.3218 48.7487 26.6345L50.393 41.4283H48.7374V40.0033C48.7375 39.7226 48.6745 39.4454 48.5531 39.1923C48.4317 38.9392 48.2551 38.7165 48.0362 38.5408C45.4389 36.471 43.7239 33.4928 43.2374 30.2076C42.7508 26.9223 43.5291 23.5749 45.4149 20.8412C47.3008 18.1075 50.1537 16.1913 53.3976 15.4795C56.6415 14.7677 60.0346 15.3134 62.8918 17.0064C63.3202 17.2593 63.8315 17.3316 64.3132 17.2075C64.795 17.0833 65.2077 16.7729 65.4605 16.3445C65.7134 15.9161 65.7857 15.4048 65.6616 14.9231C65.5375 14.4413 65.2271 14.0286 64.7987 13.7758C61.194 11.6536 56.9293 10.9469 52.8327 11.7928C48.7362 12.6388 45.1002 14.977 42.631 18.3534C40.1618 21.7298 39.0356 25.9034 39.471 30.0637C39.9065 34.2239 41.8726 38.0739 44.9874 40.8658ZM56.2374 60.1783C54.2483 60.1783 52.3406 59.3881 50.9341 57.9816C49.5276 56.5751 48.7374 54.6674 48.7374 52.6783H63.7374C63.7374 54.6674 62.9472 56.5751 61.5407 57.9816C60.1342 59.3881 58.2265 60.1783 56.2374 60.1783ZM52.8005 29.1339L55.6449 30.0827C56.0295 30.2108 56.4453 30.2108 56.8299 30.0827L59.6743 29.1339L58.3093 41.4283H54.1749L52.8005 29.1339ZM52.4874 45.1783H65.6124C66.1097 45.1783 66.5866 45.3758 66.9382 45.7275C67.2899 46.0791 67.4874 46.556 67.4874 47.0533C67.4874 47.5506 67.2899 48.0275 66.9382 48.3791C66.5866 48.7307 66.1097 48.9283 65.6124 48.9283H46.8624C46.3651 48.9283 45.8882 48.7307 45.5366 48.3791C45.185 48.0275 44.9874 47.5506 44.9874 47.0533C44.9874 46.556 45.185 46.0791 45.5366 45.7275C45.8882 45.3758 46.3651 45.1783 46.8624 45.1783H52.4874Z"
                                fill="white"
                              />
                              <path
                                id="Vector_5"
                                d="M33.75 30.1748C34.7855 30.1748 35.625 29.3353 35.625 28.2998C35.625 27.2643 34.7855 26.4248 33.75 26.4248C32.7145 26.4248 31.875 27.2643 31.875 28.2998C31.875 29.3353 32.7145 30.1748 33.75 30.1748Z"
                                fill="white"
                              />
                              <path
                                id="Vector_6"
                                d="M78.75 30.1748C79.7855 30.1748 80.625 29.3353 80.625 28.2998C80.625 27.2643 79.7855 26.4248 78.75 26.4248C77.7145 26.4248 76.875 27.2643 76.875 28.2998C76.875 29.3353 77.7145 30.1748 78.75 30.1748Z"
                                fill="white"
                              />
                              <path
                                id="Vector_7"
                                d="M56.25 7.6748C57.2855 7.6748 58.125 6.83534 58.125 5.7998C58.125 4.76427 57.2855 3.9248 56.25 3.9248C55.2145 3.9248 54.375 4.76427 54.375 5.7998C54.375 6.83534 55.2145 7.6748 56.25 7.6748Z"
                                fill="white"
                              />
                              <path
                                id="Vector_8"
                                d="M35.8203 18.6736C36.1414 18.859 36.5103 18.945 36.8804 18.9208C37.2504 18.8965 37.605 18.7631 37.8992 18.5374C38.1934 18.3116 38.4141 18.0037 38.5333 17.6525C38.6525 17.3014 38.6649 16.9228 38.5689 16.5645C38.473 16.2063 38.2729 15.8846 37.9941 15.6401C37.7153 15.3956 37.3702 15.2393 37.0026 15.1908C36.6349 15.1424 36.2611 15.2042 35.9285 15.3682C35.5959 15.5322 35.3194 15.7912 35.134 16.1123C34.8854 16.543 34.818 17.0547 34.9467 17.5351C35.0754 18.0154 35.3896 18.4249 35.8203 18.6736Z"
                                fill="white"
                              />
                              <path
                                id="Vector_9"
                                d="M74.8046 41.1736C75.1258 41.359 75.4947 41.445 75.8648 41.4208C76.2348 41.3966 76.5894 41.2631 76.8836 41.0374C77.1778 40.8116 77.3985 40.5037 77.5177 40.1525C77.6369 39.8014 77.6493 39.4228 77.5533 39.0645C77.4573 38.7063 77.2573 38.3846 76.9785 38.1401C76.6997 37.8956 76.3546 37.7393 75.9869 37.6908C75.6193 37.6424 75.2455 37.7042 74.9129 37.8682C74.5803 38.0322 74.3038 38.2912 74.1184 38.6123C73.8698 39.043 73.8024 39.5547 73.9311 40.0351C74.0598 40.5154 74.374 40.9249 74.8046 41.1736Z"
                                fill="white"
                              />
                              <path
                                id="Vector_10"
                                d="M67.977 10.636C68.9772 10.3679 69.5708 9.33981 69.3028 8.33956C69.0348 7.33931 68.0067 6.74572 67.0064 7.01374C66.0062 7.28175 65.4126 8.30988 65.6806 9.31013C65.9486 10.3104 66.9767 10.904 67.977 10.636Z"
                                fill="white"
                              />
                              <path
                                id="Vector_11"
                                d="M76.6797 18.6736C77.0008 18.4882 77.2598 18.2117 77.4238 17.8791C77.5878 17.5465 77.6496 17.1727 77.6012 16.8051C77.5527 16.4374 77.3964 16.0923 77.1519 15.8135C76.9074 15.5347 76.5857 15.3347 76.2275 15.2387C75.8692 15.1427 75.4906 15.1551 75.1395 15.2743C74.7883 15.3935 74.4804 15.6142 74.2546 15.9084C74.0289 16.2026 73.8954 16.5572 73.8712 16.9272C73.847 17.2973 73.933 17.6662 74.1184 17.9874C74.3671 18.418 74.7766 18.7322 75.2569 18.8609C75.7373 18.9896 76.249 18.9222 76.6797 18.6736Z"
                                fill="white"
                              />
                              <path
                                id="Vector_12"
                                d="M38.3816 38.6123C38.1962 38.2912 37.9197 38.0322 37.5871 37.8682C37.2545 37.7042 36.8807 37.6424 36.5131 37.6908C36.1454 37.7393 35.8003 37.8956 35.5215 38.1401C35.2427 38.3846 35.0427 38.7063 34.9467 39.0645C34.8507 39.4228 34.8631 39.8014 34.9823 40.1525C35.1015 40.5037 35.3222 40.8116 35.6164 41.0374C35.9106 41.2631 36.2652 41.3966 36.6352 41.4208C37.0053 41.445 37.3742 41.359 37.6954 41.1736C38.126 40.9249 38.4402 40.5154 38.5689 40.0351C38.6976 39.5547 38.6303 39.043 38.3816 38.6123Z"
                                fill="white"
                              />
                              <path
                                id="Vector_13"
                                d="M45.9375 10.4314C46.2586 10.246 46.5176 9.96951 46.6816 9.63692C46.8457 9.30432 46.9074 8.93055 46.859 8.56288C46.8106 8.19521 46.6542 7.85015 46.4097 7.57133C46.1652 7.29252 45.8435 7.09248 45.4853 6.9965C45.1271 6.90052 44.7484 6.91292 44.3973 7.03213C44.0461 7.15134 43.7382 7.37201 43.5124 7.66623C43.2867 7.96044 43.1533 8.31499 43.129 8.68504C43.1048 9.05509 43.1908 9.42402 43.3762 9.74517C43.6249 10.1758 44.0344 10.49 44.5147 10.6187C44.9951 10.7474 45.5068 10.6801 45.9375 10.4314Z"
                                fill="white"
                              />
                              <path
                                id="Vector_14"
                                d="M65.618 101.425H73.118C73.6152 101.425 74.0922 101.227 74.4438 100.876C74.7954 100.524 74.993 100.047 74.993 99.5498V96.3979C75.6294 96.0978 76.2402 95.746 76.8192 95.3461L79.5455 96.9211C79.9761 97.1697 80.4879 97.2371 80.9682 97.1084C81.4485 96.9797 81.8581 96.6654 82.1067 96.2348L85.8567 89.7398C86.1053 89.3092 86.1727 88.7974 86.044 88.3171C85.9153 87.8367 85.6011 87.4272 85.1705 87.1786L82.448 85.6054C82.478 85.2511 82.493 84.9004 82.493 84.5498C82.493 84.1992 82.478 83.8486 82.448 83.4942L85.1705 81.9211C85.6011 81.6724 85.9153 81.2629 86.044 80.7826C86.1727 80.3022 86.1053 79.7905 85.8567 79.3598L82.1067 72.8648C81.8581 72.4342 81.4485 72.1199 80.9682 71.9912C80.4879 71.8625 79.9761 71.9299 79.5455 72.1786L76.8192 73.7536C76.2402 73.3536 75.6294 73.0018 74.993 72.7017V69.5498C74.993 69.0525 74.7954 68.5756 74.4438 68.224C74.0922 67.8723 73.6152 67.6748 73.118 67.6748H65.618C65.1207 67.6748 64.6438 67.8723 64.2921 68.224C63.9405 68.5756 63.743 69.0525 63.743 69.5498V72.7017C63.1065 73.0018 62.4957 73.3536 61.9167 73.7536L59.1905 72.1786C58.7598 71.9299 58.248 71.8625 57.7677 71.9912C57.2874 72.1199 56.8779 72.4342 56.6292 72.8648L52.8792 79.3598C52.6306 79.7905 52.5632 80.3022 52.6919 80.7826C52.8206 81.2629 53.1348 81.6724 53.5655 81.9211L56.288 83.4942C56.258 83.8486 56.243 84.1992 56.243 84.5498C56.243 84.9004 56.258 85.2511 56.288 85.6054L53.5655 87.1786C53.3505 87.3008 53.1618 87.4643 53.0103 87.6597C52.8588 87.8552 52.7475 88.0786 52.6827 88.3173C52.6179 88.5559 52.601 88.805 52.6328 89.0502C52.6647 89.2954 52.7448 89.5319 52.8684 89.746C52.992 89.9602 53.1568 90.1478 53.3532 90.298C53.5497 90.4482 53.7739 90.558 54.0129 90.6212C54.252 90.6844 54.5012 90.6997 54.7462 90.6662C54.9912 90.6327 55.2271 90.5511 55.4405 90.4261L59.243 88.2248C59.5784 88.0314 59.8458 87.7388 60.0083 87.3873C60.1708 87.0358 60.2204 86.6426 60.1505 86.2617C59.9304 85.131 59.9304 83.9686 60.1505 82.8379C60.2204 82.4571 60.1708 82.0638 60.0083 81.7123C59.8458 81.3608 59.5784 81.0683 59.243 80.8748L57.0567 79.6111L58.9317 76.3636L61.118 77.6273C61.4538 77.8212 61.8415 77.9063 62.2277 77.8707C62.6138 77.8351 62.9795 77.6806 63.2742 77.4286C64.1485 76.6822 65.1527 76.1031 66.2367 75.7204C66.6032 75.5923 66.9209 75.3536 67.1459 75.0372C67.3709 74.7208 67.4922 74.3424 67.493 73.9542V71.4248H71.243V73.9542C71.2432 74.3415 71.3634 74.7193 71.587 75.0355C71.8106 75.3518 72.1266 75.5911 72.4917 75.7204C73.5757 76.1031 74.5799 76.6822 75.4542 77.4286C75.7489 77.6806 76.1146 77.8351 76.5007 77.8707C76.8869 77.9063 77.2746 77.8212 77.6105 77.6273L79.7967 76.3636L81.6717 79.6111L79.493 80.8748C79.1575 81.0683 78.8901 81.3608 78.7276 81.7123C78.5652 82.0638 78.5155 82.4571 78.5855 82.8379C78.8055 83.9686 78.8055 85.131 78.5855 86.2617C78.5155 86.6426 78.5652 87.0358 78.7276 87.3873C78.8901 87.7388 79.1575 88.0314 79.493 88.2248L81.6792 89.4886L79.8042 92.7361L77.618 91.4723C77.2821 91.2784 76.8944 91.1934 76.5082 91.2289C76.1221 91.2645 75.7564 91.419 75.4617 91.6711C74.5874 92.4174 73.5832 92.9965 72.4992 93.3792C72.1341 93.5085 71.8181 93.7478 71.5945 94.0641C71.3709 94.3803 71.2507 94.7581 71.2505 95.1454V97.6748H67.493V95.1454C67.4927 94.7581 67.3726 94.3803 67.149 94.0641C66.9254 93.7478 66.6093 93.5085 66.2442 93.3792C65.1602 92.9965 64.156 92.4174 63.2817 91.6711C62.987 91.419 62.6213 91.2645 62.2352 91.2289C61.849 91.1934 61.4613 91.2784 61.1255 91.4723L57.3155 93.6736C57.1005 93.7958 56.9118 93.9593 56.7603 94.1547C56.6088 94.3502 56.4975 94.5736 56.4327 94.8123C56.3679 95.0509 56.351 95.3 56.3828 95.5452C56.4147 95.7904 56.4948 96.0269 56.6184 96.241C56.742 96.4552 56.9068 96.6428 57.1032 96.793C57.2997 96.9432 57.5239 97.053 57.7629 97.1162C58.002 97.1794 58.2512 97.1947 58.4962 97.1612C58.7412 97.1277 58.9771 97.0461 59.1905 96.9211L61.9167 95.3461C62.4957 95.746 63.1065 96.0978 63.743 96.3979V99.5498C63.743 100.047 63.9405 100.524 64.2921 100.876C64.6438 101.227 65.1207 101.425 65.618 101.425Z"
                                fill="white"
                              />
                              <path
                                id="Vector_15"
                                d="M75 84.5498C75 83.4373 74.6701 82.3498 74.052 81.4247C73.4339 80.4997 72.5554 79.7787 71.5276 79.353C70.4998 78.9272 69.3688 78.8158 68.2776 79.0329C67.1865 79.2499 66.1842 79.7857 65.3975 80.5723C64.6109 81.359 64.0751 82.3613 63.8581 83.4524C63.641 84.5436 63.7524 85.6746 64.1782 86.7024C64.6039 87.7302 65.3249 88.6087 66.2499 89.2268C67.1749 89.8449 68.2625 90.1748 69.375 90.1748C70.8668 90.1748 72.2976 89.5822 73.3525 88.5273C74.4074 87.4724 75 86.0416 75 84.5498ZM67.5 84.5498C67.5 84.179 67.61 83.8165 67.816 83.5081C68.022 83.1998 68.3149 82.9595 68.6575 82.8175C69.0001 82.6756 69.3771 82.6385 69.7408 82.7108C70.1045 82.7832 70.4386 82.9618 70.7008 83.224C70.9631 83.4862 71.1416 83.8203 71.214 84.184C71.2863 84.5477 71.2492 84.9247 71.1073 85.2673C70.9654 85.6099 70.725 85.9028 70.4167 86.1088C70.1084 86.3148 69.7458 86.4248 69.375 86.4248C68.8777 86.4248 68.4008 86.2273 68.0492 85.8756C67.6975 85.524 67.5 85.0471 67.5 84.5498Z"
                                fill="white"
                              />
                              <path
                                id="Vector_16"
                                d="M71.25 108.925H93.75C95.7391 108.925 97.6468 108.135 99.0533 106.728C100.46 105.322 101.25 103.414 101.25 101.425V97.6748C101.25 97.1775 101.052 96.7006 100.701 96.349C100.349 95.9973 99.8723 95.7998 99.375 95.7998C98.8777 95.7998 98.4008 95.9973 98.0492 96.349C97.6975 96.7006 97.5 97.1775 97.5 97.6748V101.425C97.5 102.419 97.1049 103.373 96.4017 104.076C95.6984 104.78 94.7446 105.175 93.75 105.175H71.25C70.7527 105.175 70.2758 105.372 69.9242 105.724C69.5725 106.076 69.375 106.553 69.375 107.05C69.375 107.547 69.5725 108.024 69.9242 108.376C70.2758 108.727 70.7527 108.925 71.25 108.925Z"
                                fill="white"
                              />
                              <path
                                id="Vector_17"
                                d="M37.5 101.425C37.5 102.537 37.8299 103.625 38.448 104.55C39.0661 105.475 39.9446 106.196 40.9724 106.622C42.0002 107.047 43.1312 107.159 44.2224 106.942C45.3135 106.725 46.3158 106.189 47.1025 105.402C47.8891 104.616 48.4249 103.613 48.6419 102.522C48.859 101.431 48.7476 100.3 48.3218 99.2722C47.8961 98.2444 47.1751 97.3659 46.2501 96.7478C45.3251 96.1297 44.2375 95.7998 43.125 95.7998C41.6332 95.7998 40.2024 96.3924 39.1475 97.4473C38.0926 98.5022 37.5 99.933 37.5 101.425ZM45 101.425C45 101.796 44.89 102.158 44.684 102.466C44.478 102.775 44.1851 103.015 43.8425 103.157C43.4999 103.299 43.1229 103.336 42.7592 103.264C42.3955 103.191 42.0614 103.013 41.7992 102.751C41.5369 102.488 41.3584 102.154 41.286 101.791C41.2137 101.427 41.2508 101.05 41.3927 100.707C41.5346 100.365 41.775 100.072 42.0833 99.8658C42.3916 99.6598 42.7542 99.5498 43.125 99.5498C43.6223 99.5498 44.0992 99.7473 44.4508 100.099C44.8025 100.451 45 100.928 45 101.425Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <h2 className="text-[20px] font-[200] text-white font-Outfit pt-3">
                        Conversion Driven
                      </h2>
                      <p className="text-[12px] text-white font-[200] font-Outfit">
                        We create conversion driven web experiences through
                        impactful design.we specialise in everything from new
                        websites builds to branded contest initiatives.
                      </p>
                    </div>
                  </div>
                </div>
                {/*--4th*/}
                <div className="swiper-slide w-[250px] bg-black pt-6">
                  <div className="rounded-md border-[1px] border-white h-[240px] w-[80%] md:w-[300px] lg:w-[295px] p-[20px] ml-9">
                    <div className="flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={120}
                        height={60}
                        viewBox="0 0 120 121"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <g id="copywriting 2" clipPath="url(#clip0_8350_1690)">
                          <path
                            id="Vector"
                            d="M20.4422 15.3203C22.9547 15.3203 25.0008 13.2789 25.0008 10.7688C25.0008 8.25625 22.957 6.21016 20.4422 6.21016C17.9297 6.21016 15.8836 8.25391 15.8836 10.7688C15.8836 13.2789 17.9297 15.3203 20.4422 15.3203ZM20.4422 9.95781C20.8898 9.95781 21.2531 10.3211 21.2531 10.7688C21.2531 11.2047 20.8828 11.5727 20.4422 11.5727C19.9945 11.5727 19.6312 11.2117 19.6312 10.7688C19.6312 10.3211 19.9945 9.95781 20.4422 9.95781ZM30.832 15.3203C33.3445 15.3203 35.3906 13.2789 35.3906 10.7688C35.3906 8.25625 33.3469 6.21016 30.832 6.21016C28.3195 6.21016 26.2734 8.25391 26.2734 10.7688C26.2758 13.2789 28.3195 15.3203 30.832 15.3203ZM30.832 9.95781C31.2797 9.95781 31.643 10.3211 31.643 10.7688C31.643 11.2117 31.2797 11.5727 30.832 11.5727C30.3937 11.5727 30.0211 11.2047 30.0211 10.7688C30.0234 10.3211 30.3867 9.95781 30.832 9.95781ZM41.2312 15.3203C43.7414 15.3203 45.7828 13.2789 45.7828 10.7688C45.7828 8.25625 43.7414 6.21016 41.2312 6.21016C38.7188 6.21016 36.6727 8.25391 36.6727 10.7688C36.6727 13.2789 38.7164 15.3203 41.2312 15.3203ZM41.2312 9.95781C41.6742 9.95781 42.0352 10.3211 42.0352 10.7688C42.0352 11.2117 41.6742 11.5727 41.2312 11.5727C40.7836 11.5727 40.4203 11.2117 40.4203 10.7688C40.4203 10.3211 40.7836 9.95781 41.2312 9.95781ZM50.8641 10.7688C50.8641 9.73281 51.7031 8.89609 52.7367 8.89609H99.1172C100.153 8.89609 100.99 9.73516 100.99 10.7688C100.99 11.8023 100.151 12.6414 99.1172 12.6414H52.7367C51.7031 12.6438 50.8641 11.8047 50.8641 10.7688ZM43.2234 45.1445C43.2234 44.1086 44.0625 43.2719 45.0961 43.2719H59.7117C60.7477 43.2719 61.5844 44.1109 61.5844 45.1445C61.5844 46.1781 60.7453 47.0172 59.7117 47.0172H45.0961C44.0625 47.0172 43.2234 46.1781 43.2234 45.1445ZM43.2234 54.4703C43.2234 53.4344 44.0625 52.5977 45.0961 52.5977H59.7117C60.7477 52.5977 61.5844 53.4367 61.5844 54.4703C61.5844 55.5039 60.7453 56.343 59.7117 56.343H45.0961C44.0625 56.3453 43.2234 55.5063 43.2234 54.4703ZM43.2234 63.7984C43.2234 62.7625 44.0625 61.9258 45.0961 61.9258H79.3594C80.3953 61.9258 81.232 62.7648 81.232 63.7984C81.232 64.832 80.393 65.6711 79.3594 65.6711H45.0961C44.0625 65.6734 43.2234 64.8344 43.2234 63.7984ZM43.2234 73.1266C43.2234 72.0906 44.0625 71.2539 45.0961 71.2539H79.3594C80.3953 71.2539 81.232 72.093 81.232 73.1266C81.232 74.1602 80.393 74.9992 79.3594 74.9992H45.0961C44.0625 75.0016 43.2234 74.1625 43.2234 73.1266ZM43.2234 82.4547C43.2234 81.4188 44.0625 80.582 45.0961 80.582H78.8531C79.8891 80.582 80.7258 81.4211 80.7258 82.4547C80.7258 83.4883 79.8867 84.3273 78.8531 84.3273H45.0961C44.0625 84.3273 43.2234 83.4883 43.2234 82.4547ZM73.1391 91.7828C73.1391 92.8187 72.3 93.6555 71.2664 93.6555H45.0961C44.0602 93.6555 43.2234 92.8164 43.2234 91.7828C43.2234 90.7492 44.0625 89.9102 45.0961 89.9102H71.2664C72.3 89.9078 73.1391 90.7469 73.1391 91.7828ZM71.6508 101.111C71.6508 102.147 70.8117 102.984 69.7781 102.984H45.0961C44.0602 102.984 43.2234 102.145 43.2234 101.111C43.2234 100.077 44.0625 99.2383 45.0961 99.2383H69.7781C70.8141 99.2359 71.6508 100.075 71.6508 101.111ZM114.846 70.9961C114.848 69.7914 114.347 68.5984 113.47 67.7219L111.72 65.9711V9.21484C111.72 4.23203 107.667 0.179688 102.684 0.179688H14.1914C9.20859 0.179688 5.15625 4.23203 5.15625 9.21484V91.0328C5.15625 96.0156 9.20859 100.068 14.1914 100.068H25.4062V114.365C25.4062 117.566 28.0102 120.17 31.2141 120.17H78.0844C81.2906 120.17 83.8969 117.566 83.8969 114.365V112.598H85.6641C88.8703 112.598 91.4766 109.989 91.4766 106.785V100.068H102.684C107.667 100.068 111.72 96.0156 111.72 91.0328V75.843L113.651 73.9117C114.42 73.15 114.844 72.1141 114.846 70.9961ZM85.132 97.1312L81.3937 93.393L90.8836 83.9055C90.9117 83.8773 90.9398 83.8516 90.968 83.8211L103.076 71.7156L106.812 75.4516L85.132 97.1312ZM79.9359 97.2344L81.2953 98.5938L79.6242 98.9055L79.9359 97.2344ZM71.8242 40.0539L85.0734 53.3078H71.8242V40.0539ZM108.157 67.7078L108.457 68.0078C108.502 68.057 108.546 68.1016 108.595 68.1461L110.822 70.3727C110.995 70.5461 111.101 70.7781 111.101 70.9914C111.101 71.0711 111.084 71.1836 111.009 71.2586L109.465 72.8031L105.729 69.0672L107.278 67.518C107.348 67.4453 107.461 67.4313 107.541 67.4313C107.752 67.4313 107.981 67.5344 108.157 67.7078ZM14.1914 3.925H102.687C105.602 3.925 107.974 6.29688 107.974 9.2125V17.6125H8.90156V9.21484C8.90156 6.29922 11.2734 3.925 14.1914 3.925ZM14.1914 96.3203C11.2758 96.3203 8.90391 93.9484 8.90391 91.0328V21.3602H107.974V63.707C107.831 63.693 107.686 63.6836 107.541 63.6836C107.538 63.6836 107.536 63.6836 107.534 63.6836C106.416 63.6859 105.382 64.1102 104.623 64.8719L91.4766 78.0133V57.0672C91.4766 55.3305 90.825 53.7602 89.5922 52.5273L72.6047 35.5352C71.3695 34.3094 69.8016 33.6625 68.0695 33.6625H38.7914C35.5898 33.6625 32.9859 36.2664 32.9859 39.468V41.2352H31.2117C28.0102 41.2352 25.4039 43.8438 25.4039 47.0477V96.318H14.1914V96.3203ZM80.1492 114.365C80.1492 115.502 79.2234 116.425 78.082 116.425H31.2117C30.075 116.425 29.1516 115.502 29.1516 114.365V47.05C29.1516 45.9109 30.075 44.9828 31.2117 44.9828H32.9859V106.783C32.9859 109.989 35.5898 112.595 38.7914 112.595H80.1492V114.365ZM85.6641 108.85H38.7914C37.657 108.85 36.7312 107.922 36.7312 106.783V39.4703C36.7312 38.3336 37.6547 37.4102 38.7914 37.4102H68.0695H68.0836C68.0789 37.4617 68.0766 37.5156 68.0766 37.5695V55.1828C68.0766 56.2164 68.9156 57.0555 69.9492 57.0555H87.7266V57.0695V81.7609L77.5125 91.9727C77.1937 92.2914 76.9828 92.6828 76.8867 93.1375C76.8844 93.1539 76.8797 93.1703 76.8773 93.1867L75.5836 100.12C75.4336 100.905 75.6844 101.704 76.2586 102.271C76.718 102.735 77.3297 102.988 77.9578 102.988C78.1055 102.988 78.2508 102.974 78.3984 102.946L85.3406 101.65C85.357 101.648 85.3734 101.643 85.3898 101.641C85.8305 101.547 86.2312 101.331 86.5476 101.015L87.7266 99.8359V106.785C87.7289 107.924 86.8031 108.85 85.6641 108.85ZM107.972 91.0328C107.972 93.9484 105.6 96.3203 102.684 96.3203H91.4766V96.0859L107.972 79.5906V91.0328Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_8350_1690">
                            <rect
                              width={120}
                              height={120}
                              fill="white"
                              transform="translate(0 0.174805)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <h2 className="text-[20px] text-white font-Outfit font-[200] pt-5">
                        Design and Copywriting
                      </h2>
                      <p className="text-[12px] font-[200] font-Outfit text-white">
                        We design brands that connect to audience through shared
                        culture and values.we use the power of creativity and
                        storytelling to solve problems and deliver results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden">
          <div className="bg-[#111111]">
            <div className="flex flex-row" />
            <div className="bg-[#000000] flex flex-col justify-between lg:p-4">
              <div className="flex flex-row ml-6 lg:m-9">
                <hr className="w-[25px] mt-[52px] lg:mt-[60px] border-1 text-[#ffffff]" />
                <h1 className="text-white text-[28px] md:text-[48px] font-Outfit font-[200] p-5 flex-wrap">
                  <span className="font-extralight"> </span>Our Projects
                </h1>
              </div>
              <hr className="border-t-2 border-t-gray-700 m-9 mb-9 w-[85%] lg:w-[95%]" />
              <div className="h-[2px] mt-0 m-9 lg:py-[50px] relative group grid grid-cols-12">
                <div className="col-span-6 md:col-span-8 flex flex-row group-hover:transition duration-300">
                  <p className="text-white font-[300] text-[12px] md:text-[15px] 2xl:text-[21px] font-Outfit pt-1 md:pt-3 2xl:pt-5 pr-2">
                    01
                  </p>
                  <h1 className="text-white text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[50px] font-Outfit font-[200]">
                    North Air
                  </h1>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <h1 className="text-white text-[10px] md:text-[14px] lg:text-[20px] 2xl:text-[37px] font-Outfit font-[200] md:p-5 pt-2 md:pt-0">
                    Digital Presence Management
                  </h1>
                </div>
                <div className="absolute hidden lg:block top-[-60px] right-0 translate-x-[100%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                  <img
                    src="images/ourProjects3.png "
                    className="h-[400px] w-[600px]"
                  />
                </div>
              </div>
              <hr className="border-t-2 border-t-gray-700 m-9 mb-2 w-[85%] lg:w-[95%]" />
              {/*--2*/}
              <div className="h-[2px] m-9 lg:py-[50px] relative group grid grid-cols-12">
                <div className="col-span-6 md:col-span-8 flex flex-row group-hover:transition duration-300">
                  <p className="text-white font-[300] text-[12px] md:text-[15px] 2xl:text-[21px] font-Outfit pt-1 md:pt-3 2xl:pt-5 pr-2">
                    02
                  </p>
                  <h1 className="text-white text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[50px] font-Outfit font-[200]">
                    Kensho
                  </h1>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <h1 className="text-white text-[10px] md:text-[14px] lg:text-[20px] 2xl:text-[37px] font-Outfit font-[200] md:p-5 pt-2 md:pt-0">
                    Campaign Management
                  </h1>
                </div>
                <div className="absolute hidden lg:block top-[-65px] right-0 translate-x-[100%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                  <img
                    src="images/ourProjects2.jpg "
                    className="h-[400px] w-[600px]"
                  />
                </div>
              </div>
              <hr className="border-t-2 border-t-gray-700 m-9 mb-9 w-[85%] lg:w-[95%]" />
              <div className="h-[2px] m-4 mb-9 mx-9 lg:py-[50px] relative group grid grid-cols-12">
                <div className="col-span-6 md:col-span-8 flex flex-row group-hover:transition duration-300">
                  <p className="text-white font-[300] text-[12px] md:text-[15px] 2xl:text-[21px] font-Outfit pt-1 md:pt-3 2xl:pt-5 pr-2">
                    03
                  </p>
                  <h1 className="text-white text-[20px] md:text-[25px] lg:text-[30px] 2xl:text-[50px] font-Outfit font-[200]">
                    Pure Scythe
                  </h1>
                </div>
                <div className="col-span-6 md:col-span-4">
                  <h1 className="text-white text-[10px] md:text-[14px] lg:text-[20px] 2xl:text-[37px] font-Outfit font-[200] md:p-5 pt-2 md:pt-0">
                    Digital and Data Analytics
                  </h1>
                </div>
                <div className="absolute hidden lg:block top-[-65px] right-0 translate-x-[100%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                  <img
                    src="images/ourProjects1.jpg "
                    className="h-[400px] w-[600px]"
                  />
                </div>
              </div>
              <div className="border-t-2 border-t-gray-700 h-[2px] m-9 pt-9">
                <button className="w-[130px] text-center h-[39px] text-sm 2xl:w-[190px] 2xl:text-[24px] font-[200] font-Outfit text-white bg-[#6101eb] hover:bg-[#fff] hover:text-black">
                  More Projects
                </button>
              </div>
              <div className="bg-[#000000] mt-12">
                <div className="relative justify-center items-center h-[500px]">
                  <video
                    className="w-full h-[441px] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="images/careers-video.mp4"
                      type="video/mp4"
                      //   text="HEllo"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex flex-col justify-center items-center background h-[450px]">
                    <h1 className="sm:text-lg md:text-4xl text-white font-Outfit font-[200] mb-4">
                      We would love to meet you
                    </h1>
                    <button className="w-[183px] text-center h-[46px] mt-1 text-white bg-[#fe0078]">
                      <div className="flex flex-row font-[300] font-Outfit p-2">
                        Explore Our Opening
                        <span>
                          <img
                            src="images/top-arrow.svg"
                            className="h-[24px] w-[10px] ml-1"
                          />
                        </span>
                      </div>
                    </button>
                    <h1 className="sm:text-lg md:text-2xl text-white font-Outfit font-[200] mt-2">
                      Want to join our team ?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
