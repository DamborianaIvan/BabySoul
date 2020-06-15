import React, {Component} from 'react';
import {
Tabs,
Tab,
Grid,
Cell,
} from 'react-mdl';

import Product from './Product';
import productos from './Productos.json';





class Products extends Component {
    constructor(...props){
    super(...props);
    this.state={
    activeTab: 0 };
        }
    
  

   showProductsDetail(idProducto){

    }

toggleCategories(){
    if(this.state.activeTab === 0){
        console.log(this.state.activeTab);
        return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <h2 className="all-titles">Niños</h2>
                <div className="row">
                    {productos.datos.map (producto => {
                    if (producto.categoria_producto == 'ropa') {
                            return(
                                <Product 
                                        key={producto.id_producto}
                                        
                                        idProducto={producto.id_producto} 
                                        nombreProducto={producto.nombre_producto}
                                        descripcionProducto={producto.descripcion_producto}
                                        precioProducto={producto.precio_producto}
                                        
                                        // showed={() => props.ingredientsAdded(ctrl.type)}
                                        // removed={() => props.ingredientsRemoved(ctrl.type)}
                                        // disabled={props.disabled[ctrl.type]}
                                />
                            ) 
                        }
                    }                              
                    )}
                </div>
            </div>
        )
    }else if(this.state.activeTab === 1){
        console.log(this.state.activeTab);
        return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <h2 className="all-titles">Accesorios</h2>
                <div className="row">
                    {productos.datos.map (producto => {
                        if (producto.categoria_producto == 'accesorio') {
                            
                            return(
                                <Product 
                                    key={producto.id_producto}
                                            
                                    idProducto={producto.id_producto} 
                                    nombreProducto={producto.nombre_producto}
                                    descripcionProducto={producto.descripcion_producto}
                                    precioProducto={producto.precio_producto}
                                    // added={() => props.ingredientsAdded(ctrl.type)}
                                    // removed={() => props.ingredientsRemoved(ctrl.type)}
                                    // disabled={props.disabled[ctrl.type]}
                                />
                            )                       
                        }
                    }
                    )}
                </div>
            </div>
            )
        }else if(this.state.activeTab === 2){
            console.log(this.state.activeTab);
            return(
                <div className="d-flex justify-content-around justify-content-center flex-wrap">
                    <h2 className="all-titles">Combos</h2>
                    <div className="row">
                        {productos.datos.map (producto => {
                            if (producto.categoria_producto == 'combo') {
                                
                                return(
                                    <Product 
                                        key={producto.id_producto}
                                                
                                        idProducto={producto.id_producto} 
                                        nombreProducto={producto.nombre_producto}
                                        descripcionProducto={producto.descripcion_producto}
                                        precioProducto={producto.precio_producto}
                                        // added={() => props.ingredientsAdded(ctrl.type)}
                                        // removed={() => props.ingredientsRemoved(ctrl.type)}
                                        // disabled={props.disabled[ctrl.type]}
                                    />
                                )                       
                            }
                        }
                        )}
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