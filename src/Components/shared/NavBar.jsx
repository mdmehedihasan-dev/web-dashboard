/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Navbar() {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 w-full z-[100]">
      <div className="flex items-center justify-between h-[58px] px-6 py-5 bg-white relative">
        {/* Logo */}
        <div className="logo">
          <Link to="/" data-aos="zoom-in">
            <img
              src="/logo.svg"
              className="z-10 h-12 mt-4 cursor-pointer w-18 md:h-18 md:mt-0"
            />
          </Link>
          <img src="/logo_bg.svg" className="absolute top-0 left-0 z-0 logo_bg" />
        </div>

        {/* Mobile menu toggle */}
        <div
          className="block md:hidden z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[105] md:hidden"
          ></div>
        )}

        {/* Sidebar / Nav links */}
        <div
          ref={sidebarRef}
          className={`fixed md:relative top-0 left-0 bottom-0 h-screen md:flex gap-8 md:h-auto w-[300px] md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none z-[110] transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-[310px] md:translate-x-0"}`}
        >
          <div className="nav_bar uppercase flex md:items-center gap-8 font-semibold text-[12px] md:flex-row flex-col p-10 md:p-0 relative z-[111]">
            <img src="/logo.svg" className="block h-12 mb-6 md:hidden" />
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link
              to="#how-it-works"
              onClick={() => handleScrollToSection("how-it-works")}
            >
              HOW IT WORKS
            </Link>
            <Link
              to="#faqs"
              onClick={() => handleScrollToSection("faqs")}
            >
              FAQS
            </Link>
            <Link
              to="#why-us"
              onClick={() => handleScrollToSection("why-us")}
            >
              WHY US
            </Link>
            {/* <Link to="/contact-us" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 p-10 md:flex-row md:gap-2 md:p-0 relative z-[111]">
            {/* Login */}
            <button
              onClick={() => navigate("/sign-in")}
              className="website_button w-full md:w-[100px] px-8 py-2 text-white rounded-full bg-[#202020] hover:primary uppercase"
            >
              Login
            </button>

            {/* REGISTER with dropdown (hover fix) */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="website_button flex items-center gap-1 !px-8 bg-primary rounded-full  py-2 hover:bg-[#202020]  hover:text-white uppercase"
              >
                REGISTER
                <IoChevronDownOutline
                  size={16}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md w-44 text-sm font-medium text-gray-800 overflow-hidden transition-all duration-200 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  to="/courier-signUp"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                 As a Courier
                </Link>
                <Link
                  to="/sign-up"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                 AS a User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
