import React from 'react'
import classes from './icon.module.css'

const Icon = props => {
    
    return (
        <div className={classes.App}>
        <div className = {classes.Pok}>
          <div className = {classes.Img}>
          <img src={`/img/${props.answer.id}_big.jpg`} alt='products'></img>
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
           <button>В корзину</button>
         </div>
         
   
        </div>
       </div>
    )
  }
  
  export default Icon