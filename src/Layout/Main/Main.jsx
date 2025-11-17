import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import LOGO from "/logo.svg";
import SMALLLOGO from "../../assets/smalllogo.png";
import { FaUserLock } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import {
  FileText,
  Plus,
  MessageSquare,
  Headphones,
  Search,
  Package,
  Map,
  Menu as MenuIcon,
} from "lucide-react";

import NotificationDropdown from "../../Components/dashboardComponents/NotificationDropdown";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const currentPath = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/sign-in");
  };

  const handleAddNewRequest = () => {
    navigate("/request/form/step/1");
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Listen for role changes
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role") || "user");
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Active class helper
  const activeClass = (path) =>
    currentPath.includes(path)
      ? "bg-primary text-white"
      : "bg-white text-black";

  return (
    <div className="flex items-start justify-between gap-0 ">
      {/* LEFT SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`md:h-screen h-screen overflow-auto fixed left-0 bg-white w-[280px] md:w-[280px] z-50 px-4 md:px-6 py-7 rounded-r-lg flex flex-col justify-between transition-transform duration-700 ${
          isOpen
            ? "-translate-x-0 md:translate-x-full z-20"
            : "-translate-x-[290px] z-10 md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* LOGO */}
          <Link
            to="/home"
            className="border-b border-b-[#EBEBEB] pb-6 mb-8 w-full flex justify-center"
          >
            <img src={LOGO} alt="Logo" className="h-14" />
          </Link>

          {/* SIDEBAR MENUS */}
          <div className="flex flex-col items-center w-full gap-3 nav_link">
            {/* USER ROUTES */}
            {role === "user" && (
              <>

                 <Link
                  to="dashboard"
                  className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "dashboard"
                  )}`}
                >
                  <FileText size={22} />
                  <span>Dashboard</span>
                </Link>



                <Link
                  to="my-requests"
                  className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "my-requests"
                  )}`}
                >
                  <FileText size={22} />
                  <span>My Requests</span>
                </Link>

                <div
                  onClick={handleAddNewRequest}
                  className={`flex gap-4 items-center cursor-pointer p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "new-request"
                  )}`}
                >
                  <Plus size={19} />
                  <span>Add New Request</span>
                </div>
              </>
            )}
            {role === "courier" && (
              <>
                <Link
                  to="jobs"
                  className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "jobs"
                  )}`}
                >
                  <Search size={20} />
                  <span>New Jobs</span>
                </Link>

                <Link
                  to="my-shipments"
                  className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "my-shipments"
                  )}`}
                >
                  <Package size={22} />
                  <span>My Shipments</span>
                </Link>

                <Link
                  to="daily-routes"
                  className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                    "daily-routes"
                  )}`}
                >
                  <Map size={22} />
                  <span>Daily Routes</span>
                </Link>
              </>
            )}

            {/* COMMON ROUTES */}
            <Link
              to="chat"
              className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                "chat"
              )}`}
            >
              <MessageSquare size={21} />
              <span>Chat</span>
            </Link>
            <Link
              to="update-profile"
              className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                "update-profile"
              )}`}
            >
              <MessageSquare size={21} />
              <span>Update Profile</span>
            </Link>

            <Link
              to="customer-support"
              className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                "customer-support"
              )}`}
            >
              <Headphones size={22} />
              <span>Customer Support</span>
            </Link>

            <Link
              to="more"
              className={`flex gap-4 items-center p-4 px-6 w-full rounded-full hover:bg-primary hover:text-white ${activeClass(
                "more"
              )}`}
            >
              <MenuIcon size={20} />
              <span>More</span>
            </Link>
          </div>
        </div>

        {/* BOTTOM PROFILE + LOGOUT */}
        <div className="flex flex-col items-center w-full gap-4 nav_link">
          <div className="border-b border-t border-t-[#EBEBEB] pt-4 border-b-[#EBEBEB] pb-4 w-full">
            <Link
              to="update-profile"
              className="flex items-center w-full gap-4 p-4 px-6 text-white rounded-full bg-primary hover:bg-primary"
            >
              <img
                src={SMALLLOGO}
                className="w-[32px] h-[32px] rounded-full object-cover"
              />

              <span className="max-w-xs uppercase truncate">
                {localStorage.getItem("username") || "User Name"}
              </span>
            </Link>
          </div>

          <div
            onClick={handleLogout}
            className="flex items-center w-full gap-4 p-4 px-6 text-white uppercase bg-red-500 rounded-full cursor-pointer hover:bg-red-300"
          >
            <FaUserLock size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="border-0   w-[95%] md:w-[79%] mx-auto mt-4 mb-10 md:ml-[300px]">
        <div className="flex items-center justify-between header_top">
          <h1 className="font-bold text-[17px] capitalize truncate">
            Welcome {localStorage.getItem("username") || "User"} (
            {role === "courier" ? "Courier" : "User"})
          </h1>

          <div className="flex items-center gap-3">
            <NotificationDropdown />

            <div className="hidden p-2 px-4 text-xs bg-white rounded-full shadow-sm md:block">
              {formattedDate}
            </div>

            {/* Mobile Menu Icon */}
            <div className="block md:hidden">
              {isOpen ? (
                <IoClose size={30} onClick={() => setIsOpen(false)} />
              ) : (
                <HiMenuAlt1 size={30} onClick={() => setIsOpen(true)} />
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="mt-6 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
