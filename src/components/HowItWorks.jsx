import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="text-center bg-white p-6 shadow-xl rounded-xl">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-blue-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.793 2.045a1 1 0 01-1.447-1.054L7.118 12.5 4.27 9.954a1 1 0 011.054-1.447L9.5 7.118l2.045-3.793a1 1 0 011.788 0L14.88 7.118l3.173.56a1 1 0 01.057 1.795l-3.672 2.784L12.882 12.5a1 1 0 01-.044 1.395l2.045 3.793a1 1 0 01-1.447 1.054L10 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Browse Services</h3>
          <p className="text-gray-600">
            Explore various services offered by our trusted providers in
            different categories.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center bg-white p-6 shadow-xl rounded-xl">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-green-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.793 2.045a1 1 0 01-1.447-1.054L7.118 12.5 4.27 9.954a1 1 0 011.054-1.447L9.5 7.118l2.045-3.793a1 1 0 011.788 0L14.88 7.118l3.173.56a1 1 0 01.057 1.795l-3.672 2.784L12.882 12.5a1 1 0 01-.044 1.395l2.045 3.793a1 1 0 01-1.447 1.054L10 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Book Your Service</h3>
          <p className="text-gray-600">
            Choose the service that fits your needs and book a session at your
            convenience.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center bg-white p-6 shadow-xl rounded-xl">
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8 text-yellow-500"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.793 2.045a1 1 0 01-1.447-1.054L7.118 12.5 4.27 9.954a1 1 0 011.054-1.447L9.5 7.118l2.045-3.793a1 1 0 011.788 0L14.88 7.118l3.173.56a1 1 0 01.057 1.795l-3.672 2.784L12.882 12.5a1 1 0 01-.044 1.395l2.045 3.793a1 1 0 01-1.447 1.054L10 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Enjoy & Review</h3>
          <p className="text-gray-600">
            Experience the service, and don’t forget to leave a review for
            others to see!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
