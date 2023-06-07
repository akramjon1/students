import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export const Auth = () =>{
    const auth = false;
    const location = useLocation();
    if(auth){
        return <Outlet/>
    }
    else{
        return <Navigate to={{pathname: "/login", state: {from: location}}}/>
    }
}