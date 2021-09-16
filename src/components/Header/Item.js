import React from 'react';
import './ItemStyle.css';

function Item({ stock, price, product }) {
    return(
        <section class="titulos--1">
            <div class="cardflexrow">
                <div class="cardflexrow--transicion">
                    <img src="/images/Remera-Mujer.jpg" width="350" alt="JuegodeTronos" title="Juego de Tronos"></img>
                    <div class="cardflexrow--titles">
                        <h2> Producto: {product}</h2>
                        <h2> Stock: {stock}</h2>
                        <h2> Precio: {price}</h2>
                    </div>
                 </div>
            </div>
        </section>
        )
}

export default Item