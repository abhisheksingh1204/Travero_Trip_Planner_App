import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white/10 backdrop-blur-md">
      <nav
        className="border-gray-200 py-2.5 px-4 lg:px-6 rounded-b-xl" // Added padding and rounded bottom
        style={{
          
          backgroundImage: `url('https://images.pexels.com/photos/33447162/pexels-photo-33447162.jpeg?cs=srgb&dl=pexels-julia-chuma-2150422494-33447162.jpg&fm=jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay", // Blend mode for better text visibility
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for readability
        }}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              // Changed logo
              src="https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg?cs=srgb&dl=pexels-cottonbro-4503734.jpg&fm=jpg" // Placeholder for a simple, clean logo
              className="h-10 w-10 rounded-full shadow-md" // Circular logo with shadow
              alt="App Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white hidden sm:block">
              Travero
            </span>{" "}
            
          </Link>

          {/* Login/Get Started Buttons */}
          <div className="flex items-center lg:order-2 space-x-3">
            {" "}
            
            <Link
              to="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 transition duration-300 ease-in-out shadow-md"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 transition duration-300 ease-in-out shadow-md"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={
                    ({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-400" : "text-gray-200"} 
                    border-b border-gray-100/20 
                    hover:bg-gray-700/30 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-400 lg:p-0 rounded-md lg:rounded-none` // Adjusted colors for dark background
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-400" : "text-gray-200"} 
                    border-b border-gray-100/20 
                    hover:bg-gray-700/30 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-400 lg:p-0 rounded-md lg:rounded-none`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-400" : "text-gray-200"} 
                    border-b border-gray-100/20 
                    hover:bg-gray-700/30 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-400 lg:p-0 rounded-md lg:rounded-none`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-400" : "text-gray-200"} 
                    border-b border-gray-100/20 
                    hover:bg-gray-700/30 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-400 lg:p-0 rounded-md lg:rounded-none`
                  }
                >
                  Our customers:
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
