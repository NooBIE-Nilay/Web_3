// Ecliptic Curve Digital SIgnature Algorithm

import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom();

const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Key:", publicKey);
console.log("Private Key:", privateKey);

const message = "Hello NooBIE";

const signature = await wallet.signMessage(message);
console.log("Singature:", signature);

const recoveredAddress = ethers.verifyMessage(message, signature);
const wrongRecoveredAddress = ethers.verifyMessage(
  "Hello NotNooBIE",
  signature
);

console.log("Real Data Recovered Address", recoveredAddress);
console.log("Valid: ", recoveredAddress === publicKey);
console.log("Corrupted Recovered Address", wrongRecoveredAddress);
console.log("Valid: ", wrongRecoveredAddress === publicKey);
