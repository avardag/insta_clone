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
      await firebase.firestore().collection("users").add({
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
