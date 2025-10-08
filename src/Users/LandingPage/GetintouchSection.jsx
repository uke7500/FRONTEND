import { useState } from "react";
import { Phone, FileText, Mail, ChevronDown } from "lucide-react";
import Map from "../../assets/Map.png";

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
      <div className="max-w-7xl mx-auto mb-10">
        <a href="https://maps.app.goo.gl/V5gsQsD82MwfYHPV7" target="_blank">
          <img
            className="absolute w-60 h-120 left-[50%] mt-110 sm:mt-95 -translate-x-1/2 lg:left-270 lg:mt-1 lg:h-auto md:left-[50%] md:-translate-x-1/2 md:mt-72 rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-200 ease-in-out cursor-pointer z-50 md:w-90 md:h-143"
            src={Map}
            alt=""
          />
        </a>

        <div className="h-160 grid lg:place-items-end md:place-items-center lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg">
          {/* Left Side - Contact Form */}
          <div className="p-8 lg:ml-20 lg:mb-42 lg:p-12 overflow-visible">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Get in <span className="text-green-500">Touch</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Reach out to us for any inquiries or assistance—we're here to
                help!
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                {/* <Phone className="w-5 h-5 text-black" /> */}
                <div>
                  <p className="font-semibold text-black">PHONE</p>
                  <p className="text-green-500 w-40">+44 0793452753</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {/* <Mail className="w-5 h-5 text-black" /> */}
                <div>
                  <p className="font-semibold text-black">EMAIL</p>
                  <p className="text-green-500">
                    patelsecuresolution@gmail.com
                  </p>
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
