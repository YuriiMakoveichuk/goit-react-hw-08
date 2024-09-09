import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "../AppBar/AppBar.module.css";

const AuthNav = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/register"
      >
        Register
      </NavLink>
    </>
  );
};

export default AuthNav;
