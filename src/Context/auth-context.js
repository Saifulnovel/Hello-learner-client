import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../Config/firebase.config";
import { useState } from "react";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)


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
   const logIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);   
  }
    
    const authInfo = {
        loading,
        setLoading,
        register,
      logIn,
        logOut,
        providerLogin,
        fbLoginProvider
    }

    return <AuthContext.Provider value={authInfo}> { children }</AuthContext.Provider>
};


export default AuthProvider;