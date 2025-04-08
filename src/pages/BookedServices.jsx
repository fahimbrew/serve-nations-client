import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthContext";

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/bookings/${user.email}`)
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => {
          console.error("Error fetching bookings:", err);
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🧾 Booked Services
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>You haven't booked any services yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow rounded-lg p-5 border"
            >
              <img
                src={booking.serviceImage}
                alt={booking.serviceName}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {booking.serviceName}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Provider:</span>{" "}
                {booking.providerName}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {booking.serviceDate}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Instructions:</span>{" "}
                {booking.instruction || "N/A"}
              </p>
              <p className="text-lime-600 font-bold text-lg mt-2">
                {booking.servicePrice}
              </p>
              <p className="mt-2 text-sm text-blue-600 font-medium">
                Status: {booking.serviceStatus}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
