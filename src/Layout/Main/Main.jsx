import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import LOGO from "/logo.svg";
import SMALLLOGO from "../../assets/smalllogo.png";
import { FaUserLock } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// import NotificationDropdown from "../Components/NotificationsDropdown";
import {
  FileText,
  Plus,
  MessageSquare,
  Headphones,
  Search,
  Package,
  Map,
  Menu as MenuIcon,
  LayoutDashboard,
} from "lucide-react";
import NotificationDropdown from "../../Components/dashboardComponents/NotificationDropdown";

const MainLayout = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Get and store current role
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const urlPath = window.location.pathname;
  const lastSegment = urlPath.split("/").filter(Boolean).pop();

  // ✅ Close sidebar when clicking outside
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

  // ✅ Listen for localStorage role changes
  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role") || "user");
    };
    window.addEventListener("storage", handleStorageChange);
    handleStorageChange(); // run once on mount
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

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/signIn");
  };

  // ✅ Add new request handler
  const handleAddNewRequest = () => {
    navigate("/request/form/step/1");
  };

  return (
    <div className="flex items-start justify-between gap-0">
      {/* LEFT NAVBAR */}
      <div
        ref={sidebarRef}
        className={`md:h-screen h-screen overflow-auto fixed left-0 bg-white w-[280px] md:w-[280px] z-50 px-4 md:px-6 py-7 rounded-r-lg flex flex-col justify-between transition-transform duration-1000 ${
          isOpen
            ? "-translate-x-0 md:translate-x-full z-20"
            : "-translate-x-[290px] z-10 md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full ">
          <Link
            to={"/home"}
            className="border-b border-b-[#EBEBEB] pb-6 mb-8 w-full flex justify-center"
          >
            <img src={LOGO} alt="Logo" className="h-14 " />
          </Link>

          {/* Sidebar Links */}
          <div className="flex flex-col items-center w-full gap-3 nav_link">
            {/* ✅ Only show My Requests & Add New Request for normal users */}
            {role === "user" && (
              <>
                <Link
                  to="my-requests"
                  className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                    lastSegment === "my-requests" ? "active_menu" : ""
                  }`}
                >
                  <span>
                    <FileText size={22} color="black" />
                  </span>
                  <span>My Requests</span>
                </Link>

                <div
                  onClick={handleAddNewRequest}
                  className={`flex gap-4 items-center cursor-pointer p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                    lastSegment === "new-request" ? "active_menu" : ""
                  }`}
                >
                  <span>
                    <Plus size={19} color="#010101" />
                  </span>
                  <span>Add New Request</span>
                </div>
              </>
            )}

            {/* ✅ Courier-only routes */}
            {role === "courier" && (
              <>
                <Link
                  to="jobs"
                  className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                    lastSegment === "jobs" ? "active_menu" : ""
                  }`}
                >
                  <span>
                    <Search size={20} color="black" />
                  </span>
                  <span>New Jobs</span>
                </Link>

                <Link
                  to="my-shipments"
                  className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                    lastSegment === "my-shipments" ? "active_menu" : ""
                  }`}
                >
                  <span>
                    <Package size={22} color="#010101" />
                  </span>
                  <span>My Shipments</span>
                </Link>

                <Link
                  to="daily-routes"
                  className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                    lastSegment === "daily-routes" ? "active_menu" : ""
                  }`}
                >
                  <span>
                    <Map size={22} color="#010101" />
                  </span>
                  <span>Daily Routes</span>
                </Link>
              </>
            )}

            {/* Chat */}
            <Link
              to="chat"
              className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                lastSegment === "chat" ? "active_menu" : ""
              }`}
            >
              <span>
                <MessageSquare size={21} color="#010101" />
              </span>
              <span>Chat</span>
            </Link>

            {/* Customer Support */}
            <Link
              to="customer-support"
              className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                lastSegment === "customer-support" ? "active_menu" : ""
              }`}
            >
              <span>
                <Headphones size={22} color="#010101" />
              </span>
              <span>Customer Support</span>
            </Link>

            {/* More */}
            <Link
              to="more"
              className={`flex gap-4 items-center p-4 px-6 bg-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white ${
                lastSegment === "more" ? "active_menu" : ""
              }`}
            >
              <span>
                <MenuIcon size={20} color="#010101" />
              </span>
              <span>More</span>
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center w-full gap-4 nav_link">
          <div className="border-b border-t border-t-[#EBEBEB] pt-4 border-b-[#EBEBEB] pb-4 w-full">
            <Link
              to="update-profile"
              className={`flex gap-4 items-center p-4 px-6 bg-[var(--primary-color)] text-white w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white`}
            >
              <span>
                <img
                  src={SMALLLOGO}
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
              </span>
              <span className="max-w-xs overflow-hidden uppercase truncate text-ellipsis whitespace-nowrap">
                {localStorage.getItem("username") || "User Name"}
              </span>
            </Link>
          </div>

          <div
            onClick={handleLogout}
            className={`flex gap-4 items-center p-4 px-6 bg-red-500 text-white w-full rounded-full uppercase hover:bg-red-300 hover:cursor-pointer`}
          >
            <span>
              <FaUserLock size={20} />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="border-0 w-[95%] md:w-[79%] border-red-800 mx-auto mt-4 mb-[50px] md:ml-[300px]">
        <div className="flex items-center justify-between header_top">
          <h1 className="font-bold text-[17px] truncate md:truncate-none capitalize">
            Welcome {localStorage.getItem("username") || "User"} (
            {role === "courier" ? "Courier" : "User"})
          </h1>
          <div className="flex items-center gap-3">
            <NotificationDropdown/>
            <div className="hidden p-2 px-4 text-xs bg-white rounded-full shadow-sm cursor-pointer md:block">
              {formattedDate}
            </div>
            <div className="block md:hidden">
              {isOpen ? (
                <IoClose size={30} onClick={() => setIsOpen(false)} />
              ) : (
                <HiMenuAlt1 size={30} onClick={() => setIsOpen(true)} />
              )}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
