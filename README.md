# Case Inmetrics

Olá, me chamo Lucas e este é um projeto de automação API acompanhando com a linguagem de programação Cypress para automação Back-End.

Abaixo, você encontrará o passo a passo para execução de teste automatizado de API.

## Instruções para executar o teste API Inmetrics:

1º Passo: Instalar o VSCode se ainda nao o tiver instalado.

2º Passo: Instalar o NodeJs.

3º Passo: Abrir o projeto no VSCode.

4º Passo: Dentro do projeto, abra o terminal e execute os seguintes comandos:

    > npm install --save-dev cypress
    
    > npm i -D cypress cypress-cucumber-preprocessor

    > npm install --save-dev cypress-cucumber-preprocessor

5º Passo: Há duas maneiras de executar o comando abaixo para abrir na ferramenta Cypress ou rodar no terminal:
    
    > npm run cy:run (para o comando executar no terminal)
    
    > npx cypress open (para abertura da ferramenta cypress, segue abaixo mais instruções)

6º Passo: Com o Cypress aberto, clique em "E2E Testing".

7º Passo: Selecione o navegador Chrome e em seguida, clique em "Start E2E Testing in Chrome".

8º Passo: Após o navegador Chrome abrir, clique em "inmetrics.feature".

9º Passo: Automação em execução.