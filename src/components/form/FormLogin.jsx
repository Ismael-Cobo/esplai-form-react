import { Row, Form } from 'react-bootstrap'
import { useForm } from '../../hooks'

const formData = {
  email: '',
  password: ''
}

export const FormLogin = ({ emailToValidate, passwordToValidate }) => {

  const { formState, onInputChange } = useForm(formData)

  const { email, password } = formState

  return (

    <Row>
      <div>
        <p>Email: {emailToValidate}</p>
        <p>Password: {passwordToValidate}</p>
      </div>
      <Form>
        <Form.Group>
          <Form.Label id='email'>
            Email
          </Form.Label>
          <Form.Control
            value={email}
            name='email'
            onChange={onInputChange}
            as='input'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label id='password'>
            Password
          </Form.Label>
          <Form.Control
            value={password}
            name='password'
            onChange={onInputChange}
            as='input'
          />
        </Form.Group>
      </Form>

      {
        email === emailToValidate && password === passwordToValidate
          ? <p> Adelante </p>
          : <p>Stop</p>
      }

    </Row>
  )
}


