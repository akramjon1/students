import React, { useState } from "react";
import "./Login.css";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { acLogin } from "../../Redux/Auth";
import { useDispatch } from "react-redux";

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      const msg = "You are already authenticated";
      enqueueSnackbar(msg, { variant: "success" });
      dispatch(acLogin());
      navigate("/");
      
    } else {
      const msg = "Invalid username or password";
      enqueueSnackbar(msg, { variant: "error" });
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          required
          autoComplete="off"
          autoCapitalize="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          required
          autoComplete="off"
          autoCapitalize="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className="last" />
      </form>
    </div>
  );
};
