import Avatar from '../Avatar/Avatar';
import './Cabecalho.css';
import { SiVite } from "react-icons/si";


function Cabecalho() {
  return <header className='cabecalho_root'>
    <SiVite size={30} color=''/>
    <Avatar nome="José Silva"/>
  </header>;
}

export default Cabecalho;
