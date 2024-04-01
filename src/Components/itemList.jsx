import Item from "./item";

const ItemList = ({products}) => {
    return (
            <div id="ItemListDiv">
                {products.map((prod) => {
                return <Item key={prod.id} product ={prod}/>
            })}
            </div>
    )
    
}

export default ItemList;