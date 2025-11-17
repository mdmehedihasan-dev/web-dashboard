import React, { useState } from "react";
import { Modal, DatePicker, Button } from "antd";
import { useNavigate } from "react-router-dom";
import JobLayout from "./JobLayout";

const RequestsData = ({
  jobs,
  tab,
  setTab,
  handleDelete,
  date,
  setDate,
  loading,
  getUserRequests,
}) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [sideOpen, setSideOpen] = useState(false);
  const openSide = () => setSideOpen(true);
  const closeSide = () => setSideOpen(false);
  const statusValue = (val) => {
    let actual_status = "";
    if (val == "in-progress") {
      actual_status = "Accepted";
    } else if (val == "pending") {
      actual_status = "Pending";
    } else if (val == "completed") {
      actual_status = "Completed";
    }
    return actual_status;
  };
  const handleSubmit = () => {
    console.log("Submit function called from the parent component!");
    // You can do other logic here
  };

  const setDateValue = (date) => {
    setDate(date);
  };

  const handleAddNewRequest = () => {
    const isEdit = localStorage.getItem("isEditing");
    const id = localStorage.getItem("_id");
    if (isEdit && id) {
      Object.keys(localStorage).forEach((key) => {
        if (key !== "type" && key !== "persist:root" && key !== "messages") {
          localStorage.removeItem(key);
        }
      });
    }

    navigate("/request/form/step/1");
  };

  const demoJobs = [
    {
      _id: "demo-1",
      jobNumber: "D-1001",
      status: "pending",
      fromAddress: {
        address: "Damrak 1, Amsterdam",
        lat: 52.3731,
        lng: 4.8922,
      },
      toAddress: {
        address: "Stationsplein 10, Amsterdam",
        lat: 52.3791,
        lng: 4.9003,
      },
      timeSlot: { start: "09:00", end: "11:00", cost: 5 },
      items: [
        {
          name: "Box",
          length: 40,
          width: 30,
          height: 20,
          weight: 5,
          quantity: 2,
        },
      ],
      pickupType: "van",
      itemSource: "store",
      pickupDate: new Date().toISOString(),
      extraServices: { floor: "ground", help: true },
      contactDetails: {
        firstName: "Demo",
        lastName: "User",
        email: "demo@example.com",
        phoneNumber: "612345678",
      },
      pickupContact: {
        smartHomeAddress: "Damrak 1",
        city: "Amsterdam",
        zipCode: "1012LG",
        additionalInfo: "",
      },
      deliveryContact: {
        smartHomeAddress: "Stationsplein 10",
        city: "Amsterdam",
        zipCode: "1012AB",
        additionalInfo: "",
      },
      subscribeToNewsletter: false,
      agreedToTerms: true,
      agreedTopPrivacy: true,
      totalPrice: 49,
    },
    {
      _id: "demo-2",
      jobNumber: "D-1002",
      status: "in-progress",
      fromAddress: {
        address: "Coolsingel 5, Rotterdam",
        lat: 51.9225,
        lng: 4.4792,
      },
      toAddress: { address: "Markthal, Rotterdam", lat: 51.923, lng: 4.4811 },
      timeSlot: { start: "12:00", end: "14:00", cost: 7 },
      items: [
        {
          name: "Chair",
          length: 60,
          width: 60,
          height: 90,
          weight: 8,
          quantity: 1,
        },
      ],
      pickupType: "van",
      itemSource: "home",
      pickupDate: new Date().toISOString(),
      extraServices: { floor: "1st", help: false },
      contactDetails: {
        firstName: "Jan",
        lastName: "Jansen",
        email: "jan@example.com",
        phoneNumber: "612345679",
      },
      pickupContact: {
        smartHomeAddress: "Coolsingel 5",
        city: "Rotterdam",
        zipCode: "3012AA",
        additionalInfo: "",
      },
      deliveryContact: {
        smartHomeAddress: "Markthal",
        city: "Rotterdam",
        zipCode: "3011MX",
        additionalInfo: "",
      },
      subscribeToNewsletter: true,
      agreedToTerms: true,
      agreedTopPrivacy: true,
      totalPrice: 65,
    },
    {
      _id: "demo-3",
      jobNumber: "D-1003",
      status: "completed",
      fromAddress: { address: "Utrecht Centraal", lat: 52.0894, lng: 5.1103 },
      toAddress: { address: "Janskerkhof, Utrecht", lat: 52.0936, lng: 5.1214 },
      timeSlot: { start: "15:00", end: "16:00", cost: 4 },
      items: [
        {
          name: "Books",
          length: 30,
          width: 20,
          height: 15,
          weight: 3,
          quantity: 3,
        },
      ],
      pickupType: "bike",
      itemSource: "office",
      pickupDate: new Date().toISOString(),
      extraServices: { floor: "2nd", help: false },
      contactDetails: {
        firstName: "Sanne",
        lastName: "De Vries",
        email: "sanne@example.com",
        phoneNumber: "612345680",
      },
      pickupContact: {
        smartHomeAddress: "Stationshal",
        city: "Utrecht",
        zipCode: "3511",
        additionalInfo: "",
      },
      deliveryContact: {
        smartHomeAddress: "Janskerkhof",
        city: "Utrecht",
        zipCode: "3512",
        additionalInfo: "",
      },
      subscribeToNewsletter: false,
      agreedToTerms: true,
      agreedTopPrivacy: true,
      totalPrice: 29,
    },
  ];

  const displayJobs = jobs?.length > 0 ? jobs : demoJobs;

  return (
    <div >
      <div
        key={"job_" + jobs?.id}
        className="flex flex-col items-start justify-between gap-3 mt-4 page_header md:items-center md:flex-row"
      >
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-[15px]">Requests</h2>
          <div className="flex items-center gap-2 pills_section">
            <div
              className={`pills px-4 py-2 text-xs rounded-full ${
                tab === "in-progress" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setTab("in-progress")}
            >
              Accepted
            </div>

            <div
              className={`pills px-4 py-2 text-xs rounded-full ${
                tab === "pending" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setTab("pending")}
            >
              Pending
            </div>

            <div
              className={`pills px-4 py-2 text-xs rounded-full ${
                tab === "completed" ? "bg-primary text-white" : ""
              }`}
              onClick={() => setTab("completed")}
            >
              Completed
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-2 md:w-auto md:justify-end">
          <button className="flex px-4 py-2 text-xs text-white rounded-full gap-x-2 small_button bg-primary" onClick={openModal}>
            <span>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1.5V4.5M11 1.5V4.5M1.25 7.5H14.75M2.75 3H13.25C14.0784 3 14.75 3.67157 14.75 4.5V15C14.75 15.8284 14.0784 16.5 13.25 16.5H2.75C1.92157 16.5 1.25 15.8284 1.25 15V4.5C1.25 3.67157 1.92157 3 2.75 3Z"
                  stroke="#EEEEF0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Select Date</span>
          </button>
          <button
            className="flex px-4 py-2 text-xs text-white rounded-full gap-x-2 small_button bg-primary"
            onClick={() => handleAddNewRequest()}
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9H14.25M9 3.75V14.25"
                  stroke="#EEEEF0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Add an new Job</span>
          </button>
        </div>
      </div>

      <div className="mt-4">
        {displayJobs?.length === 0 && (
          <div className="py-4 text-center text-red-400 bg-white rounded-xl">
            {loading ? "Loading..." : "No Jobs Found"}
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {displayJobs?.length > 0 &&
            displayJobs.map((item) => (
              <JobLayout
                key={item._id}
                status={statusValue(tab)}
                job={item}
                openPopup={openSide}
                handleDelete={handleDelete}
                getUserRequests={getUserRequests}
              />
            ))}
        </div>
      </div>
      <Modal
        title="Search By Date"
        open={modalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <p className="mb-3">Please select a date to search jobs.</p>
        <div className="flex items-center gap-2 ">
          <DatePicker onChange={(d, ds) => setDate(ds)} />
          <Button type="primary" onClick={closeModal}>
            Apply
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default RequestsData;
