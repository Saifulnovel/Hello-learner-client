import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../Config/firebase.config";
import { useState } from "react";
import { useEffect } from "react";



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const[user, setUser] = useState(null);
  


      const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };
      
    const fbLoginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider )
      }
    
    const register = (mail, pass) => {
        return createUserWithEmailAndPassword(auth, mail, pass)
  }
   const emailLogin = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);   
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {

      console.log(currentUser);
      setUser(currentUser)
    })  
     
    return () => unSubscribe();

    },[])
    const authInfo = {
        loading,
        setLoading,
        register,
      emailLogin,
        logOut,
        providerLogin,
      fbLoginProvider,
        user
    }

  return <AuthContext.Provider value={authInfo}>
    {children}
  
  </AuthContext.Provider>
};


export default AuthProvider;