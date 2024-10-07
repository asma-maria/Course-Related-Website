import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import Loader from '../Pages/Loader';

export const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    console.log(location.pathname);

    if(loading)
    {
        return <Loader> </Loader>
    }

    if(user)
    {
        return children;
    }
  return <Navigate state={location.pathname} to="/login"></Navigate>
}
