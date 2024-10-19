import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
    const { status } = useSelector(state => state.auth);
    
    return (status === 'authenticated')
        ? children
        : <Navigate to="/login" />
}

PrivateRouter.propTypes = {
    children: PropTypes.element,
}