import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        `http://localhost:9000/services/user/${user?.email}`
      );
      setServices(res.data);
    } catch (err) {
      toast.error("Failed to fetch your services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchServices();
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:9000/service/${id}`);
      toast.success("Service deleted successfully.");
      setServices(services.filter((service) => service._id !== id));
    } catch (err) {
      toast.error("Failed to delete the service.");
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Manage Your Services</h2>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">
                {service.serviceName}
              </h3>
              <p className="text-gray-600 mb-2">{service.serviceDescription}</p>
              <p className="text-lime-600 font-bold">{service.servicePrice}</p>

              <div className="flex justify-between mt-4">
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => toast("Open edit modal here")}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageServices;
