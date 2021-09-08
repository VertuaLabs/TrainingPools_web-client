/**
 * Create the Firebase client and freeze it to use a (pseudo) singleton pattern
 */
import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DOMAIN_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID,
};

export interface FireBaseClientInterface {
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  functions: firebase.functions.Functions;
  storage: firebase.storage.Storage;
  analytics: firebase.analytics.Analytics;
}

class FirebaseClient implements FireBaseClientInterface {
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  functions: firebase.functions.Functions;
  storage: firebase.storage.Storage;
  analytics: firebase.analytics.Analytics;

  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.functions = firebase.functions();
    this.storage = firebase.storage();
    this.analytics = firebase.analytics();
  }
}

// Use freeze for a singleton pattern
const instance = new FirebaseClient();
Object.freeze(instance);

export default instance;
