import React, {Component} from 'react';
import {
Tabs,
Tab,
Grid,
Cell,
 } from 'react-mdl';

import Product from './Product';

class Products extends Component {
    constructor(...props){
    super(...props);
        this.state={
            activeTab: 0,
            "data" : [
                {   
                    tipo: "campera",
                    nombre: "Camperita Niño",
                    descripcion: "campera de diego"
                },
                {
                    tipo: "campera",
                    nombre: "Camperita Niño",
                    descripcion: "campera de diego"
                }
            
            ]     
        };
    }
    // mostrarProductos(){
    //     for (let i=0; i <=productos.data.length; i++){
    //         console.log("skerry");
    //         return (

    //               
    //         )
    //     }
    // }

    toggleCategories(){
        if(this.state.activeTab === 0){
            console.log(this.state.activeTab);
            return(
            <div className="bg-color d-flex justify-content-around justify-content-center flex-wrap">
                {/* Product1 */}
                <Product 
                    nombreDePersona="Manuel" 
                    productName="Remerita" 
                    productDescription="remerita gris" 
                /> 
            </div>
            )
        }else if(this.state.activeTab === 1){
            console.log(this.state.activeTab);
            return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
            </div>
            )
        }else if(this.state.activeTab === 2){
            console.log(this.state.activeTab);
            return(
            <div className="d-flex justify-content-around justify-content-center flex-wrap">
                <Product 
                    productName="Pulsera"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />
                <Product 
                    productName="Camperita Niña"
                    productDescription="gvnshit"
                />

            </div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs pt-5">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({ activeTab: tabId })} ripple>
                    <Tab className="tabs p-3">
                        <p>Niños</p>
                    </Tab>
                    <Tab className="tabs p-3">
                        <p>Niñas</p>
                    </Tab>
                    <Tab className="tabs p-3">
                        <p>Accesorios</p>
                    </Tab>
                </Tabs>
                <Grid >
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