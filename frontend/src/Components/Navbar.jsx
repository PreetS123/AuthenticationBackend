import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


export const Navbar = () => {
  const [show, setShow] = useState(false);
  

  return (
    <div className={styles.main_nav}>
      {/* logo here */}
      <div className={styles.logo}>
        <NavLink to="/dashboard">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.0jl9haemnq0P4eYzzrfNOgHaGw&pid=Api&P=0"
            alt="LOGO"
          />
        </NavLink>
      </div>

      {/* list of pages here */}
      <div className={styles.middlediv}>
        <NavLink to="/users">
          <p>Users</p>
        </NavLink>
      </div>

      {/* authentication button starts from here */}
      <div className={styles.btnbx}>
        <button>
          <NavLink to="/">Sign In</NavLink>
        </button>

        <button>
          <NavLink to="/login">Log In</NavLink>
        </button>
      </div>

      <div className={styles.hamburger_menu}>
        <button onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};
