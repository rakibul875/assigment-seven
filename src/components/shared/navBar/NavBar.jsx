import React from "react";
import { Link, NavLink } from "react-router";



const NavBar = () => {

    const links = <>
    
    <li><NavLink to={'/'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500":''}`}>Home</NavLink></li>
    <li><NavLink to={'timeline'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500":''}`}>Timeline</NavLink></li>
    <li><NavLink to={'stats'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-green-500 border border-green-500":''}`}>Stats</NavLink></li>
    
    
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl">KeenKeeper</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">     
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
