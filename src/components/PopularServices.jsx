import React from "react";
import ServiceCard from "./ServiceCard";

const PopularServices = () => {
  const services = [
    {
      id: 1,
      image: "/images/service1.jpg",
      name: "Service Name 1",
      description: "Short description of the service goes here...",
      providerImage: "/images/provider1.jpg",
      providerName: "Provider 1",
      price: "$50",
    },
    {
      id: 2,
      image: "/images/service2.jpg",
      name: "Service Name 2",
      description: "Another short description...",
      providerImage: "/images/provider2.jpg",
      providerName: "Provider 2",
      price: "$60",
    },
    // Add more service data as needed
  ];

  return (
    <section className="py-10 px-4 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        🔥 Popular Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            name={service.name}
            description={service.description}
            providerImage={service.providerImage}
            providerName={service.providerName}
            price={service.price}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="/all-services" className="btn btn-outline btn-primary">
          Show All
        </a>
      </div>
    </section>
  );
};

export default PopularServices;
