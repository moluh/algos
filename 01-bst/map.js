const users = require("./users.json");
const transactions = require("./transactions.json");

console.log("users length: ", users.length);
console.log("######################################");
for (let index = 0; index < users.length; index++) {
  const element = users[index];
  if (index + 1 == users.length) console.log(element);
}

console.log("transactions length: ", transactions.length);
console.log("######################################");
for (let index = 0; index < transactions.length; index++) {
  const element = transactions[index];
  if (index + 1 == transactions.length) console.log(element);
}
