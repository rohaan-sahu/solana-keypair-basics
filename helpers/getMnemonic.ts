import fs from 'fs';

export function getMnemonic(fileName:string, serial:number ){
    const seedPhrase = fs.readFileSync(
        `mnemonic/${fileName}${serial}.json`,
        'utf-8'
    );
    return seedPhrase
}