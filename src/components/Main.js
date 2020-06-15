import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LandingPage from './Landingpage';
import Products from './Products';
import Contact from './Contact';
import ProductsDetail from './ProductDetail';

const Main = () => (
    <Switch>
        <Route path="/products/:idProducto">
            <ProductsDetail />
        </Route>


        <Route exact path="/" component={LandingPage}/>
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;