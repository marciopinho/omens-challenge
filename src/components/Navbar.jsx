import { propTypes } from "react-bootstrap/esm/Image";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header menuitem"> {/* deletable div */}
          <span className="navbar-brand" href="#">Seu pedido</span>
        </div>
        <div> 
            <span className="navbar-brand" href="#">${props.total.toFixed(2)}</span>
        </div>
      </div>
    </nav>
  )
}