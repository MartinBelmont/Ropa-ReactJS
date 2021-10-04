import { createContext, useState } from "react";

// EL CONTEXTO
export const CartContext = createContext()

// CONTEXTO CREADO
export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const addItem = (product) => {
        setCart(product)
    }

    

    return <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>

}