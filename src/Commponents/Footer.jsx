import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pl-36 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Information</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Help</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link to="/payments">Payments</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping">Shipping</Link>
              </li>
              <li className="mb-2">
                <Link to="/cancellation-returns">Cancellation & Returns</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Social</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link to="/facebook">Facebook</Link>
              </li>
              <li className="mb-2">
                <Link to="/twitter">Twitter</Link>
              </li>
              <li className="mb-2">
                <Link to="/instagram">Instagram</Link>
              </li>
              <li className="mb-2">
                <Link to="/youtube">YouTube</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Download App</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link to="/google-play">Google Play</Link>
              </li>
              <li className="mb-2">
                <Link to="/app-store">App Store</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
