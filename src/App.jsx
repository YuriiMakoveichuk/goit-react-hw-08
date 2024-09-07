import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Navigation from "./components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { apiIsRefreshing } from "./redux/auth/operation";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
// import { lazy } from "react";

// const MyComponent = lazy(() => import("path/to/MyComponent"));

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const RegistrationPage = lazy(() =>
//   import("./pages/RegistrationPage/RegistrationPage")
// );
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
// const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(apiIsRefreshing());
  }, [dispatch]);

  if (isRefreshing) return <p>User is refreshing, please wait</p>;

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          ></Route>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          ></Route>
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
