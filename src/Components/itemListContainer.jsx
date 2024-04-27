import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../fireBase/config";


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])

    const { category } = useParams()

    useEffect(() => {
            const referenciaProductos = collection(dataBase, "itemCollection")
            const q = category === undefined ? referenciaProductos : query(referenciaProductos, where("category", "==", category))  
        getDocs(q)
            .then(resp => {
                setProducts(resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }))                
            })
            .catch(error => {
                console.log("Error al obtener los productos:", error);
            });
        
    }, [category])

    return (
        <>
            <ItemList products = {products}/>
            
        </>
            
    )
}

export default ItemListContainer;