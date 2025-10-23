import * as bip39 from 'bip39';
import fs from 'fs';

const filename = 'mnemonic';

const mnemonic = bip39.generateMnemonic();
console.log(`List: ${mnemonic}`);

function saveMnemonic(fileName = filename, serial:number ,mnemonic:any ){
    fs.writeFileSync(
        `mnemonic/${fileName}${serial}.json`,
        `${mnemonic.toString()}`,
        {encoding : 'utf-8' }
    )
}

saveMnemonic(filename,2,mnemonic)