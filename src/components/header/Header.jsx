import React, { memo } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-links">
          <div className="lft">
            <h2>Products</h2>
            <p>Home / Products</p>
          </div>
          <Link to={"/"}>
            {" "}
            <button className="exit">
              <img src="../Exit.png" alt="icon" />
              Exit
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
