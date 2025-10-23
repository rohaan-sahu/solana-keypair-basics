import {Keypair} from "@solana/web3.js";
import fs from 'fs';
import path from 'path';

export function saveKeypairToFile(
    keyPair: Keypair,
    relativeFileName: string,
    dirName: string,
    serial: number
    ){
    const fileName = path.join(dirName, `${relativeFileName}${serial}.json`);

    if (!fs.existsSync(`./${dirName}`)) fs.mkdirSync(`./${dirName}`)
    
    fs.writeFileSync(
        `${fileName}`,
        `[${keyPair.secretKey.toString()}]`,
        {encoding: 'utf-8'}
    );
    return keyPair;
};