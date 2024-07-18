import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Job Picks</h2>
      <div>
        <NavLink to="/"> View Jobs</NavLink>
        <NavLink to="/add_job"> Job List</NavLink>
      </div>
    </header>
  );
};

export default Header;
