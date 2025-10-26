import * as bip39 from 'bip39';
import fs from 'fs';


export function saveMnemonic(fileName:string, serial:number ,mnemonic:string ){
    fs.writeFileSync(
        `mnemonic/${fileName}${serial}.json`,
        `${mnemonic.toString()}`,
        {encoding : 'utf-8' }
    )
}