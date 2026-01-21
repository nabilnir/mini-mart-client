"use client";
import { createContext, useEffect, useState } from "react";
import auth from "@/firebase/firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        googleLogin,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
