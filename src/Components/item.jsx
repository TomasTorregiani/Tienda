import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <Card id='cardItem' >
    <Card.Img className='cardImg' variant="top" src={product.pictureUrl} />
    <Card.Body>
        <Card.Title style={product.title.toLowerCase().includes("marrón") ? {color:"brown"} : product.title.toLowerCase().includes("amarilla") ? {color: "yellow"} : product.title.toLowerCase().includes("roja") ? {color:"red"} : {}}>{product.title}</Card.Title>
        <Card.Text>
            {product.category}
        </Card.Text>
        <Card.Text>$ {product.price}
        </Card.Text>
        <Link to={`/item/${product.id}`}><Button className='list' variant="primary">Ver mas</Button></Link>
    </Card.Body>
    </Card>
    )
}

export default Item;





