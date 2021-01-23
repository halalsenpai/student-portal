import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { composeWithDevTools } from "redux-devtools-extension";
const fbConfig = {
  apiKey: "AIzaSyDvzPYjkuAp2_fctOjoqNTFEmoExxveEX4",
  authDomain: "academate-9968f.firebaseapp.com",
  projectId: "academate-9968f",
  storageBucket: "academate-9968f.appspot.com",
  messagingSenderId: "1088189997304",
  appId: "1:1088189997304:web:1bc13dd9f405805e951b0d",
  measurementId: "G-Z1LBM2PEGJ",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
