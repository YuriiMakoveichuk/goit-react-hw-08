import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "../AppBar/AppBar.module.css";

const Navigation = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
    </>
  );
};

export default Navigation;
