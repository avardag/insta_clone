import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../../helpers/firebase";
import * as ROUTES from "../../constants/routes";
import Header from "../../components/header";
import UserPhotos from "./userPhotos";
import { ProfilePageBG, ProfileContainer } from "./profile.styles";
import ProfileHeader from "./profileHeader";

export default function Profile() {
  const { username } = useParams(); // -> /p/:username  -> /p/maga10
  const [profileOwner, setProfileOwner] = useState(null);
  const [photos, setPhotos] = useState([]);

  const history = useHistory();

  useEffect(() => {
    //first check if profile exists, if no: NOT-FOund
    async function checkUserExists() {
      try {
        const user = await getUserByUsername(username);

        if (user?.userId) {
          setProfileOwner(user);
        } else {
          history.push(ROUTES.NOT_FOUND);
        }
      } catch (error) {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);

  return profileOwner?.username ? (
    <ProfilePageBG>
      <Header />
      <ProfileContainer>
        <ProfileHeader
          profileOwner={profileOwner}
          photosCount={photos ? photos.length : 0}
        />
        <UserPhotos user={profileOwner} photos={photos} setPhotos={setPhotos} />
      </ProfileContainer>
    </ProfilePageBG>
  ) : null;
}
