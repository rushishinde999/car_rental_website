import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Car Rental</h3>
            <p>
              We provide the best car rental services for all your needs. Choose
              from a wide range of vehicles and enjoy a seamless experience.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="hover:text-orange-500">
                  Cars
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/#" className="hover:text-orange-500">
                  Booking
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Main Street, Anytown, USA</p>
            <p className="mb-2">Email: info@carrental.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
          </div>
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&pid=Api&P=0&h=180"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.OiRP0Wt_nlImTXz5w45aRQHaHa&pid=Api&P=0&h=180"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.3jOGkXxG6mwps5ZXQNp3IQHaHZ&pid=Api&P=0&h=180"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Car Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
