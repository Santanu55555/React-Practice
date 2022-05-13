import React ,{useState} from "react";
import './App.css';
import {Button} from './style/style'

const App=()=> {
  return (
    <div className="App" >
      
    <input type="text" placeholder="0" id="answer"/>
      <Button >9</Button>
      <Button >8</Button>
      <Button >7</Button>
         <Button >CE</Button>
      <Button >6</Button>
      <Button >5</Button>
      <Button >4</Button>
      <Button >3</Button>
      <Button >2</Button>
      <Button >1</Button>
      <Button >+</Button>
       <Button >-</Button>
        <Button >/</Button>
         <Button >*</Button>

    </div>
  );
}

export default App;
