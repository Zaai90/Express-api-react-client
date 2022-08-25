import { Button } from 'react-bootstrap';
import '../css/ProductCard.css';
import { Product } from '../models/product';
import { Mode } from './App';

interface Props {
    product: Product;
    onEdit: (mode: Mode, product: Product) => void;
}

const ProductCard = ({ product, onEdit }: Props) => {
    return (
        <>
            <div className='ImageContainer'>
                <img src={product.imageurl} className='ProductImage'></img>
            </div>
            <div className='ProductInfo'>
                <h2>{product.name}</h2>
                <p>{product.price} SEK</p>
                <p>{product.description}</p>
            </div>
            <Button className='editBtn' onClick={() => onEdit(Mode.Edit, product)}>Edit</Button>
        </>
    )
}


export default ProductCard;