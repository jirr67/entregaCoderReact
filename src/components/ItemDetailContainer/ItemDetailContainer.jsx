import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../firebase/db";
import './ItemDetailContainer.css'



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams()


    useEffect(() =>{

        const getAndSetItem = async() =>{
            const item = await getItem(itemId)
            setProduct(item)
            setLoading(false)
        }
        getAndSetItem()
    },[itemId])

    return(
        <div className="ItemDetailContainer">
            {loading? (<h2>Loading...</h2>) : ( <ItemDetail {...product} />)}
        </div>
    )


}

export default ItemDetailContainer;