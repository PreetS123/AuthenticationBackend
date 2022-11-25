import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



export function PrivateRoute({children}){
    const [isAuth]= useContext(AuthContext);

    if(isAuth){
        return children;
    }

    return (
        <>
        <Navigate to='/login' />
        </>
    )
}