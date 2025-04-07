import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard"; // adjust path as needed
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9000/services`);
      setServices(data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen mt-6 px-4 py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">All Services</h1>
          <p className="text-gray-600">Browse our available services below</p>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="text-center py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-500">No services found.</p>
        ) : (
          // Services Grid
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service._id}
                image={service.serviceImage}
                name={service.serviceName}
                description={service.serviceDescription}
                providerImage={service.serviceProviderImage}
                providerName={service.serviceProviderName}
                price={service.servicePrice}
                id={service._id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
