import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const {cart, deleteItem, endCart} = useContext(CartContext)

    if (cart.length === 0) {
        return(
            <div>
                <div className='mt-4 d-flex justify-content-center'>
                    <h2>No hay productos en la compra</h2>
                </div>
                <div className='mt-3'>    
                <Link to='/'>
                    <button className='btn btn-success'>Buscar Productos</button>
                </Link>
                </div>
            </div>
        )
    } else{
        return (
            <div>
                <section class="home-section">
                    <div class="home-content">
                        <i class="fas fa-bars"></i>
                        <span class="text">Tu Compra</span>
                    </div>
                </section>
                {
                    cart.map((product) =>
                        <div key={product.id} className='mt-4 d-flex justify-content-around text-capitalize'>
                            <span>{product.name}</span>
                            <span>{product.quantity}</span>
                            <span>$ {product.quantity * product.price}</span>
                            <button className='btn btn-danger' onClick={() => deleteItem(product)}>Eliminar</button>
                        </div>
                    )
                }
                <h2 class="mt-3">Total: $ {cart.reduce((a,i) => a  + i.price * i.quantity, 0)}</h2>
                {
                    cart.map((product) => 
                        <div className='mt-5'>
                            <button className='btn btn-success' onClick={() => endCart(product)}>Terminar mi compra</button>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default CartContainer