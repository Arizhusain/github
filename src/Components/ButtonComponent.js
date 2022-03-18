import React from 'react'
import {Button} from '@mui/material'

const ButtonComponent = ({buttonName}) => {
  return (
    <>
      <Button variant="contained" color="primary">{buttonName}</Button>
    </>
  )
}

export default ButtonComponent
