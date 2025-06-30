# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="03-Product-design.md">Especificação do projeto</a>.


| **Caso de teste**  | **CT-001 – Cadastrar receita e despesa**  |
|:---: |:---: |
| Requisito associado | RF-001 - O sistema deve permitir que o usuário cadastre suas receitas e despesas. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar uma nova receita ou despesa. |
| Passos | - Acessar a aplicação <br> - Clicar em "+" <br> - Clicar em "Adicionar nova receita ou nova despesa" <br> - Preencher Título, Descrição, Valor, Data, Categoria e Conta <br> - Clicar em "Salvar nova receita" |
| Critério de êxito | - Será exibido em Receitas recentes, Despesas recentes, Atualização de Saldo atual e Minhas contas |
| Responsável pela elaboração do caso de teste | Gabriel Soares |

<br>

| **Caso de teste**  | **CT-002 – Exibir gráfico de balanço do mês**  |
|:---: |:---: |
| Requisito associado | RF-002 - O sistema deve exibir um gráfico do balanço do mês. |
| Objetivo do teste | Verificar se o gráfico é gerado corretamente com os dados do mês. |
| Passos | - Acessar a aplicação <br> - Navegar até "Relatórios" <br> - Selecionar mês <br> - Verificar gráfico de pizza |
| Critério de êxito | - O gráfico reflete o saldo (receitas - despesas) do mês selecionado. |
| Responsável pela elaboração do caso de teste | Gabriel Soares |

<br>

| **Caso de teste**  | **CT-003 – Classificação de receitas e despesas por categoria**  |
|:---: |:---: |
| Requisito associado | RF-003 - O sistema deve permitir a classificação de receitas e despesas por categorias. |
| Objetivo do teste | Verificar se as transações podem ser filtradas por categoria. |
| Passos | - Acessar a aplicação <br> - Navegar até "Relatórios" <br> - Selecionar mês <br> - Desça a tela <br> - Verificar gráfico de pizza |
| Critério de êxito | - O gráfico reflete as categorias de receitas e despesas do mês selecionado. |
| Responsável pela elaboração do caso de teste | Gabriel Soares |

<br>

| **Caso de teste**  | **CT-004 – Exibir saldo atual total**  |
|:---: |:---: |
| Requisito associado | RF-004 - O sistema deve exibir o saldo atual total |
| Objetivo do teste | Verificar se a aplicação exibe o saldo atual total do usuário corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Visualizar o saldo atual total <br> - Adicionar uma receita ou despesa para verificar se o mesmo atualiza |
| Critério de êxito | - O saldo está sendo exibido corretamente. |
| Responsável pela elaboração do caso de teste | Samuel Aguiar |

<br>


| **Caso de teste**  | **CT-005 – Exibir saldo mensal de receitas e despesas**  |
|:---: |:---: |
| Requisito associado | RF-005 - O sistema deve exibir o saldo mensal de receitas e despesas. |
| Objetivo do teste | Verificar se a aplicação exibe o saldo mensal das receitas e despesas do usuário corretamente. |
| Passos |  - Acessar o navegador <br> - Efetuar login <br> - Visualizar o saldo atual total <br> - Adicionar uma receita ou despesa para verificar se o mesmo atualiza |
| Critério de êxito | - O saldo está sendo exibido corretamente. |
| Responsável pela elaboração do caso de teste | Samuel Aguiar |

<br>


| **Caso de teste**  | **CT-006 – Exibir receitas e despesas recentes**  |
|:---: |:---: |
| Requisito associado | RF-006 - O sistema deve exibir as receitas e despesas recentes	 |
| Objetivo do teste | Verificar se a aplicação exibe as receitas e despesas recentes do usuário corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Adicionar uma nova despesa <br> - Verificar se a mesma apareceu corretamente |
| Critério de êxito | - As receitas e despesas estão sendo exibidas corretamente. |
| Responsável pela elaboração do caso de teste | Samuel Aguiar |

<br>

| **Caso de teste**  | **CT-007 – Exibir saldo das contas**  |
|:---: |:---: |
| Requisito associado | RF-007 - O sistema deve exibir o saldo das contas do usuário	 |
| Objetivo do teste | Verificar se a aplicação exibe o saldo das contas do usuário corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Adicionar uma nova despesa <br> - Verificar o saldo da conta |
| Critério de êxito | - O saldo das contas do usuário estão sendo exibidas corretamente. |
| Responsável pela elaboração do caso de teste | Samuel Aguiar |

<br>

| **Caso de teste**  | **CT-008 – Exibir gráfico de receitas e despesas por categoria**  |
|:---: |:---: |
| Requisito associado | RF-008 - O sistema deve exibir gráficos de receitas e despesas por categoria.|
| Objetivo do teste | Verificar se a aplicação exibe os gráficos de receitas e despesas por categoria corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Acessar a aba de "Relatórios  |
| Critério de êxito | - O gráfico está exibindo receitas e despesas por categoria corretamente. |
| Responsável pela elaboração do caso de teste | Guilherme Emanoel|

<br>

| **Caso de teste**  | **CT-009 – Alteração de receitas e despesas**  |
|:---: |:---: |
| Requisito associado | RF-009 - O sistema deve permitir que o usuário altere suas receitas e despesas	 |
| Objetivo do teste | Verificar se a aplicação permite ao usuário alterar suas receitas e despesas corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Clicar em cima da receita ou despesa desejada <br> - Realizar as alterações e salvar |
| Critério de êxito | - A aplicação permite ao usuário alterar suas receitas e despesas corretamente. |
| Responsável pela elaboração do caso de teste | Guilherme Emanoel|

<br>

| **Caso de teste**  | **CT-010 – Exclusão de receitas e despesas**  |
|:---: |:---: |
| Requisito associado | RF-010 - O sistema deve permitir que o usuário exclua suas receitas e despesas	 |
| Objetivo do teste | Verificar se a aplicação permite que o usuário exclua suas receitas e despesas corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Clicar em cima da receita ou despesa desejada <br> - Realizar a exclusão |
| Critério de êxito | - A aplicação permite que o usuário exclua suas receitas e despesas corretamente. |
| Responsável pela elaboração do caso de teste | Guilherme Emanoel|

<br>

| **Caso de teste**  | **CT-011 – Adicionar descrição nas receitas e despesas**  |
|:---: |:---: |
| Requisito associado | RF-011 - O sistema deve permitir que o usuário adicione uma descrição nas suas receitas e despesas	 |
| Objetivo do teste | Verificar se a aplicação o usuário adicionar descrição nas suas receitas e despesas corretamente. |
| Passos | - Acessar o navegador <br> - Efetuar login <br> - Clicar no botão "+" <br> - Adicionar uma despesa ou receita <br> - Preencher o campo de descrição |
| Critério de êxito | - A aplicação permite ao usuário adicionar descrição nas suas receitas e despesas corretamente. |
| Responsável pela elaboração do caso de teste | Guilherme Emanoel|

<br>


