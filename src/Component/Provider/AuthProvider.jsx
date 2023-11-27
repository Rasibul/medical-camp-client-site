import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase config";

export const AutheContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // googleLogin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    // sign up 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update profile

    const handelProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // set current user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
    }, [])

    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        signIn ,
        handelProfile,
        logOut
    }



    return (
        <AutheContext.Provider value={authInfo}>
            {children}
        </AutheContext.Provider>
    );
};

export default AuthProvider;