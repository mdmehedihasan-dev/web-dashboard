import React, { useState } from "react";
import { Input, Button } from "antd";
import AosWrapper from "../../Components/homeComponents/AosWrapper";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Only frontend validation, no API submit
  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email";
    }

    if (formData.password && formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone.trim()) errors.phone = "Phone number is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    // UI only → no backend action
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted (UI-only): ", formData);
    }
  };

  return (
    <AosWrapper>
      <div className="container mx-auto px-5 md:px-0 mt-[80px] mb-[100px]">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-4xl font-bold">Create Your Account</h2>
          <p className="text-gray-600">
            Join our platform and start your journey today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="block mb-1 font-medium">First Name *</label>
              <Input
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className={`pl-4 ${
                  formErrors.firstName ? "border-red-500" : ""
                }`}
              />
              {formErrors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 font-medium">Last Name *</label>
              <Input
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className={`pl-4 ${
                  formErrors.lastName ? "border-red-500" : ""
                }`}
              />
              {formErrors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block mb-1 font-medium">Email Address *</label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`pl-4 ${formErrors.email ? "border-red-500" : ""}`}
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block mb-1 font-medium">Password</label>
            <Input.Password
              name="password"
              placeholder="Enter your password (optional)"
              value={formData.password}
              onChange={handleChange}
              className={`pl-4 ${
                formErrors.password ? "border-red-500" : ""
              }`}
            />
            {formErrors.password && (
              <p className="mt-1 text-sm text-red-500">
                {formErrors.password}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="block mb-1 font-medium">Phone Number *</label>
            <Input
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={`pl-4 ${formErrors.phone ? "border-red-500" : ""}`}
            />
            {formErrors.phone && (
              <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
            )}
          </div>

          {/* Button */}
          <div className="mt-8 text-center">
            <Button
              htmlType="submit"
              type="primary"
              className="!px-10 !h-[50px] uppercase bg-[#85e211] hover:bg-[#202020]"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </AosWrapper>
  );
};

export default SignUp;
