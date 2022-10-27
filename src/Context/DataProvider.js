import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const ContextData = createContext()

const DataProvider = ({ children }) => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(" https://hello-learner.vercel.app/courses")
            .then(res => res.json())
            .then(data => setDatas(data))
    }, []);

    

    const authData = { datas, setDatas }
    

    return (
        <ContextData.Provider value={authData}>
            {children}
       </ContextData.Provider>

    )



}

export default DataProvider;