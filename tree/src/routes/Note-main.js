/* eslint-disable */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux"



function Note1(){
    let ht1 = useSelector((state) => state)
    
    return(
        <div className='N-main'>
            <h1>Note</h1>
            {
                ht1.hashtag.map((a,i)=>{
                    return(
                        <button key={i} className='#button'>{ht1.hashtag[i]}</button>
                    )
                })
            }
        </div>
    )
}

export default Note1