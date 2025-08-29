
# Meu Catálogo Pessoal

Este é um aplicativo móvel de tela única, desenvolvido com **React Native** e **Expo**, que exibe uma coleção de itens pessoais. O projeto segue os requisitos de uma atividade acadêmica e foi criado para demonstrar a utilização de componentes, estilização com `StyleSheet`, e a renderização dinâmica de dados a partir de um arquivo JSON.

---

## Status do Projeto
✅ Projeto Finalizado

---

## Índice
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Autor](#autor)
- [Licença](#licença)

---

## Funcionalidades
- Exibição de uma lista de itens de um catálogo (músicas, filmes, livros, etc.).
- Renderização dinâmica dos itens usando o método `.map()`.
- Estilização de cada item como um "card" com borda, sombra e cor de fundo.
- Navegação entre as telas "Músicas" e "Sobre o Artista" com botões de alternância.
- Integração com a API nativa de `Linking` para abrir URLs externas.

---

## Tecnologias Utilizadas

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Flexbox](https://img.shields.io/badge/Flexbox-Layout-blue?style=for-the-badge)

---

## Estrutura do Projeto
- O projeto foi inicializado com `npx create-expo-app`.
- Toda a lógica da tela principal (`app/index.tsx`) é simplificada para apenas renderizar o componente principal.
- A pasta `components` contém o componente `CatalogoScreen.tsx`, onde toda a lógica, importação de dados e estilização da tela foram implementadas.
- O arquivo `catalogo.json` na raiz do projeto é a fonte de dados.

---

## Como Rodar o Projeto

### Pré-requisitos
- Node.js e npm (ou yarn) instalados
- Expo CLI instalado globalmente (`npm install -g expo-cli`)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o projeto Expo:**
   ```bash
   npm start
   ```

4. **Escaneie o código QR:** Use o aplicativo Expo Go no seu celular (iOS ou Android) para escanear o código QR exibido no terminal e ver o aplicativo rodando no seu dispositivo.

---

## Autor
- **Gabriel Camargo Gonçalves Silva**  
  [GitHub](https://github.com/gabrielcamargogsilva)  
  • gabriel.cgsilva.senai@gmail.com  
  • gabrielcamargogsilva@gmail.com

---

## Licença
Este projeto está licenciado sob a Licença MIT.
