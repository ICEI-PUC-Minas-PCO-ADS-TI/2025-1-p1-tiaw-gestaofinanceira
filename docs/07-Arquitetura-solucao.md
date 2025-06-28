# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Documentação da Arquitetura da Solução
1. Visão Geral da Arquitetura
A arquitetura da solução proposta para o projeto Smart Finance segue o modelo cliente-servidor distribuído. Nesse modelo, o navegador (client-side) é responsável pela interface do usuário, enquanto o servidor (server-side) responde pelo fornecimento de arquivos estáticos e pela manipulação de dados simulada via JSON Server. O armazenamento de dados pode ocorrer localmente no navegador ou de forma persistente em um arquivo de banco de dados hospedado no servidor.

A imagem apresentada ilustra essa estrutura de maneira clara, destacando as requisições feitas pelo cliente para obter arquivos HTML, CSS, JS e imagens, além do consumo de dados via endpoints da API RESTful simulada (/usuários, /receitas, /contas, /despesas) utilizando o JSON Server conectado ao arquivo db.json.

2. Componentes da Solução
A solução é composta pelos seguintes elementos principais:

2.1 Navegador (Client-side)
Páginas Web (HTML + CSS + JS): Responsáveis por exibir a interface gráfica, capturar entradas do usuário, manipular o DOM e realizar requisições HTTP para o servidor.

Local Storage: Usado para armazenar temporariamente dados no navegador do usuário, como preferências, cache de informações ou sessões.

2.2 Hospedagem (Servidor)
Arquivos Estáticos: O servidor fornece os arquivos HTML, CSS, JS, imagens e módulos, que compõem a interface da aplicação.

JSON Server: Simula um backend RESTful, oferecendo endpoints para consulta, inserção e atualização de dados.

Banco de Dados (Simulado): Representado pelo arquivo db.json, serve como fonte de dados persistente utilizada pelo JSON Server.

2.3 API Externa (Opcional)
NewsAPI (ou APIs financeiras): Embora não apareça na imagem, o projeto pode ser estendido para consumir APIs externas, como serviços de cotação de moedas, notícias econômicas ou gráficos de investimento.

3. Fluxo de Dados e Interações
O funcionamento da aplicação segue o seguinte fluxo:

O navegador requisita os arquivos estáticos (index.html, style.css, app.js) ao servidor via HTTP.

O servidor entrega os arquivos, que são renderizados pelo navegador.

O arquivo JavaScript (app.js) realiza chamadas do tipo fetch para consumir dados dos endpoints do JSON Server.

Os dados retornados do backend (arquivo db.json) são utilizados para atualizar dinamicamente a interface.

Quando necessário, o navegador também pode gravar ou ler informações do localStorage.

Opcionalmente, o frontend pode acessar APIs externas para complementar os dados exibidos na interface.

4. Ambiente de Hospedagem da Aplicação
A aplicação pode ser hospedada em diversos ambientes, de acordo com os componentes utilizados:

Frontend (HTML, CSS, JS): Pode ser hospedado em plataformas de hospedagem estática como Vercel, Netlify ou GitHub Pages, que oferecem CDN, deploy automático e HTTPS gratuito.

Backend Simulado (JSON Server): Pode ser executado em ambientes como o Replit, ideal para protótipos e testes de APIs simuladas com base no db.json.

Backend Real (opcional): Em uma versão mais robusta da aplicação, um backend próprio (Node.js, .NET, etc.) e um banco de dados real (MongoDB, PostgreSQL, etc.) poderiam substituir o JSON Server.

APIs externas: Devem ser acessadas por meio de requisições HTTP (GET/POST) via JavaScript no navegador.

5. Pré-requisitos: Projeto de Interface
Para a implementação do projeto Smart Finance, os seguintes pré-requisitos devem ser atendidos:

HTML: Estruturação semântica e hierárquica das páginas.

CSS: Estilização responsiva, adaptada a diferentes tamanhos de tela.

JavaScript: Manipulação da interface, consumo de APIs e controle de armazenamento local.

Prototipação (Figma ou similar): Opcional, mas recomendada para validar a experiência do usuário (UX) antes da implementação definitiva.

![Arquitetura da solução](images/arquitetura.png)

## Funcionalidades

Funcionalidades
Esta seção apresenta as funcionalidades da solução Smart Finance.

Funcionalidade 1 - Visualização do Saldo e Transações Recentes

