import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import logo from "../assets/images/logo.png";
import { navLinks } from "../constants/index";
import { Hero } from "../sections";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      {/* Increased z-index for side navigation */}
      <aside
        className={`fixed top-0 left-0 h-screen w-full overflow-y-hidden bg-gray-200 transition duration-200 ease-in-out z-1000 ${
          isSideNavOpen ? "" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end py-4 px-4">
          <button type="button" onClick={toggleSideNav}>
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="pl-4 mt-4 space-y-2">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray-700 hover:text-gray-900 block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <nav className="flex justify-between items-center max-container z-20">
        <a href="">
          <img src={logo} width={80} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {/* Improved button styling and accessibility */}
          <button
            type="button"
            onClick={toggleSideNav}
            aria-label="Toggle Side Navigation"
            aria-expanded={isSideNavOpen}
          >
            <img src={hamburger} alt="Hamburger Menu" width={25} height={25} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
