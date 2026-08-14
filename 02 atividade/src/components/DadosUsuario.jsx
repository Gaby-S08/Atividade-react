function DadosUsuario() {
  const nome = "Gabrielly";
  const sobrenome = "Roseghini";
  const email = "gabrielly@email.com";
  const sexo = "Feminino";
  const idade = 17;

  return (
    <div>
      <h1>Dados do Usuário</h1>

      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Sobrenome:</strong> {sobrenome}</p>
      <p><strong>E-mail:</strong> {email}</p>
      <p><strong>Sexo:</strong> {sexo}</p>
      <p><strong>Idade:</strong> {idade}</p>
    </div>
  );
}

export default DadosUsuario;