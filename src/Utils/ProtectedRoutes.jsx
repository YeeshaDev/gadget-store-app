import React from 'react'
import useAuth from './useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({children}) {
    //const navigate = useNavigate();
    const {current} = useAuth()
  return current ? children : <Navigate to='/login'/>
}

export default ProtectedRoutes;