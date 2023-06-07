import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import { Login } from "./Page/Auth/Login";
import { Auth } from "./Page/Auth/Auth";
export const Router = () => {
  return (
    <>
      <Login />

      <Auth path="/">
      <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Auth>

    </>
  );
};

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

const Home = () => {
  return (
    <>
      <h1> Home</h1>
    </>
  );
};
const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};

const Notfound = () => {
  return (
    <>
      <h1>404 Not found</h1>
    </>
  );
};
