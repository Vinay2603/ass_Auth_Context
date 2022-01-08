import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

  



export const Home =()=>{

     const {token, handleToken} = useContext(LoginContext)

     if( token !== null){
         return <div style={{
             textAlign: "center",
             position :"absolute",
             top: "50%",
             left:"25%",
             fontSize :"50px"
         }}>this is token :  {token}  </div>
     }

    return <div style={{
        textAlign: "center",
        position :"absolute",
        top: "50%",
        left:"25%",
        fontSize :"50px"
    }}>WELCOME TO MAIN PAGE  </div>
}