import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavLink as NavLinks } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

import { HoverCard } from "@mantine/core";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  let navigate = useNavigate();

  return (
    <section
      className="h-wrapper"
      style={{
        background: "linear-gradient(97.05deg, #4066ff 3.76%, #2110bb 100%)",
      }}
    >
      <div className="flexCenter paddings h-container">
        <Link to="/">
          <img src="./blue.png" alt="logo" width={200} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#" onClick={() => redirectToLink('https://wa.me/+263712887872')}>Send Money</a>

          
            <a href="#how-it-works" class="">
              How It Works
            </a>

            <a href="#service" class="">
              Service
            </a>

            <a href="#FQA" class="">
              FQA
            </a>

            {/* <NavLink to="/properties">Contact US</NavLink> */}

            <a href="#FQA" class="">
              Contact US
            </a>

            <a href="#about-us" class="">
              About Us
            </a>


            <button className="button3"  onClick={() => redirectToLink('http://16.170.103.42:3005')}>Login</button>
            <button className="button2">
              Sign Up <FontAwesomeIcon icon={faSignIn} />
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

const redirectToLink = (link) => {
  window.open(link, '_blank');
};
