import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useDispatch } from "react-redux";
import {
  addUserInfo,
  clearUserInfo,
  setLoading,
} from "../../store/userSlice";
import { setToken } from "./authUtils";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // Uncomment if using navigation

const SignIn = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signUpHandle =()=>{
    navigate("/signup")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    dispatch(setLoading());

    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: input.email,
          password: input.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage =
          data?.error?.message || "User not found or invalid credentials";
        setError(errorMessage);
        dispatch(clearUserInfo());
        setIsLoading(false);
        return;
      }

      setToken(data.jwt);
      dispatch(addUserInfo(data.user));
      localStorage.setItem("userId", data?.user?.id);
      navigate("/home");
    } catch (error) {
      setError("Something went wrong. Please try again.", error);
      dispatch(clearUserInfo());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Illustration Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-800 to-black items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg"></div>

          <div className="text-center text-white z-10 max-w-lg">
            <div className="mb-8">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
                  alt="Sign In Illustration"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome Back</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sign in to access your account and continue your secure journey with us.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-900 to-black">
          <div className="w-full max-w-md">

            {/* Mobile header */}
            <div className="text-center mb-8 lg:hidden">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-600">
                <Lock className="w-8 h-8 text-gray-300" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to your account</p>
            </div>

            {/* Desktop header */}
            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
              <p className="text-gray-400">Enter your credentials to access your account</p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-700/50 rounded-xl flex items-start space-x-3 backdrop-blur-sm">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
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
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-xl bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={input.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="block w-full pl-10 pr-10 py-3 border border-gray-600 rounded-xl bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => alert("Forgot password functionality to be implemented")}
                  className="text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
                className="group relative w-full flex justify-center items-center py-3 px-4 border text-base font-medium rounded-xl cursor-pointer text-white bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-gray-600"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </button>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-gray-400">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => signUpHandle()}
                    className="font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
                  >
                    Create account
                  </button>
                </p>
              </div>
            </div>

            {/* Extra Links */}
            <div className="mt-8 pt-6 border-t border-gray-700 lg:hidden">
              <div className="text-center space-y-2">
                <button
                  type="button"
                  onClick={() => alert("Help functionality to be implemented")}
                  className="block text-sm text-gray-500 hover:text-gray-300 transition-colors w-full"
                >
                  Need help?
                </button>
                <button
                  type="button"
                  onClick={() => alert("Privacy policy to be implemented")}
                  className="block text-sm text-gray-500 hover:text-gray-300 transition-colors w-full"
                >
                  Privacy Policy
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
