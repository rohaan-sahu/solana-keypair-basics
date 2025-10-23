import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { getKeyPair } from './getKeyPair';

let kp = getKeyPair(
    'keypair',
    'keypair',
    4
);

const connection = new Connection('http://localhost:8899');

async function fundLocalWallet(){
    const signature = await connection.requestAirdrop(
        kp.publicKey,
        10 * LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(signature)
    .then(()=>{
        console.log(`https://explorer.solana.com/tx/${signature}?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`);
        }
    )
}

fundLocalWallet()