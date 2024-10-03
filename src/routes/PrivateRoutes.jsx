import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading) return <div>Loading...</div>
    if(user){
        return children
    }
    return <Navigate to={`/login`} state={location.pathname} replace={true}></Navigate>
   
};

PrivateRoutes.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoutes;