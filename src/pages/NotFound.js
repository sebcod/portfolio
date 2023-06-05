import React from "react";
import { NavLink } from "react-router-dom";
import Mouse from "../components/Mouse";

const NotFound = () => {
  return (
    <div className="notFound">
      <Mouse projectNumber={0} />
      <div className="not-Found-content">
        <h2>Not found</h2>
        <NavLink to="/">
          <h3>
            Return to home page <i className="fas fa-home"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
