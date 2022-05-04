console.log("-------Welcome to Gambling Simulation--------");
const EVERY_DAY_STAKE = 100;
const EVERY_DAY_BET = 1;

console.log("*****UC2******");
let checkVal = Math.floor(Math.random() * 10) % 3;
console.log(checkVal);

if (checkVal > 0.5) {
  console.log("The Gambler wins the bet.");
} else if (checkVal <= 0.5) {
  console.log("The Gambler loses the bet.");
}