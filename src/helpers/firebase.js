import user from "../components/sidebar/user";
import { firebase, FieldValue, storage } from "../lib/firebase";

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

export async function getUserByUsername(username) {
  try {
    const result = await firebase
      .firestore()
      .collection("users")
      .where("username", "==", username.toLowerCase())
      .get();

    return result.docs[0].data();
  } catch (error) {
    throw new Error(error.message);
  }
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
// ///////////////////////////////////////////
// Image Upload Functions
/////////////////////////////////////////////
/**
 *
 * @param string -  currentUserId. Logged in user's firebase UID
 * @param File - imageAsFile. Image file parsed from input[type=file]
 * @param [boolean] - isAvatar.defaults to false
 * @returns string - public Image Url
 */
export async function uploadToStorage(
  currentUserId,
  imageAsFile,
  isAvatar = false
) {
  const metadata = {
    owner: currentUserId,
  };
  const fileAddress = isAvatar
    ? `/users/${currentUserId}/avatars/avatar`
    : `/users/${currentUserId}/images/${imageAsFile.name}`;

  // const uploadTask = storage.ref(fileAddress).put(imageAsFile, metadata);
  // //initiates the firebase side uploading
  // uploadTask.on(
  //   "state_changed",
  //   (snapShot) => {
  //     //takes a snap shot of the process as it is happening
  //     // console.log(snapShot);
  //   },
  //   (err) => {
  //     //catches the errors
  //   },
  //   () => {
  //     // Handle successful uploads on complete
  //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //       return downloadURL;
  //     });
  //   }
  // );
  /////////////////////////// ABOVE with Async Await
  try {
    const uploadTaskSnapshot = await storage
      .ref(fileAddress)
      .put(imageAsFile, metadata);
    const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
    // console.log(downloadURL);
    return downloadURL;
  } catch (error) {
    throw new Error("Could Not Upload the Image");
  }
}

/**
 * Uploads image file to Fireabse Storage and save avatar's URL to Users profile doc in Firestore
 * @param string -  currentUserId. Logged in user's firebase UID
 * @param File - imageAsFile. Image file parsed from input[type=file]
 * @returns string - public Image Url
 */
export async function uploadAvatar(currentUserId, imageAsFile) {
  try {
    //upload image to Storage and get Image URL
    const imageUrl = await uploadToStorage(currentUserId, imageAsFile, true);
    await firebase.firestore().collection("users").doc(currentUserId).update({
      avatar: imageUrl,
    });
    //Update auth().currentuser. for Firebase Auth
    await firebase.auth().currentUser.updateProfile({
      photoURL: imageUrl,
    });

    return imageUrl;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Uploads image file to Fireabse Storage and save image URL photos collection in Firestore
 * @param string -  currentUserId. Logged in user's firebase UID
 * @param File - imageAsFile. Image file parsed from input[type=file]
 * @param [string] - caption, optional. Image caption
 * @returns string - public Image Url
 */
export async function uploadImage(
  currentUserId,
  imageAsFile,
  caption = "default photo"
) {
  try {
    //upload image to Storage and get Image URL
    const imageUrl = await uploadToStorage(currentUserId, imageAsFile, false);
    //upload image post document to Firebase DB
    const newDoc = await firebase
      .firestore()
      .collection("photos")
      .doc(currentUserId)
      .collection("images")
      .add({
        caption,
        comments: [],
        dateCreated: Date.now(),
        userId: currentUserId,
        imageSrc: imageUrl,
        likes: [],
        userLattitude: "",
        userLongitude: "",
      });
    // console.log(newDoc.id);
    return imageUrl;
  } catch (error) {
    throw new Error(error.message);
  }
}

// ///////////////////////////////////////////
// END Image Upload Functions
/////////////////////////////////////////////

/**
 * Fetches all photos from 'images' collection of a specific user given his userId
 * @param {*} userId
 * @returns Array of photo documents(JS objects) from firestore DB
 */
export async function getUsersPhotosFromDB(userId) {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("photos")
      .doc(userId)
      .collection("images")
      .get();
    return snapshot.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
  } catch (error) {
    throw new Error(`Could not fetch photos of ${userId}`);
  }
}

/**
 * Fetches all of photos of users followed by logged in User.
 * @param string -  loggedInUserId -
 * @param Array -  followingsArr -  ids of users followed by currentLoggedInUser
 * @returns Array of photo objects
 */
export async function getFollowedPhotos(loggedInUserId, followingsArr) {
  try {
    let allPhotos = [];
    //iterate over array of loggedInUser's followings and get their photos
    await Promise.all(
      followingsArr.map(async (followingUserId) => {
        const user = await getUserByUserId(followingUserId); //get the username of following user(i.e. owner of the photo)
        const { username, avatar } = user;

        const photosArray = await getUsersPhotosFromDB(followingUserId); //array of photos of one user
        //iterate over photos Array of one user and add each photo to allPhotos array
        return photosArray.forEach((photo) => {
          let loggedInUserLiked = false;
          if (photo.likes.includes(loggedInUserId)) loggedInUserLiked = true; //check if loggedInUser id is in 'liked' array of a photo object

          allPhotos.push({ ...photo, username, avatar, loggedInUserLiked }); //push all the photos 1 by 1, w/ photo obj, username of photo owner and loggedInUser liked bool
        });
      })
    );

    return allPhotos;
  } catch (error) {
    throw new Error("Could not load images of followed users");
  }
}
/////////////////////////
//Likes
////////////////////////

/**
 * Handles like/unlike functionality on image/post
 * @param string loggedInUserId -
 * @param string userId - user id of owner of image
 * @param string docId - document id of image
 * @param boolean toggleLiked - like/unlike. comes from like click in Post component
 */
export async function handleLike(loggedInUserId, userId, docId, toggleLiked) {
  try {
    await firebase
      .firestore()
      .collection("photos")
      .doc(userId)
      .collection("images")
      .doc(docId)
      .update({
        likes: toggleLiked
          ? FieldValue.arrayRemove(loggedInUserId)
          : FieldValue.arrayUnion(loggedInUserId),
      });
  } catch (error) {
    throw new Error("Could not update Like");
  }
}

///////////////////////////
//Comments
///////////////////////

/**
 * Function to add a comment on user's post.
 * @param string loggedInDisplayName - loggedInUser's displayName. Comes from firebase.Auth()
 * @param string userId - user id of image owner in firestore db
 * @param string docId - document id of image in firestore db
 * @param string comment - comment from input
 * @returns Promise
 */
export async function addCommentOnImage(displayName, userId, docId, comment) {
  try {
    await firebase
      .firestore()
      .collection("photos")
      .doc(userId)
      .collection("images")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  } catch (error) {
    throw new Error("Unable to add comemnt");
  }
}
