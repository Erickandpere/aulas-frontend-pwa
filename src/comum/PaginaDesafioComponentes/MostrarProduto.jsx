const MostrarProduto = ({ produto }) => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <p>
          <b>Produto:</b>
          <br />
          <b>Nome: </b>
          {produto.nome}
          <br />
          <b>Preço: </b>
          {produto.preco}
          <br />
          <b>Estoque: </b>
          {produto.estoque}
        </p>
      </div>
    </>
  );
};
export default MostrarProduto;
