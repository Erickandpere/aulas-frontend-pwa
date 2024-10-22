import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const PaginaListaTarefa = () => {
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarNalista = () => {

        if (descricao && descricao.trim()) {
            setTarefas([...tarefas, descricao]);
            setDescricao("");
        } else {
            alert("Campo Obrigatório");
        };
        setDescricao("");
        document.getElementById('campoDescricao').focus();

    };
    const removerDalista = (index) => {
        
        tarefas.splice(index,1);
        setTarefas([...tarefas]);
    };

    

    return <>
        <Principal titulo="Lista de Tarefas" voltarPara="/">
            <div>
                <input 
                id="campoDescricao"
                type="text"
                placeholder="Descrição da tarefa"
                value={(descricao)}
                onChange={(event) => {setDescricao(event.target.value)} }
                onKeyUp={(event)=>{
                    if(event.key === 'Enter'){
                        adicionarNalista()
                    }
                }}
                                       
                />
                <BotaoCustomizado aoClicar={adicionarNalista}>+</BotaoCustomizado>
            </div>
            <ul>{tarefas.map((item, index) => {
                
                return (
                <li 
                key={index}>{item} <FaTrashAlt color="red" onClick={ () => removerDalista(index)} />
                </li>
                );
            })}</ul>
        </Principal>
    </>
};
export default PaginaListaTarefa