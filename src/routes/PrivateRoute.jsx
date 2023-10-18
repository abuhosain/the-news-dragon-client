import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Spinner animation='border' variant='primary' /> 
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
    
};

export default PrivateRoute;