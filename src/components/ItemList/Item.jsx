import React from 'react';
import Counter from '../Counter/ItemCount';
import './ItemStyle.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
        <section class="titulos--1">
            <div class="cardflexrow">
                <div class="cardflexrow--transicion">
                    {/* <NavLink to={'/item/:id'}><img src={props.product.img}></img></NavLink> */}
                    <Link to={`/item/${props.productId}`}><img src={props.product.img}></img></Link>
                    <div class="cardflexrow--titles">
                        <h2> Producto: {props.product.name}</h2>
                        <h2> Stock: {props.product.stock}</h2>
                        <h2> Precio: {props.product.price}</h2>
                    </div>
                 </div>
            </div>
        </section>
        )
}

export default Item