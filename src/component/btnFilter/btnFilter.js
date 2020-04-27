import React from 'react'
import cl from './btnFilter.module.css'

const btnFilter = props => {
    
    return (
        <div className={cl.Button}>
           <button >
            {props.answerBtn}   
            </button> 
        </div>


    )
      
  }
  
  export default btnFilter