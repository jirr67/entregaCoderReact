import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ListGroup from 'react-bootstrap/ListGroup';
const CartItem = ({id,name,img,price,quantity}) =>{

    const imageWidth=80;
    const imageHeight=80;
 
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    return (
        
        <div>
            <ListGroup>
            <ListGroup.Item>   {name}  x{quantity}<br /> $({price})   &nbsp;  <img src={img} width={imageWidth} height={imageHeight}  alt="cart-widget" /> </ListGroup.Item>
            </ListGroup>
        </div>
    )


}

export default CartItem