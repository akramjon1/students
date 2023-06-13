import React, {memo} from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";
import logo from "./Logo 1.svg"


export const Aside = memo(() => {
    return( 
        <div className="aside_items">
            <NavLink to="/"><img src={logo}></img></NavLink>
            <NavLink to="/messages">Xabarlar</NavLink>
            <NavLink to="/contact">Bog’lanish</NavLink>
            <NavLink to="/teachers">Ustozlar</NavLink>
            <NavLink to="/video">Video lavxalar</NavLink>
            <NavLink to="/subject">Algoritm ta’limda siz</NavLink>


        </div>
    );
});