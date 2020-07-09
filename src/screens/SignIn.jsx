import React from 'react'
import styled from 'styled-components'
import CustomInput from '../components/CustomInput.jsx'
import CustomButton from '../components/CustomButton.jsx'
import AdminLogo from '../assets/images/admin-logo.svg'

const SignIn = () => {
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
    <>
      <Section>
        <img src={AdminLogo} alt='Admin Logo' />
        <Container>
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
        </Container>
      </Section>
    </>
  )
}

const Title = styled.h2`
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`

const Section = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  min-height: 100vh;
`

const Container = styled.section`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 60px 68px 40px;
  margin-top: 100px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default SignIn
