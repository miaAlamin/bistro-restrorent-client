import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPiblic from "../Hooks/useAxiosPiblic";
import { Result } from "postcss";




export const authContex = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const axiosSecurePiblic = useAxiosPiblic()


const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const provider = new GoogleAuthProvider();

const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
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

        if(currentUser){
            // get token and store client
            const userInfo = {
                email: currentUser.email
            }
            axiosSecurePiblic.post('/jwt', userInfo)
            .then(result=>{
                if(result.data.token){
                    localStorage.setItem('access-token', result.data.token)
                }
            })

        }
        else{
            localStorage.removeItem('access-token')
        }
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
        UpdateProfile,
        googleLogin
    }
    return (
        <authContex.Provider value={authInfo}>
            {children}
        </authContex.Provider>
    );
};

export default AuthProvider;