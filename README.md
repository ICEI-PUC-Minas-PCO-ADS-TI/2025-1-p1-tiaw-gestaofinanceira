# Smart Finance

`CURSO: Análise e Desenvolvimento de Sistemas`

`DISCIPLINA: Trabalho Interdisciplinar Aplicações Web`

`1º semestre/2025`

O Smart Finance tem como principal objetivo oferecer uma solução digital simples, intuitiva e acessível para auxiliar usuários no controle de suas finanças pessoais. Através de uma aplicação web responsiva, buscamos facilitar o registro e a visualização de receitas e despesas, promovendo uma gestão financeira mais clara, organizada e consciente.

## Integrantes
 
* Gabriel Soares Cardoso Paiva
* Guilherme Emanoel Guimarães
* Gustavo de Faria Melo
* Samuel Aguiar Carvalho Gusmão
* Samuel Elias Alves Quirino
* Thiago Fernandes Lemos

## Professor

* Amália Soares Vieira de Vasconcelos 

## Instruções de utilização

O Smart Finance é uma aplicação web desenvolvida para auxiliar no controle de finanças pessoais. Com ele, o usuário pode registrar receitas, despesas e acompanhar seu saldo em tempo real.

Abaixo estão as instruções para instalar e executar a aplicação, seja localmente ou por meio do ambiente online.

Online: nossa aplicação está hospedade no Replit de forma gratuita, ou seja, o deploy não é permanente, o repositório do Replit pode ser acessado pelo seguinte link: [Repositório Smart Finance no Replit](https://replit.com/@acgsamuel92/SmartFinance) e a aplicação na web acessada por esse: [Smart Finance Aplicação Web](https://8f000477-ad8f-450e-8dd0-6c655c718eb2-00-1qlqz9hv6719k.picard.replit.dev/login.html) (Importante frisar que esse link corresponde ao repositório original e só estará online quando estiver em fase de "Run", em caso de cópia do repositório será gerado um novo link).

Ambiente local: para acessar nossa aplicação via ambiente local é preciso seguir alguns passos:

Antes de tudo, é necessário que modifique no arquivo [package.json](src/package.json) a linha 7 onde está: 

```
"start": "node index.js"
```

Por: 

```
"start": "json-server --watch ./db/db.json"
```

Para executar a aplicação de back-end e permitir o acesso ao seu site, é necessário instalar o Node.js em seu computador. Para isso, siga as instruções disponíveis no site do [**Node.js**](https://nodejs.org/), realizando o download da versão LTS (a versão mais estável do ambiente).

Assim que o Node.js estiver instalado em seu computador, deve-se abrir o terminal na pasta do seu projeto e executar o seguinte comando:

```
$> npm install
```

Isso permitirá que o NPM instale todos os pacotes necessários para a execução do back-end. O NPM é o aplicativo responsável por gerenciar as dependências de um projeto e instalar os pacotes do Node.js.

Em seguida, com os pacotes já instalados, basta executar o seguinte comando:

```
$> npm start
```


# Documentação

<ol>
<li><a href="docs/01-Contexto.md"> Documentação de contexto</a></li>
<li><a href="docs/02-Product-discovery.md"> Product discovery</a></li>
<li><a href="docs/03-Product-design.md"> Product design</a></li>
<li><a href="docs/04-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/05-Projeto-interface.md"> Projeto de interface</a></li>
<li><a href="docs/06-Template-padrao.md"> Template padrão da aplicação</a></li>
<li><a href="docs/07-Arquitetura-solucao.md"> Arquitetura da solução</a></li>
<li><a href="docs/08-Plano-testes-software.md"> Plano de testes de software</a></li>
<li><a href="docs/09-Registro-testes-software.md"> Registro de testes de software</a></li>
<li><a href="docs/10-Referencias.md"> Referências</a></li>
</ol>

# Código

* <a href="src/README.md">Código</a>

# Apresentação

* <a href="presentation/README.md">Apresentação do projeto</a>


