import React, { useContext, useState } from 'react';
import Counter from '../Counter/ItemCount';
import './ItemDetailStyle.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Item = ({product}) => {

    const [toBuy, setToBuy] = useState(false)

    const {addItem, cart} = useContext(CartContext)

    const onAdd = (quantity) => {
        setToBuy(true)
        addItem({...product, quantity: quantity})
    }
    console.log(cart)
    
    if(!product.id) {

        return (
            <div> Cargando ... </div>
        )

    }else{

        return(
            <section class="titulos--2">
                <div class="cardflexrow">
                    <div class="cardflexrow--transicion-2">
                        <img src={product?.img}></img>
                        <div class="cardflexrow--titles">
                            <h2> Producto: {product?.name}</h2>
                            <h2> <span class="texto">{product?.detail}</span></h2>
                            <h2> Precio: $ {product?.price}</h2>
                            {   
                                !toBuy ?

                                <Counter stock = {product?.stock} initial = {1} onAdd={onAdd}/> :

                                <Link to='/cart'>
                                    <button type="button" class="btn btn-outline-secondary mb-3">Continuar</button>
                                </Link>

                            }
                        </div>
                    </div>
                </div>
            </section>
            )

    }
}

export default Item