import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Test = ()=>{




    async function LoadImage(){





        let response=await axios.get(" http://localhost:9000/books")
        console.log(response.data)
        imgdata=response.data.map(x=>(
           <div>              
                  

<div className="dd"><img src={x.image} width="200px" height="200" />
<td>name : {x.name}</td> <br/>
        <td>author : {x.author}</td> 


</div>






     
         
            </div>
        
        ))
        setImgdata(imgdata);
    }
    
    
    let [imgdata,setImgdata]=useState("")
   

    useEffect(LoadImage,[])

return(
    <div>
       {imgdata}
    </div>
)


}



    
       
    
    


export default Test