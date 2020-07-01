import React,{Component} from 'react';

import { Link } from 'react-router-dom';


class Product extends Component {
    render(){
        const {id_producto, nombre_producto, img, precio_producto, descripcion_producto, inCart} = this.props.product;


        return(
            <div className="col-lg-3 col-md-4 mb-4" >
                <div className="card h-100">
                    <img className="card-img-top" src={img} alt="aa"></img>
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to={`/products/${id_producto}`}>
                                <a>{nombre_producto}</a>
                            </Link>
                        </h4>
                        <h5>${precio_producto}</h5>
                        <p className="card-text">{descripcion_producto}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                    <button  
                        className="btn btn-add text-center"
                        type="button" 
                        disabled={inCart ? true : false} 
                        onClick={()=>{
                            console.log("addtocart");
                        }} 
                        >
                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                                {" "}
                                in cart
                            </p>
                        ) : (
                            <i className="fas fa-plus"></i>
                        )}    
                    </button>         
                    
                </div>
            </div>
        )
    }
}

    
export default Product;