// const test = new Uint8Array([78, 111, 111, 66, 73, 69]);
// console.log(new TextDecoder().decode(test));
import bs58 from "bs58";
function arrayToHex(byteArray) {
  let hexString = "";
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, "0") + " ";
  }
  return hexString;
}
function arrayToBinary(byteArray) {
  let binaryString = "";
  for (let i = 0; i < byteArray.length; i++) {
    binaryString += byteArray[i].toString(2).padStart(8, "0") + " ";
  }
  return binaryString;
}

const str = "NooBIE";
const byteArray = new TextEncoder().encode(str);
const binaryString = arrayToBinary(byteArray);
const hexString = arrayToHex(byteArray);
const base58Encoded = bs58.encode(byteArray);
const base64Encoded = Buffer.from(byteArray).toString("base64");

console.log(str, "in Binary[Base 2] is", binaryString);
console.log(str, "in Hex[Base 16] is", hexString);
console.log(str, "in Base 58 is", base58Encoded);
console.log(str, "in base 64 is", base64Encoded);
