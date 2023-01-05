import data from '../assets/data.json'
import Product from './Product'

export default function Menu() {

  const items = data.products.map(item =>
    <Product
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price.toFixed(2)}
    />
  )

  return (
    <>
      <section className="card-columns m-3">
        {items}
      </section>
    </>
  )
}