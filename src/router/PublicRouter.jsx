import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export const PublicRouter = ({ children }) => {
    const { status } = useSelector(state => state.auth);

    return (status === 'authenticated')
        ? <Navigate to="/" />
        : children
}

PublicRouter.propTypes = {
    children: PropTypes.element,
}