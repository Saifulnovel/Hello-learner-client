import { createContext } from "react";
import {getAuth} from 'firebase/auth'
import app from "../Config/firebase.config";


const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const 


    return <AuthContext.Provider value={}></AuthContext.Provider>
};


export default AuthProvider;