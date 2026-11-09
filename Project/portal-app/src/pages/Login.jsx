import React, { useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaEye,
  FaPhone,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    try {
      const user = await login(formData.email, formData.password);
      console.log(user);
      setFormData({
        email: "",
        password: "",
      });
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login successful");
        navigate("/");
      }
      if (user.role === "company") {
        navigate("/company/dashboard");
      }
      setLoading(false);
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
