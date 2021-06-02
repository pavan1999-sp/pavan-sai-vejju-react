import React, { useState ,useEffect} from "react";

const Hook=()=>{
  
// function modifydata(){
//     if(name==="New Name")
//     setName("india")
//     else
//     setName("New name");
// }


useEffect(
    ()=>console.log("Updated " ,name)
)

let [name,setName]=useState("india")

return(
<div>
    <h1> state::::{name}</h1>


    <button onClick={()=>name==="India"?setName("barath"):setName("India") }>click</button>
    </div>
)


}
export default Hook;