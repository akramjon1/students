import React, {memo} from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";

export const Aside = memo(() => {
    return( 
        <div className="aside_items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add/student">Add students</NavLink>
            <NavLink to="/get/student">Get students</NavLink>
        </div>
    );
});