import React, { useState } from "react";
import axios from "axios";

const BookingModal = ({ service, user, onClose }) => {
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleBooking = async () => {
    const bookingData = {
      serviceId: service._id,
      serviceName: service.serviceName,
      serviceImage: service.serviceImage,
      servicePrice: service.servicePrice,
      providerEmail: service.serviceProviderEmail,
      providerName: service.serviceProviderName,
      userEmail: user.email,
      userName: user.displayName,
      serviceDate: date,
      instruction,
      serviceStatus: "pending",
    };

    try {
      await axios.post("http://localhost:9000/bookings", bookingData);
      onClose();
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Service ID:</strong> {service._id}
          </p>
          <p>
            <strong>Service Name:</strong> {service.serviceName}
          </p>
          <p>
            <strong>Provider Name:</strong> {service.serviceProviderName}
          </p>
          <p>
            <strong>Provider Email:</strong> {service.serviceProviderEmail}
          </p>
          <p>
            <strong>Your Name:</strong> {user.displayName}
          </p>
          <p>
            <strong>Your Email:</strong> {user.email}
          </p>
          <p>
            <strong>Price:</strong> {service.servicePrice}
          </p>

          <div>
            <label className="block mt-3">Service Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mt-3">Special Instructions</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="e.g. Location, custom notes"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="btn btn-outline">
            Cancel
          </button>
          <button onClick={handleBooking} className="btn btn-primary">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
