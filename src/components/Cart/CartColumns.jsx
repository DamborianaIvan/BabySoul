import React from 'react';

const CartColumns = (props) => {
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Productos</p>
                    <p>{props.cantProduct}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Nombre del producto</p>
                    <p>{props.nameProduct}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Precio</p>
                    <p>{props.priceProduct}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Cantidad</p>
                    <p>{props.cantProduct}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                    <p>{props.remove}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Total</p>
                    <p>{props.totaPrice}</p>
                </div>
            </div>
        </div>
    )
}


export default CartColumns;