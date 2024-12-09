import { useState, useContext, useEffect } from "react";
import UserAuthContext from "../context/userAuth";
import { getUserByUserId } from "../helpers/firebase";

/**
 * A hook to return user info object, if no user, returns empty obj
 * @returns {Object}. Firestore doc with full data on active user.
 */
export default function useUserInfo() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      //get the user data from firestore based on ID
      const response = await getUserByUserId(user.uid);
      setActiveUser(response);
    }
    //call the above func
    if (user && user.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  //return
  return activeUser;
}
