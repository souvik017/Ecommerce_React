import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Custom-Hooks/useAuth' // Import your custom hook for authentication

function CheckoutButton() {
  const user = useAuth(); // Use the custom hook to get user status

  return (
    <div>
      {user ? (
        <Link to="/checkout">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded cursor-pointer">
            Checkout
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer">
            Login to Checkout
          </button>
        </Link>
      )}
    </div>
  );
}

export default CheckoutButton;
