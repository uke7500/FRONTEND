import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
    Proffesion: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: input.name,
            email: input.email,
            password: input.password,
            confirmed: true,
            role: 2,
          }),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Signup failed");
      }

      alert("Account created. Please sign in.");
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Illustration Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-800 to-black items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg"></div>

          <div className="text-center text-white z-10 max-w-lg">
            <div className="mb-8">
              <div className="relative">
                <img
                  src="https://img.freepik.com/premium-vector/user-profile-verification-flat-vector-illustration_750364-2107.jpg"
                  alt="Sign Up Illustration"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Join Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sign up to become part of our amazing platform.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-900 to-black">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Create Account
              </h2>
              <p className="text-gray-400">
                Fill the form below to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={input.name}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
                    placeholder="Enter a strong password"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full flex justify-center items-center py-3 px-4 border text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer border-gray-600"
              >
                <span>Sign Up</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Sign In Link */}
              <p className="text-sm text-gray-400 text-center">
                Already registered?{" "}
                <Link
                  to="/signin"
                  className="font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
