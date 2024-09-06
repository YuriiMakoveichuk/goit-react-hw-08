import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              <div>
                <p>Hello {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navigation;
