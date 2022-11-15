/*
Essa pagina possui a capacidade de gerar o QRcode que será interpretado pelo leitor dos alunos
*/

import { QRCode } from 'react-qrcode-logo';
import * as React from 'react'

const code = "CP500TIN2-03052022-1900"

export default function QrCode(){
    const [hash, setHash] = React.useState(); 

    const funcaoAssync = async () => {
      const resultado = await fetch(code);
      const json = await resultado.json();
  
      setHash(json.Digest)
      };
    React.useEffect(() => { funcaoAssync(); }, []);
    return(
        <QRCode value={hash}/>
    )
}