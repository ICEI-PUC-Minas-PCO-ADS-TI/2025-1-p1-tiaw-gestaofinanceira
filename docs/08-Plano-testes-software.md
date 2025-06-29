# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="03-Product-design.md"> Especificação do projeto</a></span>, <a href="05-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="03-Product-design.md">Especificação do projeto</a>.

Por exemplo:

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


## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
