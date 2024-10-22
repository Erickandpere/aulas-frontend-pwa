import Principal from "../componentes/Principal/Principal";
import MostrarDivisao from "./MostrarDivisao";
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto";
import MostrarMultiplicacao from "./MostrarMultiplicacao";
import MostrarNumerosPares from "./MostrarNumerosPares";
import MostrarProduto from "./MostrarProduto";
import MostrarSoma from "./MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao";

const PaginaDesafioComponentes = () => {
  const produto = {
    nome: 'TV Samsung 55"',
    preco: 2999.9,
    estoque: 345,
  };

  return (
    <Principal>
      <MostrarSoma numeroUM={11} numeroDois={12} />
      <MostrarSubtracao numeroUM={10} numeroDois={2} />
      <MostrarDivisao numeroUM={50} numeroDois={10} />
      <MostrarMultiplicacao numeroUM={10} numeroDois={10} />
      <MostrarMeuNomeCompleto nome={"Erick Andrade Pereira"} />
      <MostrarProduto produto={produto} />
      <MostrarNumerosPares
        numeros={[1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48]}
      />
    </Principal>
  );
};
export default PaginaDesafioComponentes;
