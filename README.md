<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:061A40,25:003566,50:0077B6,75:00B4D8,100:90E0EF&height=250&section=header&text=REACT%20LAB&fontSize=58&fontColor=FFFFFF&animation=twinkling&fontAlignY=38&desc=Atividade%20de%20Fundamentos&descAlignY=58&descSize=18&descColor=CAF0F8"/>

<br>

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=24&duration=2000&pause=700&color=90E0EF&center=true&vCenter=true&width=800&lines=%3C%2F%3E+Welcome+to+React+Lab;%3E+Building+components...;%3E+Learning+Props...;%3E+Exploring+JSX...;%3E+Rendering+the+future..."/>

<br><br>

<img src="https://img.shields.io/badge/REACT-003566?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/JAVASCRIPT-0077B6?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/JSX-0096C7?style=for-the-badge&logo=react&logoColor=FFFFFF"/>
<img src="https://img.shields.io/badge/STATUS-COMPLETED-00B4D8?style=for-the-badge"/>

</div>

---

# `>_ React Lab`

```text
╭──────────────────────────────────────────────────────────╮
│                                                          │
│   $ npm run dev                                          │
│                                                          │
│   ✓ Starting development server...                       │
│   ✓ Loading components...                                 │
│   ✓ Compiling JSX...                                      │
│   ✓ Rendering interface...                                │
│                                                          │
│   → React application ready!                              │
│                                                          │
╰──────────────────────────────────────────────────────────╯
```

> Um laboratório de prática criado para explorar os **fundamentos do React** através de componentes, variáveis, Props, JSX e renderização de listas.

---

# `01` — MISSION

A atividade foi criada para transformar conceitos básicos de React em pequenas aplicações funcionais.

```text
                     REACT LAB
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      VARIABLES       COMPONENTS       JSX
          │              │              │
          ▼              ▼              ▼
       PRODUCT          USER           CAR
                         │
                         ▼
                       PROPS
```

Cada etapa adiciona um novo conceito ao projeto.

---

# `02` — MISSIONS UNLOCKED

<div align="center">

| LEVEL | DESAFIO    |      CONCEITO      |
| :---: | :--------- | :----------------: |
|  `01` | PRODUCT    |      Variáveis     |
|  `02` | USER       |     Componentes    |
|  `03` | PERSON     |        Props       |
|  `04` | CAR GARAGE | JSX + Arrays + Map |

</div>

---

# `03` — LEVEL 01 · PRODUCT

```text
╭──────────────────────────────╮
│          PRODUCT             │
├──────────────────────────────┤
│                              │
│  Nome                        │
│  Descrição                   │
│  Marca                       │
│  Preço                       │
│                              │
╰──────────────────────────────╯
```

**Missão:** criar variáveis e exibir seus valores na interface.

```js
const produto = {
  nome: "Notebook",
  descricao: "Notebook para estudos",
  marca: "Acer",
  preco: 2899.90
};
```

**STATUS:** `✓ COMPLETED`

---

# `04` — LEVEL 02 · USER

### `DadosUsuario.jsx`

```text
       USER PROFILE
      ┌──────────────┐
      │     USER     │
      ├──────────────┤
      │ Nome         │
      │ Sobrenome    │
      │ E-mail       │
      │ Sexo         │
      │ Idade        │
      └──────────────┘
```

**Missão:** criar um componente responsável por apresentar os dados de um usuário.

**STATUS:** `✓ COMPLETED`

---

# `05` — LEVEL 03 · PERSON

### `Pessoa.jsx`

Aqui entra um dos conceitos mais importantes do React:

```text
                APP
                 │
                 │ PROPS
                 ▼
             ┌─────────┐
             │ PESSOA  │
             └────┬────┘
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
      Nome      Cidade     Idade
```

Os dados são enviados para o componente através de **Props**.

```jsx
<Pessoa
  nome="Gabrielly"
  idade={17}
  cidade="São Paulo"
  endereco="Rua das Flores"
/>
```

**STATUS:** `✓ COMPLETED`

---

# `06` — LEVEL 04 · CAR GARAGE

### `Carro.jsx`

Hora de colocar vários objetos na pista.

```text
╭────────────────────────────────────────╮
│              CAR GARAGE                 │
├────────────────────────────────────────┤
│                                        │
│  01  Civic       Honda                 │
│  02  Corolla     Toyota                │
│  03  Onix        Chevrolet             │
│  04  HB20        Hyundai               │
│  05  Polo        Volkswagen            │
│                                        │
╰────────────────────────────────────────╯
```

A lista utiliza:

```js
carros.map((carro) => ...)
```

Assim, o React consegue percorrer os dados e gerar os elementos automaticamente.

**STATUS:** `✓ COMPLETED`

---

# `07` — SKILLS TREE

```text
                         REACT
                           │
             ┌─────────────┴─────────────┐
             │                           │
            JSX                      COMPONENTS
             │                           │
       ┌─────┴─────┐               ┌─────┴─────┐
       │           │               │           │
   JavaScript    HTML            Props       Reuse
       │
       ▼
     Arrays
       │
       ▼
      Map
```

### Conhecimentos praticados

`Variables` → `JSX` → `Components` → `Props` → `Arrays` → `Map`

---

# `08` — TECH STACK

<div align="center">

<img src="https://skillicons.dev/icons?i=react,js,html,css,vscode,git,github&theme=dark&perline=7"/>

</div>

---

# `09` — PROJECT TREE

```text
REACT-LAB
│
├── 📁 src
│   │
│   ├── 📁 components
│   │   ├── 📄 DadosUsuario.jsx
│   │   ├── 📄 Pessoa.jsx
│   │   └── 📄 Carro.jsx
│   │
│   ├── 📄 App.jsx
│   └── 📄 main.jsx
│
├── 📄 package.json
└── 📄 README.md
```

---

# `10` — PROGRESS

```text
React Fundamentals

Variables       ████████████████████ 100%
Components      ████████████████████ 100%
JSX             ████████████████████ 100%
Props           ████████████████████ 100%
Arrays          ████████████████████ 100%
Map             ████████████████████ 100%

OVERALL         ████████████████████ 100%
```

---

# `11` — NEXT LEVEL

```text
                    FUNDAMENTOS
                         │
                         ▼
                    COMPONENTES
                         │
                         ▼
                       PROPS
                         │
                         ▼
                       STATE
                         │
                         ▼
                       HOOKS
                         │
                         ▼
                        API
                         │
                         ▼
                  FULL APPLICATION
```

> **Every big application starts with a small component.**

---

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=20&duration=2500&pause=800&color=90E0EF&center=true&vCenter=true&width=650&lines=Mission+Complete.;React+Fundamentals+Unlocked.;Next+level%3A+Keep+Coding.;%3C%2F%3E+See+you+in+the+next+project."/>

<br><br>

<img src="https://img.shields.io/badge/MADE%20WITH-REACT-0077B6?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/ACADEMIC-PROJECT-003566?style=for-the-badge"/>

<br><br>

`[ REACT LAB — MISSION COMPLETE ]`

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:90E0EF,30:00B4D8,60:0077B6,80:003566,100:061A40&height=160&section=footer&animation=twinkling"/>
