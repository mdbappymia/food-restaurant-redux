import { useEffect } from "react";
import initializeAuthentication from "../authentication/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsLoading, setUser } from "../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  //   google login
  const signInUsingGoogle = (path) => {
    dispatch(setIsLoading(true));
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(setUser(user));
        navigate(path);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  // signOut function

  const logOut = () => [
    signOut(auth).then(() => {
      dispatch(setUser({}));
    }),
  ];

  //   Auth state change
  useEffect(() => {
    dispatch(setIsLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setIsLoading(false));
      } else {
        dispatch(setUser({}));
        dispatch(setIsLoading(false));
      }
    });
    return () => unsubscribe;
  }, [auth, dispatch]);

  return { signInUsingGoogle, logOut };
};

export default useFirebase;
