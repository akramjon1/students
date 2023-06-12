import React from "react";
import { Outlet } from "react-router-dom";
import { Aside } from "../../Components/Aside/Aside";
import "./Layout.css";
export const Layout = () => {
  return (
    <main className="layout">
      <aside className="aside">
        <Aside/>
      </aside>
      <section className="content">
        <Outlet />
      </section>
    </main>
  );
};
