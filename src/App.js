import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import Catalog from './container/catalog/catalog'

function App() {
  return (
    <div className={classes.Container}>
     <div className={classes.catalog}>
      
     <Catalog />
      
      <div className={classes.content}>
        
      </div>

      
     </div>
     <div className={classes.basket}>
     
     </div>
    </div>
  );
}

export default App;
