export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">Seu pedido</span>
        <span className="navbar-brand" href="#">${props.total.toFixed(2)}</span>
      </div>
    </nav>
  )
}