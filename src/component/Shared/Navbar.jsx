import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
   <div>
    <Link className="btn btn-ghost normal-case text-xl">Finixware</Link>
   </div>
  </div>
  <div className="navbar-center">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered input-primary w-96 h-[40px]" />
    </div>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle w-24">
     Login
    </button>
    <button className="btn btn-ghost btn-circle w-24">
      Sign Up
    </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
