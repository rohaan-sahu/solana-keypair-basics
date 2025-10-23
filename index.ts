import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';

const newKeyPair = Keypair.generate();

console.log(newKeyPair.publicKey.toBase58());
console.log(bs58.encode(newKeyPair.secretKey));
























// import {Keypair} from "@solana/web3.js";
// import bs58 from 'bs58';

// import { saveKeypairToFile } from "./helpers/saveKeyPair";
// import { getKeyPair } from "./helpers/getKeyPair";
// import { testingMnemonics } from "./helpers/testingMnemonics";

// //const keyPair = Keypair.fromSeed(new Uint8Array([0,0,0,0]));

// //testingMnemonics()

// const keyPair = Keypair.generate();
// console.log(keyPair);
// console.log('Keypair generate')
// console.log(keyPair.publicKey.toBase58());
// console.log(bs58.encode(keyPair.secretKey))



// let serial = 7;
// const keyPairInFile = saveKeypairToFile(
// 	keyPair,
// 	'keypair',
// 	'keypair',
// 	serial
// );

// console.log("\nNew Keypair set - saveKeyPairToFile: ");
// console.log(keyPair.publicKey.toBase58());
// console.log(bs58.encode(keyPair.secretKey));


// let kp = getKeyPair(
// 	'keypair',
// 	'keypair',
// 	serial
// );

// console.log("\nKeypair fetched - getKeyPair: ");
// console.log(kp.publicKey.toBase58());