import { Row, Form } from 'react-bootstrap'
import { useForm } from '../../hooks'

const formData = {
  email: ''
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const EmailValid = () => {

  const { email, onInputChange } = useForm(formData)


  return (

    <Row>

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
            style={{
              borderColor: `${emailRegex.test(email) ? 'green' : 'red'}`
            }}
          />
        </Form.Group>


      </Form>

    </Row>
  )
}
