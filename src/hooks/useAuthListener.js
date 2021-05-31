import { useContext, useEffect, useState } from "react";
import FirebaseContext from "../context/firebase";

/**
 * React hook to lsten for auth change of firebase auth user
 * @returns {Object} User object from firebase, if signed in.  or null
 */
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //we have a user authorized, or user logged in or signed up, so set him in local sotrage
        localStorage.setItem("authUser", JSON.stringify(authUser));
        //set him also in state
        setUser(authUser);
      } else {
        //No user,or signed out
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    //useEffect cleanup func
    return () => listener();
  }, [firebase]);

  //return the user
  return { user };
}
