import React ,{useState} from "react";
import './App.css';
// import Counter from "./components/counter";
import {Button, Cutton} from './style/style'

const App=()=> {

    var [result,setResult]=useState("")

    const clickHandler = (event)=>{

        
      if((result[result.length-1]==="+" && event.target.value=== "+" )||
       (result[result.length-1]==="-" && event.target.value=== "-")||
       (result[result.length-1]==="*"&& event.target.value=== "*")||
       (result[result.length-1]==="/"&& event.target.value=== "/"))
       
       {
        
        
      }
      else if((result[result.length-1]==="+" && (event.target.value=== "-" ||event.target.value=== "*" ||event.target.value=== "/"  )) ||(result[result.length-1]==="-" && (event.target.value=== "+" ||event.target.value=== "*" ||event.target.value=== "/" ) ) 
      ||(result[result.length-1]==="/" && (event.target.value=== "-" ||event.target.value=== "*" ||event.target.value=== "+"  )) ||(result[result.length-1]==="*" && (event.target.value=== "+" ||event.target.value=== "-" ||event.target.value=== "/" ) ) 
      

      ){
              setResult(result.slice(0,-1).concat(event.target.value))


          

      }
      
     else{
        setResult(result.concat(event.target.value))
     }
      
            
     


    }
    
    const clear=()=>{
      setResult("")
    }

    const calculate = ()=>{
   

      setResult(eval(result).toString())
    }

    const del=()=>{

      setResult(result.slice(0,-1))

    }
  return (
    <div className="App" style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', width:'300px',margin:'auto',marginTop:'50px',background:"987",borderRadius:'10px'}}>
      
    {/* <Counter/> */}


    <input type="text" onChange={(event)=>event.target.value} placeholder="0" value={result} id="answer" style={{textAlign:"right",width:'200px',margin:'auto',height:"30px",marginBottom:"50px",marginTop:"30px"}} />
    <Cutton onClick={clear} >CE</Cutton>
      <div id="body" style={{display: 'grid',gap:"10px",gridTemplateColumns: 'repeat(4,1fr)', width:'100%',height:'300px',marginLeft: '9px',}}>

            <Button onClick={clickHandler}value="9" >9</Button>
      <Button onClick={clickHandler}value="8">8</Button>
      <Button onClick={clickHandler}value="7">7</Button>
         <Button onClick={del}>Del</Button>
      <Button onClick={clickHandler}value="6">6</Button>
      <Button onClick={clickHandler}value="5">5</Button>
      <Button onClick={clickHandler}value="4">4</Button>
      <Button onClick={clickHandler}value="3">3</Button>
      <Button onClick={clickHandler}value="2">2</Button>
      <Button onClick={clickHandler}value="1">1</Button>
      <Button onClick={clickHandler}value="0">0</Button>
      <Button onClick={clickHandler}value="+">+</Button>
       <Button onClick={clickHandler}value="-">-</Button>
        <Button onClick={clickHandler}value="/">/</Button>
         <Button onClick={clickHandler}value="*">*</Button>
        <Button onClick={calculate}value="="> =  </Button>

      </div>

    </div>
  );
}

export default App;
