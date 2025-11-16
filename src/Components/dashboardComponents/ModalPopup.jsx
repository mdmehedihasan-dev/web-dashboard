import React, { useState, useEffect } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import FiltersJobs from "./FiltersJobs";
import AddItems from "./Additems";
import toast from "react-hot-toast";

const ModalPopup = ({
  open,
  close,
  heading,
  content,
  subcontent,
  show_buttons = true,
  show_buttons_not = true,
  setDate,
  date,
  job,
  filters,
  setFilters,
}) => {
  const [showmodal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(open);
  }, [open]);

  // Dummy submit handler
  const handleSubmit = () => {
    console.log("Dummy Submit Triggered");
    toast.success("Submitted (Dummy)");

    setShowModal(false);
    if (close) close();
  };

  // Date picker UI
  const DateField = () => (
    <div className="flex items-center gap-4">
      <input
        type="date"
        className="border border-[#ccc] py-2 px-4 w-full rounded-md"
        value={date || ""}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );

  // Dummy Change Password Form
  const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    const handleInput = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitPassword = () => {
      if (!form.oldPassword || !form.newPassword || !form.confirmPassword)
        return toast.error("All fields required");

      if (form.newPassword !== form.confirmPassword)
        return toast.error("Passwords do not match");

      console.log("Dummy Password Update:", form);
      toast.success("Password Updated (Dummy)");

      setShowModal(false);
      if (close) close();
    };

    return (
      <div className="flex flex-col gap-4">
        {["oldPassword", "newPassword", "confirmPassword"].map((field) => (
          <div key={field} className="form-group">
            <label className="block mb-1 capitalize">{field}</label>
            <input
              type={showPassword ? "text" : "password"}
              name={field}
              className="w-full p-2 border rounded-md form-control"
              placeholder={`Enter ${field}`}
              value={form[field]}
              onChange={handleInput}
            />

            <div
              className="mt-1 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <PiEyeSlash size={20} />
              ) : (
                <PiEye size={20} />
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <button
            className="px-6 py-2 text-white bg-red-400 rounded-full"
            onClick={() => {
              setShowModal(false);
              if (close) close();
            }}
          >
            Close
          </button>
          <button
            className="px-6 py-2 text-white bg-green-500 rounded-full"
            onClick={submitPassword}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  // Dummy Review Popup
  const ReviewPopup = () => {
    const [comment, setComment] = useState("");
    const [star1, setStar1] = useState(0);
    const [star2, setStar2] = useState(0);
    const [star3, setStar3] = useState(0);

    const submitReview = () => {
      const reviewData = {
        comment,
        professionalism: star1,
        communication: star2,
        friendliness: star3,
      };

      console.log("Dummy Review Submitted:", reviewData);
      toast.success("Review Submitted (Dummy)");

      setShowModal(false);
      if (close) close();
    };

    return (
      <div>
        <textarea
          className="w-full p-3 mb-3 border rounded-md"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter review..."
        />

        <div className="flex justify-between mb-3">
          <span>Professionalism</span>
          <ReactStars count={5} value={star1} onChange={setStar1} size={20} />
        </div>

        <div className="flex justify-between mb-3">
          <span>Communication</span>
          <ReactStars count={5} value={star2} onChange={setStar2} size={20} />
        </div>

        <div className="flex justify-between">
          <span>Friendliness</span>
          <ReactStars count={5} value={star3} onChange={setStar3} size={20} />
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="px-6 py-2 text-white bg-red-400 rounded-full"
            onClick={() => {
              setShowModal(false);
              if (close) close();
            }}
          >
            Close
          </button>
          <button
            className="px-6 py-2 text-white rounded-full bg-lime-600"
            onClick={submitReview}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {showmodal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]">
          <div className="flex items-center justify-center w-full h-full">
            <div className="bg-white rounded-md w-[90%] md:w-[40%]">
              <div className="flex justify-between p-4 text-lg font-semibold border-b">
                <span>{heading}</span>

                {!show_buttons_not && (
                  <button
                    className="text-red-500"
                    onClick={() => {
                      setShowModal(false);
                      if (close) close();
                    }}
                  >
                    <IoCloseCircleOutline size={24} />
                  </button>
                )}
              </div>

              <div className="px-6 py-4">
                {content === "date_popup" && <DateField />}
                {content === "ChangePassword" && <ChangePassword />}
                {content === "filterjobs" && (
                  <FiltersJobs filters={filters} setFilters={setFilters} />
                )}
                {content === "additems" && <AddItems close={close} />}
                {content === "review_content" && <ReviewPopup />}
                {content === "delete_popup" && (
                  <p className="text-center text-red-500">
                    Are you sure you want to delete job #{job?.jobNumber}?
                  </p>
                )}
              </div>

              {show_buttons_not &&
                content !== "ChangePassword" &&
                content !== "review_content" && (
                  <div className="flex justify-between p-4 border-t">
                    <button
                      className="px-4 py-2 text-white bg-red-400 rounded-full"
                      onClick={() => {
                        setShowModal(false);
                        if (close) close();
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-2 text-white bg-green-500 rounded-full"
                      onClick={handleSubmit}
                    >
                      {content === "delete_popup" ? "Delete" : "Submit"}
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
