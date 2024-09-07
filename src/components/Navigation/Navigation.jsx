import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operation";

const Navigation = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(apiLogout());
  };

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
              <button type="button" onClick={onLogout}>
                Logout
              </button>
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
