import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthContext";
import BookingModal from "../components/BookingModal";

const ServiceDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:9000/service/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id]);

  if (!service) return <div className="text-center py-20">Loading...</div>;

  const {
    serviceImage,
    serviceName,
    serviceDescription,
    servicePrice,
    serviceProviderImage,
    serviceProviderName,
    serviceProviderEmail,
    serviceLocation,
  } = service;
  console.log(service);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Service Image and Info */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={serviceImage}
          alt={serviceName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{serviceName}</h2>
          <p className="text-gray-700 mb-4">{serviceDescription}</p>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={serviceProviderImage}
              alt={serviceProviderName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{serviceProviderName}</p>
              <p className="text-sm text-gray-500">📍 {serviceLocation}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold text-lime-600">{servicePrice}</p>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <BookingModal
          service={service}
          user={user}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
