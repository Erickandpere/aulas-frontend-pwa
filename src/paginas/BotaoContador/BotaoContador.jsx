import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
const BotaoContador = ()=>{

const[numero, setNumero] = useState(0);

const incrementar = () =>{
    setNumero(numero+1);

};
return (
    <Principal titulo="Botao Contador" voltarPara="/">
        Botão contado
        <br />
        <br />
        <BotaoCustomizado
        aoClicar = {incrementar}
        cor ="primaria"
        >
        {numero}
        </BotaoCustomizado>

    </Principal>
);
};
export default BotaoContador;