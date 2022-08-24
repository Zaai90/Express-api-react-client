import { useState } from 'react';
import '../css/App.css';
import { Product } from '../models/product';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProductModal from './ProductModal';

const App = () => {

  const [selectedProduct, setSelectedProduct] = useState(undefined as Product | undefined);
  const [showEditModal, setShowEditModal] = useState(false);

  const onEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
    console.log(selectedProduct)
  };

  const hideModal = () => {
    setShowEditModal(false);
  }

  return (
    <div className="App">
      {showEditModal &&
        <ProductModal product={selectedProduct} show={showEditModal} onHide={hideModal} />
      }
      <Header />
      < Main onEdit={onEdit} />
      <Footer />
    </div>
  )
}

export default App;