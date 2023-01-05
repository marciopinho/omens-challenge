import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function Product(props) {

  const [amt, setAmt] = useState(0)

  function addItem() {
    setAmt(prevAmt => prevAmt + 1)
    props.updateTotalPlus(props.price, amt)
  }

  function subtractItem() {
    setAmt(prevAmt => prevAmt - 1)
    props.updateTotalMinus(props.price, amt)
  }

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{props.name}</Card.Title>
              <Card.Title>$ {props.price}</Card.Title>
            </div>
            <div className="d-flex justify-content-center" style={{ border: '1px solid #ccc', width: '80px', marginInline: 'auto', marginBottom: '0.5em' }}>
              <Card.Title className="my-2">{amt}</Card.Title>
            </div>
            <div className="text-center">
              <Button onClick={addItem} size="md" variant="dark mx-1" className="rounded-0 btn-square"> + </Button>
              <Button onClick={subtractItem} size="md" variant="secondary mx-1" className="rounded-0 btn-square">–</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>

    </Row>


  )
}

// render carrinho de compras.