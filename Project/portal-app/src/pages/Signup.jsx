import React, { useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaEye,
  FaPhone,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { signup } from "../services/authService";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
    phone: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
     
      console.log("Password and Confirm Password do not match");
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        phone: formData.phone,
        ...(formData.role === "company" && {
          companyName: formData.companyName,
        }),
      };
      const user = await signup(userData);
      console.log(user);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "jobseeker",  
        phone: "",
        companyName: "",
      });
      setLoading(false);
      toast.success("Signup successful");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-md bg-white border border-gray-300 rounded p-8 mx-auto">
          <div className="text-center mb-8">
            <FaUserPlus className="text-6xl text-blue-600 mx-auto" />
            <h2 className="text-3xl font-bold mt-6">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account{" "}
              <Link className="text-blue-600" to="/login">
                Sign in
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm mb-2">I am a</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="role"
                    value="jobseeker"
                    checked={formData.role === "jobseeker"}
                  />
                  <FaUser className="text-blue-600" />
                  Job Seeker
                </label>
                <label className="flex items-center gap-2">
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="role"
                    value="company"
                    checked={formData.role === "company"}
                  />
                  <FaBriefcase className="text-blue-600" />
                  Company
                </label>
              </div>
            </div>
            {/* Name */}
            <div className="mb-4">
              <lable htmlFor="name" className="text-sm mb-1 block">
                Full Name
              </lable>
              <div className="flex border border-gray-300 gap-2 items-center px-3">
                <FaUser className="text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 outline-none"
                />
              </div>
            </div>
            {formData.role == "company" && (
              <div className="mb-4">
                <lable htmlFor="companyName" className="block text-sm mb-1">
                  Company Name
                </lable>
                <div className="flex border border-gray-300 gap-2 items-center px-3">
                  <FaBriefcase className="text-gray-400" />
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <lable htmlFor="email" className="text-sm mb-1 block">
                Email address
              </lable>
              <div className="flex border border-gray-300 gap-2 items-center px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full  py-2 outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4"></div>
            <lable htmlFor="phone" className="text-sm mb-1 block">
              Phone Number
            </lable>
            <div className="flex border border-gray-300 gap-2 items-center px-3">
              <FaPhone className="text-gray-400" />
              <input
                id="phone"
                name="phone"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full  py-2 outline-none"
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <lable htmlFor="password" className="text-sm mb-1 block">
                Password
              </lable>
              <div className="flex border border-gray-300 gap-2 items-center px-3">
                <FaEye className="text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full  py-2 outline-none"
                />
              </div>
            </div>
            {/* Confirm Password */}
            <div className="mb-4">
              <lable htmlFor="confirmPassword" className="text-sm mb-1 block">
                Confirm Password
              </lable>
              <div className="flex border border-gray-300 gap-2 items-center px-3">
                <FaEye className="text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full  py-2 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
