import React from "react";
import "./Login.css";

export const Login = () => {
    return (
        <div className="login">
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password" />
                <button type="button" className="login_button">Submit</button>
            </form>
        </div>
    )
}