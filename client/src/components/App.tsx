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
    }).catch(() => {
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
      hideModal();
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      hideModal();
    }
    )
  }

  const onAdd = async (product: Product) => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    try {
      const newProduct = await response.json();
      setProducts([...products, newProduct])
      hideModal();
    } catch (err) {
      console.error(err);
    }
  }

  const OnDelete = (id: string) => {
    fetch('/api/products/' + id, {
      method: 'DELETE'
    }).then(res => res.json()).then(() => {
      setProducts(products.filter(p => p.id !== id))
      hideModal();
    });
  }



  return (
    <div className="App">
      {showModal &&
        <ProductModal
          product={selectedProduct}
          show={showModal}
          onHide={hideModal}
          mode={modalMode}
          onAdd={onAdd}
          onUpdate={onUpdate}
          onDelete={OnDelete} />}
      <Header onAddClick={onShowModal} />
      < Main products={products} onEditClick={onShowModal} />
      <Footer />
    </div>
  )
}

export default App;