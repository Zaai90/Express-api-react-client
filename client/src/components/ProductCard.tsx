import '../css/ProductCard.css';
import { Product } from '../models/product';

interface Props {
    product: Product;
}

function ProductCard({product}: Props) 
{
    return (
        <div className='Product'>
            <div className='ImageContainer'> 
            <img src={product.image} className='ProductImage'></img>
            </div>
            <div className='ProductInfo'>
            <h2>{product.name}</h2> 
            <p>{product.price} SEK</p>
            <p>{product.description}</p>
            </div>
            <div className='editBtn'>
            <button onClick={()=>{console.log(product.name)}}>Edit</button>
            </div>
          </div> 
          )
}


export default ProductCard;