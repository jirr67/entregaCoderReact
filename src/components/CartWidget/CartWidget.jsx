import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cart from './assets/cart.svg'
import { useContext } from 'react';
const imageWidth=50;
const imageHeight=50;
const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)

    return (
            <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block':'none'}}>
                 <img src={cart} width={imageWidth} height={imageHeight}  alt="cart-widget" />
                 {totalQuantity}
            </Link>
    );
}


export default CartWidget