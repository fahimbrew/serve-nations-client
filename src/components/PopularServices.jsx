import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9000/services`);
      setServices(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError("Failed to load services.");
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  // Render loading state
  if (loading) {
    return (
      <section className="py-10 px-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Loading Popular Services...</h2>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </section>
    );
  }

  // Render error state
  if (error) {
    return (
      <section className="py-10 px-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6 text-red-600">{error}</h2>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        🔥 Popular Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service) => (
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
      <div className="text-center mt-6">
        <Link to="/services" className="btn btn-outline btn-primary">
          Show All
        </Link>
      </div>
    </section>
  );
};

export default PopularServices;
