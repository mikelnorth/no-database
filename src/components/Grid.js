import React, { Component } from 'react';

export default function Grid(props){
    return (
        <div className="Grid"> 

            <div className='buttons'>
            <button className='button' onClick={() => props.showImage(0)}>basket</button>
            <button className='button' onClick={() => props.showImage(1)}>show me a dog</button>
            <button className='button' onClick={() => props.showImage(2)}>Puppy Love</button>
            <button className='button' onClick={() => props.showImage(3)}>cute wrinkles</button>
            </div>

        </div>
    )
}