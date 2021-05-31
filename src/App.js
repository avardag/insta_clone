import { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import UserAuthContext from "./context/userAuth";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/notFound/index"));

function App() {
  const { user } = useAuthListener();
  // const userAuth = useContext(UserAuthContext);
  return (
    <UserAuthContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<h2>Loading.....</h2>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={Signup} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserAuthContext.Provider>
  );
}

export default App;
