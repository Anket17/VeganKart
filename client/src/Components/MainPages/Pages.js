import React, { useContext } from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './Products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Cart from './Cart/cart'
import OrderHistory from './History/OrderHistory'
import OrderDetails from './History/OrderDetails'
import Register from './auth/Register'
import Login from './auth/login'
import NotFound from './utils/NotFound/Notfound'
import Home from './Home/Home'
import Categories from './Categories/Categories'
import CreateProducts from './CreateProducts/CreateProducts'

import {GlobalState} from '../../GlobalState'



function Pages(){
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin

    return(
      <Switch>
          <Route path = "/" exact component={Home} />
          <Route path = "/productlist" exact component={Products} />
          <Route path = "/detail/:id" exact component={DetailProduct} />
          <Route path = "/login" exact component={isLogged ? NotFound: Login} />
          <Route path = "/register" exact component={isLogged? NotFound: Register} />
          <Route path = "/category" exact component={isAdmin? Categories: NotFound} />
          <Route path = "/create_product" exact component={isAdmin? CreateProducts: NotFound} />
          <Route path = "/edit_product/:id" exact component={isAdmin? CreateProducts: NotFound} />

          <Route path = "/history" exact component={isLogged? OrderHistory :NotFound} />
          <Route path = "/history/:id" exact component={isLogged? OrderDetails :NotFound} />
          <Route path = "/cart" exact component={Cart} />
          <Route path = "*" exact component={NotFound} />

        
      </Switch>
    )
}

export default Pages