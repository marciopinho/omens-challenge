import data from '../assets/data.json'
import Navbar from './Navbar'
import Product from './Product'
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';

export default function Menu() {
  const [total, setTotal] = useState(0)

  const updateTotalPlus = (price, amt) => {
    console.log(price)
    setTotal(prevTotal => prevTotal += price)
  }
  const updateTotalMinus = (price, amt) => {
    console.log(price)
    setTotal(prevTotal => prevTotal -= price)
  }

  const items = data.products.map(item =>
    <Product
      key={item.id}
      image={item.image}
      name={item.name}
      updateTotalPlus={updateTotalPlus}
      updateTotalMinus={updateTotalMinus}
      // price={item.price.toFixed(2)} //*** maybe toFixed will cause it to bug
      price={item.price} //*** maybe toFixed will cause it to bug
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