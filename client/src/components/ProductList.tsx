import { useEffect, useState } from 'react';
import '../css/ProductList.css';
import { mockedProducts, Product } from '../models/product';
import ProductCard from './ProductCard';

interface Props {
  onEdit: (product: Product) => void;
}

const ProductList = (props: Props) => {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setProducts(data)
    }).catch(err => {
      console.error(err)
      setProducts(mockedProducts)
    })
  }, []);

  return (
    <div className="App">
      <div className='ProductContainer'>
        {products.map(product => (
          <div key={product.id} className='Product'>
            <ProductCard product={product} onEdit={props.onEdit} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;