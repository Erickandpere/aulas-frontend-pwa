import './Principal.css';
import {Link} from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";


function Principal({voltarPara, titulo, children}) {
  return <main className='principal_root'>
    
    <div className="principal_titulo">
      {voltarPara && <Link to={voltarPara}><FaAngleLeft size={24}color='green'/></Link>}

    <h1>{titulo}</h1>
    </div>
    
     {children}
    
    </main>;
   
}

export default Principal;
