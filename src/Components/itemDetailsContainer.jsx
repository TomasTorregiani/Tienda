import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import data from "../data/productos.json"

const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
                
            }, 2000)  
        })
        promise.then((data) => { 
            const dataFiltrada = data.find((prod) => prod.id === Number(id))
            setItem(dataFiltrada)
            console.log("dataFiltrada", dataFiltrada);
    })}, [id])

    if (!item) return null

    return (
        <>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <p>${item.price}</p>
        </>
    )
}

export default ItemDetailsContainer