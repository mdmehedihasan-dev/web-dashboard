/* eslint-disable react/prop-types */
import React, { useState } from "react";
import JobLayoutDriverActive from "./JobLayoutDriverActive";
import { useNavigate } from "react-router-dom";

const RequestsDataDriver = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  // Demo data for active shipments
  const jobs = [
    {
      id: 101,
      jobNumber: "SHIP-2025-0001",
      fromAddress: { address: "Amsterdam, NL", lat: 52.3676, lng: 4.9041 },
      toAddress: { address: "Rotterdam, NL", lat: 51.9244, lng: 4.4777 },
      pickupDate: new Date().toISOString(),
      timeSlot: { start: "09:00", end: "11:00" },
      totalPrice: 85,
    },
    {
      id: 102,
      jobNumber: "SHIP-2025-0002",
      fromAddress: { address: "Utrecht, NL", lat: 52.0907, lng: 5.1214 },
      toAddress: { address: "The Hague, NL", lat: 52.0705, lng: 4.3007 },
      pickupDate: new Date().toISOString(),
      timeSlot: { start: "13:00", end: "15:00" },
      totalPrice: 72,
    },
  ];
  const statusValue = (val) => {
    let actual_status = "";
    if (val == 1) {
      actual_status = "Accepted";
    } else if (val == 2) {
      actual_status = "Pending";
    } else if (val == 3) {
      actual_status = "Completed";
    }
    return actual_status;
  };
  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-3 mt-4 page_header md:items-center md:flex-row">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-[15px]">Active Shipments</h2>
        </div>
        <div className="flex items-center justify-center w-full gap-2 md:w-auto md:justify-end">
         
          <button className="small_button" onClick={() => navigate("/my-shipments")}>
            <span>View all</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        {
          jobs?.length == 0 ? <h2 className="font-normal text-[13px] text-red-500 w-full p-5 bg-white rounded-xl text-center mt-[50px]">No Active Shipments</h2> : null
        }
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {jobs?.map((item, index) => (
            <>
              <JobLayoutDriverActive key={index} status={statusValue(tab)} job={item} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestsDataDriver;
