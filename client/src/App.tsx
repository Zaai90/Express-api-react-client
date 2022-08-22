import { useEffect, useState } from 'react';
import './css/App.css';
import { Product } from './models/product';

function App() {
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
          <div key={product.id} className='Product'>
            <div className='ImageContainer'> 
            <img src={product.image} className='ProductImage'></img>
            </div>
            <div className='ProductInfo'>
            <h2>{product.name}</h2> 
            <p>{product.price} SEK</p>
            <p>{product.description}</p>
            </div>
          </div>
            ))}
      </div>
    </div>
  )
 }

 export default App;