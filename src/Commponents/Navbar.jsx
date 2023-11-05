import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../Custom-Hooks/useAuth'
import LogoutBtn from './LogoutBtn';

function Navbar() {
  const User = useAuth();
  return (
    <div className='flex justify-between mx-60 my-6'>
      <div>
       <Link to="/"><h1 className="text-2xl font-bold tracking-wide ">SHOPP!</h1></Link> 
      </div> 
      <div className='flex gap-10 py-2 text-lg'>
      <NavLink to="/"><h1>Home</h1></NavLink>
      <NavLink to="/Product"><h1>Product</h1></NavLink>
      <NavLink to="/Cart"><h1>Cart</h1></NavLink>
      <NavLink to="/Wishlist"><h1>Wishlist</h1></NavLink>
      <div className='text-blue-500 hover:text-blue-600 '>
        {User ? (
          <div className="text-blue-500 hover:text-blue-600">
           <LogoutBtn/>
          </div>
        ) : (
          <div className="text-blue-500 hover:text-blue-600">
            <NavLink to="/Login">
              <h1>Login</h1>
            </NavLink>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar
