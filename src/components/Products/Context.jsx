import React, { Component } from 'react'
import productos from './Productos.json';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products:productos
    }
    addToCart = () => {
        console.log('hello from add cart');
    }
    render() {
        return (
            <ProductContext.Provider 
            value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
