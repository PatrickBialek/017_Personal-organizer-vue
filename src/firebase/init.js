import firebase from 'firebase';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyCQutkAOwqPtXQrkipJxrA52cd7OQXAfgM",
	authDomain: "vue-personal-organizer.firebaseapp.com",
	databaseURL: "https://vue-personal-organizer.firebaseio.com",
	projectId: "vue-personal-organizer",
	storageBucket: "vue-personal-organizer.appspot.com",
	messagingSenderId: "93677670654",
	appId: "1:93677670654:web:30880d31c14fbfb79c15af",
	measurementId: "G-3L6WEK86GX"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

db.settings({
	timestampsInSnapshots: true
})

export default db;