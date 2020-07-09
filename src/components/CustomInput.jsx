import React from 'react'
import styled from 'styled-components'

const CustomInput = ({ name, type, title, placeholder, value, onChange }) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: inline-block;
`

const InputTitle = styled.p`
  color: black;
  margin-left: -120px;
`

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  height: 50px;
  margin-top: -15px;
  margin-bottom: 20px;
  outline: none;
  padding: 0px 20px;
`

export default CustomInput
