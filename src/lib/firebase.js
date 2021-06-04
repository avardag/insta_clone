import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
//firebase configs
import { firebaseConfig } from "./firebaseConfig";

//import the seed file
// import { seedDatabase } from "../seed";

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;
const storage = firebase.storage();

//seed only once
// seedDatabase(firebase);

export { firebase, FieldValue, storage };
