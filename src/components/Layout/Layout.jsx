import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectAuthIsRefreshing } from "../../redux/auth/selectors";
import { lazy, Suspense, useEffect } from "react";
import { apiIsRefreshing } from "../../redux/auth/operations";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

import css from "./Layout.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function Layout() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(apiIsRefreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.text}>User is refreshing, please wait</p>
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </main>
      </Suspense>
    </>
  );
}

export default Layout;
