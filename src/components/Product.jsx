import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Product(props) {

  const [amt, setAmt] = useState(0)

  function addItem() {
    setAmt(prevAmt => prevAmt + 1)
  }
  function subtractItem() {
    setAmt(prevAmt => prevAmt - 1)
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.price}
          </Card.Text>
          <Card.Text>
            {amt}
          </Card.Text>
          <Button onClick={addItem} variant="primary">+</Button>
          <Button onClick={subtractItem} variant="primary">-</Button>
        </Card.Body>
      </Card>
    </>
  )
}

// render carrinho de compras.