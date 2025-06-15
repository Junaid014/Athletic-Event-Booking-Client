import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.init';

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const sighInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, new GoogleAuthProvider())
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser ,updateData)
    }
    const signOutUser = async () => {
    setLoading(true);

  
    await axios.post('http://localhost:3000/logout', {}, {
        withCredentials: true
    });

    return signOut(auth);
}


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

            if(currentUser?.email){
                const userData ={email: currentUser.email};
                axios.post('http://localhost:3000/jwt',userData ,{
                    withCredentials:true
                })
                .then(res=>console.log('token after jwt',res.data))
                .catch(error=>console.log(error))
            }

        })
        return () => {
            unSubscribe();
        }

    }, [])

    const userInfo = {
        user,
        setUser,
        createUser,
        signOutUser,
        LogInUser,
        sighInWithGoogle,
        updateUser,
        loading,
        auth

    }
   

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;