import { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import ModalExample from "../../components/modal";
import UserAuthContext from "../../context/userAuth";
import {
  updateOtherUsersFollowings,
  updateLoggedInUsersFollowers,
} from "../../helpers/firebase";
import PicUpload from "./picUpload";
import {
  ProfileHeadContainer,
  AvatarWrapper,
  ProfileInfo,
  ProfileInfoTop,
  ProfileStats,
  ProfileFullName,
  FollowBtn,
} from "./profile.styles";

export default function ProfileHeader({ photosCount, profileOwner }) {
  const {
    avatar,
    followers,
    following,
    fullname,
    userId: profileUserId,
    username,
  } = profileOwner;
  //Logged  in user info from Firebase.Auth()
  const { user: loggedInUser } = useContext(UserAuthContext);

  //is LOgged in user following this profile
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);

  const [followerCount, setFollowerCount] = useState(followers.length);

  const activeBtnFollow =
    loggedInUser.displayName && loggedInUser.displayName !== username;
  //////////////
  //Photo change Modal
  const [modalShow, setModalShow] = useState(false);

  //Follow / Unfollow Btn
  const handleToggleFollow = async () => {
    try {
      await updateLoggedInUsersFollowers(
        loggedInUser.uid,
        profileUserId,
        isFollowingProfile
      );
      await updateOtherUsersFollowings(
        loggedInUser.uid,
        profileUserId,
        isFollowingProfile
      );
      //setState
      setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
      setFollowerCount(
        isFollowingProfile ? followerCount - 1 : followerCount + 1
      );
    } catch (error) {
      console.log(error);
    }
  };

  //check if logged in user isfollowing a profile.
  //Just check if profile.followers array of profile owner includes logged in users ID
  useEffect(() => {
    if (followers.includes(loggedInUser.uid)) {
      setIsFollowingProfile(true);
    }
    // if (followers) {
    //   setFollowerCount(followers.length);
    // }
  }, [loggedInUser.uid, followers]);

  return (
    <ProfileHeadContainer>
      <AvatarWrapper>
        {username ? (
          <img
            onClick={() => {
              setModalShow(true);
            }}
            alt={`${fullname} profile `}
            src={avatar ? avatar : "/images/avatars/default.png"}
          />
        ) : (
          <Skeleton circle height={150} width={150} count={1} />
        )}
      </AvatarWrapper>

      <ProfileInfo>
        <ProfileInfoTop>
          <p className="text-2xl mr-4">{username}</p>
          {activeBtnFollow && isFollowingProfile === null ? (
            <Skeleton count={1} width={80} height={32} />
          ) : (
            activeBtnFollow && (
              <FollowBtn
                type="button"
                onClick={handleToggleFollow}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleToggleFollow();
                  }
                }}
                isFollowing={isFollowingProfile}
              >
                {isFollowingProfile ? "Unfollow" : "Follow"}
              </FollowBtn>
            )
          )}
        </ProfileInfoTop>
        <ProfileStats>
          {!followers || !following ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p>
                <span>{photosCount}</span> photos
              </p>
              <p>
                <span>{followerCount}</span>
                {` `}
                {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p>
                <span>{following?.length}</span> following
              </p>
            </>
          )}
        </ProfileStats>
        <ProfileFullName>
          <p>{!fullname ? <Skeleton count={1} height={24} /> : fullname}</p>
        </ProfileFullName>
      </ProfileInfo>
      <ModalExample
        modalLabel="Change Profile Photo"
        show={modalShow}
        setShow={setModalShow}
      >
        <PicUpload
          userId={loggedInUser.uid}
          avatar
          labelText="Upload Profile Photo"
          setModalShow={setModalShow}
        />
      </ModalExample>
    </ProfileHeadContainer>
  );
}
