import {Link} from "react-router-dom"


export const Navbar =()=>{
    return (
        <div style={{
            border: "1px solid black",
            height :"50px",
            display:"flex",
            justifyContent: "space-around",
        }}>
          
           <Link to="/"><button style={{
               border: "1px solid black",
               padding : "5px",
               margin:"10px"
           }}>Home</button> </Link>

           <Link to="/Login"><button style={{
               border: "1px solid black",
               padding : "5px",
               margin:"10px"
           }}>
               
               Login </button>  </Link>
        </div>
    )
}