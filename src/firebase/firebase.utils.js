import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	  apiKey: "AIzaSyBtkHPU1Kxm1XJuITtdGq6JgIJU8QFGPmg",
    authDomain: "crwn-db-6d5c0.firebaseapp.com",
    projectId: "crwn-db-6d5c0",
    storageBucket: "crwn-db-6d5c0.appspot.com",
    messagingSenderId: "1001170696874",
    appId: "1:1001170696874:web:aca538e130715799312ed3",
    measurementId: "G-FQRZH05EDB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;