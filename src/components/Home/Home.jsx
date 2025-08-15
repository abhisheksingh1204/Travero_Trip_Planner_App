import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full">
      {" "}
      
      <aside
        className="relative overflow-hidden text-black rounded-none sm:rounded-lg sm:mx-0 mx-0 sm:py-24 py-16 bg-cover bg-center" // Removed mx classes for full width, increased padding
        style={{
          
          backgroundImage: `url('https://images.pexels.com/photos/33431229/pexels-photo-33431229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-0 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
            {" "}
          
            <h2 className="text-4xl font-bold sm:text-5xl text-white">
              Download Now
              <span className="hidden sm:block text-4xl">Trip Planner</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4">
              {" "}
             
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-85 transition-colors duration-200"
                to="/download" 
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-85 transition-colors duration-200"
                to="/destinations" 
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657M2.343 10.343L6.586 6.1a1.998 1.998 0 012.828 0l4.243 4.243m-8.486 0L10.9 2.343a1.998 1.998 0 012.828 0l4.243 4.243m-8.486 0L10.9 2.343a1.998 1.998 0 012.828 0l4.243 4.243"
                  ></path>
                </svg>
                Countries to Visit
              </Link>
            </div>
          </div>
        </div>
      </aside>
      
      <aside
        className="relative overflow-hidden text-white rounded-none sm:rounded-lg sm:mx-0 mx-0 py-20 bg-cover bg-center flex items-center min-h-[500px]" // Removed mx classes, increased padding, added min-height
        style={{
          
          backgroundImage: `url('https://images.pexels.com/photos/4029369/pexels-photo-4029369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
        }}
      >
     
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>{" "}
        <div className="relative z-10 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl ml-auto text-center sm:text-right space-y-4">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Make your trip worth to remember
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Embark on an unforgettable journey with our curated travel
              experiences. Discover breathtaking landscapes, immerse yourself in
              vibrant cultures, and create memories that will last a lifetime.
              Your perfect adventure awaits!
            </p>
            <p className="text-md sm:text-lg leading-relaxed font-semibold">
              Because memories last a lifetime, not bills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4">
              
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-purple-700 rounded-lg hover:opacity-85 transition-colors duration-200"
                to="/explore-trips"
              >
                Explore Trip Packages
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <section className="py-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Customer 1"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-500">Adventure Seeker</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Absolutely incredible experience! The trip planning was
                seamless, and every detail was taken care of. I made memories
                that will last a lifetime."
              </p>
            </div>

          
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer 2"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Jane Smith
                  </h4>
                  <p className="text-sm text-gray-500">Family Traveler</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Our family vacation was perfect! The destinations were amazing,
                and the travel insurance gave us so much peace of mind. Highly
                recommend!"
              </p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt="Customer 3"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Alex Chen
                  </h4>
                  <p className="text-sm text-gray-500">Solo Explorer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "This service truly understands travelers. The support was
                excellent, and I felt secure throughout my solo journey. Can't
                wait for my next trip!"
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center px-8 py-4 font-semibold bg-gray-800 text-white rounded-full hover:bg-gray-900 shadow-lg transition-transform transform hover:scale-105"
            >
              Read More Reviews
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
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
