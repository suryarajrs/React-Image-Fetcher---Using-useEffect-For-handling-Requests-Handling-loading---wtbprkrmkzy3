import React from 'react';

export const PhotoFrame = (props) => {
    // { console.log(props.data.url) }

    return (

        <>

            <div className='photoframe'>
                <img src={props.data.url} />
                <div className='caption'> {props.data.title}</div>
            </div>

        </>
    )

}