import React from "react";
import { FiSend } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const CustomerSupport = () => {
  return (
    <div className="flex w-full min-h-screen px-4 py-10 bg-gray-100">
      <div className="relative w-full p-8 shadow-sm max-w-7xl rounded-xl md:p-12">

        {/* ===== CONTENT WRAPPER ===== */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* ===== LEFT SECTION ===== */}
           <div>
            {/* Name */}
            <label className="text-sm font-medium">Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 mt-1 mb-5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Email */}
            <label className="text-sm font-medium">Email address *</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 mt-1 mb-5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Message */}
            <label className="text-sm font-medium">Message *</label>
            <textarea
              rows="5"
              placeholder="Enter your message..."
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            ></textarea>

            {/* Send Button */}
            <button className="flex items-center gap-2 px-6 py-3 mt-4 font-medium text-white rounded-lg bg-primary hover:bg-green-600">
              <FiSend size={18} /> SEND
            </button>
          </div>


        

          {/* ===== RIGHT SECTION (FORM) ===== */}

            <div>
             <img src="https://koerierplatform.nl/assets/amico-i2cAE3pF.svg" alt="" />
          </div>
         
        </div>

        {/* ===== FLOATING BUTTON (BOTTOM RIGHT) ===== */}
        <div className="fixed bottom-6 right-6">
          <button className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-white rounded-full shadow-xl bg-primary hover:bg-green-600">
            URGENCY WITH A TRANSPORT
            <FaPhone size={16} className="p-1 text-green-600 bg-white rounded-full" />
            <FaWhatsapp size={18} className="p-1 text-green-600 bg-white rounded-full" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomerSupport;

