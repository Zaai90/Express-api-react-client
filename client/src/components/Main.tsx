import { useState } from "react";
import '../css/Main.css';
import { Product } from "../models/product";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";

interface Props {
  onEdit: (product: Product) => void;
}

const Main = ({ onEdit }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState(undefined as Product | undefined);

  return (
    <main>
      <ProductList onEdit={onEdit} />
    </main>
  );
}

export default Main;