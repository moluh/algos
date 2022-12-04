const fs = require("fs");
const MAX_YEAR = 2023;
const MIN_YEAR = 2014;
const MAX_MONTH = 12;
const MIN_MONTH = 1;
const MAX_DAY = 31;
const MIN_DAY = 1;
const MAX_TRANSACTIONS = 15;
const MIN_TRANSACTIONS = 0;

const transactions = [],
  users = [];

const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

const randomAmount = () =>
  parseFloat(Math.random() * (500000 - 1) + 1).toFixed(2);

const randomDate = () => {
  let month = random(MAX_MONTH, MIN_MONTH);
  let day = random(MAX_DAY, MIN_DAY);
  return `${random(MAX_YEAR, MIN_YEAR)}-${
    String(month).length === 1 ? "0" + month : month
  }-${String(day).length === 1 ? "0" + day : day}T00:00:00`;
};

let countTransactions = 0;
let countUsers = 0;

for (let i = 1; i < 10001; i++) {
  users.push({
    id: i,
    username: `myUsername_${i}`,
    name: `name${i}`,
    surname: `surname_${i}`,
    city: `city_${i}`,
  });
  countUsers++;
  for (let j = 0; j < random(MAX_TRANSACTIONS, MIN_TRANSACTIONS); j++) {
    countTransactions++;
    transactions.push({
      id: Number(Date.now().toString().substring(8)),
      user_id: i,
      amount: parseFloat(randomAmount()),
      date: randomDate(),
      from: `surname_${i}`,
      to: `randomUser_${i}`,
    });
  }
}

console.log("Usuarios creados: ", countUsers);
console.log("Transacciones creadas: ", countTransactions);

const streamUsers = fs.createWriteStream("users.json");
const streamTransactions = fs.createWriteStream("transactions.json");

streamUsers.write(JSON.stringify(users));
streamTransactions.write(JSON.stringify(transactions));
