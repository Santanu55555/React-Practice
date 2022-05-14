import React, {useState} from 'react'
import { Button,Para } from '../style/style'





const Counter=()=> {
     const [Count,setCount]=useState(0)
     

  return (
   <>
    <h1 style={{background: 'black',color: 'white'}}>Counter</h1>
    <Para>{Count}</Para>
    <Button onClick={()=>{setCount(Count+1)}}>+</Button>
   <Button onClick={()=>{setCount(Count-1)}}>-</Button>
   </>
  )
}

export default Counter
