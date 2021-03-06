import React from 'react';
import { Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

 
import productos from './Productos.json';

const ProductDetail = (props) => {


    //El useParams es un hooks q sirve para obtener los parametros de la url
    
    const {idProducto} = useParams();
    let productoActual;
    productos.datos.map(producto => {
        if (producto.id_producto == idProducto)
            productoActual = producto;
    });

    let otrosProductos = [];

    
   return ( 
            <div className="container">

                <div className="row">

                    <div className="col-lg-3">
                        <h1 className="my-4"></h1>
                        <div className="list-group">
                        <a href="/products" className="list-group-item active">Volver a productos</a>
                        </div>
                    </div>
                    

                    <div className="col-lg-9">

                        <div className="card mt-4">
                        <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt=""></img>
                        <div className="card-body">
                            <h3 className="card-title">{productoActual.nombre_producto}</h3>
                            <h4>${productoActual.precio_producto}</h4>
                            <p className="card-text">{productoActual.descripcion_producto}</p>
                            <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                            4.0 stars
                        </div>
                        </div>
                        

                        <div className="card card-outline-secondary my-4">
                            <div className="card-header">
                            Otros productos
                            </div>
                        <div className="card-body">
                           <Container>
                           <div class="row text-center text-lg-left">
                             {productos.datos.map(producto => {
                                if(producto.categoria_producto == productoActual.categoria_producto){
                                    otrosProductos.push(producto);

                                    // console.log(otrosProductos);
                                    return (   
                                    <div className="col-lg-3 col-md-4 col-6">
                                        <a className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt=""></img>
                                        </a>
                                    </div>)
                                }

                             })}
                            </div>
                           </Container>
                        </div>
                    </div>
                        

                </div>
                

            </div>
        </div>
    )
} ;

export default ProductDetail;