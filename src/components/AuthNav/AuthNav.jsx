import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "../AppBar/AppBar.module.css";

const AuthNav = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
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
    </div>
  );
};

export default AuthNav;
