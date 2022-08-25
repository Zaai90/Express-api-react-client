import '../css/Main.css';
import { Product } from "../models/product";
import { Mode } from "./App";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  onEditClick: (mode: Mode, product?: Product) => void;
}

const Main = ({ products, onEditClick }: Props) => {
  return (
    <main>
      <ProductList products={products} onEdit={onEditClick} />
    </main>
  );
}

export default Main;