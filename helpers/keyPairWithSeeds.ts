import { Keypair } from '@solana/web3.js';
import * as bip39 from 'bip39';
import { derivePath } from 'ed25519-hd-key';	
import fs from 'fs';
import { saveKeypairToFile } from './saveKeyPair';

const mnemonic = fs.readFileSync(`mnemonic/mnemonic3.json`,{encoding: 'utf-8'})
//const mnemonic1 = bip39.generateMnemonic();
console.log(`List: ${mnemonic}`);

const seed = bip39.mnemonicToSeedSync(mnemonic);
const path = `m/44'/501'/0'/0'`; // Solana derivation path
const derivedSeed = derivePath(path, seed.toString('hex')).key;
console.log('derived seed',derivedSeed);
const keypair = Keypair.fromSeed(derivedSeed);

saveKeypairToFile(
    keypair,
	'keypair',
	'keypair',
	6
);