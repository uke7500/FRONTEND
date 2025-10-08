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
          <div className="">
            {/* Contact Information */}
            <div className="mx-auto">
              <h2 className="text-3xl text-left font-bold mb-8 text-green-400">
                Get In Touch
              </h2>

              <div className="space-y-6 grid lg:grid-cols-2 md:place-items-start gap-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-300">
                      140 harmony hill 
                      <br />
                      E18 1qh
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+44 0793452753</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">
                      patelsecuresolution@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday–Sunday 9:00 AM – 7:00 PM
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
                  Emergency Contact: +44 0793452753
                </p>
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
