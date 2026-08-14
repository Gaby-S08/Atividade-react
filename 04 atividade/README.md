# ⚛️ React Lab — JSX, Componentes e Listas

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=24&duration=2500&pause=800&color=61DAFB&center=true&vCenter=true&width=700&lines=Carro.jsx+inicializado...;Lista+de+veículos+carregada...;Renderização+dinâmica+online..." />
</p>

---

## 📌 Sobre o Projeto

Nesta atividade foi desenvolvido o componente **`Carro.jsx`**, responsável por apresentar uma lista contendo **5 carros**.

O exercício reúne os conceitos de **JSX, componentes e renderização de listas** em React.

---

## 🚗 Informações dos Carros

Cada carro deve apresentar:

| Informação | Descrição         |
| ---------- | ----------------- |
| Nome       | Nome do veículo   |
| Modelo     | Modelo do veículo |
| Marca      | Fabricante        |
| Preço      | Valor do veículo  |

A aplicação deve apresentar um total de **5 carros**.

---

## 🧩 Componente Carro.jsx

O componente pode utilizar um array contendo os veículos:

```jsx
const carros = [
  {
    nome: "Civic",
    modelo: "Touring",
    marca: "Honda",
    preco: 150000
  },
  {
    nome: "Corolla",
    modelo: "Altis",
    marca: "Toyota",
    preco: 160000
  },
  {
    nome: "Onix",
    modelo: "Premier",
    marca: "Chevrolet",
    preco: 100000
  },
  {
    nome: "Golf",
    modelo: "GTI",
    marca: "Volkswagen",
    preco: 180000
  },
  {
    nome: "HB20",
    modelo: "Comfort",
    marca: "Hyundai",
    preco: 95000
  }
];
```

Para apresentar os carros na tela, pode ser utilizado o método `.map()`:

```jsx
{carros.map((carro, index) => (
  <div key={index}>
    <h2>{carro.nome}</h2>
    <p>Modelo: {carro.modelo}</p>
    <p>Marca: {carro.marca}</p>
    <p>Preço: R$ {carro.preco}</p>
  </div>
))}
```

---

## 🎯 Objetivo

Praticar os seguintes conceitos:

* JSX.
* Criação de componentes.
* Arrays.
* Objetos.
* Método `.map()`.
* Renderização de listas.
* Organização de informações.

---

## 🔄 Renderização da Lista

O método `.map()` permite percorrer os elementos do array e gerar uma estrutura JSX para cada carro.

```text
Array de carros
      ↓
   .map()
      ↓
Cada carro
      ↓
Elemento JSX
      ↓
Interface
```

---

## 🛠️ Tecnologias

* React
* JavaScript
* JSX
* Vite
* NPM

---

## 🚀 Como Executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 📚 Aprendizado

A atividade permitiu unir diferentes conceitos fundamentais do React, principalmente a criação de componentes e a **renderização de listas através do método `.map()`**.

---

<div align="center">

**JSX • Components • Arrays • Map**

`Dados → Lista → .map() → Componentes → Interface`

</div>
