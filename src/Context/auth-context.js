import { createContext } from "react";
import { getAuth, signInWithPopup} from 'firebase/auth'
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
    
    //  const logIn = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    const authInfo = {
        loading,
        setLoading,

        providerLogin
    }

    return <AuthContext.Provider value={authInfo}> { children }</AuthContext.Provider>
};


export default AuthProvider;