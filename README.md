# Calculadora de Imposto de Renda Receita Federal

Projeto para a disciplina de Técnicas de Programação em Plataformas
Emergentes da Universidade de Brasília.

O enunciado do trabalho está em [enunciado.md](./enunciado.md).

O código fonte está em [calculator.ts](src/calculator.ts).

Os testes estão em [calculator.spec.ts](src/tests/calculator.spec.ts).

## Observações
Alíquota efetiva é calculada em `getEffectiveRate()`.

Esse projeto foi desenvolvido seguindo o 
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Para procurar os commits de interesse, use

    git log --oneline | grep falsi

Ou:

    git log --oneline | grep dupli


Ou:

    git log --oneline | grep triang

Ou:

    git log --oneline | grep parametr


## Começando

Você precisa ter Node.js 16+ e npm, yarn ou pnpm pra rodar o projeto. Execute

```
npm i
```

Execute os testes

```
npm test
```


## Possíveis melhorias
Vou listar algumas possíveis melhorias para esse projeto:

**Implementação calculadora**
- Melhorar a interface pública de algum jeito. Para saber se essa interface está
boa mesmo só colocando-a em uma aplicação mais real como uma GUI
- Possilvemente dá pra aplicar refatoração objeto-método em `getEffectiveRate`
- mudar nome `getEffectiveRate` para algo como `calculate`. `getEffectiveRate`
deveria ser apenas um acessor
- precisa de um acessor para o imposto final (?)

**Testes**
- remover dados de dedução no teste de `getEffectiveRate()`(?). Aí vai
ter que recalcular as alíquotas efetivas
- teste que chamam o par de métodos `addIncome` e `addDeduction` podem
ser encapsulados em um `makeSut` para fazer parte do processo de setup do
teste aceitando array de rendas e deduções
- fatorar variável `label` em variável global
- trocar Jest por Vitest

**Avulsas**
- traduzir todos os nomes dos casos de teste para inglês
- usar table como documentação em alguns `each`s
[Referência](https://blog.codeleak.pl/2021/12/parameterized-tests-with-jest.html).


## Referências

- https://www.gov.br/pt-br/servicos/calcular-aliquota-efetiva-do-imposto-de-renda
- https://www27.receita.fazenda.gov.br/simulador-irpf/
- [Como funciona o imposto de renda](https://www.youtube.com/watch?v=ZZmqf6ElDZw)
- [Tabela do imposto de renda 2022 entenda como calcular as alíquotas do ir passo a passo](https://www.youtube.com/watch?v=4HFGzrSn654)