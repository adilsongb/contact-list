Esse é um projeto de uma lista de contatos para os exercícios de `RTL`.
### Antes de iniciar

Crie um [fork](https://github.com/UNIVALI-LITE/Portugol-Studio/wiki/Fazendo-um-Fork-do-reposit%C3%B3rio) do [repositório do exercício](https://github.com/adilsongb/exercise-contact-list) e clone o repositório, criado pelo fork, na sua máquina.

Rode o comando `npm install` na pasta do projeto.

### Exercícios - Lista de contatos

Em `App.test.js` do projeto que você acabou de clonar, implemente os seguintes testes:

1. Verifique se um título "Lista de contatos", um subtítulo "Lista de contatos vazia!", e se um botão "Novo contato" são renderizados.
2. Teste se ao clicar no botão "Novo contato" um formulário aparece.
    1. Verifique se o formulário possui 3 `inputs` e se possui um botão "Salvar".
3. Teste se ao inserir informações no formulário anterior e se ao clicar no botão "Salvar", uma tabela é criada com as informações passadas.
4. Importe o arquivo `data.js` em `App.test.js` e use o array de objetos dele para renderizar a tabela de contatos. Dica: Você pode renderizar apenas o componente `TableContacts` passando para ele o array de objetos como props.
    1. Verifique se todos os contatos do array são renderizados na tabela.
    2. Verifique se a tabela possui 3 botões "Editar" e 3 botões "Remover".
    3. Teste se ao clicar no botão "Remover" as informações do contato são removidas da tabela.
