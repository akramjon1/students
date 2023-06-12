import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import { Login } from "./Page/Auth/Login";
import { Auth } from "./Page/Auth/Auth";
import { Layout } from "./Page/Layout/Layout";
import { AddStudent } from "./Page/AddStudent/AddStudent";
import { GetStudent } from "./Page/GetStudent/GetStudent";
import { NotFound } from "./Page/NotFound/NotFound";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/add/student" element={<AddStudent />} />
            <Route path="/get/student" element={<GetStudent />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Route>
      </Routes>
    </>
  );
};

export const Navbar = () => {
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
