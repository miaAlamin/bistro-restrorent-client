import { useContext } from "react";
import { authContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContex)
const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;

    }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;