import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFirestoreStorage = async (userUid) => {
    try {
      const userDoc = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      const docRef = await addDoc(collection(db, 'users'), userDoc);
    //   console.log("User data stored in Firestore with ID: ", docRef.id);
    // console.log(docRef)
    } catch (error) {
      console.error("Error storing user data in Firestore: ", error);
    }
  };
 
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        
        if (userCredential && userCredential.user) {
          const user = userCredential.user;
    
          // Store user's first name and last name in Firestore
          await handleFirestoreStorage(user.uid);
         navigate("/Login");
         alert("Account Created Succesfully")
        } else {
          console.error("User creation failed.");
          alert("User creation failed.")
        }
    } catch (error) {
        console.error(error)
        const errCode = error.code;
        alert(errCode)
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              autoComplete='off'
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              autoComplete='off'
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              autoComplete='off'
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              autoComplete='off'
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
        Create an Account
          </button>
        </form>
        <div className='flex gap-2 text-center mx-10 mt-4'>
          <h1>Already have a Account ?</h1>
          <Link to="/Login"><h1 className='text-blue-600'>Login</h1></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
