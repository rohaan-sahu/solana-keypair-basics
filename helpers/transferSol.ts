import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { getKeyPair } from './getKeyPair';

// http://localhost:8899
// https://api.devnet.solana.com
const connection = new Connection('http://localhost:8899');

let from_kp = getKeyPair(
    'newKeyPair',
    'keychain',
    1 
);

let to_tp = getKeyPair(
    'newKeyPair',
    'keychain',
    2
);

const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: from_kp.publicKey,
    toPubkey: to_tp.publicKey,
    lamports: 0.05 * LAMPORTS_PER_SOL // 0.1 SOL
  })
);

transaction.feePayer = to_tp.publicKey

async function sendFunds() {
  const signature = await connection.sendTransaction(transaction, [from_kp,to_tp]);
  await connection.confirmTransaction(signature)
  .then(()=>{
        console.log(`https://explorer.solana.com/tx/${signature}?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`);
        }
    )
}

sendFunds()