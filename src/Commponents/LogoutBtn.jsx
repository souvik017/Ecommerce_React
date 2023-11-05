import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../Firebase"
function LogoutBtn() {

    const handleLogout = async (e)=>{
     try {
       const userCredential = await signOut(auth) ;
        console.log("user cred",userCredential); 
        alert("Logout Succesful")
     } catch (error) {
        alert(error)
     }
    }
  return (
    <div>
      <button
onClick={handleLogout} // Add your logout function here
  className="text-blue-500 hover:text-blue-600 rounded cursor-pointer"
>
  Logout
</button>
    </div>
  )
}

export default LogoutBtn
