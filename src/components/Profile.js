import React, { Component } from 'react';

export default function Profile(props){
    return (
        <div className="Profile"> 
            <profile className='profilePic'>
            {props.flag ? <img src={props.currentImage} /> : null}
            
            </profile>
            
            

        </div>
    )
}