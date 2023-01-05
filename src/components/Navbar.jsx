export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <div class="navbar-header menuitem"> {/* deletable div */}
          <a class="navbar-brand" href="#">Menu</a>
        </div>

        <div> 
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="fa fa-gift bigicon"></span>Carrinho (12)<span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-cart" role="menu">

                <li>
                  <span class="item">  {/* deletable span */}
                    <span class="item-left">
                      {/* <img src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_1.jpg" alt="" /> */}
                      <span class="item-info">
                        <span>Itemname</span>
                        <span>price: 27$</span>
                      </span>
                    </span>

                    <span class="item-right">
                        <button class="btn btn-danger  fa fa-close">x</button>
                    </span>

                  </span>
                </li>   

                <li>
                  <a class="text-center" href="#">Finalizar compra</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}