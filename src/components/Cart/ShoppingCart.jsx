import React, { useState, useContext } from 'react';
import CartColumns from './CartColumns'; 
import EmptyCart from './EmptyCart';
import Product from '../Products/Product';
import {ProductConsumer} from '../Products/Context';




const ShoppingCart = () =>  {   
           
        return( 
            <section>
                <EmptyCart />
                <div>
                    <ProductConsumer>
                        {(value) =>{
                            return value.products.datos.map(
                                product => {
                                    return <Product key={product.id_producto} product={product}/>
                                }
                            )
                        }}
                    </ProductConsumer>
                </div>
            </section>      
        )       
}

export default ShoppingCart;