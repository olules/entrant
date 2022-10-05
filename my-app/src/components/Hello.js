import React from 'react';

function Hello(props){
    function clickMe(){
        alert('Button Is Clicked')
    }
    return(
        
        <div>
            <h1>My name is: {props.name} {props.lastname}</h1>
         <button className='btn btn-success' onClick ={clickMe}>click me</button>
        </div>
       
    )
}

export default Hello