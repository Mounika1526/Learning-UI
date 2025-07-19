import { Edit2 } from "lucide-react";
import { Pill, MapPin, Package } from "lucide-react";
import { useEffect } from "react";
const images = [
  { id: 1, url: "/images/_categories_category_1.png", name: "Medicine" },
  {
    id: 2,
    url: "/images/_categories_category_2.png",
    name: "Women Care",
  },
  {
    id: 3,
    url: "/images/_categories_category_3.png",
    name: "Health & Nutrition",
  },
  { id: 4, url: "/images/_categories_category_4.png", name: "Proteins" },
  {
    id: 5,
    url: "/images/_categories_category_5.png",
    name: "Home Essentials",
  },
  { id: 6, url: "/images/_categories_category_6.png", name: "Ayurveda" },
  {
    id: 7,
    url: "/images/_categories_category_7.png",
    name: "Personal Care",
  },
  { id: 8, url: "/images/_categories_category_8.png", name: "Offers" },
];

const shop = [
  { id: 1, url: "/images/image_1.svg", name: "Skin care" },
  { id: 2, url: "/images/image_2.svg", name: "Vitamins" },
  { id: 3, url: "/images/image_3.svg", name: "Diabetes Care & Sugar" },
  { id: 4, url: "/images/image_4.svg", name: "Cardiac Care" },
  { id: 5, url: "/images/image_5.svg", name: "Baby & Mom Care" },
];

const feature = [
  {
    id: 1,
    url: "/images/_feature-brands_product_1.png",
    name: "Dettol",
    class: "bg-red-200",
  },
  {
    id: 2,
    url: "/images/_feature-brands_product_2.png",
    name: "Stayfree",
    class: "bg-blue-200",
  },
  {
    id: 3,
    url: "/images/_feature-brands_product_5.png",
    name: "Ensure",
    class: "bg-orange-200",
  },
  {
    id: 4,
    url: "/images/_feature-brands_product_6.png",
    name: "Protinex",
    class: "bg-yellow-100",
  },
];

