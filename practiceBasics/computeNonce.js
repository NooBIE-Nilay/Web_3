// This is almost what the Miner Does

const keccak256 = require("keccak256");
const hashCash = "0000";
// const hashCash = "abcd";

let block = "This is a message to mimic a block";
let nonce = 0;
while (true) {
  const hash = keccak256(block + nonce.toString()).toString("hex");
  if (hash.indexOf(hashCash) == 0) {
    console.log("Block:", block);
    console.log("nonce:", nonce);
    console.log("Hash:", hash);
    block = block + nonce.toString();
    console.log("Final Block:", block);
    break;
  }
  nonce++;
}
