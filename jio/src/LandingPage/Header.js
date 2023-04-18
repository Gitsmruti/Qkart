import React from "react";
import logo from "../Assets/logo.png";
export default function Header() {
  return (
    <div className="px-10 h-full w-full flex justify-between items-center bg-blue-600">
      <img src={logo} alt="Home" className="w-20 h-20" />
      <a href="#" className="font-semibold text-white ">
        Mobile
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        True 5G
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        Jio Fiber
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        Business
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        Shop
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        Apps
      </a>
      <a href="#" className="font-semibold text-white text-lg">
        Support
      </a>

      <div className="flex bg-blue-800 w-1/5 rounded-3xl p-1 hover:bg-blue-900">
        <svg
          className="w-5 text-white m-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.004 2a7 7 0 015.6 11.19l6.11 6.1a1.002 1.002 0 01-.325 1.639 1 1 0 01-1.095-.219l-6.1-6.11A7 7 0 1110.004 2zm0 12a5 5 0 100-10 5 5 0 000 10z"
            fill="currentColor"
          ></path>
        </svg>

        <input
          type="text"
          aria-label="Search"
          placeholder="Search"
          className="bg-transparent font-semibold text-white"
        />
      </div>

      <svg
        className="max-h-6 bg-white rounded-full"
        id="nonloggedin-content"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10a4 4 0 100-8 4 4 0 000 8zM12 22c4.418 0 8-2.462 8-5.5S16.418 11 12 11s-8 2.462-8 5.5S7.582 22 12 22z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}
