import React, { useState } from "react";
import COURIER from "/courier.jpg";
import { Input, Select, Button } from "antd";
import AosWrapper from "../../Components/homeComponents/AosWrapper";

const CourierSignup = () => {
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    communicationMode: "",
    companyLocation: "",
    howKnow: "",
    courierExperience: "",
    legalForm: "",
    password: "",
    lat: "",
    lng: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setFileList([...fileList, ...files]);
  };

  const removeFile = (index) => {
    const updated = [...fileList];
    updated.splice(index, 1);
    setFileList(updated);
  };

  return (
    <AosWrapper>
      <div className="container mx-auto px-5 md:px-0 mt-[80px] mb-[100px]">
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">
            Freelance courier? Find extra driver jobs
          </h2>
          <p>
            Our representative will connect with you and you will get an email
            when your account is approved.
          </p>
        </div>

        <div>
          <div className="flex flex-col gap-16 md:flex-row">
            {/* LEFT SIDE FORM */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  name="companyName"
                  placeholder="Company Name *"
                  value={formData.companyName}
                  onChange={handleChange}
                />

                <Select
                  value={formData.communicationMode}
                  placeholder="Mode of Communication *"
                  onChange={(val) =>
                    handleSelectChange("communicationMode", val)
                  }
                  options={[
                    { value: "WhatsApp", label: "WhatsApp" },
                    { value: "Text message", label: "Text message" },
                  ]}
                />

                <Input
                  name="companyLocation"
                  placeholder="Company Location *"
                  value={formData.companyLocation}
                  onChange={handleChange}
                />

                <Select
                  value={formData.howKnow}
                  placeholder="How you know about us *"
                  onChange={(val) => handleSelectChange("howKnow", val)}
                  options={[
                    { value: "Google", label: "Google" },
                    { value: "Social Media", label: "Social Media" },
                    { value: "Website", label: "Website" },
                  ]}
                />

                <Select
                  value={formData.courierExperience}
                  placeholder="Experience with Courier *"
                  onChange={(val) =>
                    handleSelectChange("courierExperience", val)
                  }
                  options={[
                    { value: "5 years", label: "5 years" },
                    {
                      value: "Parcel delivery DHL/PostNL",
                      label: "Parcel delivery DHL/PostNL",
                    },
                    { value: "Mover", label: "Mover" },
                    {
                      value: "Furniture transporter",
                      label: "Furniture transporter",
                    },
                    { value: "Others", label: "Other" },
                  ]}
                />

                <Select
                  value={formData.legalForm}
                  placeholder="Legal Form *"
                  onChange={(val) => handleSelectChange("legalForm", val)}
                  options={[
                    { value: "LLC", label: "LLC" },
                    { value: "BV", label: "BV" },
                    {
                      value: "Sole proprietorship/self-employed",
                      label: "Sole proprietorship/self-employed",
                    },
                  ]}
                />
              </div>

              {/* Lat / Lng */}
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                <Input
                  name="lat"
                  placeholder="Latitude"
                  value={formData.lat}
                  onChange={handleChange}
                />
                <Input
                  name="lng"
                  placeholder="Longitude"
                  value={formData.lng}
                  onChange={handleChange}
                />
              </div>

              {/* File Upload */}
              <div className="mt-4">
                <label className="font-medium">Upload Documents (optional)</label>
                <input type="file" multiple onChange={handleFilesChange} />

                <div className="mt-2">
                  {fileList.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between mt-1 text-sm"
                    >
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="text-red-500"
                        onClick={() => removeFile(idx)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full md:w-1/3">
              <img src={COURIER} alt="Courier" className="shadow rounded-xl" />
            </div>
          </div>

          <div className="mt-6">
            <Button className="!px-12 !h-[60px] bg-[#85e211] text-white hover:bg-[#202020] uppercase">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </AosWrapper>
  );
};

export default CourierSignup;
