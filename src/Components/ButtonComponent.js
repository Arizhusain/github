import React from 'react'
import {Button} from '@mui/material'

const ButtonComponent = ({buttonName,buttonColor, setColorData}) => {
  return (
    <>
      <Button variant="contained" onClick={()=>setColorData(buttonColor)}>{buttonName}</Button>
    </>
  )
}

export default ButtonComponent
