import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { FaTrashAlt } from "react-icons/fa"
import { GiConfirmed } from "react-icons/gi";
import Swal from 'sweetalert2';

const initialValues = {
    name: "",
    phone: "",
    email:""
}

const CartWidgetDetail = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext) 

    const [buyer, setBuyer] = useState(initialValues)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setBuyer((prev) => {
            return {...prev, [name]: value}
        })
    }
    const handleOrder = () => {
        const order = {
            buyer : buyer,
            items: carrito
        }
        if (buyer.name === "" || buyer.phone === "" || buyer.email === ""){
            Swal.fire("Completa el formulario!");
        } else{ 
            const db = getFirestore()
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(({id}) => {
        if (id) {
            Swal.fire(`Su orden: ${id} ha sido completada`);
            
        }
    } )
    }
        }
        
    return (
        <div>
            <h1 style={{marginTop: 15, textAlign:"center"}}>CARRO DE COMPRAS</h1> 
            <div style={{display: "flex", flexWrap:"wrap"}}>
            {carrito.map(prod => ( 
                    <div style={{border: "1px solid black", width:"30%", textAlign:"center", margin: 5, boxShadow: "5px 5px 5px lightblue", borderRadius: 5}} key={prod.id}>
                        <h1>
                            {prod.title}
                        </h1>
                        <p>
                            Precio unitario: ${prod.price}
                        </p>
                        <p>
                            Precio total: ${prod.price * prod.cantidad}
                        </p>
                        <p>
                            Cantidad: {prod.cantidad}
                        </p>
                        
                    </div>   
                )
            )}
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                {
                    carrito.length > 0 && <h2 style={{margin:10,border: "3px solid lightblue", backgroundColor:"lightblue", width:"50%"}}>Total Carrito: ${precioTotal()}</h2> 
                }
                
            </div>
            <div >
                <button style={{border: "2px solid black", backgroundColor: "red", margin:50}} onClick={vaciarCarrito}>
                    <FaTrashAlt />
                    VACIAR CARRITO
                </button>
            </div>
                
            {carrito.length > 0 && (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <form  style={{display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start", width:"40%", fontSize:"25px", border:"5px solid lightblue", boxShadow: "5px 5px 5px lightblue", borderRadius: 5  }}> FORMULARIO DE COMPRA
        <div >
            <label>
                Nombre
            </label>
            <input style={{border: "2px solid black"}} type="text" value={buyer.name} name="name" onChange={handleChange}/>
        </div>
        <div>
            <label>
                Celular
            </label>
            <input style={{border: "2px solid black"}} type="number" value={buyer.phone} name="phone" onChange={handleChange}/>
        </div>
        <div>
            <label>
                Email
            </label>
            <input style={{border: "2px solid black"}} type="email" value={buyer.email} name="email" onChange={handleChange}/>
        </div>
        <button type="button" onClick={handleOrder}>COMPRAR <GiConfirmed /></button>
    </form>
    </div>
)}
    </div>
        
    )
}

export default CartWidgetDetail;