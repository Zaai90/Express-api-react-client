import Product from './product.model';

export let products : Product[] = [];

export function getItems() {
    return products;
}

export function getItem(id: number) {
    return products.find(product => product.id === id);
}

export function addItem(product: Product) {
    products.push(product);
}

export function updateItem(id: number, product: Product) {
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
}

export function deleteItem(id: number) {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
}