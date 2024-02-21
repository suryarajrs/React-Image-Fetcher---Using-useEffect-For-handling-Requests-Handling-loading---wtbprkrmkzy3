import React from 'react';

export const PhotoFrame = (props) => {
   {console.log(props.data.url)}

    return (

        <>
        
        <div className='photoframe'>
         <img src={props.data.url}/>

        </div>
        <div className='caption'>
            <h5>{props.data.title}</h5>
        </div>
        
        </>
    )
   
}