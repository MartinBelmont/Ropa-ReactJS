import { createContext, useState } from "react";

// EL CONTEXTO
export const CartContext = createContext()

// CONTEXTO CREADO
export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const addItem = (product) => {

        const existItem = cart.find(x => x.id === product.id)

        if(existItem) {
            setCart(cart.map(x => x.id === existItem.id
                ? product
                : x    
            ))
        }else{
            setCart([...cart, product])
        }

    }

    const deleteItem = (product) => {
        setCart(cart.filter(x => x.id !== product.id))
    }

    const endCart = (product) => {
        setCart(cart.filter(x => null))
    }

    return <CartContext.Provider value={{cart, addItem, deleteItem, endCart}}>
        {children}
    </CartContext.Provider>

}