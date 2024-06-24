import React, { useState } from 'react'
import Output from './components/Output'
import Input from './components/Input'
import Button from './components/Button'
import "./App.css"
const App = () => {
  const [input,setInput]= useState(0);
  const [output,setOutput]= useState(0);
  const clickEventHandling=(value)=>{
   if(value == 'AC'){
    setInput(0);
    setOutput(0);
   }
   else if(value == '⌦'){
    if(input != 0){
      input.length ==1 ? setInput(0): setInput(input.slice(0,input.length - 1));
    }
     //(will delete the last one) will remain input value from array [0] to array.lenght -1
   }
   else if(value == '='){
   setOutput(eval(input));
   setInput(0);
   }
   else{
    (input == 0 ? setInput(value) : setInput(input + value));
   }
  }
  return (
    <div className='container'>
      <Output output = {output}/>
      <Input input= {input} />
      <Button clickEventHandling={clickEventHandling}/>
    </div>
  )
}

export default App
