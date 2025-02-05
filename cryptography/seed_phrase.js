import { generateMnemonic, mnemonicToSeed, mnemonicToSeedSync } from "bip39";

const mnemonic_12 = generateMnemonic(128);
const mnemonic_24 = generateMnemonic(256);
console.log(mnemonic_12);
console.log(mnemonic_24);
const seed = await mnemonicToSeed(mnemonic_12); //async function
const seed_24 = mnemonicToSeedSync(mnemonic_24); //sync function
console.log(seed);
console.log(seed_24);
