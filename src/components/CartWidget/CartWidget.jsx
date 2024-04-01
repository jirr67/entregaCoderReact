import cart from './assets/cart.svg'
const imageWidth=50;
const imageHeight=50;
const CartWidget = () =>{

    return (
        <div>
                <img src={cart} width={imageWidth} height={imageHeight}  alt="cart-widget" />
                0
        </div>
        
    );
}


export default CartWidget