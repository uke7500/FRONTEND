import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLoggedIn, isFetching } = useSelector((state) => state.user);
  if (isFetching) {
    return <>Loading...</>;
  }
  if (!isFetching && !isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
