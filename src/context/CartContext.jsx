import { createContext, useState } from "react";

export const CartContext = createContext({
        cart:[]
})

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
    const [totalQuantity, setTotalQuantity]= useState(0)
    const [total, setTotal]= useState(0)
    const [pagoExitoso, setPagoExitoso]= useState(false)


    const addItem = (item,quantity,img) =>{
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,quantity,img}])
            setTotalQuantity(totalQuantity+quantity)
            setTotal(total+(item.price*quantity))
        }else{
            console.error("El producto ya fue agregado");
        }
    }



    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter(prod=>prod.id !== itemId)
        setCart(cartUpdated)
    }

    const setPagoOrden = ()=>{
        
        return setPagoExitoso(true);
    }

    const clearCart =() =>{
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
        setPagoExitoso(false)
    }

    const isInCart=(itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart,totalQuantity,total, addItem, removeItem, clearCart,}}>
                { children }
        </CartContext.Provider>
    )
}