import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast"; // for notifications

const UpdateServicePage = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const navigate = useNavigate();
  const [service, setService] = useState({
    serviceName: "",
    serviceDescription: "",
    servicePrice: "",
    serviceImage: "",
    serviceLocation: "", // Change to serviceLocation
  });

  useEffect(() => {
    // Fetch the current service data to pre-populate the form
    axios
      .get(`${import.meta.env.VITE_API_URL}/service/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => {
        console.error("Error fetching service data: ", err);
        toast.error("Failed to load service data.");
      });
  }, [id]);

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated service data to the server
    axios
      .put(`${import.meta.env.VITE_API_URL}/service/${id}`, service)
      .then((res) => {
        toast.success("Service updated successfully.");
        navigate("/manage-services");
        // Redirect to Manage Services page after successful update (if necessary)
        // history.push("/manage-services");
      })
      .catch((err) => {
        console.error("Error updating service: ", err);
        toast.error("Failed to update the service.");
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Update Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Name */}
        <div>
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-gray-700"
          >
            Service Name
          </label>
          <input
            type="text"
            name="serviceName"
            value={service.serviceName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter service name"
            required
          />
        </div>

        {/* Service Description */}
        <div>
          <label
            htmlFor="serviceDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Service Description
          </label>
          <textarea
            name="serviceDescription"
            value={service.serviceDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter service description"
            rows="4"
            required
          />
        </div>

        {/* Service Price */}
        <div>
          <label
            htmlFor="servicePrice"
            className="block text-sm font-medium text-gray-700"
          >
            Service Price
          </label>
          <input
            type="text"
            name="servicePrice"
            value={service.servicePrice}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter service price"
            required
          />
        </div>

        {/* Service Image URL */}
        <div>
          <label
            htmlFor="serviceImage"
            className="block text-sm font-medium text-gray-700"
          >
            Service Image URL
          </label>
          <input
            type="text"
            name="serviceImage"
            value={service.serviceImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Service Location */}
        <div>
          <label
            htmlFor="serviceLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Service Location
          </label>
          <input
            type="text"
            name="serviceLocation" // Change to serviceLocation
            value={service.serviceLocation} // Changed to match the field name
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter service location"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-6"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};

export default UpdateServicePage;
