// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Debugging: Log the config status (don't log full keys in production, but helpful here)
console.log("Firebase Config Check:", {
    apiKeyExists: !!firebaseConfig.apiKey,
    projectId: firebaseConfig.projectId,
    envKey: process.env.NEXT_PUBLIC_API_KEY ? "Loaded" : "Missing"
});

if (!firebaseConfig.apiKey) {
    throw new Error("Firebase API Key is missing! Check your .env.local file and restart the server.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
