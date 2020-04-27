import React from 'react';
import classes from './App.module.css'
import Catalog from './container/catalog/catalog'

function App() {
  return (
    <div className={classes.Container}>
     <div className={classes.catalog}>   
     <Catalog />
     </div>
     <div className={classes.basket}>
     <p>акмв</p>
     <button>
       vmdkfmkvdfkmvdmss
     </button>
     </div>
    </div>
  );
}

export default App;
