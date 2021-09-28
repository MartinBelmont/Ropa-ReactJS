import React from 'react';
import Counter from '../Counter/ItemCount';
import './ItemDetailStyle.css';

const Item = (props) => {
    return(
        <section class="titulos--2">
            <div class="cardflexrow">
                <div class="cardflexrow--transicion-2">
                    <img src={props.product.img}></img>
                    <div class="cardflexrow--titles">
                        <h2> Producto: {props.product.name}</h2>
                        <h2> <span class="texto">{props.product.detail}</span></h2>
                        <h2> Precio: {props.product.price}</h2>
                        <div id="counter"><Counter stock = {props.product.stock} initial = {1} /></div>
                    </div>
                 </div>
            </div>
        </section>
        )
}

export default Item