import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
  const [show,setShow]= useState(false);
  // const active = {
  //   color: "#A2A2A1",
  //   textDecoration: "none",
  // };
  // const unactive = {
  //   color: "#F8640A",
  //   textDecoration: "none",
  //   fontSize: "20px",
  // };
  return (
    <div className={styles.main_nav}>
      {/* logo here */}
      <div className={styles.logo}>
      <NavLink to="#"  >
       <img src='https://tse3.mm.bing.net/th?id=OIP.0jl9haemnq0P4eYzzrfNOgHaGw&pid=Api&P=0' alt='LOGO' />
      </NavLink>
      </div>

      {/* list of pages here */}
      <div className={styles.middlediv}>
        <NavLink
          to="#"
         
        >
          <p>About</p>
        </NavLink>
        <NavLink
          to="#"
          
        >
          <p>Features</p>
        </NavLink>
        <NavLink
          to="#"
         
        >
          <p>Pricing</p>
        </NavLink>
        <NavLink
          to="#"
         
        >
          <p>Testimonial</p>
        </NavLink>
        <NavLink
          to="#"
          
        >
          <p>Help</p>
        </NavLink>
      </div>

      {/* authentication button starts from here */}
      <div className={styles.btnbx}>
        <button>Sign In</button>
        <button>Log In</button>
      </div>

     
      <div className={styles.hamburger_menu}>
            <button onClick={() => setShow(!show)}>
              <GiHamburgerMenu />
            </button>
          </div>
    </div>
  );
};