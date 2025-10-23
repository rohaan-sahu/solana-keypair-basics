import {SystemProgram,Connection,LAMPORTS_PER_SOL,VersionedTransaction,TransactionMessage, TransferParams } from "@solana/web3.js";
import { getKeyPair } from "./getKeyPair";

// 'https://api.devnet.solana.com'
const connection = new Connection('http://localhost:3000');

const from_kp = getKeyPair('keypair','keypair',1);
const to_kp = getKeyPair('keypair','keypair',2);

const transferParams: TransferParams = {
    fromPubkey: from_kp.publicKey,
    toPubkey: to_kp.publicKey,
    lamports: 0.5*LAMPORTS_PER_SOL
}
const transferInstruction = SystemProgram.transfer(transferParams);