export function YodhaPharmacy() {
  useEffect(() => {
    localStorage.setItem("isAuth", "true");
  });
  return (
    <div className="h-screen overflow-x-hidden ">
      <div className="flex flex-col sticky top-0 z-40 bg-white">
        <div className="flex items-center justify-between p-6 font-normal">
          <img src="/images/company-logo.svg" className="h-10" />
          <div className="flex items-center gap-3">
            <img src="/images/testing-tube.svg" className="w-5 h-5" />
            <p className="text-orange-400 text-sm">Lab Tests</p>
            <img src="/images/wishList.svg" className="w-5 h-5" />
            <p className="text-sm">Wishlist</p>
            <img src="/images/shopping-cart.svg" className="w-5 h-5" />
            <img src="/images/login-user.svg" className="w-5 h-5" />
            <p>Login</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-14 justify-center py-3">
          <p>Yoda Products</p>
          <p>Lab Tests</p>
          <p>Health & Nutrition</p>
          <p>Women Care</p>
          <p>Personal Care</p>
          <p>Ayurveda</p>
          <p>Health Devices</p>
          <p>Home Essentials</p>
        </div>
        <hr />
      </div>
      <div className="relative flex flex-col items-center mt-10 max-w-screen-xl mx-auto px-4">
        <div className="absolute left-0 top-[60px] w-40 h-40 bg-gradient-to-tr from-[rgba(0,181,173,0.3)] to-[rgba(0,80,255,0.3)] blur-2xl rounded-full z-0" />
        <div className="absolute right-0 top-[60px] w-40 h-40 bg-gradient-to-tl from-[rgba(255,186,80,0.3)] to-[rgba(255,120,0,0.3)] blur-2xl rounded-full z-0" />
        <div className="flex justify-center mt-10 gap-55">
          <p className="text-xl">What are you looking for?</p>
          <div className="flex items-center gap-2">
            <img src="/images/file.svg" className="w-4 h-3" />
            <p className="text-sm">Order with Prescription.</p>
            <p className="text-sm text-orange-400">UPLOAD NOW </p>
          </div>
        </div>
        <div className="flex items-center border mt-5 h-13 w-full max-w-3xl mx-auto shadow-md rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search medicines & more"
            className="flex-grow  px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-orange-400 hover:bg-orange-600 text-white text-sm font-semibold px-8 py-2.5 rounded-full transition duration-300 mr-2">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        {images.map((image) => (
          <div className="flex flex-col items-center gap-2">
            <img src={image.url} className="w-35 h-35" />
            <p className="text-[15px]">{image.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-10">
        <img src="/images/Free-Delivery (1).svg" />
        <img src="/images/Banner-2.svg" />
        <img src="/images/Banner-3_1.svg" />
      </div>

      <div className="max-w-7xl h-60 mt-15 mx-auto border bg-white rounded-xl shadow-md overflow-hidden flex">
        <div className="w-1/3 bg-[#00465E] text-white p-8 flex justify-between items-center">
          <img
            src="/images/_icons_prescription-icon.png"
            alt="Prescription Icon"
            className="w-25 mb-4"
          />

          <div className="flex flex-col justify-start w-65">
            <h3 className="text-lg font-semibold mb-2">
              Order with Prescription
            </h3>
            <p className="text-base mb-4">
              Upload prescription and we will deliver your medicines
            </p>

            <button className="bg-orange-500 w-24 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2">
              Upload
            </button>
          </div>
        </div>

        <div className="w-2/3 p-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            How does this work?
          </h4>
          <div className="grid grid-cols-2 gap-y-8 text-sm text-gray-800">
            <div className="flex items-start gap-2">
              <div className="bg-[#00465E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <p>Upload a photo of your prescription</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-[#00465E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <p>Add delivery address and place the order</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-[#00465E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <p>We will call you to confirm the medicines</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-[#00465E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <p>
                Now, sit back! your medicines will get delivered at your
                doorstep
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-5 mt-10 ml-30">
        <p className="text-xl">
          New Launches <br />
          <span className="text-base">New wellness range just for you!</span>
        </p>
        <p className="text-xl">
          Trending in your City <br />
          <span className="text-base">Popular in your city</span>
        </p>
        <p className="text-xl">
          Shop by Concern <br />
          <span className="text-base">Products are handpicked by experts</span>
        </p>
      </div>
      <div className="flex justify-start mt-8 ml-30 gap-2">
        {shop.map((category) => (
          <div className="flex flex-col items-center gap-2">
            <div className="bg-orange-100 w-50 h-40 rounded-2xl flex items-center justify-center">
              <img src={category.url} className="w-25 h-25" />
            </div>
            <p className="text-base">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start mt-4 ml-30">
        <p className="text-xl">Featured Brands</p>
        <span className="text-base">Pick from our favorite brands</span>
      </div>
      <div className="max-w-5xl mx-auto"></div>
      <div className="flex justify-start mt-8 ml-30 gap-5">
        {feature.map((brand) => (
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-70 h-40 rounded-lg flex items-center justify-center ${brand.class}`}
            >
              <img src={brand.url} className="w-35 h-30" />
            </div>
            <p className="text-base">{brand.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start mt-6 ml-30 gap-6">
        <div className="flex items-center justify-between">
          <div>Deals of the day</div>
          <div className="text-orange-600 mr-30">View all</div>
        </div>
        <p>Our Bestsellers</p>
        <p className="text-2xl font-semibold mt-8 mb-4">Why choose us?</p>

        <div
          className=" rounded-2xl"
          style={{
            width: "90%",
            background:
              "radial-gradient(ellipse at left, #20495a 60%, #6db1cc 100%)",
          }}
        >
          <div className="flex flex-row items-center justify-between px-16 py-12 gap-8">
            <div className="flex items-center gap-6 flex-1">
              <img
                src="/images/icon_1.svg"
                alt="Location"
                className="w-24 h-24"
              />
              <div>
                <div className="text-white text-3xl font-semibold">9,500+</div>
                <div className="text-white text-xl font-medium leading-snug">
                  Unique items sold
                  <br />
                  last 3 months
                </div>
              </div>
            </div>
            <div className="h-28 w-px bg-white opacity-40 mx-4"></div>
            <div className="flex items-center gap-6 flex-1">
              <img
                src="/images/icon_2.svg"
                alt="Location"
                className="w-24 h-24"
              />
              <div>
                <div className="text-white text-3xl font-semibold">200+</div>
                <div className="text-white text-xl font-medium leading-snug">
                  Pin codes serviced
                  <br />
                  last 3 months
                </div>
              </div>
            </div>
            <div className="h-28 w-px bg-white opacity-40 mx-4"></div>
            <div className="flex items-center gap-6 flex-1">
              <img
                src="/images/icon_3.svg"
                alt="Orders"
                className="w-24 h-24"
              />
              <div>
                <div className="text-white text-3xl font-semibold">10,000+</div>
                <div className="text-white text-xl font-medium leading-snug">
                  Orders on Yoda
                  <br />
                  Pharmacy till date
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start mt-6 ml-30 gap-6">
        <p className="text-xl">
          Effortless Online Medicine Orders At Yoda Pharmacy
        </p>
        <p>
          Because ordering medicines online need not be complicated but rather a
          cakewalk. And at Yoda Pharmacy we ensure that. All you need to do is:
        </p>
        {/* <ul>
          <li>Browse through our wide variety of products</li>
          <li>Add products to your cart and complete the payment. Voila!</li>
          <li>Your order will be on its way to you.</li>
        </ul> */}
        <ul className="list-[square] pl-6 marker:text-[#00435d] text-base">
          <li>Browse through our wide variety of products</li>
          <li>Add products to your cart and complete the payment. Voila!</li>
          <li>Your order will be on its way to you.</li>
        </ul>
        <div className="text-base">
          Yoda Pharmacy is your go-to online pharmacy store for all your
          medicine needs. We also have a range of products in the personal care,
          baby care, health and nutrition, wellness, and lifestyle categories.
          Come explore 'everything under the sun' related to healthcare at Yoda
          Pharmacy.
        </div>
      </div>
      <footer className="bg-[#20495a] text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 px-6">
          <div className="flex-1 min-w-[220px]">
            <img
              src="/images/company-logo-white.svg"
              alt="Yoda Pharmacy"
              className="h-10 mb-4 text-white"
            />
            <p className="text-sm mb-6">
              A unique enterprise that functions with the sole objective of
              prescription honoring, where availability of medicines takes
              precedence.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Instagram">
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="/images/twitter.svg"
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="/images/youtube.svg"
                  alt="YouTube"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-semibold mb-3">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Home
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> About Us
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Shop
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Contact
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[180px]">
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Privacy Policy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Refund Policy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Terms & Conditions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">&rsaquo;</span> Shipping & Delivery
                Policy
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[220px]">
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                info@yodapharmacy.com
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">
                  <MapPin />
                </span>
                <span>
                  Door No: 6-3-666/B/6,
                  <br />
                  Gokul Towers, Opp. Model House,
                  <br />
                  Panjagutta, Hyderabad,
                  <br />
                  Telangana - 500082
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white text-base mt-8 opacity-80">
          © Yoda Pharmacy All Rights Reserved 2023
        </div>
      </footer>
    </div>
  );
}
