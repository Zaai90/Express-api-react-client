import Product from './product.model';

export let products : Product[] = [];

export function getItems() {
    return products;
}

export function getItem(id: string) {
    return products.find(product => product.id === id);
}

export function addItem(product: Product) {
    products.push(product);
}

export function updateItem(id: string, product: Product) {
    const index = products.findIndex(p => p.id === id);
    let updatedProduct: Product = product;
    updatedProduct.id = id;
    products[index] = updatedProduct;
}

export function deleteItem(id: string) {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
}