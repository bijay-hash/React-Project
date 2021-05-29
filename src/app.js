import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import { Route, Switch, useLocation } from "react-router-dom";
import routes from "./utils/routes/index";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoutes from "./utils/routes/AuthRoutes";
import GuestRoutes from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "./utils/routes/AnimatedRoute";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(null);
  const [User, setUser] = useState({});
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);
  const location = useLocation();

  if (IsLoading) return <Loading />;

  return (
      <AppContext.Provider value={[IsLoggedIn, User]}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
        <Switch key={location.pathname} location={location}>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoutes
                  key={index}
                  exact={route.exact}
                  path={route.path}
                >
                  <route.component />
                </GuestRoutes>
              );
            }

            if (route.protected === "auth") {
              return (
                <AuthRoutes
                  key={index}
                  exact={route.exact}
                  path={route.path}
                >
                <route.component />
                </AuthRoutes>
              );
            }
            return (
                <AnimatedRoute
                  key={index}
                  exact={route.exact}
                  path={route.path}
                >
                <route.component />
                </AnimatedRoute>
            );
          })}
          <Route path="*">
          <NotFound />
          </Route>
        </Switch>
        </AnimatePresence>
      </AppContext.Provider>
  );
}

export default App;
