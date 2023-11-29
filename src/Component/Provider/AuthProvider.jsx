import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase config";
import useAxiosPublic from "../../Hook/useAxiosPublic";

export const AutheContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

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
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            if (user) {
                const userInfo = { email: user.email }
                axiosPublic.post('/api/v1/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        });
        return () => {
            return unSubscribe
        }
    }, [axiosPublic])


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