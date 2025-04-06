import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">Serve Nations</h2>
          <p className="text-sm">
            A simple service-sharing platform where users can add, book, and
            manage services easily. Empowering your local skills and needs!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="link link-hover">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/add-service" className="link link-hover">
                Add Service
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="link link-hover">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact & Social</h3>
          <p className="text-sm mb-2">Email: iftiaqhossain@gmail.com</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center p-4 bg-base-300 text-sm">
        © {new Date().getFullYear()} Serve Nations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
