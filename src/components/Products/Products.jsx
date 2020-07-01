import React, {Component, useContext} from 'react';
import { ProductConsumer } from './Context';
import Product from './Product';
import {
Tabs,
Tab,
Grid,
Cell,
} from 'react-mdl';







class Products extends Component {
    
    state={
        activeTab: 0, 
    };
    


    

incrementProduct = (id) => {
    console.log("This is the increment method");
}
decrementProduct = (id) => {
    console.log("This is the decrement method");
}

removeProduct = (id) => {
    console.log("This is remove method");
}

clearCart = () => {
    console.log("Cart cleared");
}

toggleCategories = () =>{
    if(this.state.activeTab === 0){
        console.log(this.state.activeTab);
        return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <div className="mb-5">
                    <h2 className="all-titles">Niños</h2>
                    <hr style={{borderTop:'3px dotted #87CEEB', width:'50%', margin:'auto'}}/>
                </div>
                <div className="row">
                    <ProductConsumer>
                        {value =>{
                            return value.products.datos.map(product =>{
                                if (product.categoria_producto == "ropa"){
                                    return <Product 
                                                key={product.id_producto} 
                                                product={product}    
                                            />
                                }
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        )
    }else if(this.state.activeTab === 1){
        console.log(this.state.activeTab);
        return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <div className="mb-5">
                    <h2 className="all-titles">Accesorios</h2>
                    <hr style={{borderTop:'3px dotted #87CEEB', width:'50%', margin:'auto'}}/>
                </div>
                <div className="row">
                    <ProductConsumer>
                        {value =>{
                            return value.products.datos.map(product =>{
                                if (product.categoria_producto == "accesorio"){
                                    return <Product 
                                                key={product.id_producto} 
                                                product={product}    
                                            />
                                }
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
            )
        }else if(this.state.activeTab === 2){
            console.log(this.state.activeTab);
            return(
                <div className="d-flex justify-content-around justify-content-center flex-wrap">
                    <div className="mb-5">
                        <h2 className="all-titles">Combos</h2>
                        <hr style={{borderTop:'3px dotted #87CEEB', width:'50%', margin:'auto'}}/>
                    </div>
                    <div className="row">
                    <ProductConsumer>
                        {value =>{
                            return value.products.datos.map(product =>{
                                if (product.categoria_producto == "combo"){
                                    return <Product 
                                                key={product.id_producto} 
                                                product={product}    
                                            />
                                }
                            })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
                )
            }
    
}
render(){
    return(
    <div className="category-tabs pt-5">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
            <Tab className="tabs p-3">
                <p>Ropa</p>
            </Tab>
            <Tab className="tabs p-3">
                <p>Accesorios</p>
            </Tab>
            <Tab className="tabs p-3">
                <p>Combos</p>
            </Tab>
        </Tabs>
        <Grid>
            <Cell col={12}>
                <div className="content">
                    {this.toggleCategories()}
                </div>
            </Cell>
        </Grid>

    </div>
    )
    }
}

export default Products;