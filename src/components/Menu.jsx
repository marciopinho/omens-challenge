import data from '../assets/data.json'
import Navbar from './Navbar'
import Product from './Product'
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';

export default function Menu() {

  // state variable que será acessível a <Navbar /> 
  const [total, setTotal] = useState(0)

  const updateTotalPlus = (price, amt) => {
    setTotal(prevTotal => prevTotal += price)
  }
  const updateTotalMinus = (price, amt) => {
    setTotal(prevTotal => prevTotal -= price)
  }

  const items = data.products.map(item =>
    <Product
      key={item.id}
      image={item.image}
      name={item.name}
      // funções passadas como props para <Product />, para que `total` seja atualizada com base no state do child component.
      updateTotalPlus={updateTotalPlus}
      updateTotalMinus={updateTotalMinus}
      price={item.price}
    />
  )

  return (
    <>
      <Navbar total={total} />
      <CardGroup>
        {items}
      </CardGroup>
    </>
  )
}