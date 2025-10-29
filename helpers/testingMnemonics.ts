import {Keypair} from "@solana/web3.js";
import { derivePath } from 'ed25519-hd-key';
import * as bip39 from 'bip39';
import { getMnemonic } from "./getMnemonic";
import { saveMnemonic } from "./saveNemonic";

//const array = Array(32).fill(1).toString();

const generate = bip39.generateMnemonic();

let serial = 4;
//saveMnemonic('mnemonic',serial,generate)
const storedMnemonic = getMnemonic('mnemonic',2);

//let seedPhrase = array;
//let seedPhrase = generate;
let seedPhrase = storedMnemonic;

const path = `m/44'/501'/0'/0'`;
const seed = bip39.mnemonicToSeedSync(seedPhrase);

export function testingMnemonics(){
    const derivedSeed  = derivePath(path,seed.toString('hex'));
    const derivedSeedKey = derivedSeed.key;
    const keyPair = Keypair.fromSeed(derivedSeedKey);

    //console.log('Array: ',array.toString());
    console.log('generate: \n',generate);
    console.log('seedPhrase: \n',seedPhrase);
    console.log('\nSeed: \n',seed.toString('hex'));
    console.log('\nderived seed: \n',derivedSeed);
    console.log('\nderived seed Key: \n',derivedSeedKey);
    console.log('\nKeypair: \n',keyPair);
}

testingMnemonics()