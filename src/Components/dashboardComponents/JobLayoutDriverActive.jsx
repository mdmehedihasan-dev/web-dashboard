/* eslint-disable react/prop-types */
import React from "react";

// ---------------------------
// Dummy Utils (Replaces missing imports)
// ---------------------------
const formatDate = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Invalid Date";
  }
};

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const JobLayoutDriverActive = ({
  job: propJob,
  status = "Pending",
  page,
  openPopup,
  pagetype,
  pagecoming,
  setCurrentJob,
}) => {
  // -----------------------------------
  // Dummy Data (Standalone Working UI)
  // -----------------------------------
  const demoJob = {
    _id: "demo-job",
    jobNumber: "DEMO-000",
    fromAddress: { address: "Amsterdam, NL", lat: 52.3676, lng: 4.9041 },
    toAddress: { address: "Rotterdam, NL", lat: 51.9244, lng: 4.4777 },
    pickupDate: new Date().toISOString(),
    timeSlot: { start: "09:00", end: "11:00" },
    totalPrice: 49,
  };

  const job = propJob || demoJob;

  const statusManual =
    job?.id == 3 && page == "shipments" ? "Cancelled" : status;

  const handleLinkClick = () => {
    if (typeof setCurrentJob === "function") setCurrentJob(job);
    if (typeof openPopup === "function") openPopup();
  };

  return (
    <div
      onClick={handleLinkClick}
      className="white_box p-4 hover:scale-[1.02] hover:border-[var(--primary-color)] border border-[#fafafa] transition-all duration-700 ease-in-out cursor-pointer"
    >
      {/* Top Route Section */}
      <div className="flex items-center justify-between">
        <div
          className={`job_top flex items-center ${
            pagetype == "newjobspage" ? "gap-1" : "gap-3"
          } w-full`}
        >
          <div className="job_route">
            <div className="text-[15px] font-normal">
              {job?.fromAddress?.address}
            </div>
            <span className="text-[11px] font-normal text-[var(--light-color-text)]">
              {formatDate(job?.pickupDate)} {job?.timeSlot?.start}
            </span>
          </div>

          <div className="flex items-center route_line">
            <span className="route_circle"></span>
            <span
              className={`${
                pagetype == "newjobspage"
                  ? "line_route_small"
                  : "line_route_full"
              }`}
            ></span>
            <span className="route_circle"></span>
          </div>

          <div className="job_route">
            <div className="text-[15px] font-normal">
              {job?.toAddress?.address}
            </div>
            <span className="text-[11px] font-normal text-[var(--light-color-text)]">
              {formatDate(job?.pickupDate)} {job?.timeSlot?.end}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          {page !== "jobslisting" && (
            <>
              <div className="border border-[var(--primary-color)] h-[33px] w-[52px] rounded-full flex justify-center items-center bg-[var(--primary-color)]">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 16.5V9H10.25V16.5M1.25 6.75L8 1.5L14.75 6.75V15C14.75 15.3978 14.592 15.7794 14.3107 16.0607C14.0294 16.342 13.6478 16.5 13.25 16.5H2.75C2.35218 16.5 1.97064 16.342 1.68934 16.0607C1.40804 15.7794 1.25 15.3978 1.25 15V6.75Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`${
                  statusManual == "Cancelled"
                    ? "bg-[#FF3B30]"
                    : "bg-[var(--primary-color)]"
                } text-[11px] p-1 px-4 rounded-full text-white md:block hidden`}
              >
                {page == "shipments" ? statusManual : status}
              </div>
            </>
          )}

          <div
            className={`job_top flex items-center gap-5 w-full ${
              (pagetype || pagecoming) == "newjobspage"
                ? "flex-col"
                : "flex-row"
            }`}
          >
            <div className="job_route">
              <div className="text-[13px] font-normal text-[#00000080]">
                {page != "jobslisting" ? "Shipment number" : "Total Distance"}
              </div>

              <span className="text-[11px] font-normal text-[var(--light-color-text)]">
                {page != "jobslisting"
                  ? job?.jobNumber
                  : getDistanceFromLatLonInKm(
                      job?.fromAddress?.lat,
                      job?.fromAddress?.lng,
                      job?.toAddress?.lat,
                      job?.toAddress?.lng
                    ).toFixed(2) + " km"}
              </span>
            </div>
          </div>
        </div>

        <div className="font-bold text-3xl text-[var(--primary-color)]">
          ${job?.totalPrice}
        </div>
      </div>
    </div>
  );
};

export default JobLayoutDriverActive;
