import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import { Login } from "./Page/Auth/Login";
import { Auth } from "./Page/Auth/Auth";
import { Layout } from "./Page/Layout/Layout";
import { Messages } from "./Page/Messages/Messages";
import { Contact } from "./Page/Contact/Contact";
import { NotFound } from "./Page/NotFound/NotFound";
import { Teachers } from "./Page/Teachers/Tachers";
import { Video } from "./Page/Video/Video";
import { Subject } from "./Page/Subject/Subject";
import {GiHamburgerMenu} from "react-icons/gi"
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/video" element={<Video />} />
            <Route path="/subject" element={<Subject />} />
            


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
       <span><GiHamburgerMenu/></span>
    </>
  );
};
