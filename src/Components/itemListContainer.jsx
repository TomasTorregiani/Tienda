import { useEffect, useState } from "react"
import data from '../data/productos.json'
import ItemList from "./itemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])

    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
                
            }, 2000)  
        })
        promise.then((data) => { 
            if (id) {
                const productosFiltrados = data.filter((prod) => prod.category === id)
                setProducts(productosFiltrados)
            } else {
                setProducts(data)
            }
    })}, [id])

    return (
            <ItemList products = {products}/>
    )
}

export default ItemListContainer