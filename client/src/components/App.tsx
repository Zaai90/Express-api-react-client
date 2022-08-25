import { useEffect, useState } from 'react';
import '../css/App.css';
import { mockedProducts, Product } from '../models/product';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductModal from './ProductModal';

export enum Mode {
  Add = "Add",
  Edit = "Edit"
}

const App = () => {

  const [products, setProducts] = useState([] as Product[])
  const [selectedProduct, setSelectedProduct] = useState(undefined as Product | undefined);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState(Mode.Add);


  useEffect(() => {
    fetch('/api/products').then(res => res.json()).then(data => {
      setProducts(data)
    }).catch(err => {
      setProducts(mockedProducts)
    })
  }, []);

  const onShowModal = (mode: Mode, product?: Product) => {
    setSelectedProduct(product);
    setShowModal(true)
    setModalMode(mode)
  };

  const hideModal = () => {
    setShowModal(false);
  }

  const onUpdate = (product: Product) => {
    fetch('/api/products/' + product!.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(res => res.json()).then(data => {
      setProducts(products.map(p => p.id === product.id ? product : p))
      console.log(data);
      hideModal();
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      hideModal();
    }
    )
  }

  const onAdd = (product: Product) => {
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(res => res.json()).then(data => {
      setProducts([...products, data])
      hideModal();
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      hideModal();
    }
    )
  }

  return (
    <div className="App">
      {showModal &&
        <ProductModal product={selectedProduct} show={showModal} onHide={hideModal} mode={modalMode} onAdd={onAdd} onUpdate={onUpdate} />
      }
      <Header onAddClick={onShowModal} />
      < Main products={products} onEditClick={onShowModal} />
      <Footer />
    </div>
  )
}

export default App;