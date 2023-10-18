import React, { memo } from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="Profile">
      <section className="profile">
        <div className="container">
          <div className="big">
            <div className="h1">Welcome User</div>
            <div className="btns">
              <Link to={-1}>
                <button className="btn btn-danger">LogOut</button>
              </Link>
              <Link to={"/products"}>
                <button className="btn btn-success">LogIn</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Profile);
