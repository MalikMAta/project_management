import firebase from 'firebase'
// import 'firebase/firestone'
// import 'firebase/auth'

 const config = {
    apiKey: "AIzaSyDKNJtDBbLadsI1m156Z0WZRZVeoNZbvas",
    authDomain: "project-managment-400bc.firebaseapp.com",
    projectId: "project-managment-400bc",
    storageBucket: "project-managment-400bc.appspot.com",
    messagingSenderId: "1085271922524",
    appId: "1:1085271922524:web:c1ac4e44aefcfb985e9399",
    measurementId: "G-528W0NGCNL"
  }; 

  firebase.initializeApp(config)
  firebase.firestore().settings({timestampInSnapshots: true})


  export default config