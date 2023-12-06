import React from 'react';
import pokeballicon from "../assets folder/pokeball-icon.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  //  t0d0: Navbar Routes, mapper Array, legge til data from data, react icon gihamburger
  const navigationRoutes = [
    {
      name: "Søk",
      route: "/search",
    },
    {
      name: "Sammenlign",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "Min Liste",
      route: "/list",
    },
   
  ];


  
  return (
    <nav>
      <div className="block">
        <img src={pokeballicon} alt="pokeball icon" />
      </div>

      <div className="data">
        <ul>



          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
