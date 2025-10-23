import {Keypair} from "@solana/web3.js";
import fs from 'fs';
import path from 'path';


export function getKeyPair(
	relativeFileName: string,
	dirName: string,
	serial: number
){
	
	const fileName = path.join(dirName, `${relativeFileName}${serial}.json`);
	
	const getKeyPairFromFile = fs.readFileSync(fileName,'utf8');
	const secretKey = new Uint8Array(JSON.parse(getKeyPairFromFile));
	
	//console.log(`${relativeFileName}${serial}:\n`,Keypair.fromSecretKey(secretKey));
	return Keypair.fromSecretKey(secretKey);
}
