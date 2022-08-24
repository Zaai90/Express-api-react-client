import { useState } from "react";
import '../css/Main.css';
import { Product } from "../models/product";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";



const Main = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(undefined as Product | undefined);
    
    function onEdit(product: Product){
     setSelectedProduct(product);
     setShowModal(true);
    }
    
    return (
        <main>
        <ProductModal 
      show={showModal}
      product={selectedProduct}
      onDelete={()=>{}} />
      <ProductList onEdit={onEdit}/>
        </main>
    );
    }

export default Main;