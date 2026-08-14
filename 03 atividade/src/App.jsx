import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div>
      <Pessoa
        nome="Gabrielly"
        idade={17}
        cidade="São Paulo"
        endereco="Rua das Flores, 100"
      />
    </div>
  );
}

export default App;