import React, { memo } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <section className="sidebar">
        <div className="sidebar-icons">
          <NavLink>
            <img className="logo" src="../logo.png" alt="logo" />
          </NavLink>
          <NavLink to="products">
            <img src="../products.png" alt="icon" className="products" />
          </NavLink>
          <NavLink to="/">
            <img src="../login.png" alt="icon" className="login" />
          </NavLink>
          <NavLink to={"./add"}>
            <img src="../add.png" alt="icon" className="add" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default memo(Sidebar);
