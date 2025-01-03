import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";





export const authContex = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const UpdateProfile=(name, photo)=>{

    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })

}

const creatUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
useEffect( ()=>{
    const unsubscrib = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    })

    return ()=>{
        unsubscrib()
    }
},[])

    const authInfo = {
        user,
        loading,
        logOut,
        creatUser,
        signInUser,
        UpdateProfile
    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;