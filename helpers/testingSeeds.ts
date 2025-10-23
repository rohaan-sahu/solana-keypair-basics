import { Keypair } from "@solana/web3.js";

let seed = new Uint8Array(
    [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
)

export function testingSeeds() {
    let keypairFromBasicSeed = Keypair.fromSeed(seed);
    console.log('keypair1: ',keypairFromBasicSeed);
}

testingSeeds()