// Symmetric Encryption -> AES -> Advanced Encryption Standard

import crypto from "crypto";

const key = crypto.randomBytes(32);
const initializationVector = crypto.randomBytes(16);

// console.log(key, initializationVector);

function encrypt(text) {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    key,
    initializationVector
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    initializationVector
  );
  let decrpyted = decipher.update(encryptedText, "hex", "utf8");
  decrpyted += decipher.final("utf8");
  return decrpyted;
}

const textToEncrypt = "Hello NooBIE";
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log("Original Text", textToEncrypt);
console.log("Encrypted Text", encryptedText);
console.log("DecryptedText", decryptedText);
