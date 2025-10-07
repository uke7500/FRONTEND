import React from "react";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Mail,
  CreditCard,
  Bell,
  Cookie,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-emerald-900 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At SecureVision, your privacy is our top priority. We collect only
            essential information to process orders, improve our products, and
            provide service support.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
            <Calendar className="w-5 h-5" />
            <p>Effective Date: 6 October 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Section 1: Information We Collect */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                1. Information We Collect
              </h2>
            </div>
          </div>
          <ul className="space-y-3 ml-16">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Name, contact number, address, and email.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                Payment details (securely processed through payment gateways).
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                CCTV installation details (for service and warranty purposes).
              </span>
            </li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                2. How We Use Your Information
              </h2>
            </div>
          </div>
          <ul className="space-y-3 ml-16">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>To process and deliver your orders.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                To provide installation, support, and warranty services.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-400 mt-1">•</span>
              <span>
                To send updates, offers, and important service notifications.
              </span>
            </li>
          </ul>
        </div>

        {/* Section 3: Data Security */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                3. Data Security
              </h2>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed ml-16">
            All personal data is encrypted and stored securely. We never sell or
            share your information with third parties.
          </p>
        </div>

        {/* Section 4: Cookies */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <Cookie className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                4. Cookies
              </h2>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed ml-16">
            Our website uses cookies to improve user experience and website
            analytics.
          </p>
        </div>

        {/* Section 5: Your Rights */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                5. Your Rights
              </h2>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed ml-16">
            You can request data access or deletion by emailing us at{" "}
            <a
              href="mailto:patelsecuresolution@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              patelsecuresolution@gmail.com
            </a>
          </p>
        </div>

        {/* Section 6: Policy Updates */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-emerald-500/10 p-3 rounded-lg text-emerald-400 flex-shrink-0">
              <Bell className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-400 mb-2">
                6. Policy Updates
              </h2>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed ml-16">
            This policy may be updated periodically. The latest version will
            always be available on our website.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-emerald-900 to-gray-900 rounded-2xl p-8 border border-emerald-500/30">
          <div className="text-center">
            <Mail className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please don't hesitate to reach out to us.
            </p>
            <Link to="/contact">
              <a className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </a>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
            <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
            <div className="text-gray-400 text-sm">Secure</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
            <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              Encrypted
            </div>
            <div className="text-gray-400 text-sm">Data</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
            <Eye className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400 mb-1">No</div>
            <div className="text-gray-400 text-sm">Third Party</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
            <CreditCard className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400 mb-1">Safe</div>
            <div className="text-gray-400 text-sm">Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
