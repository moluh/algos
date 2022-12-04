const BST = require("./bst");
const bst = new BST();
const users = require("./users.json");
// const transactions = require("./transactions.json");
const USERS_TO_FILTER = 15;
const MAX_IDS = 7000;
const MIN_IDS = 1000

const random = (max, min) => Math.floor(Math.random() * (max - min) + min);
const idsUsers = [];

/**
 * Seleccionando aleatoriamente la cantidad de usuarios que queramos filtrar
 */
for (let i = 0; i < USERS_TO_FILTER; i++) {
  idsUsers.push(random(MAX_IDS, MIN_IDS));
}

/**
 * Agregamos todos los ids de los usuarios al árbol de nodos
 */
for (let index = 0; index < users.length; index++) {
  bst.add(users[index].id);
}

/**
 * Filtrando usuarios por ids con BST FIND
 */
const found_users = [];
for (let index = 0; index < idsUsers.length; index++) {
  const id = bst.find(idsUsers[index]);
  if (id) found_users.push(id);
}

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
console.log(bst.isBalanced());

console.log("found_users: ", found_users.length);
console.log("idsUsers: ", idsUsers.length);
console.log("######################################");
