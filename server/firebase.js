const admin = require('firebase-admin');

// Initialize Firebase using a service account.
// Set the path to the service account key JSON file via the FIREBASE_SERVICE_ACCOUNT env variable
// or place the file at server/serviceAccountKey.json (ignored by git).
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT || require('path').join(__dirname, 'serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
});

const db = admin.firestore();

module.exports = { db };
