import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';


const PaginaInicial = () => {
    const navigate = useNavigate();


    return <Principal titulo="Página Inicial">

        <BotaoCustomizado cor="primario" aoClicar={() => navigate('/lista-produtos')}>
            Lista Produto
        </BotaoCustomizado>
        
        <BotaoCustomizado cor = "secundario"
        aoClicar={() =>navigate('/botao-contador')}>
            Botão Contador
        </BotaoCustomizado>

        <BotaoCustomizado aoClicar={() => navigate("/botao-MenosMais")}>
            Botão Menos e Mais
        </BotaoCustomizado>

        <BotaoCustomizado aoClicar={() => navigate("/lista-tarefas")}>
            Botão Lista de Tarefa
        </BotaoCustomizado>

    </Principal>
};

export default PaginaInicial;