import React from "react";
import "./Login.css";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { acLogin } from "../../Redux/Auth";
import { useDispatch } from "react-redux";

export const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    const { username, password } = value;
    if (username === "admin" && password === "admin") {
      const msg = "You are already authenticated";
      enqueueSnackbar(msg, { variant: "success" });
      dispatch(acLogin());
      navigate("/");
    } else {
      const msg = "fucked";
      enqueueSnackbar(msg, { variant: "error" });
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          autoComplete="off"
          autoCapitalize="off"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          autoComplete="off"
          autoCapitalize="off"
        />
        <input type="submit" value="Login" className="last" />
      </form>
    </div>
  );
};
