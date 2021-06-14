import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCpBxVpuxTsrUJ7NbHO5o00mP0ZDOngOvk",
    authDomain: "push-noti-example-f4d19.firebaseapp.com",
    projectId: "push-noti-example-f4d19",
    storageBucket: "push-noti-example-f4d19.appspot.com",
    messagingSenderId: "906861364571",
    appId: "1:906861364571:web:2e95b5471b8e374a9f067e"
};
firebase.initializeApp(config);

export default firebase;