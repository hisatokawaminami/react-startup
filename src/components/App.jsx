import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';
// import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid';

function App(){
  return(
    <div>
      <Header />
      
    </div>
  )
}

export default App;
