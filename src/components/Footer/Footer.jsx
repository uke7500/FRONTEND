import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { FiFacebook } from "react-icons/fi";
import logo from "../../assets/UKE-Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const goToReview = () => {
  //   navigate("/#review");
  // };

  const goToReview = () => {
    if (pathname !== "/") {
      // Navigate to home page first
      navigate("/", { replace: false });

      // Wait a bit for DOM to render
      setTimeout(() => {
        const el = document.getElementById("review");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 1350); // 100ms is usually enough
    } else {
      // Already on home → scroll directly
      const el = document.getElementById("review");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToServices = () => {
    if (pathname !== "/") {
      // Navigate to home page first
      navigate("/", { replace: false });

      // Wait a bit for DOM to render
      setTimeout(() => {
        const el = document.getElementById("service");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 1350); // 100ms is usually enough
    } else {
      // Already on home → scroll directly
      const el = document.getElementById("service");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Logo */}
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-10" />
              </Link>
            </div>

            {/* Description */}
            <div className="lg:text-right">
              <p className="text-gray-400 text-sm leading-relaxed max-w-md lg:ml-auto">
                CCTV Cameras, Security Systems, and Installation Services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li className="cursor-pointer">
                <a
                  onClick={goToServices}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Case studies
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  onClick={goToReview}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact us
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Getting started
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Help center
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Server status
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <a className="text-gray-400 hover:text-white transition-colors text-sm">
                    Report a bug
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Chat support
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-5">
              {/* Facebook */}
              <li className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-blue-500 transition-colors">
                <span className="">
                  <Facebook size={20} />
                </span>
                <a href="#" className="text-sm">
                  Facebook
                </a>
              </li>

              {/* Twitter */}
              {/* <li className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-blue-400 transition-colors">
                <span className="">
                  <Twitter size={20} />
                </span>
                <a href="#" className="text-sm">
                  Twitter
                </a>
              </li> */}

              {/* Instagram */}
              <li className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-pink-500 transition-colors">
                <span className="">
                  <Instagram size={20} />
                </span>
                <a
                  href="https://www.instagram.com/patelsecuritysolution096?igsh=MTkwZzNjbDhmZmwxYw=="
                  className="text-sm"
                >
                  Instagram
                </a>
              </li>

              {/* LinkedIn */}
              {/* <li className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-blue-700 transition-colors">
                <span className="">
                  <Linkedin size={20} />
                </span>
                <a href="#" className="text-sm">
                  LinkedIn
                </a>
              </li> */}

              {/* YouTube */}
              {/* <li className="flex gap-2 items-center cursor-pointer text-gray-400 hover:text-red-500 transition-colors">
                <span className="">
                  <Youtube size={20} />
                </span>
                <a href="#" className="text-sm">
                  YouTube
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright © 2025 | All Rights Reserved | Patel Security Solutions
            </p>

            {/* Social Media Icons */}
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