Permite ao usuário visualizar de forma rápida seu saldo atual, as receitas e despesas do mês, e um resumo das suas contas bancárias, além de apresentar as últimas transações de receita e despesa.

Estrutura de dados: Saldo, Receitas, Despesas, Contas, Histórico de Transações.

Instruções de acesso:

Abra o site e efetue o login.
A tela inicial ("Visão Geral") exibirá o saldo atual, as receitas e despesas do mês, o resumo das contas e as transações recentes.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 2 - Adicionar Nova Receita

Permite ao usuário registrar uma nova entrada de dinheiro no sistema, detalhando o título, descrição, valor, data, categoria e a conta em que o valor foi depositado.

Estrutura de dados: Receita (Título, Descrição, Valor, Data, Categoria, Conta).

Instruções de acesso:

Abra o site e efetue o login.
Na tela inicial ("Visão Geral"), clique no botão "+" no canto inferior direito.
No pop-up "Nova transação", clique em "Adicionar nova receita".
Preencha os campos: Título, Descrição, Valor, Data (preenchida automaticamente, mas editável), Categoria e Conta.
Clique em "Salvar nova receita" para registrar a entrada ou em "Limpar" para cancelar.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 3 - Adicionar Nova Despesa

Permite ao usuário registrar uma nova saída de dinheiro do sistema, detalhando o título, descrição, valor, data, categoria e a conta de onde o valor foi debitado.

Estrutura de dados: Despesa (Título, Descrição, Valor, Data, Categoria, Conta).

Instruções de acesso:

Abra o site e efetue o login.
Na tela inicial ("Visão Geral"), clique no botão "+" no canto inferior direito.
No pop-up "Nova transação", clique em "Adicionar nova despesa".
Preencha os campos: Título, Descrição, Valor, Data (preenchida automaticamente, mas editável), Categoria e Conta.
Clique em "Salvar nova despesa" para registrar a saída ou em "Limpar" para cancelar.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 4 - Seleção de Conta

Apresenta uma lista das contas cadastradas para o usuário selecionar ao adicionar uma nova receita ou despesa.

Estrutura de dados: Conta (Nome da Conta).

Instruções de acesso:

Ao adicionar uma nova receita ou despesa, clique no campo "Conta".
Uma janela pop-up ("Escolha uma conta") será exibida, listando as contas disponíveis (Ex: Carteira, Itaú).
Clique na conta desejada para selecioná-la.
Clique em "Selecionar conta" para confirmar ou em "Fechar" para cancelar.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 5 - Visualização de Relatório de Balanço Mensal

Apresenta um relatório visual do balanço financeiro do mês, mostrando as receitas e despesas em um gráfico, além dos valores totais de receitas, despesas e o saldo final do período.

Estrutura de dados: Receitas do Mês (Total), Despesas do Mês (Total), Balanço do Mês, representação visual das proporções.

Instruções de acesso:

Abra o site e efetue o login.
Acesse o menu principal e escolha a opção "Relatórios".
A tela exibirá o balanço do mês atual (Junho, 2025 no exemplo) com um gráfico de rosca, o total de receitas, o total de despesas e o balanço.
Utilize as setas "<" e ">" para navegar entre os meses.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 6 - Visualização de Relatório de Receitas por Categorias

Apresenta um gráfico de pizza detalhando a distribuição das receitas do mês por diferentes categorias, juntamente com o valor total de cada categoria.

Estrutura de dados: Receitas por Categoria (Nome da Categoria, Valor Total), representação visual das proporções.

Instruções de acesso:

Abra o site e efetue o login.
Acesse o menu principal e escolha a opção "Relatórios".
Role a página para baixo ou navegue até a seção "Receitas por categorias".
Um gráfico de pizza exibirá as categorias de receita (Ex: Salário, Outros, Investimentos, Freelance) com suas respectivas participações, e abaixo estará a lista com o valor total por categoria.
Tela da funcionalidade: ⚠️ COMPLETAR




Funcionalidade 7 - Visualização de Relatório de Despesas por Categorias

Apresenta um gráfico de pizza detalhando a distribuição das despesas do mês por diferentes categorias, juntamente com o valor total de cada categoria.

Estrutura de dados: Despesas por Categoria (Nome da Categoria, Valor Total), representação visual das proporções.

Instruções de acesso: ⚠️ COMPLETAR

