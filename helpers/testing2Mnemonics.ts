// Imports
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import * as bip39 from 'bip39';

// Derivation path for Solana Coin/Network
const path = `m/44'/501'/0'/0'`;

// Generate a seed phrase of 12 words (Default)
const seedPhrase = bip39.generateMnemonic();
const seedPhraseByte = bip39.mnemonicToSeedSync(seedPhrase);
console.log("\nseedPhrase: \n",seedPhrase);
console.log("\nseedPhraseByte: \n",seedPhraseByte);

// Generate solana compatible seed from the mnemonic seed phrase
const seedDerivedPathKey = derivePath(path,seedPhraseByte.toString('hex')).key;
const uint8SeedDerivedPathKey = new Uint8Array(seedDerivedPathKey);
console.log("\n seedDerivedPath : \n",derivePath(path,seedPhraseByte.toString('hex')));
console.log("\nseedDerivedPathKey: \n",seedDerivedPathKey);
console.log("\nUint8 representation of seedDerivedPath:\n",uint8SeedDerivedPathKey);

// Generate Keypair 
const keyPairFromSeed = Keypair.fromSeed(seedDerivedPathKey);

console.log("\nkeyPair from seed: ",keyPairFromSeed);