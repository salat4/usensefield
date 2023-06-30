import Field from "./components/Field/Field";
import Strength from "./components/Strength/Strength";
import './App.css'
import { useEffect, useState } from "react";
function App() {
const [color, setColor] = useState('')
const [password, setPassword] = useState('')
useEffect(()=>{
  const numberPattern = /[0-9]/
  const symbolsPattern = /[!@#$%^&*(),.?":{}[\]|<>]/
  const letterPattern = /[a-zA-Z]/
  const numberPatternResult =  numberPattern.test(password)
  const symbolsPatternResult = symbolsPattern.test(password)
  const letterPatternResult =  letterPattern.test(password)

if(numberPatternResult && symbolsPatternResult && letterPatternResult){
  setColor('green')
}
else if ((numberPatternResult && symbolsPatternResult) || (symbolsPatternResult && letterPatternResult) || (letterPatternResult && numberPatternResult)){
  setColor('yellow')
}
else if (numberPatternResult || symbolsPatternResult || letterPatternResult){
  setColor('red')
}
else if (password === ''){
  setColor('')
}
},[password])
  return (
    <div className='container'>
      <Field setPassword={setPassword} password = {password}/>
      <Strength color = {color} password ={password}/>
    </div>
   
  );
}

export default App;
