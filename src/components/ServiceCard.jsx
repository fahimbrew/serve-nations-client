import React from "react";

const ServiceCard = ({
  image,
  name,
  description,
  providerImage,
  providerName,
  price,
}) => {
  return (
    <div className="card w-full bg-white shadow-xl rounded-lg overflow-hidden">
      <figure className="h-56">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center mt-4">
          <img
            src={providerImage}
            alt={providerName}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-sm font-medium">{providerName}</span>
        </div>
        <div className="card-actions mt-4">
          <p className="text-lg font-bold text-red-600">{price}</p>
          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
