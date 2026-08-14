# ⚛️ React Lab — Trabalhando com Props

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=24&duration=2500&pause=800&color=61DAFB&center=true&vCenter=true&width=700&lines=Props+detectadas...;Dados+recebidos...;Comunicação+entre+componentes+online..." />
</p>

---

## 📌 Sobre o Projeto

Nesta atividade foi desenvolvido o componente **`Pessoa.jsx`**, com o objetivo de praticar o conceito de **Props no React**.

As Props permitem que informações sejam enviadas de um componente para outro, tornando os componentes mais flexíveis e reutilizáveis.

---

## 👤 Informações da Pessoa

O componente deve apresentar:

* **Nome**
* **Idade**
* **Cidade**
* **Endereço**

---

## 🔗 Utilizando Props

Exemplo de utilização:

```jsx
function Pessoa(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Cidade: {props.cidade}</p>
      <p>Endereço: {props.endereco}</p>
    </div>
  );
}

export default Pessoa;
```

O componente pode receber os dados através das Props:

```jsx
<Pessoa
  nome="Gabrielly"
  idade={18}
  cidade="São Paulo"
  endereco="Rua Exemplo"
/>
```

---

## 🎯 Objetivo

Praticar:

* Criação de componentes.
* Utilização de Props.
* Passagem de informações entre componentes.
* Interpolação de valores no JSX.
* Reutilização de componentes.

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

Nesta atividade foi possível compreender como as **Props permitem enviar informações para componentes**, facilitando a criação de estruturas reutilizáveis e dinâmicas.

---

<div align="center">

**Props = comunicação entre componentes**

`Componente Pai → Props → Componente Filho`

</div>