Abra o site e efetue o login.
Acesse o menu principal e escolha a opção "Relatórios".
Role a página para baixo ou navegue até a seção "Despesas por categorias".
Um gráfico de pizza exibirá as categorias de despesa (Ex: Transporte, Lazer) com suas respectivas participações, e abaixo estará a lista com o valor total por categoria.

![Tela de funcionalidade](images/exemplo-funcionalidade.png)

 ⚠️ COMPLETAR


### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Contatos

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de dados 

Estrutura de dados - Usuários

Registro dos usuários do sistema, utilizados para login e para o perfil do sistema.

```json
  {
    "id": "1",
    "login": "admin",
    "senha": "123",
    "nome": "Administrador do Sistema",
    "email": "admin@abc.com"
  }
```

Estrutura de dados - Receitas

Detalhes das entradas de dinheiro registradas pelo usuário.

```json
  {
    "id": "2",
    "titulo": "Salário Mensal",
    "valor": "1500",
    "data": "2025-06-22",
    "categoria": "Salário",
    "frequencia": "unica",
    "parcelas": "",
    "observacao": "Salário referente ao mês de junho",
    "conta": "Carteira"
  }
```

Estrutura de dados - Despesas

Detalhes das saídas de dinheiro registradas pelo usuário.

```json
  {
    "id": "1",
    "titulo": "Transporte Urbano",
    "valor": "200",
    "data": "2025-06-18",
    "categoria": "Transporte",
    "tipo": "essencial",
    "frequencia": "unica",
    "parcelas": "",
    "observacao": "Gastos com transporte público no mês",
    "conta": "Carteira"
  }
```

Estrutura de dados - Categorias de Receitas

Lista de categorias predefinidas para classificar as receitas.

```json
  {
    "id": "1",
    "nome": "Salário",
    "icon": "dollar-sign"
  }
```

Estrutura de dados - Categorias de Despesas

Lista de categorias predefinidas para classificar as despesas.

```json
  {
    "id": "2",
    "nome": "Transporte",
    "icon": "car"
  }
```

Estrutura de dados - Contas

Contas financeiras (Ex: Carteira, Contas Bancárias) que o usuário possui.

```json
  {
    "id": "1",
    "nome": "Carteira",
    "cor": "var(--gray-100)"
  }
```

Estrutura de dados - Pagamento

Tipos de método de pagamento (embora no db.json pareça mais relacionado a contas ou tipos de origem/destino de dinheiro, vou manter o nome "Pagamento" como você indicou, ou podemos ajustar para "Meios de Pagamento" ou "Tipos de Conta/Origem").

```json
  {
    "id": "1",
    "nome": "Conta Corrente"
  }
```

### Módulos e APIs

Módulos e APIs
Esta seção apresenta os módulos e APIs utilizados na solução Smart Finance, detalhando as bibliotecas, frameworks e serviços externos que compõem a aplicação.

1. Imagens:

Ícones SVG (Embutidos no HTML / Lucide Icons): Os ícones da interface (como o cifrão de saldo, setas de tendência, e o ícone de olho para visibilidade do saldo) são diretamente inseridos como SVG no HTML ou provêm da biblioteca Lucide Icons.
2. Fontes:

Lucide Icons - https://lucide.dev/
Uso: Para a maioria dos ícones vetoriais utilizados na interface do usuário (ex: ícones de saldo, receitas, despesas, ícone de olho).
Fontes do Sistema: A tipografia da aplicação utiliza fontes padrão do sistema ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif).
3. Scripts e Frameworks Frontend:

JavaScript (Nativo): Toda a lógica de interatividade da interface, cálculos financeiros (saldo, receitas/despesas do mês), formatação de moeda e manipulação do DOM é realizada usando JavaScript puro.
Fetch API: Utilizada para fazer requisições assíncronas ao db.json para carregar os dados da aplicação.
CSS (Customizado): A estilização e o layout responsivo da aplicação são definidos em um arquivo CSS personalizado (style.css).
4. APIs Backend / Serviços:

JSON Server (ou Arquivo JSON Estático): A aplicação consome dados de um arquivo db.json, que atua como uma fonte de dados para usuários, receitas, despesas, categorias e contas. Isso geralmente é configurado com uma ferramenta como JSON Server para simular uma API RESTful em ambiente de desenvolvimento.
Uso: Persistência e acesso aos dados da aplicação (usuários, transações, categorias, contas).


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
