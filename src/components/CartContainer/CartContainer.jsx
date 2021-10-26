import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { getFirestore } from "../../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const CartContainer = () => {
    
    // CHECKOUT
    const newOrder = {
        buyer: {
            name:"Martin",
            phone: '01112345678',
            email: "martinbelizan@gmail.com"
        },
        items: [
            {
                id: 1,
                price: 800,
                name: "Remera",
            },
            {
                id: 2,
                price: 700,
                name: "Pantalon",
            }
        ],
        total: 1500,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    // Id Autogenerado
    const handleChekout = () => {
        const db = getFirestore();
        const ordersCollection = db.collection("orders");

        ordersCollection
        .doc("IDPersonalizado")
        .set(newOrder)
        .then((docRef) => console.log(docRef))
        .catch((error) =>  console.log(error));

        // endCart(product)
    };

    // Modificar Producto
    const handleUpdate = () => {
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const productRef = ordersCollection.doc("IDPersonalizado");

        productRef.update({price: 1700});
        // productRef.delete();
    };

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
                
                <div className='mt-5'>
                    <button className='btn btn-success' onClick={handleChekout}>Terminar mi compra</button>
                </div>
                <div className='mt-5'>
                    <button className='btn btn-warning' onClick={handleUpdate}>Modificar mi compra</button>
                </div>
            </div>
        )
    }

}

export default CartContainer