function Carro() {
  const carros = [
    {
      nome: "Civic",
      modelo: "Sedan",
      marca: "Honda",
      preco: 145000
    },
    {
      nome: "Corolla",
      modelo: "XEi",
      marca: "Toyota",
      preco: 152000
    },
    {
      nome: "Onix",
      modelo: "LT",
      marca: "Chevrolet",
      preco: 85000
    },
    {
      nome: "HB20",
      modelo: "Comfort",
      marca: "Hyundai",
      preco: 90000
    },
    {
      nome: "Polo",
      modelo: "Track",
      marca: "Volkswagen",
      preco: 95000
    }
  ];

  return (
    <div>
      <h1>Lista de Carros</h1>

      {carros.map((carro, index) => (
        <div key={index}>
          <h2>{carro.nome}</h2>
          <p><strong>Modelo:</strong> {carro.modelo}</p>
          <p><strong>Marca:</strong> {carro.marca}</p>
          <p>
            <strong>Preço:</strong> R$ {carro.preco.toLocaleString("pt-BR")}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Carro;