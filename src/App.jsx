
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';
import BotaoContador from './paginas/BotaoContador/BotaoContador';
import BotaoMaisMenos from './paginas/BotaoMaisMenos/BotaoMaisMenos';
import PaginaListaTarefa from './paginas/PaginaListaTarefa/PaginaListaTarefa';
import PaginaDesafioComponentes from './comum/PaginaDesafioComponentes/PaginaDesafioComponentes';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos/>,
  },
  {
    path: 'botao-contador',
    element: <BotaoContador/>,
  },
  {
    path: 'botao-MenosMais',
    element: <BotaoMaisMenos/>,
  },
  {
    path: 'lista-tarefas',
    element: <PaginaListaTarefa/>,
  },
  {path: 'PaginaDesafioComponentes',
  element: <PaginaDesafioComponentes />,
}

  

 ]);
 

function App() {
  return (
    <>
   
      <Cabecalho />
     <RouterProvider router={router} />
     <Rodape />
    </>
  );
}

export default App;
