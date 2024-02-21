import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {

    const [id , setid]=useState(0);
    const [data , setdata]=useState("");
    const [loading , setloading] = useState(false);


  const handleOnchange = async (e)=>{
    
    const id = e.target.value;
    if(id){
        setloading(true);
    }
    try{

        const responce  =  await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    
        const results = await responce.json();
        setdata(results)
        setloading(false)
    }catch(error){
        console.log(error)
    }
  }
  
    return(
         <>
         
         <label htmlFor='id'>ID number</label>
         <input id='id' onChange={handleOnchange} type="number" />

         {loading&& <Loader></Loader> }
         {data&& <PhotoFrame data = {data}></PhotoFrame>}
         
         </>
    )
  
}


export default App;
