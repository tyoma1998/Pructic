import React from 'react'
import classes from './icon.module.css'

const Icon = props => {
    {console.log(props.answer.id)}
    return (
        <div className={classes.App}>
        <div className = {classes.Pok}>
          <div className = {classes.Img}>
   
          </div>
         <div className = {classes.Name}>
           <p>{props.answer.title}</p>
           <hr></hr>
           <p className = {classes.Buy}>
           {props.answer.currencyFormat + props.answer.price}

           </p>
           <p>
           {
           "or " + props.answer.installments 
           + " x"
           + props.answer.currencyFormat 
           + `${(props.answer.price/props.answer.installments).toFixed(2)}`
           }
           </p>
         </div>
         <div className = {classes.Button}>
           <button>В</button>
         </div>
         
   
        </div>
       </div>
    )
  }
  
  export default Icon