import { createContext } from "react";



export const loginContext = createContext()

export const loginContextProvider =()=>{

    return <loginContext.Provider value={1}></loginContext.Provider>
}
