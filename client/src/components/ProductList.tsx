import '../css/ProductList.css';
import { Product } from '../models/product';
import { Mode } from './App';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  onEdit: (mode: Mode, product?: Product) => void;
}

const ProductList = ({ products, onEdit }: Props) => {
  return (
    <div className="App">
      <div className='ProductContainer'>
        {products.map(product => (
          <div key={product.id} className='Product'>
            <ProductCard product={product} onEdit={onEdit} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;