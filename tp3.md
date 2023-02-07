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
**Descrição:**

**Relação com maus cheiros**

**Operações de refatoração**

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

**Descrição:**

**Relação com maus cheiros**

**Operações de refatoração**
