import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "../AppBar/AppBar.module.css";
import style from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(apiLogout());
  };

  const user = useSelector(selectAuthUser);

  return (
    <div className={style.box}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/contacts"
      >
        Contacts
      </NavLink>
      <div className={style.textUser}>
        <p>
          Hello <span className={style.span}>{user.name}</span>
        </p>
        <p>
          Email: <span className={style.span}>{user.email}</span>
        </p>
      </div>
      <button className={style.btn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
