import React from 'react';
import Counter from '../Counter/ItemCount';
import './ItemStyle.css';

const Item = (props) => {
    return(
        <section class="titulos--1">
            <div class="cardflexrow">
                <div class="cardflexrow--transicion">
                    <img src={props.product.img}></img>
                    <div class="cardflexrow--titles">
                        <h2> Producto: {props.product.name}</h2>
                        <h2> Stock: {props.product.stock}</h2>
                        <h2> Precio: {props.product.price}</h2>
                        <div id="counter"><Counter stock = {props.product.stock} initial = {1} /></div>
                    </div>
                 </div>
            </div>
        </section>
        )
}

export default Item