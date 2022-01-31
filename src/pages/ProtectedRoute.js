import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ element, ...rest }) {
    const { loggedIn } = useAuth();
    const location = useLocation();

    return true ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default ProtectedRoute;