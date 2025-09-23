import React, { useState } from "react";
import {
  Shield,
  Users,
  Award,
  Target,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Ready to secure your property? Get in touch with our security
            experts today.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-green-400">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-300">
                      123 Security Street
                      <br />
                      Tech District, City 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">info@securitycompany.com</p>
                    <p className="text-gray-300">support@securitycompany.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-300">
                      Sunday: Emergency Support Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-400 mb-2">
                  24/7 Emergency Support
                </h4>
                <p className="text-gray-300 mb-2">
                  For urgent security matters or system failures:
                </p>
                <p className="text-red-400 font-bold">
                  Emergency Hotline: +1 (555) 911-HELP
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              {isSubmitted && (
                <div className="mb-6 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="installation">Installation Service</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-green-400 focus:outline-none text-white resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
            Find Us
          </h2>
          <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-300">
                Interactive map would be integrated here
              </p>
              <p className="text-gray-400 text-sm">
                123 Security Street, Tech District, City 12345
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
