import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { isFetching, isLoggedIn } = useSelector((state) => state.user);
  if (isFetching) {
    return <>Loading...</>;
  }
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
