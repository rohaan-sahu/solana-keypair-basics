import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getKeyPair } from './getKeyPair';

// http://localhost:8899
// https://api.devnet.solana.com
const connection = new Connection('http://localhost:8899');

let kp1 = getKeyPair('newKeyPair','keychain',1);

let kp2 = getKeyPair('newKeyPair','keychain',2);

let kp3 = getKeyPair('newKeyPair','keychain',3);

const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: kp1.publicKey,
    toPubkey: kp2.publicKey,
    lamports: 0.1 * LAMPORTS_PER_SOL // 0.1 SOL
  }),
  SystemProgram.transfer({
    fromPubkey: kp2.publicKey,
    toPubkey: kp1.publicKey,
    lamports: 0.11 * LAMPORTS_PER_SOL // 0.11 SOL
  }),
  SystemProgram.transfer({
    fromPubkey: kp2.publicKey,
    toPubkey: kp3.publicKey,
    lamports: 0.121 * LAMPORTS_PER_SOL // 0.121 SOL
  }),
  SystemProgram.transfer({
    fromPubkey: kp3.publicKey,
    toPubkey: kp1.publicKey,
    lamports: 0.15 * LAMPORTS_PER_SOL // 0.15 SOL
  }),
  SystemProgram.transfer({
    fromPubkey: kp3.publicKey,
    toPubkey: kp2.publicKey,
    lamports: 0.03 * LAMPORTS_PER_SOL // 0.03 SOL
  }),
  SystemProgram.transfer({
    fromPubkey: kp1.publicKey,
    toPubkey: kp3.publicKey,
    lamports: 0.0045 * LAMPORTS_PER_SOL // 0.0045 SOL
  }),
);

transaction.feePayer = kp3.publicKey;

async function sendFunds() {
  const signature = await connection.sendTransaction(transaction, [kp1,kp2,kp3]);
  await connection.confirmTransaction(signature)
  .then(()=>{
        console.log(`https://explorer.solana.com/tx/${signature}?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`);
        }
    )
}

sendFunds()