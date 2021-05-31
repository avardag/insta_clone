import { firebase } from "../lib/firebase";

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
