import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_OLpirwexQLO947yvcaE_SLfvw0_zDu0",
    authDomain: "crown-db-75efd.firebaseapp.com",
    databaseURL: "https://crown-db-75efd.firebaseio.com",
    projectId: "crown-db-75efd",
    storageBucket: "crown-db-75efd.appspot.com",
    messagingSenderId: "832037217923",
    appId: "1:832037217923:web:a278099bba3d4ad7399db6",
    measurementId: "G-Q5M3C0X8HX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;