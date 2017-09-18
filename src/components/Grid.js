import React, { Component } from 'react';

export default function Grid(props){
    return (
        <div className="Grid"> 

            <div className='buttons'>
                {props.pic.map((v, i, arr) => {
                    return <button className='button' onClick={() => props.showImage(i)}></button>
                })}
            
           
            </div>

        </div>
    )
}