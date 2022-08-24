import { Button } from 'react-bootstrap';
import '../css/ProductCard.css';
import { Product } from '../models/product';

interface Props {
    product: Product;
    onEdit: (product: Product) => void;
}

const ProductCard = ({ product, onEdit }: Props) => {
    return (
        <>
            <div className='ImageContainer'>
                <img src={product.image} className='ProductImage'></img>
            </div>
            <div className='ProductInfo'>
                <h2>{product.name}</h2>
                <p>{product.price} SEK</p>
                <p>{product.description}</p>
            </div>
            <Button className='editBtn' onClick={() => onEdit(product)}>Edit</Button>
        </>
    )
}


export default ProductCard;