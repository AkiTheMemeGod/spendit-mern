import { useState } from "react";
import axiosUtil from "../services/axios.js";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        navigate("/home");
    }
    }, [navigate]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axiosUtil.auth.post("/login", {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful");
        navigate("/home"); // redirect to homepage
      } else {
        await axiosUtil.auth.post("/register", {
          username: formData.name,
          email: formData.email,
          password: formData.password,
        });
        toast.success("Registration successful");
        setIsLogin(true);
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <Toaster position="top-right" />
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="form-control gap-4">
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="btn btn-link"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
