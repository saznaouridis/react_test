import React, {Fragment} from 'react';
import './App.css';


//components

import InputCountries from "./components/inputCountries";
import ListCountries from "./components/ListCountries";

function App() {
  return (
  <Fragment>
    <div className="container">
    <InputCountries />
    <ListCountries />
    </div>
  </Fragment>
  
  );  
}

export default App;
