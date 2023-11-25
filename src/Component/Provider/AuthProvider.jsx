import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

    // sign out

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
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
        logOut
    }



    return (
        <AutheContext.Provider value={authInfo}>
            {children}
        </AutheContext.Provider>
    );
};

export default AuthProvider;