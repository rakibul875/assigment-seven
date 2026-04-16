import { ChartSpline, Clock, House } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";



const NavBar = () => {

    const links = <>
    
    <li><NavLink to={'/'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-white bg-green-800":''}`}><House /> Home</NavLink></li>
    <li><NavLink to={'timeline'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-white bg-green-800":''}`}> <Clock /> Timeline</NavLink></li>
    <li><NavLink to={'stats'} className={({isActive})=>`font-semibold mr-1 ${isActive? "text-white bg-green-800":''}`}><ChartSpline /> Stats</NavLink></li>
    
    
    </>
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar flex flex-col lg:flex-row md:flex-row container mx-auto">  
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
