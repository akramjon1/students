import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../Router";

export const Layout = () => {
  return (
    <main className="layout">
      <header className="header">
        <Navbar />
      </header>
      <section className="content">
        <Outlet />
      </section>
    </main>
  );
};
