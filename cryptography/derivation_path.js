import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import base58 from "base58";

const mnemonic = generateMnemonic(128);
const seed = mnemonicToSeed(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`;
  const derviedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derviedSeed).secretKey;
  console.log(
    `Public Key ${i}: `,
    Keypair.fromSecretKey(secret).publicKey.toBase58()
  );
}
