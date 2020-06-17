import React from 'react';

import { Link } from 'react-router-dom';


const product = (props) =>(
            <div className="col-lg-3 col-md-4 mb-4" >
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/700x400" alt=""></img>
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to={`/products/${props.idProducto}`}>
                                <a>{props.nombreProducto}</a>
                            </Link>
                        </h4>
                        <h5>${props.precioProducto}</h5>
                        <p className="card-text">{props.descripcionProducto}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    <button  onClick={props.clicked} type="button" class="btn btn-add text-center"><i class="fas fa-plus"></i> Añadir al carro</button>                   
                </div>
            </div>
        )
    
export default product;