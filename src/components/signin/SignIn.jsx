import React from 'react'
import styled from 'styled-components'
import CustomInput from '../CustomInput.jsx'
import CustomButton from '../CustomButton.jsx'
import AdminLogo from '../assets/images/admin-logo.png'
import { MediumAndUp, MediumAndDown } from '../../utils/breakpoints.jsx'

const SignIn = () => {
  return (
    <Section>
      <MediumAndDown>
        <SuperFormContainer noBoxShadow />
      </MediumAndDown>
      <MediumAndUp>
        <SuperFormContainer />
      </MediumAndUp>
    </Section>
  )
}

const SuperFormContainer = ({ noBoxShadow }) => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const clearState = () => {
  //   setUsername('')
  //   setPassword('')
  // }

  const _handleInputChange = (event) => {
    const { name, value } = event.target
    console.log('name: ', name, '- value: ', value)
    // if (name === 'username') {
    //   setUsername(value.toLowerCase())
    //   setEmail(value)
    // } else if (name === 'password') {
    //   setPassword(value)
    // }
  }

  const _handleSubmit = (event) => {
    event.preventDefault()

    // signInUser().then(async ({ data: { signInUser } }) => {
    //   localStorage.setItem('token', signInUser.token)
    //   await refetch()
    //   clearState()
    //   history.push('/')
    // })
  }
  return (
    <Container>
      <Image src={AdminLogo} alt='Admin Logo' />
      <FormContainer noBoxShadow={noBoxShadow}>
        <Title>Iniciar Sesión</Title>
        <Form onSubmit={(event) => _handleSubmit(event)}>
          <CustomInput
            name={'username'}
            type={'text'}
            placeholder={'Email o Usuario'}
            onChange={_handleInputChange}
          />
          <CustomInput
            name={'password'}
            type={'password'}
            placeholder={'Contraseña'}
            onChange={_handleInputChange}
          />
          <CustomButton />
        </Form>
      </FormContainer>
    </Container>
  )
}

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`

const Image = styled.img`
  width: 300px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Section = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.section`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const FormContainer = styled.section`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.noBoxShadow ? 'none' : '0px 0px 15px 2px rgba(0, 0, 0, 0.3)'};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default SignIn
