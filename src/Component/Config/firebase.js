import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3rq4ZELq6HDU5XjPzJP3ga_rdU7bniPo",
  authDomain: "blog-in-quilljs.firebaseapp.com",
  projectId: "blog-in-quilljs",
  storageBucket: "blog-in-quilljs.appspot.com",
  messagingSenderId: "1019183522387",
  appId: "1:1019183522387:web:96a33b3989a17b6b8bdca6",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
