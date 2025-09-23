import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo, clearUserInfo, setLoading } from "../../store/userSlice";
import { fetchUser, getToken } from "./authUtils";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      // localStorage.clear();
      const token = getToken();
      dispatch(setLoading());
      if (token) {
        const user = await fetchUser(token);
        if (user) {
          dispatch(addUserInfo(user));
        }
      } else {
        dispatch(clearUserInfo());
      }
    };
    init();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
