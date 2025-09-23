import { useState } from "react";
import { Phone, FileText, Mail, ChevronDown } from "lucide-react";

const GetintouchSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sourceOptions = [
    {
      id: 1,
      name: "Google Search",
    },
    {
      id: 2,
      name: "Social Media",
    },
    {
      id: 3,
      name: "Referral",
    },
    {
      id: 4,
      name: "Advertisement",
    },
    {
      id: 5,
      name: "Website",
    },
    {
      id: 6,
      name: "Other",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSourceSelect = (option) => {
    setFormData((prev) => ({
      ...prev,
      source: option,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <img
          className="absolute w-60 h-118 left-[50%] mt-200 -translate-x-1/2 lg:left-270 lg:mt-7 md:left-[50%] md:-translate-x-1/2 md:mt-152 rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-200 ease-in-out cursor-pointer z-50 md:w-90 md:h-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGJCbEKm6Dsj99yCQpINVH1UcHMlObtT9rQ&s"
          alt=""
        />

        <div className="grid lg:place-items-end md:place-items-center lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg">
          {/* Left Side - Contact Form */}
          <div className="p-8 lg:ml-20 lg:p-12 overflow-visible">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Get in <span className="text-green-500">Touch</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Reach out to us for any inquiries or assistance—we're here to
                help!
              </p>
            </div>

            <div onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* How did you find us Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-left flex justify-between items-center"
                >
                  <span
                    className={formData.source ? "text-black" : "text-gray-500"}
                  >
                    {formData.source || "How did you find us?"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-black transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute text-black top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {sourceOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSourceSelect(option.name)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                SEND
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black" />
                <div>
                  <p className="font-semibold text-black">PHONE</p>
                  <p className="text-green-500">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-black" />
                <div>
                  <p className="font-semibold text-black">FAX</p>
                  <p className="text-green-500">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black" />
                <div>
                  <p className="font-semibold text-black">EMAIL</p>
                  <p className="text-green-500">info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative bg-green-500 lg:w-90 md:w-full min-h-[530px] md:min-h-[600px] lg:min-h-full overflow-hidden md:rounded-3xl lg:rounded-none lg:rounded-r-3xl rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default GetintouchSection;
