import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { isAdmin: isAdmin , isAdminLoading} = useAdmin();
    console.log('le admin', isAdmin);

    if (isAdminLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="loading loading-spinner loading-lg" />
            </div>
        );
    }

    // If user is logged in and is admin allow access
    if (user && isAdmin) {
        return children ? children : <Outlet />;
    }

    // Not authorized -> redirect to home (adjust path if needed)
    return <Navigate to="/"  />;
};

export default AdminRoute;