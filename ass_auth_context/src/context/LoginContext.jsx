import { createContext, useState } from "react";



export const LoginContext = createContext()


export const LoginContextProvider =({children})=>{

const [token ,setToken ] = useState(null)

const handleToken =(token)=>{
    setToken(token)
}

    return <LoginContext.Provider value={{token ,handleToken}}>{children}</LoginContext.Provider>
}




