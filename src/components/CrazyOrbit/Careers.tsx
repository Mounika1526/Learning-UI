import Navbar from "./nav";
import Footer from "./Footer";

const positions = [
  {
    title: "Data Engineer - Machine Learning and Data Analytics",
    location: "Remote and customer location when required",
  },
  {
    title: "Operations Software Engineer",
    location: "Remote and customer location when required",
  },
  {
    title: "Platform Engineer - Amazon Connect",
    location: "Remote and customer location when required",
  },
  {
    title: "Platform Engineer - Operations ",
    location: "Remote and customer location when required",
  },
];

const Careers = () => {
  return (
    <div className="space-y-20">
      <div>
        <Navbar />
      </div>
      <div className=" bg-black text-white px-6 py-16 relative">
        {/* JOIN THE TEAM Heading */}

        <div
          className="gradient-outline  py-4"
          style={{
            WebkitTextStroke: "2px transparent",
            background: "linear-gradient(to right, #ff0000, #00ff00, #0000ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "#1a202c",
            fontSize: "8rem",
            fontWeight: "bold",
          }}
        >
          JOIN THE TEAM
        </div>
        <div className="text-2xl md:text-3xl font-light mb-16 max-w-3xl">
          <p>
            For exciting projects on the latest platforms.
            <br />
            We value individual freedom.
            <br />
            Contact us to learn more.
          </p>
        </div>

        {/* Bubble and Down Arrow stacked */}
        <div className="absolute right-10 top-40 md:top-24 flex flex-col items-center gap-8">
          <img src="images/buble.png" alt="CrazyOrbit Logo" className="h-34" />
          <div className="w-20 h-25 border border-white rounded-full flex items-center justify-center">
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14m0 0l-7-7m7 7l7-7" />
            </svg>
          </div>
        </div>
        {/* Positions */}
        <div className="mt-24">
          <h2 className="text-pink-500 text-lg mb-8 tracking-widest">
            POSITIONS
          </h2>
          <div className="space-y-12">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-8"
              >
                <div className="text-2xl md:text-3xl font-light mb-2 md:mb-0">
                  {pos.title}
                </div>
                <div className="text-right">
                  <div className="uppercase text-xs text-gray-400 tracking-widest mb-1">
                    LOCATION
                  </div>
                  <div className="text-base text-gray-200">{pos.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
