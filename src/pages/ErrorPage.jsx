import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-6" />

      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        The page you're looking for doesn’t exist or was moved.
      </p>

      <Link
        to="/"
        className="inline-block bg-lime-600 text-white px-6 py-3 rounded-lg shadow hover:bg-lime-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
