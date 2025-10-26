import fs from 'fs';

const filename = 'mnemonic';

export function getMnemonic(fileName = filename, serial:number ){
    const seedPhrase = fs.readFileSync(
        `mnemonic/${fileName}${serial}.json`,
        'utf-8'
    );
    return seedPhrase
}