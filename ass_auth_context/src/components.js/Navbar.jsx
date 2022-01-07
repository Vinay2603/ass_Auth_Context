


export const Navbar =()=>{
    return (
        <div style={{
            border: "1px solid black",
            height :"50px",
            display:"flex",
            justifyContent: "space-around",
        }}>
          
           <button style={{
               border: "1px solid black",
               padding : "5px",
               margin:"10px"
           }}>Home</button>

           <button style={{
               border: "1px solid black",
               padding : "5px",
               margin:"10px"
           }}>Login</button>
        </div>
    )
}