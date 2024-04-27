import Item from "./item";

const ItemList = ({products}) => {
    return (
            <div  id="ItemListDiv">
                {products.map((prod) => {
                return <div key={prod.id} style={{border: "1px solid black", textAlign:"center", margin: 5, boxShadow: "5px 5px 5px lightblue", borderRadius: 5}}>
                            <Item product ={prod}/>
                        </div>
            })}
            </div>
    )
    
}

export default ItemList;