import Product from './product.model';
import * as fs from 'fs';

export let products: Product[] = [];
load();


export function getItems() {
    return products;
}

export function getItem(id: string) {
    return products.find(product => product.id === id);
}

export function addItem(product: Product) {
    products.push(product);
    save()
}

export function updateItem(id: string, product: Product) {
    const index = products.findIndex(p => p.id === id);
    let updatedProduct: Product = product;
    updatedProduct.id = id;
    products[index] = updatedProduct;
    save();
}

export function deleteItem(id: string) {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    save();
}

function save() {
    fs.writeFile('./db.json', JSON.stringify(products, null, '\t'), (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved successfully');
        }
    });
}

function load() {
    fs.readFile('./db.json', 'utf-8', (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
            console.log(err.message);
        } else {
            products = JSON.parse(data);
        }
    });
}