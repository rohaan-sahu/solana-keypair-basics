import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getKeyPair } from "./getKeyPair";

const connection = new Connection("http://localhost:8899");

const kp = getKeyPair('newKeyPair','keychain',3);

async function fundLocalWallet(){
    const signature = await connection.requestAirdrop(
        kp.publicKey,
        2* LAMPORTS_PER_SOL
    );
    await connection.confirmTransaction(signature)
        .then(
            ()=>{
                console.log(`https://explorer.solana.com/tx/${signature}/?cluster=custom&customUrl=http%3A%2F%2Flocalhost%3A8899`)
            }
        )
};

fundLocalWallet()