import { useEffect, useState } from 'react';
import '../css/ProductList.css';
import { Product } from '../models/product';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setProducts(data)
    })
  } , []);
      
  return (
    <div className="App">
      <div className='ProductContainer'>
        {products.map(product => (
            <div key={product.id} >
          <ProductCard product={product} />
            </div>
            ))}
      </div>
    </div>
  )
 }

 export default ProductList;