import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSearch } from "react-icons/io5"; 
const STATIC_USER = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phoneNumber: "0612345678",
};

const Step6 = () => {
  // Static state initialization
  const [tab, setTab] = useState(1);
  const [loading] = useState(false); // Always false for static view
  const [modalOpen, setModalOpen] = useState(false);
  const isEditing = false; // Static mock value

  // Static input values
  const [staticValues, setStaticValues] = useState({
    firstName: STATIC_USER.firstName,
    lastName: STATIC_USER.lastName,
    email: STATIC_USER.email,
    phoneNumber: STATIC_USER.phoneNumber,
    pickupStreet: "Static Pickup Street 123",
    pickupZipCode: "1000 AB",
    pickupCity: "Amsterdam",
    pickupAdditionalInfo: "Entrance on the side street.",
    deliveryStreet: "Static Delivery Address 45",
    deliveryZipCode: "3000 CD",
    deliveryCity: "Rotterdam",
    deliveryAdditionalInfo: "Ring the second bell.",
    newsletter: false,
    acceptTerms: true,
    acceptPrivacy: true,
  });

  // Mock handlers
  const handleTabChange = (newTab) => {
    setTab(newTab);
    // You could also update a 'userType' field in staticValues here if needed
  };

  const handleStaticChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStaticValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleStaticSubmit = (e) => {
    e.preventDefault();
    console.log("Static Form Submission Attempted:", staticValues);
    // No actual API call or navigation
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Mock for Google Maps loader (always considered loaded)
  const isLoaded = true;

  // Mock input component for visual Google Maps integration
  const StaticSearchInput = ({
    name,
    placeholder,
    value,
    onChange,
    required,
  }) => (
    <div className="relative">
      <input
        type="text"
        name={name}
        className="form-control !pl-4 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      <IoSearch className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
    </div>
  );

  // Mock ModalPopup component
  const MockModalPopup = ({ open, close, heading, content }) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-11/12 p-6 bg-white rounded-lg shadow-xl md:w-1/3">
          <h3 className="mb-4 text-xl font-bold">{heading} (Mock)</h3>
          <p>
            Static content for "{content}". This is a placeholder for the modal.
          </p>
          <button
            onClick={close}
            className="px-4 py-2 mt-4 text-white rounded bg-primary"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const ComponentContent = (
    <div className="container px-5 py-10 mx-auto">
      <form onSubmit={handleStaticSubmit}>
        <div>
          <h2 className="font-bold text-[18px] text-primary uppercase">
            Contact
          </h2>
          <p className="mt-2">Fill in your contact details</p>
          <p>
            How can we contact you? With these contact details we will keep you
            up to date on your transport.
          </p>

          <div className="flex items-center justify-start gap-3 mt-4 mb-4">
            <button
              type="button"
              onClick={() => handleTabChange(1)}
              className={`auth_button !w-[110px] !h-[40px] !font-normal !text-[12px] !shadow-lg ${
                tab === 2 ? "!bg-white !text-black" : ""
              }`}
            >
              Individueel
            </button>
            <button
              type="button"
              onClick={() => handleTabChange(2)}
              className={`auth_button !w-[110px] !h-[40px] ${
                tab === 1 ? "!bg-white !text-black" : ""
              } !font-normal !text-[12px] !shadow-lg`}
            >
              Business
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-2">
            {/* First Name / Company Name */}
            <div className="mt-1 form-group">
              <label>
                {tab === 1 ? "First Name" : "Company Name"}{" "}
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control !pl-4"
                placeholder={tab === 1 ? "First Name" : "Company Name"}
                onChange={handleStaticChange}
                value={staticValues.firstName}
              />
              {/* No error message for static version */}
            </div>

            {/* Last Name / VIN Number */}
            <div className="mt-1 form-group">
              <label>
                {tab === 1 ? "Last Name" : "VIN Number"}{" "}
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control !pl-4"
                placeholder={tab === 1 ? "Last Name" : "VIN Number"}
                onChange={handleStaticChange}
                value={staticValues.lastName}
              />
              {/* No error message for static version */}
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label>
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control !pl-4"
                placeholder="Email Address"
                onChange={handleStaticChange}
                value={staticValues.email}
              />
              {/* No error message for static version */}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                onChange={handleStaticChange}
                value={staticValues.phoneNumber}
              />
              <div className="icon_input !top-[37px] font-bold text-[#777777]">
                +31
              </div>
              {/* No error message for static version */}
            </div>
          </div>

          {/* --- */}

          <div>
            <h2 className="font-bold text-[18px] mt-3 text-primary uppercase">
              Pickup address contact details
            </h2>
            <div className="w-full mt-4 form-group">
              <label>
                Street Name/Address <span className="required">*</span>
              </label>
              {isLoaded && (
                <div className="w-full">
                  <StaticSearchInput
                    name="pickupStreet"
                    placeholder="Street Name/Address"
                    onChange={handleStaticChange}
                    value={staticValues.pickupStreet}
                    required
                  />
                </div>
              )}
              {/* No error message for static version */}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-1 md:grid-cols-2">
              <div className="mt-1 form-group">
                <label>
                  Zip Code <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="pickupZipCode"
                  className="form-control !pl-4"
                  placeholder="Zip Code"
                  onChange={handleStaticChange}
                  value={staticValues.pickupZipCode}
                />
                {/* No error message for static version */}
              </div>
              <div className="form-group">
                <label>
                  City/State <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="pickupCity"
                  className="form-control !pl-4"
                  placeholder="City/State"
                  onChange={handleStaticChange}
                  value={staticValues.pickupCity}
                />
                {/* No error message for static version */}
              </div>
            </div>
            <div className="form-group">
              <label>Additional Information</label>
              <textarea
                name="pickupAdditionalInfo"
                className="form-control !pl-4 h-[100px]"
                placeholder="Additional info for the courier at this address (optional)"
                onChange={handleStaticChange}
                value={staticValues.pickupAdditionalInfo}
              ></textarea>
            </div>
          </div>

          {/* --- */}

          <div>
            <h2 className="font-bold text-[18px] mt-3 text-primary uppercase">
              Delivery address contact details
            </h2>
            <div className="w-full mt-4 form-group">
              <label>
                Street Name/Address <span className="required">*</span>
              </label>
              {isLoaded && (
                <div className="w-full">
                  <StaticSearchInput
                    name="deliveryStreet"
                    placeholder="Street Name/Address"
                    onChange={handleStaticChange}
                    value={staticValues.deliveryStreet}
                    required
                  />
                </div>
              )}
              {/* No error message for static version */}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-1 md:grid-cols-2">
              <div className="mt-1 form-group">
                <label>
                  Zip Code <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="deliveryZipCode"
                  className="form-control !pl-4"
                  placeholder="Zip Code"
                  onChange={handleStaticChange}
                  value={staticValues.deliveryZipCode}
                />
                {/* No error message for static version */}
              </div>
              <div className="form-group">
                <label>
                  City/State <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="deliveryCity"
                  className="form-control !pl-4"
                  placeholder="City/State"
                  onChange={handleStaticChange}
                  value={staticValues.deliveryCity}
                />
                {/* No error message for static version */}
              </div>
            </div>
            <div className="form-group">
              <label>Additional Information</label>
              <textarea
                name="deliveryAdditionalInfo"
                className="form-control !pl-4 h-[100px]"
                placeholder="Additional info for the courier at this address (optional)"
                onChange={handleStaticChange}
                value={staticValues.deliveryAdditionalInfo}
              ></textarea>
            </div>
          </div>

          {/* Checkboxes (Terms and Privacy) */}
          <div className="flex flex-col gap-4 mt-5 text-[14px] text-[#92939E]">
            <label className="cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                name="acceptTerms"
                onChange={handleStaticChange}
                checked={staticValues.acceptTerms}
              />
              <span>
                By making use of Koerier's Platform, you have to agree with
                our's{" "}
                <a
                  href="/general-terms"
                  className="text-[blue] underline"
                  target="_blank"
                >
                  general terms
                </a>
                .
              </span>
              {/* No error message for static version */}
            </label>
            <label className="cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                name="acceptPrivacy"
                onChange={handleStaticChange}
                checked={staticValues.acceptPrivacy}
              />
              <span>
                I agree with our's{" "}
                <a
                  href="/privacy-policy"
                  className="text-[blue] underline"
                  target="_blank"
                >
                  privacy statement
                </a>
                .
              </span>
              {/* No error message for static version */}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="website_button !px-12 !h-[60px] hover:bg-[#202020] bg-primary uppercase flex items-center gap-1 mt-10"
            disabled={loading}
          >
            <MdOutlineAttachMoney size={24} />
            <span>
              {loading ? "Submitting" : isEditing ? "Update" : "PAY NOW"}
            </span>
          </button>
        </div>
      </form>

      {/* MODAL POPUP (Using Mock) */}
      <MockModalPopup
        open={modalOpen}
        close={closeModal}
        heading="Add your item(s)"
        content="additems"
        show_buttons={false}
        show_buttons_not={false}
      />
    </div>
  );

  return ComponentContent;
};

export default Step6;