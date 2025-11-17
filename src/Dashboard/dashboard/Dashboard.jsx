import React, { useState } from "react";
import { List, Truck, CheckCircle, DollarSign } from "lucide-react";

import RequestsData from "../../Components/dashboardComponents/RequestsData";
import RequestsDataDriver from "../../Components/dashboardComponents/RequestsDataDriver";
import LineChart from "../../Components/dashboardComponents/LineChart";
import ModalPopup from "../../Components/dashboardComponents/ModalPopup";

// Dummy jobs data
const JobsData = [
  {
    id: 1,
    from: "Dhaka",
    to: "Chittagong",
    from_time: "10:00 AM",
    end_time: "2:00 PM",
    price: "$20",
    type: "Express",
    status: "pending",
    posted_date: "2025-01-10",
  },
  {
    id: 2,
    from: "Mirpur",
    to: "Gulshan",
    from_time: "11:00 AM",
    end_time: "12:00 PM",
    price: "$8",
    type: "Regular",
    status: "completed",
    posted_date: "2025-01-11",
  },
];

// Dummy Courier Stats
const courierStatsDummy = {
  activeShipments: 10,
  successDeliveries: 8,
  revenue: 200,
};

const DashboardUser = () => {
  const [jobs, setJobs] = useState(JobsData);
  const [tab, setTab] = useState("pending");
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* --------------------- USER DASHBOARD --------------------- */}
      <h1 className="font-bold text-[17px] w-full my-5">User Dashboard</h1>

      {/* Total Jobs Posted */}
      <div className="flex items-center justify-between w-full px-4 py-4 mt-5 white_box">
        <div className="flex items-center gap-5">
          <List size={20} color="#85E211" />
          <div className="uppercase text-[17px] font-bold">
            Total Jobs Posted
          </div>
        </div>
        <div className="mr-3 text-4xl font-bold">{jobs.length}</div>
      </div>

      {/* User Request Component (Dummy) */}
      <RequestsData />

      {/* --------------------- COURIER DASHBOARD --------------------- */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[17px] w-full my-5">
          Courier Dashboard
        </h1>
      </div>

      {/* Courier Stats */}
      <div className="flex flex-col items-stretch justify-between gap-4 mt-4 md:flex-row">
        <div className="flex justify-between items-start flex-col gap-3 w-full md:w-[18%]">

          {/* Active Shipments */}
          <div className="flex flex-col items-start justify-between w-full px-4 py-4 white_box">
            <div className="flex items-center gap-3">
              <Truck size={18} color="#85E211" />
              <div className="text-[12px] font-normal">
                Active Shipments
              </div>
            </div>
            <div className="mt-4 text-xl font-semibold">
              {courierStatsDummy.activeShipments}
            </div>
          </div>

          {/* Successful Deliveries */}
          <div className="flex flex-col items-start justify-between w-full px-4 py-4 white_box">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} color="#85E211" />
              <div className="text-[12px] font-normal">
                Successful Deliveries
              </div>
            </div>
            <div className="mt-4 text-xl font-semibold">
              {courierStatsDummy.successDeliveries}
            </div>
          </div>

          {/* Revenue */}
          <div className="flex flex-col items-start justify-between w-full px-4 py-4 white_box">
            <div className="flex items-center gap-3">
              <DollarSign size={18} color="#85E211" />
              <div className="text-[12px] font-normal">Revenue</div>
            </div>
            <div className="mt-4 text-xl font-semibold">
              ${courierStatsDummy.revenue}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="white_box w-full md:w-[82%]">
          <LineChart />
        </div>
      </div>

      {/* Courier Jobs Table (Dummy) */}
      <RequestsDataDriver />

      {/* Date Filter Modal */}
      <ModalPopup
        open={modalOpen}
        close={closeModal}
        heading="Filter By Date"
        content="date_popup"
        subcontent="Please select a date to filter"
        setDate={setDate}
        date={date}
      />
    </div>
  );
};

export default DashboardUser;
