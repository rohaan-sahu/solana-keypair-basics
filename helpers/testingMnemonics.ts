import {Keypair} from "@solana/web3.js";
import { derivePath } from 'ed25519-hd-key';
import * as bip39 from 'bip39';

const array = Array(32).fill(1).toString();

const path = `m/44'/501'/0'/0'`;
const seed = bip39.mnemonicToSeedSync(array);

export function testingMnemonics(){
    const derivedSeed  = derivePath(path,seed.toString('hex')).key;

    const keyPair = Keypair.fromSeed(derivedSeed);

    console.log('Array: ',array.toString());
    console.log('Seed: ',seed.toString('hex'));
    console.log('derived seed: ',derivedSeed);
    console.log('Keypair: ',keyPair);
}