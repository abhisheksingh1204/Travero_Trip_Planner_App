import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function GitHub() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div
        className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33429279/pexels-photo-33429279.jpeg?cs=srgb&dl=pexels-ali-mansour-1875482084-33429279.jpg&fm=jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Happy Customers:{" "}
              <span className="text-yellow-400">{data.followers}</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied travelers who trust us with their
              adventures.
            </p>
          </div>
          <div className="md:flex md:items-center md:justify-center gap-12 lg:gap-24 mt-12"></div>
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="https://images.pexels.com/photos/6686364/pexels-photo-6686364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example image for insurance
              alt="Travel Insurance"
              className="w-full max-w-md rounded-lg shadow-xl object-cover h-64 sm:h-80" // Responsive height and rounded corners
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Protect Your Journey: Take Travel Insurance From Leading Providers
            </h3>
            <p className="text-md sm:text-lg leading-relaxed opacity-90">
              Unexpected events can disrupt even the most meticulously planned
              trips. From medical emergencies and trip cancellations to lost
              luggage, travel insurance offers peace of mind, ensuring you're
              covered no matter where your adventures lead. Secure your journey
              today and explore the world with confidence.
            </p>
            <div className="pt-4">
              <Link
                to="/apply-insurance" // Link to your insurance application page
                className="inline-flex items-center px-8 py-4 font-semibold bg-green-600 rounded-full hover:bg-green-700 text-white shadow-lg transition-transform transform hover:scale-105"
              >
                Apply for Insurance
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Your Next Unforgettable Memory?
          </h2>
          <p className="text-lg mb-8">
            Let us help you plan the perfect escape. Contact us today to start
            crafting your dream journey.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-300">
            Get in Touch!
          </button>
        </div>
      </div>
    </>
  );
}

export default GitHub;
