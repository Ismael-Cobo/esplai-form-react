import { useState } from "react"

import { Row, Form, ListGroup } from "react-bootstrap"


export const AutoComplete = ({ ciutats }) => {

  const municipis = ciutats.map(ciutat => ciutat.municipi)

  const [value, setValue] = useState('')

  return (
    <Row>

      <Form
        onSubmit={(e) => e.preventDefault()}
        className="mb-2"
      >
        <Form.Group>
          <Form.Control
            as='input'
            id="input"
            type="text"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </Form.Group>
      </Form>

      <ListGroup as="ul" style={{ paddingLeft: '0.75rem' }}>

        {
          value
            ?
            municipis
              .filter(municipi => municipi.toLowerCase().startsWith(value.toLowerCase()))
              .map(municipi => (
                <ListGroup.Item as='li' key={municipi}>{municipi}</ListGroup.Item>
              ))
            : ''
        }
      </ListGroup>

    </Row>
  )
}
