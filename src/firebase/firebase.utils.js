import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9RXS9dlNFsl4LRt6x4ig_TkEQdX32GW8",
    authDomain: "crwn-db-16a51.firebaseapp.com",
    databaseURL: "https://crwn-db-16a51.firebaseio.com",
    projectId: "crwn-db-16a51",
    storageBucket: "crwn-db-16a51.appspot.com",
    messagingSenderId: "512226683567",
    appId: "1:512226683567:web:dc7030379996cf0f0a425a",
    measurementId: "G-KSCSMWMGWL"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({ displayName, email, createAt, ...additionalData })
        } catch (e) {
            console.log(e.message())
        }


    }
    return userRef;


};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

