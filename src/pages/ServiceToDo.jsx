import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext); // Firebase user
  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        if (!user?.email) return;

        const res = await axios.get(
          `http://localhost:9000/bookings/provider/${user?.email}`
        );

        setBookedServices(res.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Failed to fetch your booked services.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookedServices();
  }, [user?.email]);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await axios.patch(`http://localhost:9000/bookings/status/${bookingId}`, {
        serviceStatus: newStatus,
      });

      setBookedServices((prev) =>
        prev.map((item) =>
          item._id === bookingId ? { ...item, serviceStatus: newStatus } : item
        )
      );

      toast.success("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status.");
    }
  };

  if (loading) return <p className="p-6">Loading your services...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Service To Do</h2>

      {bookedServices.length === 0 ? (
        <p className="text-gray-600">You have no booked services yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookedServices.map((service) => (
            <div
              key={service._id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold">{service.serviceName}</h3>
              <p className="text-gray-700 mt-1">{service.instruction}</p>
              <p className="text-sm text-gray-500 mt-1">
                <strong>Booked By:</strong> {service.userName} (
                {service.userEmail})
              </p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {service.serviceDate}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Price:</strong> {service.servicePrice}
              </p>

              <div className="mt-4">
                <label className="block font-medium mb-1">Service Status</label>
                <select
                  value={service.serviceStatus}
                  onChange={(e) =>
                    handleStatusChange(service._id, e.target.value)
                  }
                  className="w-full border p-2 rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
