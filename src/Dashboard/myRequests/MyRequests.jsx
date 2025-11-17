/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import RequestsData from "../../Components/dashboardComponents/RequestsData";
const DEMO_JOBS = [
  {
    _id: "demo-1",
    jobNumber: "D-1001",
    status: "pending",
    fromAddress: { address: "Damrak 1, Amsterdam", lat: 52.3731, lng: 4.8922 },
    toAddress: { address: "Stationsplein 10, Amsterdam", lat: 52.3791, lng: 4.9003 },
    timeSlot: { start: "09:00", end: "11:00" },
    pickupDate: new Date().toISOString(),
    totalPrice: 49,
  },
  {
    _id: "demo-2",
    jobNumber: "D-1002",
    status: "in-progress",
    fromAddress: { address: "Coolsingel 5, Rotterdam", lat: 51.9225, lng: 4.4792 },
    toAddress: { address: "Markthal, Rotterdam", lat: 51.923, lng: 4.4811 },
    timeSlot: { start: "12:00", end: "14:00" },
    pickupDate: new Date().toISOString(),
    totalPrice: 65,
  },
  {
    _id: "demo-3",
    jobNumber: "D-1003",
    status: "completed",
    fromAddress: { address: "Utrecht Centraal", lat: 52.0894, lng: 5.1103 },
    toAddress: { address: "Janskerkhof, Utrecht", lat: 52.0936, lng: 5.1214 },
    timeSlot: { start: "15:00", end: "16:00" },
    pickupDate: new Date().toISOString(),
    totalPrice: 29,
  },
];
const MyRequests = () => {
  const [tab, setTab] = useState("pending");
  const [loading] = useState(false);

  const jobs = useMemo(() => DEMO_JOBS.filter((j) => j.status === tab), [tab]);

  const getUserRequests = () => {};

  return (
    <div className="mt-10 ">
      <RequestsData
        jobs={jobs}
        tab={tab}
        setTab={setTab}
        loading={loading}
        getUserRequests={getUserRequests}
      />
    </div>
  );
};

export default MyRequests;
