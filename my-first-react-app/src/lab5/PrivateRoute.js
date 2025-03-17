import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
    const isAuthenticated = false;

    return isAuthenticated ? <Component /> : <Navigate to="/" />
}

export default PrivateRoute;