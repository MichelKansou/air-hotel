import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDPs6ufccnhL2GmE2M_3teD-o3ktqhwGng',
    authDomain: 'air-hotel-7241b.firebaseapp.com',
    databaseURL: 'https://air-hotel-7241b.firebaseio.com',
    projectId: 'air-hotel-7241b',
    storageBucket: 'air-hotel-7241b.appspot.com',
    messagingSenderId: '930461119709',
    appId: '1:930461119709:web:6cc42eb764f58c51045734'
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
