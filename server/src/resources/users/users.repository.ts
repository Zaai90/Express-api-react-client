import * as fs from "fs";
import { User } from "./users.model";

const dbFile = "./src/resources/infrastructure/userDb.json";
export let users: User[] = [];
load();

export function getItems() {
  return users;
}

export function getItem(id: string) {
  return users.find((product) => product.id === id);
}

export function addItem(product: User) {
  users.push(product);
  save();
}

export function updateItem(id: string, product: User) {
  const index = users.findIndex((p) => p.id === id);
  let updatedProduct: User = product;
  updatedProduct.id = id;
  users[index] = updatedProduct;
  save();
}

export function deleteItem(id: string) {
  const index = users.findIndex((p) => p.id === id);
  users.splice(index, 1);
  save();
}

function save() {
  fs.writeFile(
    dbFile,
    JSON.stringify(users, null, "\t"),
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Saved successfully");
      }
    }
  );
}

function load() {
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(users));
  } else {
    fs.readFile(
      dbFile,
      "utf-8",
      (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          console.log(err.message);
        } else {
          users = JSON.parse(data);
        }
      }
    );
  }
}
