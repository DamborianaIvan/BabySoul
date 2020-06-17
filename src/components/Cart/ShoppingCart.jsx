import React, { Component } from 'react';
import CartColumns from './CartColumns'; 
import EmptyCart from './EmptyCart';
import Products from '../Products/Products';


class ShoppingCart extends Component {

    
    render(){
        return(
            <section>
                <EmptyCart />
            </section>
        )
    }
       
}

export default ShoppingCart;