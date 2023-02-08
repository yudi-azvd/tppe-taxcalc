# Trabalho Prático 3

## Idiomático 
**Descrição:** utilizar expressões idiomáticas da linguagem em questão é 
importante para comunicar clara e rapidamente a itenção do trecho de código 
para outros programadores da linguagem.

Exemplo: um programdor iniciante em JavaScript (JS) poderia escrever um laço de 
repetição assim:

```js
for (let i = 0; i < arr.length; i++)
    console.log(arr[i])
```

Mas, de forma mais idiomática, esse trecho pode ser escrito assim:

```js
arr.forEach(el => console.log(el))
```

**Relação com maus cheiros**
- Laço de repetição com corpo que realiza muitas operações distintas e 
sequenciais

**Operações de refatoração**
- [Substituir laço de repetição por pipeline](https://refactoring.com/catalog/replaceLoopWithPipeline.html) (Martin Fowler)

## Simplicidade
**Descrição:**
É característica do sistema quando ele é fácil de entender, corrigir e estender.
É preferível que haja poucas funcionalidades com essa caracaterística do que 
todas as funcionalidades implementadas com base de código macarrão.

Código simples é trabalhoso de escrever, mas vale à pena a médio e longo prazo.

Código complicado possui as seguintes características:
- decomposição incorreta de componentes
- criação de threads sem necessidade
- má escolha de algoritmos
- nomenclatura confusa de variáveis, classes, funções/métodos
- mais módulos e dependêcias do que é estritamente necessário

**Relação com maus cheiros**
- Generalidade especutlativa: quando o código é genérico demais, o programador
previu que um dia poderiam ser utilizadas e o acrescentou preventivamente
- Método longo: quanto maior é o método, mais difícil é entendê-lo

**Operações de refatoração**: 
- Removeção de classes e funções não utilizadas
- Aglutinação de classes com funcionalidades semelhantes
- Dividir método longo em outros métodos com assinaturas mais explicativas
sobre seu comportamento

## Ausência de duplicidades
**Descrição:** acontece quando as rotinas comuns, mais essenciais para o problema
foram devidamente abstraídas em classes e métodos que podem ser facilmente 
reutilizados em um ou mais módulos. Em uma base de código sem duplicação é mais
fácil mudar rotinas que localmente que terão o efeito refletido em muitas outras
partes do sistema.

**Relação com maus cheiros**
- Classes longas
- Métodos longos

**Operações de refatoração**
- Extrair método
- Extrair classe
- Extrair variável

## Portabilidade 

**Descrição:**
É a capacidade do sistema em ser executado em diferentes plataformas (desktop, 
web, cloud, embarcados, Windows, Linux, MacOS etc). A abrangência dessa 
portabilidade pode facilmente complicar o design do código. Por isso é 
importante pensar nessa característica nas fases iniciais do projeto.

Se esse item não é bem pensando desde o início do projeto, pode ser muito 
difícil adicionar suporte a mais uma plataforma por causa das suposições que 
foram tomadas anteriormente e que são base do código.

**Relação com maus cheiros**
- Cirugia com rifle: uma mudança afeta várias classes

**Operações de refatoração**

Algumas soluções: 

- Abstrair a plataforma em um módulo (geralmente funcionalidades
que envolvem chamadas de SO) e implementar essa abstração para as plataformas 
desejadas
- (Não é bem refatoração, mas...) Um projeto que usa tecnologias Web como HTML, 
CSS e JavaScript, além de ter suporte natural dos mais populares navegadores, é
possível utilizar ferramentas como Electron, Tauri ou conceitos como PWA para 
construir aplicações desktop para vários SOs.


## Modularidade

**Descrição:** é a caractrística de um sistema que consiste na divisão da 
solução em partes menores, chamadas módulos, em que cada um resolve uma parte do 
problema independentemente das outras. Assim cada módulo tem apenas uma responsabilidade e é mais simples que o problema 
original.

A qualidade da modularidade se baseia no 
grau de coesão dos módulos e nível de acomplamento entre os eles:

- O grau de coesão se baseia no tanto que se relacionam as partes internas de um 
módulo, é quão bem elas funcionam juntas.
- Nível de acomplamento se refere ao nível de dependência de detalhes de 
implementação ou do funcionamento interno de outros módulo.

**Relação com maus cheiros**
- Cadeia de mensagens: chamadas sucessivas de métodos de diferentes objetos. 
Objeto A chama B, que chama C, que chama D etc.
- Intimidade inapropriada: um módulo pode ter acesso a métodos e atributos
muito obscuros de outro módulo que deveriam ser privadas.

**Operações de refatoração**
- Extrair método que contém as chamadas sucessivas.
- Ocultar delegação para não permitir que o cliente de uma classe
conheça o método que executa a delegação de uma tarefa.