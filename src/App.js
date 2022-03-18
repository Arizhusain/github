import React, { useState } from 'react'
import ButtonContainer from './Components/ButtonContainer'

const App = () => {
  
  const [colorData, setColorData] = useState("");
  console.log(colorData)
  return (
    <div style={{backgroundColor:`${colorData}`, height:'100vh', width:'100vw'}}>
      <ButtonContainer setColorData={setColorData}/>
    </div>
  )
}

export default App
