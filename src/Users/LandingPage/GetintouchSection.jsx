import Map from "../../assets/Map.png";

const GetintouchSection = () => {
  return (
    <div className="bg-black p-8 relative">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Left Side - Contact Section */}
          <div className="p-8 lg:p-12 lg:ml-20 flex flex-col justify-center">
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
            <div className="mt-12 grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <p className="font-semibold text-black">PHONE</p>
                <p className="text-green-500">+44 0793452753</p>
              </div>

              <div>
                <p className="font-semibold text-black">EMAIL</p>
                <p className="text-green-500 break-all">
                  patelsecuresolution@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Map Section */}
          <div className="relative bg-green-500 w-full min-h-[530px] md:min-h-[600px] lg:min-h-[530px] flex justify-center items-center lg:rounded-r-3xl">
            <a
              href="https://maps.app.goo.gl/V5gsQsD82MwfYHPV7"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={Map}
                alt="Map"
                className="w-60 sm:w-72 md:w-80 lg:m-4 lg:w-[22rem] xl:w-[25rem] h-auto rounded-xl shadow-2xl hover:shadow-none transition-shadow duration-300 ease-in-out cursor-pointer object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetintouchSection;
