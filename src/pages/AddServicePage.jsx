import React, { useState, useContext } from "react";

import axios from "axios";
import { AuthContext } from "../providers/AuthContext";
import { useNavigate } from "react-router-dom";

const AddServicePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceName: "",
    serviceDescription: "",
    servicePrice: "",
    serviceLocation: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    const newService = {
      ...formData,
      serviceProviderName: user.displayName,
      serviceProviderEmail: user.email,
      serviceProviderImage: user.photoURL || "",
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/services`, newService);
      setMessage("✅ Service added successfully!");
      setFormData({
        serviceImage: "",
        serviceName: "",
        serviceDescription: "",
        servicePrice: "",
        serviceLocation: "",
      });
      navigate("/services");
    } catch (err) {
      setMessage("❌ Failed to add service.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Add a Service</h2>

      {message && <p className="text-center mb-4 text-blue-600">{message}</p>}

      <form onSubmit={handleAddService} className="space-y-4">
        <input
          name="serviceImage"
          placeholder="Image URL"
          value={formData.serviceImage}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          name="serviceName"
          placeholder="Service Name"
          value={formData.serviceName}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          name="servicePrice"
          placeholder="Price (e.g., $199)"
          value={formData.servicePrice}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          name="serviceLocation"
          placeholder="Service Area (e.g., DHAKA)"
          value={formData.serviceLocation}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="serviceDescription"
          placeholder="Service Description"
          value={formData.serviceDescription}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn btn-primary w-full">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddServicePage;
