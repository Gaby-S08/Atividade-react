function App() {
  const nome = "Notebook Aspire 5";
  const descricao = "Notebook para estudos e desenvolvimento de sistemas";
  const marca = "Acer";
  const preco = 2899.90;

  return (
    <div>
      <h1>Dados do Produto</h1>

      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
    </div>
  );
}

export default App;