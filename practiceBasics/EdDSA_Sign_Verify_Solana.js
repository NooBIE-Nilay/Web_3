// Edwards Curve Digital Signature Algorithm

import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const keypair = Keypair.generate();

const publicKey = keypair.publicKey.toString();
const privateKey = keypair.secretKey;

console.log("Public Key:", publicKey);
console.log("Private Key", privateKey);

const messageInBytes = new TextEncoder().encode("Hello NooBIE");

const signature = nacl.sign.detached(messageInBytes, privateKey);
const result = nacl.sign.detached.verify(
  messageInBytes,
  signature,
  keypair.publicKey.toBytes()
);
const wrongResult = nacl.sign.detached.verify(
  new TextEncoder().encode("Hello NotNooBIE"),
  signature,
  keypair.publicKey.toBytes()
);

const message = new TextDecoder().decode(messageInBytes);
// console.log("Signature:", signature);
console.log("Message: ", message);
console.log("Result for Actual Message:", result);
console.log("Result for Corrupted Message:", wrongResult);
