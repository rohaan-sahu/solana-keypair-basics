import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { SystemProgram, Transaction } from "@solana/web3.js";
import { getKeyPair } from "./helpers/getKeyPair";

const kp1 = getKeyPair('newKeyPair','keychain',1);
const kp2 = getKeyPair('newKeyPair','keychain',2);
const kp3 = getKeyPair('newKeyPair','keychain',3);

console.log("Public key\n")
console.log("Kp1: ",kp1.publicKey.toString());
console.log("Kp2: ",kp2.publicKey.toString());
console.log("Kp3: ",kp3.publicKey.toString());









/*
const funds = 2 *LAMPORTS_PER_SOL;

const connection = new Connection('http://localhost:8899');
const transaction = new Transaction().add(
	SystemProgram.transfer({
		fromPubkey: kp1.publicKey,
		toPubkey:kp2.publicKey,
		lamports: 2*LAMPORTS_PER_SOL
	})
);

async function fundKp2FromKp1(){
	let transactionSignature = await connection.sendTransaction(
		transaction,
		[kp1]
	);
	await connection.confirmTransaction(transactionSignature)
	.then(()=> {
		console.log(
			`https://explorer.solana.com/tx/${transactionSignature}?cluster=custom`
		);
	})
}

fundKp2FromKp1()


async function airDropSolToKp1(){
	let transactionSignature = await connection.requestAirdrop(
		kp1.publicKey,
		funds
	);
	console.log("transaction sig: \n",transactionSignature);
}

airDropSolToKp1()

*/













/*

import {Keypair} from "@solana/web3.js";
import bs58 from 'bs58';

import { saveKeypairToFile } from "./helpers/saveKeyPair";
import { getKeyPair } from "./helpers/getKeyPair";
import { testingMnemonics } from "./helpers/testingMnemonics";

const keyPair = Keypair.generate();


let serial = 3;
const keyPairInFile = saveKeypairToFile(
	keyPair,
	'newKeyPair',
	'keychain',
	serial
);

console.log("\nNew Keypair set - saveKeyPairToFile: ");
console.log(keyPair.publicKey.toBase58());
console.log(bs58.encode(keyPair.secretKey));

let kp = getKeyPair(
	'newKeyPair',
	'keychain',
	serial
);

console.log("\nKeypair fetched - getKeyPair: ");
console.log(kp.publicKey.toBase58());

*/


// console.log("Keypair generated")
// console.log(keyPair);
// console.log('Accessing the keypair elements/methods')
// console.log(keyPair.publicKey)
// console.log(keyPair.publicKey.toBase58());
// console.log(keyPair.secretKey)
// console.log(bs58.encode(keyPair.secretKey));
// console.log("Public key & private key's last 32 bytes base 58 encoded")
// console.log("Public key",keyPair.publicKey.toBase58());
// console.log("Secret key' last 32 bytes base58 encoded",bs58.encode(keyPair.secretKey.slice(32)));
