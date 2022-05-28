import React from 'react';
import {useNavigate} from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate()

  return(
    <div>
      
      <h2>Profile</h2>
      <button onClick={()=>navigate('/login')}>logout</button>
    </div>
  )
}