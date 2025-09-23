import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "../../assets/UKE-Logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Features
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
              <li>
                <a
                  href="#"
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </a>
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Help center
                </a>
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
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Report a bug
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Downloads</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  iOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Mac
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Windows
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Chrome
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="relative w-70 md:w-auto">
            <h3 className="text-lg font-semibold mb-6">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </p>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright © 2025 | All Rights Reserved
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
