import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";

const UpdateProfile = () => {
  const [emailNotify, setEmailNotify] = useState(true);
  const [alertNotify, setAlertNotify] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="w-full p-6 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://koerierplatform.nl/assets/profile_bg-jo7bTfgx.svg')",
            backgroundSize: "cover",
        }}
      >
        <div className="flex items-center gap-5">
          <img
            src="https://koerierplatform.nl/assets/user_image-D8ERlCPA.jpg"
            alt="Profile"
            className="object-cover border-4 border-white rounded-full w-36 h-36"
          />
          <div>
            <h1 className="text-xl font-bold text-white">GHEGHAM KARAPETIAN</h1>
            <p className="text-white">
              <span className="font-semibold">Email:</span>{" "}
              aeng-service@hotmail.com
            </p>
            <p className="text-white">
              <span className="font-semibold">Phone:</span> —
            </p>
            <p className="text-white">
              <span className="font-semibold">Location:</span> —
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 mx-auto mt-2">
        {/* Account Settings */}
        <h2 className="mb-1 text-lg font-semibold">Account Settings</h2>
        <p className="mb-6 text-gray-500 text-[11px]">
          Manage your account preferences and settings
        </p>

        {/* Personal Info Card */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="mb-4 text-base font-semibold">Personal Information</h3>

          <h4 className=" text-gray-500 text-[11px]">
            Fill in below details to update your profile information.
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="text-sm font-medium">First name *</label>
             <div className="relative ">

               <input
                type="text"
                defaultValue="Ghegham"
                className="w-full px-8 py-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
              <FaRegUser className="absolute left-2 top-[18px]" />
             </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm font-medium">Last name *</label>
             <div className="relative">
                 <input
                type="text"
                defaultValue="Karapetian"
                className="w-full px-8 py-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
               <FaRegUser className="absolute left-2 top-[18px]" />
             </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email address *</label>
              <div className="relative">
                <input
                type="email"
                defaultValue="aeng-service@hotmail.com"
                className="w-full px-8 py-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
               <AiTwotoneMail className="absolute left-2 top-[18px]"  />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">Phone *</label>
              
               <div className="relative">
                <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-8 py-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
               <PiHeadphones className="absolute left-2 top-[18px]" />
               </div>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium">Address *</label>
              <div className="relative">
                <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-8 py-3 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
               <IoLocationOutline className="absolute left-2 top-[18px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-3 mt-2 bg-white shadow rounded-xl">
          <h3 className="text-base font-semibold ">Notification Preferences</h3>
          <p className="mb-2 text-[11px] text-gray-500">
            Configure how you receive notifications and alerts
          </p>

          <div className="flex flex-col gap-6 md:flex-row">
            {/* Email Notifications */}
            <div className="flex items-center justify-between w-full p-2 rounded-lg bg-gray-50">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-gray-500">
                  Receive email notifications about your account activity
                </p>
              </div>
              <ToggleSwitch
                checked={emailNotify}
                onChange={() => setEmailNotify(!emailNotify)}
              />
            </div>

            {/* Alerts Delivery */}
            <div className="flex items-center justify-between w-full p-2 rounded-lg bg-gray-50">
              <div>
                <h4 className="font-medium">Alerts delivery</h4>
                <p className="text-sm text-gray-500">
                  Get notified when parcel is picked up
                </p>
              </div>
              <ToggleSwitch
                checked={alertNotify}
                onChange={() => setAlertNotify(!alertNotify)}
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="px-8 py-3 font-semibold text-white transition rounded-full bg-primary hover:bg-lime-600">
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-12 h-6 transition-colors duration-300 bg-gray-300 rounded-full peer-checked:bg-lime-500"></div>
      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 peer-checked:translate-x-6"></div>
    </label>
  );
};
