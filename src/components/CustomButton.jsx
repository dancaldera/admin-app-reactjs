import Button from '@material-ui/core/Button'
import React from 'react'
import { styled } from '@material-ui/core/styles'

const CustomButton = () => {
  return <LogButton type='submit'>Entrar</LogButton>
}

const LogButton = styled(Button)({
  background: 'linear-gradient(45deg, #00b4b4 30%, #00b4b4 90%)',
  textDecorationColor: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  width: 230,
  padding: '0 30px',
  margin: '10px 0px',
  boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
  textTransform: 'capitalize',
})

export default CustomButton
