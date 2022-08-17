import Product from './product.model';

let products : Product[] = [];

export function getProducts() {
    return products;
}

export function getProduct(id: number) {
    return products.find(product => product.id === id);
}

export function createProduct(product: Product) {
    products.push(product);
}

export function updateProduct(id: number, product: Product) {
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
}

export function deleteProduct(id: number) {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
}