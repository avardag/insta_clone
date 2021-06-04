import { useEffect, useState } from "react";
import { getFollowedPhotos } from "../helpers/firebase";
// import UserAuthContext from "../context/userAuth";
import useUserInfo from "./useUserInfo";

/**
 * A hook to fetch all the photos of current logged in users followings
 * @returns Array of photos
 */
export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  // const { user: userAuth } = useContext(UserAuthContext);
  const { following: followingsArr, userId } = useUserInfo();

  useEffect(() => {
    async function getTimeLinePhotos() {
      let followedUsersPhotos = [];
      //has user any followed profiles?
      if (followingsArr.length > 0) {
        followedUsersPhotos = await getFollowedPhotos(userId, followingsArr);
      }
      followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated); //sort array according to date created
      setPhotos(followedUsersPhotos);
    }
    try {
      if (userId && followingsArr) getTimeLinePhotos();
    } catch (error) {
      console.log(" useEffect ~ error", error);
    }
  }, [userId, followingsArr]);
  return { photos };
}
