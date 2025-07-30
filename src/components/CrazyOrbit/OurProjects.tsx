import Navbar from "./nav";
import Footer from "./Footer";

const OurProjects = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" bg-black text-white px-6 py-16 relative space-y-24">
        {/* JOIN THE TEAM Heading */}

        <div
          className="gradient-outline  py-4"
          style={{
            WebkitTextStroke: "2px transparent",
            background: "linear-gradient(to right, #ff0000, #00ff00, #0000ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "#1a202c",
            fontSize: "6rem",
            fontWeight: "bold",
          }}
        >
          OUR PROJECTS
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">UI / UX Design</h3>
              <h2 className="text-2xl font-bold">Spotify Streams</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">DESIGN + DEVELOPMENT</h3>
              <h2 className="text-2xl font-bold">E-Commerce</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">UI / UX Design</h3>
              <h2 className="text-2xl font-bold">OneLaunch</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">UI / UX Design</h3>
              <h2 className="text-2xl font-bold">Easy Order</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">DESIGN + DEVELOPMENT</h3>
              <h2 className="text-2xl font-bold">Padron Wedding</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                {/* <div className="position-Img">
                  <img src="./Our Projects in Web Brilliance - CrazyOrbit_files/circle1.svg"/>
                  <span><img src="./Our Projects in Web Brilliance - CrazyOrbit_files/arrow1.svg"/></span>
                </div> */}
              <h3 className="text-lg font-semibold">UI / UX Design</h3>
              <h2 className="text-2xl font-bold">MinimalUI</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProjects;
