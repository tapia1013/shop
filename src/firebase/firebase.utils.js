import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBMzjgcrZgL1WHsw_IeeeYhaaGpL5Ijobs",
  authDomain: "crown-db-b3dbb.firebaseapp.com",
  projectId: "crown-db-b3dbb",
  storageBucket: "crown-db-b3dbb.appspot.com",
  messagingSenderId: "930003146370",
  appId: "1:930003146370:web:ba9c2f500cf6d27e7bc69b",
  measurementId: "G-7W6T0PZ9C3"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }


  return userRef;
}

firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger google pop up when we use google auth provider with authentication and signin
provider.setCustomParameters({ prompt: 'select_account' })




export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;






