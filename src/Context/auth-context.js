import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'
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
    
     const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        loading,
        setLoading,
        register,

        providerLogin,
        fbLoginProvider
    }

    return <AuthContext.Provider value={authInfo}> { children }</AuthContext.Provider>
};


export default AuthProvider;