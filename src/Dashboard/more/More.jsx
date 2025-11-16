import React, { useState, useEffect } from "react";
import UserImage from "./../../assets/user_image.jpg";
import { Link, useNavigate } from "react-router-dom";
import ModalPopup from "../../Components/dashboardComponents/ModalPopup";

// import ModalPopup from "../../Components/Modal";

const More = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [usertype, setUsertype] = useState(localStorage.getItem("type"));

  // ✅ Get user info from localStorage instead of Redux
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = storedUser || {};

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleLogout = () => {
    // keep "messages" key if needed
    Object.keys(localStorage).forEach((key) => {
      if (key !== "messages") {
        localStorage.removeItem(key);
      }
    });
    navigate("/");
  };

  const ArrowRight = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 6H11.25M11.25 6L6 0.75M11.25 6L6 11.25"
        stroke="#92939E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <>
      <div className="relative w-full px-5 mb-4 ">
        <div className="flex items-center w-full gap-6">
          <div className="">
            <img
              src={user?.profileImage || UserImage}
              className=" w-[96px] h-[96px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-bold text-xl text-[#000]">User</h1>
            <div className="text-[var(--light-color-text)]">
              User Account
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* INBOX */}
            <Link to={'/chat'}
              
              className="white_box p-4 flex justify-between items-center gap-3 !rounded-lg border hover:border-[#ccc] cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.925 14C7.35643 14.7343 9.00306 14.9332 10.5682 14.5608C12.1333 14.1885 13.5139 13.2693 14.4613 11.9691C15.4087 10.6689 15.8606 9.07301 15.7354 7.46909C15.6103 5.86518 14.9164 4.3587 13.7789 3.22112C12.6413 2.08354 11.1348 1.38966 9.53088 1.26454C7.92697 1.13941 6.3311 1.59126 5.03086 2.53866C3.73063 3.48606 2.81152 4.86671 2.43917 6.43181C2.06682 7.99691 2.26571 9.64354 3 11.075L1.5 15.5L5.925 14Z"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="font-semibold">Inbox</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </Link>
            {/* REVIEWS */}
            <div
              onClick={() => navigate("reviews")}
              className="white_box p-4 flex justify-between items-center gap-3 !rounded-lg border hover:border-[#ccc] cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="font-semibold">Reviews</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
            {/* ACCOUNT */}
            <div
              onClick={() => navigate("update-profile")}
              className="white_box p-4 flex justify-between items-center gap-3 !rounded-lg border hover:border-[#ccc] cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16451 1.5H7.83451C7.43669 1.5 7.05516 1.65804 6.77385 1.93934C6.49255 2.22064 6.33451 2.60218 6.33451 3V3.135C6.33424 3.39804 6.26481 3.65639 6.13317 3.88413C6.00153 4.11186 5.81232 4.30098 5.58451 4.4325L5.26201 4.62C5.03398 4.75165 4.77532 4.82096 4.51201 4.82096C4.24871 4.82096 3.99004 4.75165 3.76201 4.62L3.64951 4.56C3.30531 4.36145 2.89639 4.30758 2.51251 4.41023C2.12864 4.51288 1.80118 4.76365 1.60201 5.1075L1.43701 5.3925C1.23846 5.7367 1.1846 6.14562 1.28724 6.5295C1.38989 6.91338 1.64066 7.24084 1.98451 7.44L2.09701 7.515C2.32372 7.64588 2.51223 7.83382 2.6438 8.06012C2.77537 8.28643 2.84543 8.54323 2.84701 8.805V9.1875C2.84806 9.45182 2.77925 9.71171 2.64755 9.94088C2.51584 10.17 2.32592 10.3603 2.09701 10.4925L1.98451 10.56C1.64066 10.7592 1.38989 11.0866 1.28724 11.4705C1.1846 11.8544 1.23846 12.2633 1.43701 12.6075L1.60201 12.8925C1.80118 13.2363 2.12864 13.4871 2.51251 13.5898C2.89639 13.6924 3.30531 13.6386 3.64951 13.44L3.76201 13.38C3.99004 13.2483 4.24871 13.179 4.51201 13.179C4.77532 13.179 5.03398 13.2483 5.26201 13.38L5.58451 13.5675C5.81232 13.699 6.00153 13.8881 6.13317 14.1159C6.26481 14.3436 6.33424 14.602 6.33451 14.865V15C6.33451 15.3978 6.49255 15.7794 6.77385 16.0607C7.05516 16.342 7.43669 16.5 7.83451 16.5H8.16451C8.56234 16.5 8.94387 16.342 9.22517 16.0607C9.50648 15.7794 9.66451 15.3978 9.66451 15V14.865C9.66478 14.602 9.73422 14.3436 9.86586 14.1159C9.9975 13.8881 10.1867 13.699 10.4145 13.5675L10.737 13.38C10.965 13.2483 11.2237 13.179 11.487 13.179C11.7503 13.179 12.009 13.2483 12.237 13.38L12.3495 13.44C12.6937 13.6386 13.1026 13.6924 13.4865 13.5898C13.8704 13.4871 14.1979 13.2363 14.397 12.8925L14.562 12.6C14.7606 12.2558 14.8144 11.8469 14.7118 11.463C14.6091 11.0791 14.3584 10.7517 14.0145 10.5525L13.902 10.4925C13.6731 10.3603 13.4832 10.17 13.3515 9.94088C13.2198 9.71171 13.151 9.45182 13.152 9.1875V8.8125C13.151 8.54818 13.2198 8.28829 13.3515 8.05912C13.4832 7.82995 13.6731 7.63966 13.902 7.5075L14.0145 7.44C14.3584 7.24084 14.6091 6.91338 14.7118 6.5295C14.8144 6.14562 14.7606 5.7367 14.562 5.3925L14.397 5.1075C14.1979 4.76365 13.8704 4.51288 13.4865 4.41023C13.1026 4.30758 12.6937 4.36145 12.3495 4.56L12.237 4.62C12.009 4.75165 11.7503 4.82096 11.487 4.82096C11.2237 4.82096 10.965 4.75165 10.737 4.62L10.4145 4.4325C10.1867 4.30098 9.9975 4.11186 9.86586 3.88413C9.73422 3.65639 9.66478 3.39804 9.66451 3.135V3C9.66451 2.60218 9.50648 2.22064 9.22517 1.93934C8.94387 1.65804 8.56234 1.5 8.16451 1.5Z"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.99951 11.25C9.24215 11.25 10.2495 10.2426 10.2495 9C10.2495 7.75736 9.24215 6.75 7.99951 6.75C6.75687 6.75 5.74951 7.75736 5.74951 9C5.74951 10.2426 6.75687 11.25 7.99951 11.25Z"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="font-semibold">Account/Profile</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
            {/* Change Password */}
            <div
              onClick={() => setModalOpen(true)}
              className="white_box p-4 flex justify-between items-center gap-3 !rounded-lg border hover:border-[#ccc] cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 7.5V5.25C4.25 4.25544 4.64509 3.30161 5.34835 2.59835C6.05161 1.89509 7.00544 1.5 8 1.5C8.99456 1.5 9.94839 1.89509 10.6517 2.59835C11.3549 3.30161 11.75 4.25544 11.75 5.25V7.5M8.75 12C8.75 12.4142 8.41421 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25C8.41421 11.25 8.75 11.5858 8.75 12ZM2.75 7.5H13.25C14.0784 7.5 14.75 8.17157 14.75 9V15C14.75 15.8284 14.0784 16.5 13.25 16.5H2.75C1.92157 16.5 1.25 15.8284 1.25 15V9C1.25 8.17157 1.92157 7.5 2.75 7.5Z"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-semibold">Change Password</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
            {/* Logout */}
            <div
              onClick={handleLogout}
              className="white_box p-4 flex justify-between items-center gap-3 !rounded-lg border hover:border-[#ccc] cursor-pointer"
            >
              <div className="flex items-center justify-between gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 14.75H2.75C2.35218 14.75 1.97064 14.592 1.68934 14.3107C1.40804 14.0294 1.25 13.6478 1.25 13.25V2.75C1.25 2.35218 1.40804 1.97064 1.68934 1.68934C1.97064 1.40804 2.35218 1.25 2.75 1.25H5.75M11 11.75L14.75 8M14.75 8L11 4.25M14.75 8H5.75"
                    stroke="#85E211"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="font-semibold">Logout</p>
              </div>
              <div>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPopup
        open={modalOpen}
        close={closeModal}
        heading="Change Password"
        content="ChangePassword"
        subcontent="Fill out below details to change your password"
      />
    </>
  );
};

export default More;
