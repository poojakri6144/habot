import React from "react";
import logo from "../images/habot-logo.png";

const NavigationBar = () => {
  return (
    <nav class="border-gray-200 bg-gray-5">
      <div class="max-w-screen flex flex-wrap  justify-between p-2 px-5">
        <div>
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8" alt="Flowbite Logo" />
          </a>
        </div>
        <div class=" w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-2 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block  md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Find Suppliers
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                class="flex items-center justify-between w-full  px-3 text-gray-500 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Find Service Tags{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <button
              class="btn btn-outline-success font-extrabold  text-xs"
              type="submit"
            >
              Login / Sign Up
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
