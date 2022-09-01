import { Navigate, Outlet } from "react-router-dom";
import { authSlice } from "../features/auth/authSlice";

const PrivateRoutes = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;

/* import { Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoutes = () => {
  const { loggedIn, checkingStatus } = useAuthStatus(true);

  if (checkingStatus) { return <Spinner />; }
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;};
export default PrivateRoutes;
 */
