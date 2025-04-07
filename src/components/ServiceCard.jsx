import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  image,
  name,
  description,
  providerImage,
  providerName,
  price,
  id,
}) => {
  return (
    <div className="card w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-200">
      <figure className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-5">
        <h3 className="card-title text-xl font-semibold mb-2">{name}</h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {description?.length > 100
            ? description.slice(0, 97) + "..."
            : description}
        </p>

        <div className="flex items-center mt-4 gap-3">
          <img
            src={providerImage}
            alt={providerName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">
            {providerName}
          </span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="text-lg font-bold text-primary">{price}</p>
          <Link
            to={`/service/${id}`}
            className="btn btn-sm btn-outline btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
