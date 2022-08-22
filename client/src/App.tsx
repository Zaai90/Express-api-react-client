import { useEffect, useState } from 'react';
import './App.css';
import { Product } from './models/product';

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setProducts(data)
    }).catch(err => console.log(err))
  } , []);
      
  return (
    <div className="App">
      <div className='ProductContainer'>
        {products.map(product => (
          <div key={product.id} className='Product'>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
            ))}
      </div>
    </div>
  )
 }

 export default App;


 //<div>
//  <a href="https://vitejs.dev" target="_blank">
//  <img src="/vite.svg" className="logo" alt="Vite logo" />
// </a>
// <a href="https://reactjs.org" target="_blank">
//  <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
// <button onClick={() => setCount((count) => count + 1)}>
//  count is {count}
// </button>
// <p>
//  Edit <code>src/App.tsx</code> and save to test HMR
// </p>
// </div>
// <p className="read-the-docs">
// Click on the Vite and React logos to learn more
// </p>
