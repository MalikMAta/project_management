const functions = require("firebase-functions");
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification addded, doc'))
})
 
exports.projectCreated = functions.firestore
// projectId is just a variable 
.document('projects/{projectId}')
.onCreate(doc =>{

    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastname}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})


exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid)
    .get().then(doc => {
        const newUser = doc.data()
        const notification = {
            content: "New user joined the application",
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)

    })



})