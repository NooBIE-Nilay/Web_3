import { ethers } from "ethers";
import fs from "fs-extra";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const wallet = new ethers.Wallet(
    "0x0d15443a24ea2af568641fad3b36dcaa69ee5479f6c61c90e0d9f459837f7f8a",
    provider
  );

  console.log(`Wallet Address: ${wallet.address}`);
  const balance = await provider.getBalance(wallet.address);
  console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("Deploying contract...");
  const contract = await contractFactory.deploy({
    gasLimit: 3000000, // Adjust gas limit
  });
  console.log(await contract.retrieve());
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  });
