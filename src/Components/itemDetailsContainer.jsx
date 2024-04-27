import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { doc, getDoc } from "firebase/firestore"
import { dataBase } from "../fireBase/config"
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { BiSolidCartAdd } from "react-icons/bi";


const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null)

    const [cantidad, setCantidad] = useState(0)

    const { handleAgregar} = useContext(CartContext)

    const { id } = useParams()

    useEffect(() => {

        const docRef = doc(dataBase, "itemCollection", id)
        getDoc(docRef).then((resp) => {
            setItem({...resp.data(), id: resp.id})
        })
        console.log(item);
            
    }, [id])

    if (!item) return null

    const handleSumar = () => {
        return setCantidad(cantidad +1 )
    }

    const handleRestar = () => {
        return setCantidad(cantidad -1)
    }

    const handleCantidadCambio = (event) => {
        return setCantidad(parseInt(event.target.value));
    }

    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div style={{border:"2px solid lightblue", margin: 10, width: "33%", textAlign:"center", boxShadow: "5px 5px 5px lightblue", borderRadius: 5}}>
                <h1 >{item.title}</h1>
                <h2>{item.description}</h2>
                <p>${item.price}</p>
                <button onClick={handleRestar}><FaMinusCircle /></button>
                <input style={{fontSize: 20, textAlign:"center"}} type="text" value={cantidad} onChange={handleCantidadCambio} />
                <button onClick={handleSumar}><FaPlusCircle /></button>
                <div>
                    <hr />
                    <button style={{backgroundColor:"lightblue"}} onClick={() => handleAgregar(item, cantidad)}>Agregar al carrito <BiSolidCartAdd /></button>
            </div>
            </div>
            <div>
                <img style={{width:"115%", border:"2px solid lightblue", boxShadow: "5px 5px 5px lightblue", borderRadius: 5}} src={item.pictureUrl} alt="" />
            </div>
        </div>
        
    )
}

export default ItemDetailsContainer