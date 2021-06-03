import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExists(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();
  // console.log("result", result);
  // console.log("result.docs", result.docs);

  return result.docs.length > 0;
}

export async function createUser({ username, email, password, fullname }) {
  const usernameExists = await doesUsernameExists(username);
  if (!usernameExists) {
    try {
      const createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      // authentication
      // -> email & password & username (displayName)
      await createdUser.user.updateProfile({
        displayName: username,
      });

      // firestore user collection (create a document for newly created user)

      /* await firebase.firestore().collection("users").add({ //sets id of doc itself
        userId: createdUser.user.uid,
        username: username.toLowerCase(),
        fullname,
        email: email.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now(),
      }); */
      await firebase
        .firestore()
        .collection("users")
        .doc(createdUser.user.uid) //sets Auth UID as id of the documents
        .set({
          userId: createdUser.user.uid,
          username: username.toLowerCase(),
          fullname,
          email: email.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("That username is already taken, please try another.");
  }
}

/**
 * Function to return a user info based on UID of  firebase Auth UID
 * @param {*} userId . UID of auth user from firebase
 * @returns User object with users information from frestore DB
 */
export async function getUserByUserId(userId) {
  /* const results = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = results.docs.map((item) => ({ ...item.data(), docId: item.id })); */

  const user = await firebase.firestore().collection("users").doc(userId).get();

  return user ? user.data() : null;
}

/**
 * Fetch 10 profiles from firestore DB and not include those who the user already follows
 * @param {string} userId - Users ID
 * @param {string[]} usersFollowings - Array of profile ID user already following
 * @returns {Object[]} profilesArray - Array of profiles
 */
export async function getSuggestedProfiles(userId, usersFollowings) {
  //query to get 10 profiles
  const results = await firebase
    .firestore()
    .collection("users")
    .limit(10)
    .get();
  //turn the response to array,
  //extract the data w/ .data(),
  //filter(dont include profile of self and profiles in my followingsArray, ie those who i follow)
  const profilesArray = results.docs
    .map((profile) => ({
      ...profile.data(),
      profileId: profile.id,
    }))
    .filter(
      (profile) =>
        profile.userId !== userId && !usersFollowings.includes(profile.userId)
    );

  return profilesArray;
}

/**
 * function to add/remove LoggedInUser's profile to/from another user's followings array
 * @param string loggedInUser - current logged in auth user ID
 * @param string userId - Profile Id(here same as user ID) of suggested profile
 * @param [boolean] isFollowing -is logged in user currently following this profile?
 */
export async function updateOtherUsersFollowings(
  loggedInUser,
  userId,
  isFollowing
) {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .update({
        followers: isFollowing
          ? FieldValue.arrayRemove(loggedInUser)
          : FieldValue.arrayUnion(loggedInUser),
      });
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * function to add/remove a profile to/from logged in users followings array
 * @param string loggedInUser - current logged in auth user ID
 * @param string profileId - Profile Id(here same as user ID) of suggested profile
 * @param [boolean] isFollowing -is logged in user currently following this profile?
 */
export async function updateLoggedInUsersFollowers(
  loggedInUser,
  profileId,
  isFollowing
) {
  try {
    await firebase
      .firestore()
      .collection("users")
      .doc(loggedInUser)
      .update({
        following: isFollowing
          ? FieldValue.arrayRemove(profileId)
          : FieldValue.arrayUnion(profileId),
      });
  } catch (error) {
    throw new Error(error.message);
  }
}
