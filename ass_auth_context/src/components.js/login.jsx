import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext";
const axios = require('axios');


export const Login =()=>{

   const { handleToken} = useContext(LoginContext)

   const [form,setForm ] = useState({})

    const handleChange=(e)=>{
 
        const {name,value} = e.target

        console.log({...form,[name]:value })
         setForm({...form,[name]:value })
    }

  const handleSubmit=()=>{

    axios.post('https://reqres.in/api/login',form)
    .then(function (response) {
      // handle success
      console.log(response.data.token);

      handleToken(response.data.token)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
       
  }


    return (
        <div style={{
            border : "1px solid black ",
            width : "350px",
            padding: "20px",
            position:"absolute",
            top: "300px",
            left : "550px"
        }}>
            <label >NAME : </label>
            <input name="email" type="text" placeholder="Enter name" onChange={handleChange}/>
            <br/>
            <br/>
            <label >PASSWORD : </label>
            <input name="password" type="text" placeholder="Enter password"  onChange={handleChange}/>
            <br/>
            <button onClick={handleSubmit}> SUBMIT</button>
        </div>
    )
}