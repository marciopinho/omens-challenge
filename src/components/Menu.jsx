import data from '../assets/data.json'
import Product from './Product'
import Card from 'react-bootstrap/Card';

export default function ProductList() {

  return (
    <>
      {data.products.map(item => 
        <Product
          name={item.name}
          price={item.price.toFixed(2)}
        />
      )}
    </>
  )
}