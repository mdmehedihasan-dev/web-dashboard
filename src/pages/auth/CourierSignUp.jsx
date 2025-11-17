import React, { useState } from "react";
import COURIER from "/courier.jpg";
import { Input, Select, Button, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import AosWrapper from "../../Components/homeComponents/AosWrapper";

const { Dragger } = Upload;

const CourierSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    communicationMode: "WhatsApp",
    companyLocation: "",
    howKnow: "Google",
    courierExperience: "5 years",
    legalForm: "company legal form",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const uploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: (file) => {
      return false; // prevent auto upload
    },
  };

  return (
    <AosWrapper>
      <div className="container max-w-6xl mx-auto px-5 md:px-0 mt-[80px] mb-[100px]">
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">
            Freelance courier? Find extra driver jobs
          </h2>
          <p>
            Our representative will connect with you and you will get an email
            when your account is approved.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:flex-row">
          {/* LEFT FORM */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 font-medium">First Name *</label>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Last Name *</label>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address *</label>
                <Input
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number *</label>
                <Input
                  name="phone"
                  placeholder="+31 Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name *</label>
                <Input
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Mode of Communication *</label>
                <Select
                  value={formData.communicationMode}
                  placeholder="Mode of Communication"
                  onChange={(val) => handleSelectChange("communicationMode", val)}
                  options={[
                    { value: "WhatsApp", label: "WhatsApp" },
                    { value: "Text message", label: "Text message" },
                  ]}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Company Location *</label>
                <Input
                  name="companyLocation"
                  placeholder="Company Location"
                  value={formData.companyLocation}
                  onChange={handleChange}
                />
                <p className="mt-1 text-sm text-red-500">
                  Company Location is required
                </p>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  How you know about us? *
                </label>
                <Select
                  value={formData.howKnow}
                  placeholder="How you know"
                  onChange={(val) => handleSelectChange("howKnow", val)}
                  options={[
                    { value: "Google", label: "Google" },
                    { value: "Social Media", label: "Social Media" },
                    { value: "Website", label: "Website" },
                  ]}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  What is your experience with courier work *
                </label>
                <Select
                  value={formData.courierExperience}
                  placeholder="Experience with Courier Work"
                  onChange={(val) => handleSelectChange("courierExperience", val)}
                  options={[
                    { value: "5 years", label: "5 years" },
                    { value: "Parcel delivery DHL/PostNL", label: "Parcel delivery DHL/PostNL" },
                    { value: "Mover", label: "Mover" },
                    { value: "Furniture transporter", label: "Furniture transporter" },
                    { value: "Others", label: "Other" },
                  ]}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">
                  What is the legal form of your company? *
                </label>
                <Select
                  value={formData.legalForm}
                  placeholder="Company Legal form"
                  onChange={(val) => handleSelectChange("legalForm", val)}
                  options={[
                    { value: "company legal form", label: "company legal form" },
                    { value: "LLC", label: "LLC" },
                    { value: "BV", label: "BV" },
                    { value: "Sole proprietorship/self-employed", label: "Sole proprietorship/self-employed" },
                  ]}
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="mt-6 md:col-span-2">
              <label className="block mb-2 font-medium">
                Upload Documents (ID, License, etc.) *
              </label>
              <Dragger {...uploadProps} className="!p-6 border-dashed rounded-lg">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click to upload or drag and drop</p>
                <p className="ant-upload-hint">PNG, JPG, PDF, DOC up to 10MB</p>
              </Dragger>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-start justify-center w-full md:w-1/3">
            <img src={COURIER} alt="Courier" className="shadow rounded-xl" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start mt-8">
          <Button
            className="!px-12 !h-[60px] bg-[#85e211] text-white hover:bg-[#202020] uppercase rounded-full"
          >
            REGISTER NOW
          </Button>
        </div>
      </div>
    </AosWrapper>
  );
};

export default CourierSignup;
