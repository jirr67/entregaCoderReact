import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CardItem/CardItem"
import './Cart.css'
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from "react-router-dom";
const Cart = () =>{

    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
        console.log("El carrito tiene: ", cart);
    if(totalQuantity === 0){
        return(
            <div className="carrito"> 

            <article className="CardItem">
                <header className="Header">
               No hay items en el carrito
                </header>

                <footer className="ItemFooter"><br />
             
                 <Button as={NavLink} to={`/`} variant="warning" className="Option">Ver Productos</Button>
                </footer>
            </article>
        </div>
        )
    }

    return (
        <div className="carrito"> 

            <article className="CardItem">
                <header className="Header">
                { cart.map(p => <CartItem key={p.id} {...p} />) } <br />
                </header>

                <section className="seccion">
                Total: ${total}<br /><br />
                </section>

                <footer className="ItemFooter">
                
                 <Button as={NavLink} onClick={()=> clearCart()} variant="warning" className="Option">Limpiar Carrito</Button><br />
                 <Button as={NavLink} to={`/checkout`} variant="outline-success" className="Option">Go to Checkout</Button>
                </footer>
            </article>
        </div>
    )
}

export default Cart