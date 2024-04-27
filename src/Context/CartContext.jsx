import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Toastify from 'toastify-js'
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial)

        const handleAgregar = (item, cantidad) => {
            Toastify({
                text: "Producto Agregado",
                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
                }).showToast();
                
                
        const itemAgregado = {...item, cantidad}
        
        const nuevoCarrito = [...carrito]
        const idItemsCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
        if(idItemsCarrito){
            idItemsCarrito.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
        
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        carrito.length > 0 ?
        Swal.fire({
        title: "Estás seguro?",
        text: "Una vez eliminado no podrás volver atrás!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar elementos!"
        }).then((result) => {
        if (result.isConfirmed) {
            setCarrito([])
            Swal.fire({
            title: "Borrado!",
            text: "Tu carrito ha sido vaciado",
            icon: "success"
            });
        }
        })
        : Swal.fire({
        title: "El carrito esta vacio",
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
        });
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={
            {carrito, 
            handleAgregar, 
            cantidadEnCarrito, 
            precioTotal, 
            vaciarCarrito}
            }>
            {children}
        </CartContext.Provider>
    )
}