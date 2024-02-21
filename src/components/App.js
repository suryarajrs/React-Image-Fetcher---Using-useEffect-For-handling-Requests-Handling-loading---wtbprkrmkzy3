import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {

    const [id , setid]=useState('');
    const [data , setdata]=useState("");
    const [loading , setloading] = useState(false);

    useEffect(() =>{


        if(id){
            setloading(true);
            fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setdata(data);
              setloading(false);
            })
            .catch((error) => {
              console.error('Error fetching photo data:', error);
              setloading(false);
            });
            
        }
    },[id])


  const handleOnchange = async (e)=>{
    
    setid(e.target.value);

    
  }
  
    return(
         <>
         
         <label htmlFor='id'>Id number</label>
         <input id='id'  onChange={handleOnchange} type="number" />

         {loading&& <Loader></Loader> }
         {data&& <PhotoFrame data = {data}></PhotoFrame>}
         
         </>
    )
  
}


export default App;
