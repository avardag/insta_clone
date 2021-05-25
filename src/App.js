import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
