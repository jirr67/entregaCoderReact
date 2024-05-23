import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';

const ItemDetail = ({id, name, img, category, description, price, stock}) =>{

            const [quantityAdded,setQuantityAdded] = useState(0);

            const {addItem} = useContext(CartContext)


            const handleOnAdd = (quantity) =>{
                setQuantityAdded(quantity);
                const item ={
                    id,name,price
                }
                addItem(item,quantity,img)
            }


            return (
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>

                </header>
                <picture>
                    <img  src={img} alt={name} className="ItemImg" />
                </picture>
                <section>
                    <p className="Info">
                        Categoría: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: {price}
                    </p>
                </section>

                <footer className="ItemFooter">
                
                {
                    quantityAdded > 0? (
                             <Button as={NavLink} to={`/cart`} variant="success" className="Option">Terminar Compra</Button>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }


               
                </footer>
            </article>


            )


}

export default ItemDetail