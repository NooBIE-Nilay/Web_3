"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const fs_extra_1 = __importDefault(require("fs-extra"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider("http://127.0.0.1:7545");
        const abi = fs_extra_1.default.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
        const binary = fs_extra_1.default.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
        const wallet = new ethers_1.ethers.Wallet("0x0d15443a24ea2af568641fad3b36dcaa69ee5479f6c61c90e0d9f459837f7f8a", provider);
        console.log(`Wallet Address: ${wallet.address}`);
        const balance = yield provider.getBalance(wallet.address);
        console.log(`Balance: ${ethers_1.ethers.utils.formatEther(balance)} ETH`);
        const contractFactory = new ethers_1.ethers.ContractFactory(abi, binary, wallet);
        console.log("Deploying contract...");
        const contract = yield contractFactory.deploy({
            gasLimit: 3000000, // Adjust gas limit
        });
        console.log(yield contract.retrieve());
    });
}
main()
    .then(() => process.exit(0))
    .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
});
