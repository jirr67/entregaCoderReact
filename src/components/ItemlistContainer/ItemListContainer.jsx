import { useEffect,useState } from "react";
import {getProducts, getProductsByCategory} from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItems,getItemFromCategory } from "../../firebase/db";
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()


    useEffect(() => {
      
      const getAndSetItems = async()=>{
          const products = await getItemFromCategory(categoryId)
          setProducts(products)
          setLoading(false)
      }

      getAndSetItems()

    },[categoryId])


    return(

      <div className="ItemListContainer">
      {loading? (<h2>Loading...</h2>) : ( <ItemList products={products}  />)}
      </div>
    );
}

export default ItemListContainer
