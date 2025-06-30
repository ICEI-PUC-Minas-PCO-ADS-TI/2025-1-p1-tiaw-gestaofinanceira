# Registro de testes de software

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>, <a href="08-Plano-testes-software.md"> Plano de testes de software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

Para cada caso de teste definido no <a href="08-Plano-testes-software.md"> Plano de testes de software</a>, realize o registro das evidências dos testes feitos na aplicação pela equipe, que comprovem que o critério de êxito foi alcançado (ou não!). Para isso, utilize uma ferramenta de captura de tela que mostre cada um dos casos de teste definidos. Observação: cada caso de teste deverá possuir um vídeo do tipo _screencast_ para caracterizar uma evidência do referido caso.

| **Caso de teste** 	| **CT-001 – Cadastrar receita/despesa** 	|
|:---:	|:---:	|
| Requisito associado | RF-001 - O sistema deve permitir que o usuário cadastre suas receitas e despesas. |
| Registro de evidência | [RF-001 - Receitas](videos/RF-001-1.mp4) / [RF-001 - Despesas](videos/RF-001-2.mp4) |

| **Caso de teste** 	| **CT-002 – Exibir gráfico de balanço** 	|
|:---:	|:---:	|
| Requisito associado | RF-002 - O sistema deve exibir um gráfico do balanço do mês. |
| Registro de evidência | [RF-002 - Balanço do mês](videos/RF-002.mp4) |

| **Caso de teste** 	| **CT-003 – Classificar receitas/despesas** 	|
|:---:	|:---:	|
| Requisito associado | RF-003 - O sistema deve permitir a classificação de receitas e despesas por categorias. |
| Registro de evidência | [RF-003 - Classificação por categorias](videos/RF-003.mp4) |

| **Caso de teste** 	| **CT-004 – Exibir saldo atual total** 	|
|:---:	|:---:	|
| Requisito associado  | RF-004 - O sistema deve exibir o saldo atual total. |
| Registro de evidência | [Evidência CT-004](videos/ct-004.mp4) |

| **Caso de teste** 	| **CT-005 – Exibir saldo mensal de receitas e despesas** 	|
|:---:	|:---:	|
| Requisito associado  |  RF-005 - O sistema deve exibir o saldo mensal de receitas e despesas. |
| Registro de evidência | [Evidência CT-005](videos/ct-005.mp4) |

| **Caso de teste** 	| **CT-006 – Exibir receitas e despesas recentes** 	|
|:---:	|:---:	|
| Requisito associado  |   RF-006 - O sistema deve exibir as receitas e despesas recentes |
| Registro de evidência | [Evidência CT-006](videos/ct-006.mp4) |

| **Caso de teste** 	| **CT-007 – Exibir saldo das contas** 	|
|:---:	|:---:	|
| Requisito associado |  RF-007 - O sistema deve exibir o saldo das contas do usuário |
| Registro de evidência | [Evidência CT-007](videos/ct-007.mp4) |

## Avaliação

Todos os testes realizados foram concluídos com sucesso, atendendo aos critérios de êxito definidos em cada caso de teste. Isso indica que a aplicação está funcionando conforme os requisitos especificados, proporcionando uma boa experiência ao usuário e cumprindo seus objetivos principais de controle financeiro.

Pontos fortes identificados:

- A interface demonstrou ser intuitiva, permitindo o cadastro, alteração e exclusão de receitas e despesas sem dificuldades.
- Os saldos totais, mensais e por conta foram atualizados corretamente após cada operação.
- Os gráficos apresentaram os dados de maneira clara e bem segmentada por categoria, ajudando na visualização do balanço mensal.

Pontos a melhorar, apesar da boa performance geral, algumas pequenas oportunidades de melhoria foram observadas:
- O tempo de resposta para atualização dos dados, em alguns momentos, poderia ser mais rápido.
- A ausência de mensagens de confirmação após operações (como exclusão de uma transação) pode gerar insegurança para o usuário.

O grupo pretende abordar essas melhorias nas próximas iterações por meio de:
- Otimizações no tempo de renderização das informações, especialmente nas seções de relatórios.
- Inserção de feedbacks visuais e mensagens de confirmação nas principais ações do sistema.
- Revisão da interface para garantir acessibilidade e clareza em todos os dispositivos.

<br>
Conclusão:
Os testes demonstraram que a aplicação está sólida, com suas funcionalidades principais plenamente operacionais. As melhorias apontadas não comprometem o uso, mas servirão para refinar ainda mais a experiência do usuário nas futuras versões.