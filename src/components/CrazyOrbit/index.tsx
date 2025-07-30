export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a2f] to-black text-white relative pb-20">
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
          <a href="/about" className="text-pink-400 border-b-2 border-pink-400">
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
      <div className="h-20"></div>
      <div className="max-w-2xl mx-auto text-center space-y-3 py-12 px-4">
        <h1 className="text-2xl md:text-5xl font-semibold  mb-7">
          About{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            CrazyOrbit
          </span>
        </h1>

        <p className="max-w-4xl mx-auto text-2xl text-gray-400">
          Focused, tailored, profit-oriented web design solutions.
        </p>
      </div>

      <div className="flex justify-center pb-16 px-4">
        <img
          src="https://crazyorbit-dev.netlify.app/img/Crazy%20Orbit%20Updated%20Images/About%20Us/about-banner.webp"
          alt="CrazyOrbit Page Screenshots"
          className="rounded-lg shadow-2xl w-full max-w-5xl transform rotate-[-6deg]"
        />
      </div>
      <p className="max-w-4xl mx-auto text-center text-gray-400 px-4 pb-16">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          CrazyOrbit
        </span>{" "}
        is a global integrated communications and marketing company that helps
        businesses take their online presence to the next level. Our team of
        experienced professionals is committed to helping our clients reach
        their goals and maximize their ROI. We offer a wide range of services,
        such as website design, SEO, social media marketing, content marketing,
        and more. Our passion is to help our clients succeed, and we strive to
        provide the highest quality service possible. With our expertise, your
        business will be able to reach its target audience and make a lasting
        impression.
      </p>
      <section className="relative max-w-600 mx-auto px-4 pb-16 overflow-hidden flex flex-col items-center justify-center">
        <h2
          className="whitespace-nowrap font-extrabold select-none leading-none text-transparent pointer-events-none tracking-tight
                 text-[6rem] md:text-[10rem] lg:text-[10rem]"
          style={{
            WebkitTextStroke: "1px #6b21a8",
          }}
        >
          OUR PROCESS
        </h2>
        <h2 className="absolute text-3xl md:text-4xl font-normal leading-[150%] text-center text-white top-20 left-1/2 transform -translate-x-1/2 ">
          Our Process
        </h2>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 ">
          {[
            {
              number: "01",
              title: "Research",
              desc: "Project Goals / The Audience / Industry",
            },
            {
              number: "02",
              title: "Prototyping",
              desc: "Project Architecture / User Flow / Copywriting",
            },
            {
              number: "03",
              title: "Design",
              desc: "Design Concept / Idea / Layout",
            },
            {
              number: "04",
              title: "Development",
              desc: "Tune Up / Technical Implementation / Guidebook / UI Kit",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center  gap-2 bg-gradient-to-br from-purple-00 to-purple-900 rounded-4xl p-6 text-white shadow-lg border border-purple-700 h-60"
            >
              <div className="flex items-start gap-3 justify-center">
                <div className="flex text-purple-500 text-lg">
                  {item.number}
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-xl">{item.title}</div>
                  <div className="text-gray-300 text-sm">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center text-left pb-16 w-[90%] mx-auto">
        <div>
          <h3 className=" grid md:text-5xl font-light ">
            LET’S TAKE YOUR
            <span className="mt-3 mb-3">
              {" "}
              BUSINESS TO THE <span className="font-bold">NEXT</span>
            </span>{" "}
            LEVEL
          </h3>
          <div className="flex ml-[35%]">
            <a
              href="/#"
              className="relative inline-flex flex-col items-center justify-center w-32 h-32 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-medium transition-transform hover:scale-105"
            >
              <p className="text-base md:text-2xl text-center leading-tight">
                Start
                <br />
                <span>project</span>
                <br />
                <span className="text-lg ">&#8599;</span>
              </p>
            </a>
          </div>
        </div>
        <div className="relative ml-100 mx-auto w-33 h-60 rounded-full bg-gradient-to-b from-purple-600 to-black">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-25 h-25 bg-white rounded-full shadow-xl" />
          <div className="absolute -top-14 left-1/2 -translate-x-1/3 w-50 h-100">
            <img
              src="/images/hand-pointer.png"
              alt="3D Hand Pointer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <div className="flex items-center gap-100 mx-auto w-[90%]">
        <p className="text-4xl font-bold ">Get To Know Us</p>
        <p>
          We are a UX/UI company driven by a passion for creating the best
          possible digital experiences. We have gathered
          <br />
          a team of highly talented individuals to help us design the world we
          want to live in. Our mission is to develop user <br />
          interfaces and experiences that are intuitive, efficient, and
          beautiful. We strive to make the digital world a better <br />
          place, one product at a time.
        </p>
      </div>

      <section className="bg-black py-12">
        <div className="w-[94%] mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex gap-3">
            {/* Left Column */}
            <div className="flex-[4] flex flex-col gap-4 w-[80%] h-[60%]">
              <div className="rounded-4xl overflow-hidden w-full h-full">
                <img
                  src="/images/working-womens.webp"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 w-[90%] mx-auto h-[70%]">
                <div className="flex-1 rounded-4xl bg-blue-900 text-white text-base leading-relaxed text-center flex items-center justify-center py-16 px-5">
                  Your Website
                  <br />
                  Should Be
                  <br />
                  Making Your
                  <br />
                  business Money.
                </div>
                <div className="flex-1 rounded-4xl bg-pink-800 text-white text-base leading-relaxed text-center flex items-center justify-center px-6 h-45">
                  If it
                  <br />
                  Doesn't, we Can
                  <br />
                  Help
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex-[6] flex gap-4">
              <div className="flex items-center mb-12">
                {/* Robot */}
                <div className="flex-3 rounded-4xl overflow-hidden self-end h-[70%]">
                  <img
                    src="/images/robo-block.webp"
                    alt="Robot"
                    className="h-full object-cover"
                  />
                </div>
                {/* Right Content */}
                <div className="flex-[6] flex flex-col gap-4 mt-45">
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-3xl bg-teal-700 text-white text-lg leading-relaxed text-center flex items-center justify-center p-6 h-60  w-full mt-50">
                      we are curious
                      <br />
                      and fearless
                      <br />
                      pioneers.
                    </div>
                    <div className="flex-1 rounded-3xl overflow-hidden">
                      <img
                        src="/images/lady-block.webp"
                        alt="Woman Standing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-[4] rounded-3xl overflow-hidden">
                      <img
                        src="/images/small-block.webp"
                        alt="Workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-[8] rounded-3xl overflow-hidden">
                      <img
                        src="/images/programme.png"
                        alt="Code Screen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-[2] flex flex-col  mt-20">
              <div className="rounded-3xl bg-purple-700 text-white text-base leading-relaxed text-center flex items-center justify-center p-4 h-30 mb-40">
                New ideas
                <br />
                move the world
              </div>
              <div className="rounded-3xl bg-pink-600 text-white text-base leading-relaxed text-center flex items-center justify-center p-4 h-100">
                We are dependable
                <br />
                because we
                <br />
                hold
                <br />
                ourselves accountable.
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/images/working-womens.webp"
                alt="Team Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/robo-block.webp"
                alt="Robot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-3xl bg-purple-700 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
              New ideas
              <br />
              move the world
            </div>
            <div className="col-span-2 aspect-[3/2] rounded-3xl bg-teal-700 text-white text-base leading-relaxed text-center flex items-center justify-center p-6">
              we are curious
              <br />
              and fearless
              <br />
              pioneers.
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/lady-block.webp"
                alt="Woman Standing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-3xl bg-pink-600 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
              We are dependable
              <br />
              because we hold
              <br />
              ourselves accountable.
            </div>
            <div className="aspect-square rounded-3xl bg-blue-900 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
              Your Website
              <br />
              Should Be
              <br />
              Making Your
              <br />
              business Money.
            </div>
            <div className="aspect-square rounded-3xl bg-pink-800 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
              If it
              <br />
              Doesn't, we Can
              <br />
              Help
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/small-block.webp"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/programme.png"
                alt="Code Screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-6 md:px-20 py-16 space-y-16 mx-w-auto ">
        {/* Section Title */}
        <h2 className=" md:text-5xl font-light">
          <span className="text-pink-500 font-medium">Values.</span>
          <span className="text-sky-400">Are we a fit?</span>
        </h2>

        {/* Mission Block */}
        <div className="md:flex md:space-x-80 ">
          <h3 className="min-w-[150px] text-lg md:text-xl font-light mb-4 md:mb-0">
            Our Mission
          </h3>
          <p className="text-base text-gray-300 max-w-3xl">
            To empower marketing teams with a future-proof and scalable website,
            enabling them to become independent of their IT departments.
          </p>
        </div>

        {/* What You Can Expect */}
        <div className="md:flex md:space-x-70">
          <h3 className="min-w-[150px] text-lg md:text-xl font-light mb-6 md:mb-0">
            What You Can Expect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-gray-300 max-w-5xl">
            {/* Card 1 */}
            <div>
              <h4 className="text-teal-400 text-lg font-semibold mb-2">
                A strategic mindset
              </h4>
              <p>
                We’re passionate about crafting creative solutions that are
                tailored to your unique marketing objectives, utilising the best
                design and technical approaches.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <h4 className="text-teal-400 text-lg font-semibold mb-2">
                Human-centered design
              </h4>
              <p>
                We’ll use creative UX, distinctive UI and impactful animations
                to craft you a website that stands out from the crowd and sets
                new standards in your industry.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <h4 className="text-teal-400 text-lg font-semibold mb-2">
                Scalable performance
              </h4>
              <p>
                We provide websites with scalable performance, so you can easily
                add new content and updates without waiting for a week. Our
                websites are designed to grow with your content marketing needs,
                so you can keep up with the latest trends and stay ahead of the
                competition.
              </p>
            </div>

            {/* Card 4 */}
            <div>
              <h4 className="text-teal-400 text-lg font-semibold mb-2">
                T-shaped knowledge
              </h4>
              <p>
                Our focus may be on crafting websites, but our T-shaped
                knowledge in disciplines like SEO, digital marketing, and other
                related fields mean they all come together to create a holistic,
                comprehensive approach.
              </p>
            </div>
          </div>
        </div>

        {/* Focus Statement */}
        <h2 className="text-2xl md:text-5xl font-light text-center mt-30 ">
          <span className="text-pink-500 font-medium">Focus</span>
          <span className="text-blue-400">.</span>
          <span className="text-white"> on scaling creativity, driven by</span>
          <br />
        </h2>
        <h2 className="ext-2xl md:text-5xl font-light text-center ">
          strategic thinking
        </h2>
        <div className="flex items-center justify-center ">
          <img
            src="/images/focus.svg"
            alt="Workspace"
            className=" object-cover w-[45%]"
          />
        </div>
      </section>
      <section className="relative bg-black text-white py-20 px-4">
        {/* Faint background heading */}
        <div className="relative z-10 text-center mb-12">
          <p className="text-xl md:text-5xl font-light leading-snug">
            Three reasons you should contact
          </p>
          <h2 className="text-3xl md:text-6xl font-bold text-pink-500 mt-2">
            CrazyOrbit
          </h2>
        </div>

        <h1 className="top-10 text-[7vw] opacity-12 z-0 text-center ">
          WHICH ONE DO YOU NEED?
        </h1>

        {/* Section Titles */}

        {/* Card container */}
        <div className=" max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-40 h-90 w-[80%] ">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6  flex flex-col justify-center"
            style={{ backgroundImage: "url('/images/background.webp')" }}
          >
            <div className="relative mb-4">
              <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full animate-spin-slow"></div>
              <img
                src="/images/circle-3.webp"
                alt="Reason 1"
                className="relative z-10 mx-auto w-16 h-16 object-cover rounded-md"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              “I need to clean up my website, but I need people to see it.”
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6  flex flex-col justify-center"
            style={{ backgroundImage: "url('/images/background.webp')" }}
          >
            <div className="relative mb-4">
              <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full "></div>
              <img
                src="/images/circle-2.webp"
                alt="Reason 2"
                className="relative z-10 mx-auto w-50 h-50 object-cover rounded-md"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              “I have something to sell and need to make it available online.”
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6  flex flex-col justify-center"
            style={{ backgroundImage: "url('/images/background.webp')" }}
          >
            <div className="relative mb-4">
              <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"></div>
              <img
                src="/images/Circle-1.webp"
                alt="Reason 3"
                className="relative z-10 mx-auto w-16 h-16 object-cover rounded-md"
              />
            </div>
            <p className="text-white text-sm leading-relaxed">
              “I have nothing. Give me a basic, simple online presence that
              showcases my business.”
            </p>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="relative z-10 text-center mt-14">
          <a
            href="#schedule"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            SCHEDULE A CALL
          </a>
        </div>

        {/* Custom Spin Animation */}
      </section>
    </div>
  );
}
