import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

function FirebaseInt() {
	const firebaseConfig = {
        apiKey: "AIzaSyDVyCUC4INR3giDsxZAZnPgskvwcRBQ3u0",
        authDomain: "portfolio-14be7.firebaseapp.com",
        projectId: "portfolio-14be7",
        storageBucket: "portfolio-14be7.appspot.com",
        messagingSenderId: "350721670021",
        appId: "1:350721670021:web:2cf285ed93b207b44ea2ec",
        measurementId: "G-N8DRJWCKV7"
	};

	const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    //const analytics = getAnalytics(app);
    
	const db = getFirestore();

    const firebaseAPI = {
        storage: storage,
        db: db
    }

	return firebaseAPI;
}

export default FirebaseInt;
