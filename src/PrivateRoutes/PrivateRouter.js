import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/auth-context';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
         return <div>Loading...</div>;
    }

    if (!user?.uid) {

        return <Navigate to='/login' state={{from:location}} replace></Navigate>
     }
};

export default PrivateRouter;