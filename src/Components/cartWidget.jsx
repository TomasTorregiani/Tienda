import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)


    return (
        <>
        <CiShoppingCart /> - {cantidadEnCarrito()}
        </> 
    )
}

export default CartWidget;