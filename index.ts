import {Keypair} from "@solana/web3.js";
import bs58 from 'bs58';

import { saveKeypairToFile } from "./helpers/saveKeyPair";
import { getKeyPair } from "./helpers/getKeyPair";
import { testingMnemonics } from "./helpers/testingMnemonics";

const keyPair = Keypair.generate();
console.log("Keypair generated")
console.log(keyPair);
console.log('Accessing the keypair elements/methods')
console.log(keyPair.publicKey)
console.log(keyPair.publicKey.toBase58());
console.log(keyPair.secretKey)
console.log(bs58.encode(keyPair.secretKey));
console.log("Public key & private key's last 32 bytes base 58 encoded")
console.log("Public key",keyPair.publicKey.toBase58());
console.log("Secret key' last 32 bytes base58 encoded",bs58.encode(keyPair.secretKey.slice(32)));







/*

//const keyPair = Keypair.fromSeed(new Uint8Array([0,0,0,0]));

//testingMnemonics()

let serial = 7;
const keyPairInFile = saveKeypairToFile(
	keyPair,
	'keypair',
	'keypair',
	serial
);

console.log("\nNew Keypair set - saveKeyPairToFile: ");
console.log(keyPair.publicKey.toBase58());
console.log(bs58.encode(keyPair.secretKey));


let kp = getKeyPair(
	'keypair',
	'keypair',
	serial
);

console.log("\nKeypair fetched - getKeyPair: ");
console.log(kp.publicKey.toBase58());
*/