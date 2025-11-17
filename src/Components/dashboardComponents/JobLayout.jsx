import React, { useState } from "react";
import JobsSidePopup from "./JobsSidePopup";
import { Modal, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { MessageSquare } from "lucide-react";

const JobLayout = ({ job, status }) => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const openSide = () => setSideOpen(true);
  const closeSide = () => setSideOpen(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [reviewOpen, setReviewOpen] = useState(false);
  const openReview = () => setReviewOpen(true);
  const closeReview = () => setReviewOpen(false);

  const [reviewText, setReviewText] = useState("");

  const handleLinkClick = () => {
    openSide();
  };

  const show_popup_delete = (e) => {
    e.stopPropagation();
    openModal();
  };

  // 👉 Dummy delete function
  const confirmDelete = async () => {
    toast.success("Dummy: Job removed successfully");
    closeModal();
  };

  return (
    <>
      <div
        className="white_box p-4 hover:scale-[1.02] rounded-xl hover:border-primary border border-[#fafafa] transition-all duration-700 ease-in-out cursor-pointer"
        onClick={handleLinkClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full gap-3 job_top">
            <div className="job_route">
              <div className="text-[15px] font-normal">
                {job?.fromAddress?.address}
              </div>
              <span className="text-[11px] font-normal text-[var(--light-color-text)]">
                {job?.timeSlot?.start}
              </span>
            </div>

            <div className="flex items-center route_line">
              <span className="route_circle"></span>
              <span className="line_route_full"></span>
              <span className="route_circle"></span>
            </div>

            <div className="job_route">
              <div className="text-[15px] font-normal">
                {job?.toAddress?.address}
              </div>
              <span className="text-[11px] font-normal text-[var(--light-color-text)]">
                {job?.timeSlot?.end}
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold text-primary">
            ${job?.totalPrice}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="border border-[#f0f0f0] h-9 w-9 rounded-full flex justify-center items-center bg-white">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 16.5V13.5H9.25V16.5M4 4.5H4.0075M10 4.5H10.0075M7 4.5H7.0075M7 7.5H7.0075M7 10.5H7.0075M10 7.5H10.0075M10 10.5H10.0075M4 7.5H4.0075M4 10.5H4.0075M2.5 1.5H11.5C12.3284 1.5 13 2.17157 13 3V15C13 15.8284 12.3284 16.5 11.5 16.5H2.5C1.67157 16.5 1 15.8284 1 15V3C1 2.17157 1.67157 1.5 2.5 1.5Z"
                  stroke="#1D1D20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="bg-[#8E8E93] text-[11px] p-1 px-4 rounded-full text-white">
              {status}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {job?.status === "pending" ? (
              <>
                <div
                  className="border cursor-pointer border-[#f0f0f0] h-9 w-9 rounded-full flex justify-center items-center bg-white hover:border-primary"
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12.3332H11.25M7.75 2.33317L9.5 4.33317M8.625 1.33316C8.85706 1.06794 9.17181 0.918945 9.5 0.918945C9.6625 0.918945 9.82341 0.955525 9.97355 1.0266C10.1237 1.09767 10.2601 1.20184 10.375 1.33316C10.4899 1.46448 10.5811 1.62038 10.6432 1.79196C10.7054 1.96354 10.7374 2.14744 10.7374 2.33316C10.7374 2.51888 10.7054 2.70277 10.6432 2.87435C10.5811 3.04594 10.4899 3.20184 10.375 3.33316L3.08333 11.6665L0.75 12.3332L1.33333 9.66649L8.625 1.33316Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className="border cursor-pointer border-[#f0f0f0] h-9 w-9 rounded-full flex justify-center items-center bg-white hover:border-primary"
                  onClick={show_popup_delete}
                >
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 3.49984H11.25M10.0833 3.49984V11.6665C10.0833 12.2498 9.5 12.8332 8.91667 12.8332H3.08333C2.5 12.8332 1.91667 12.2498 1.91667 11.6665V3.49984M3.66667 3.49984V2.33317C3.66667 1.74984 4.25 1.1665 4.83333 1.1665H7.16667C7.75 1.1665 8.33333 1.74984 8.33333 2.33317V3.49984"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <MessageSquare
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openReview();
                }}
                size={26}
                color="#85e211"
                title="Add Review"
              />
            )}
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <Modal
        title="Delete Job"
        open={modalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger onClick={confirmDelete}>
            Delete
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this job?</p>
      </Modal>

      {/* REVIEW MODAL */}
      <Modal
        title={`REVIEW - JOB #${job?.jobNumber}`}
        open={reviewOpen}
        onCancel={closeReview}
        footer={[
          <Button key="close" onClick={closeReview}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={closeReview}>
            Submit
          </Button>,
        ]}
      >
        <Input.TextArea
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
        />
      </Modal>

      {/* SIDE POPUP */}
      <JobsSidePopup
        open={sideOpen}
        close={closeSide}
        content={"id"}
        type={"user"}
        job={job}
      />
    </>
  );
};

export default JobLayout;
