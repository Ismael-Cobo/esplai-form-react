import { useForm } from '../../hooks'

import { Row, Form } from 'react-bootstrap'


const formData = {
  user: '',
  password: '',
  password2: ''
}

const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/g

const formValidations = {
  user: [(value) => value.length >= 3, 'El email no es correcto'],
  password: [(value) => value.length >= 6, 'La contraseña ha de tener 6 carácteres.'],
}

export const PasswordValid = () => {

  const { formState, onInputChange } = useForm(formData)

  const { user, password, password2 } = formState


  return (

    <Row>

      <Form>
        <Form.Group>
          <Form.Label id='user'>
            User
          </Form.Label>
          <Form.Control
            value={user}
            name='user'
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
            type="password"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label id='password2'>
            Password2
          </Form.Label>
          <Form.Control
            value={password2}
            name='password2'
            onChange={onInputChange}
            as='input'
            type="password"
          />
        </Form.Group>
      </Form>

      {
        user.length >= 3 && regexPassword.test(password) && password === password2
          ? <p>Correcto</p>
          : ''
      }

    </Row>
  )
}


