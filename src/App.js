import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/useAuthListener";
import UserAuthContext from "./context/userAuth";
import ProtectedRoute from "./helpers/protectedRoute";
import UserLoggedInRedirect from "./helpers/userLoggedInRedirect";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const Upload = lazy(() => import("./pages/upload"));
const NotFound = lazy(() => import("./pages/notFound/index"));

function App() {
  const { user } = useAuthListener();
  // const userAuth = useContext(UserAuthContext);
  return (
    <UserAuthContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<h2>Loading.....</h2>}>
          <Switch>
            <UserLoggedInRedirect
              path={ROUTES.LOGIN}
              user={user}
              redirectpath={ROUTES.DASHBOARD}
            >
              <Login />
            </UserLoggedInRedirect>
            <UserLoggedInRedirect
              path={ROUTES.SIGN_UP}
              user={user}
              redirectpath={ROUTES.DASHBOARD}
            >
              <Signup />
            </UserLoggedInRedirect>
            <ProtectedRoute path={ROUTES.DASHBOARD} user={user} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute path={ROUTES.PROFILE} user={user} exact>
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path={ROUTES.UPLOAD} user={user} exact>
              <Upload />
            </ProtectedRoute>

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserAuthContext.Provider>
  );
}

export default App;
