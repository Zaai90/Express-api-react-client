import * as fs from "fs";
import { nanoid } from "nanoid";
import { Product } from "./product.model";
const dbFile = "./src/resources/infrastructure/productDb.json";
export let products: Product[] = [];
load();

export function getItems() {
  return products;
}

export function getItem(id: string) {
  return products.find((product) => product.id === id);
}

export function addItem(product: Product) {
  addNewProductData(product);
  products.push(product);
  save();
}

export function updateItem(id: string, product: Product) {
  const index = products.findIndex((p) => p.id === id);
  let updatedProduct: Product = product;
  addProductData(updatedProduct, index);
  products[index] = updatedProduct;
  save();
  return index ? true : false;
}

export function deleteItem(id: string) {
  const index = products.findIndex((p) => p.id === id);
  products.splice(index, 1);
  save();
}

function addNewProductData(product: Product) {
  product.id = nanoid();
  product.version = 1;
  product.createdAt = new Date();
  product.updatedAt = new Date();
  if (!product.imageurl || !product.imageurl.includes("jpg") || !product.imageurl.includes("png")) {
    product.imageurl = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
  }

}

function addProductData(product: Product, index: number) {
  product.id = products[index].id;
  product.version = products[index].version + 1;
  product.createdAt = products[index].createdAt;
  product.updatedAt = new Date();
}

function save() {
  fs.writeFile(
    dbFile,
    JSON.stringify(products, null, "\t"),
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved products to " + dbFile);
      }
    }
  );
}

function load() {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(products));
  } else {
    fs.readFile(
      dbFile,
      "utf-8",
      (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          console.log(err.message);
        } else {
          products = JSON.parse(data);
        }
      }
    );
  }
}
