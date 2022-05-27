# 「重学 JavaScript」作用域和闭包

## 作用域

> 理解 JavaScript 的作用域、作用域链和内部原理

### 1.1 作用域

javascript 拥有一套设计良好的规则来存储变量，并且之后可以方便地找到这些变量，这套规则被称为**作用域**。

作用域就是代码的执行环境，全局执行环境就是全局作用域，函数的执行环境就是私有作用域，它们都是栈内存。

### 1.2 作用域链

当代码在一个环境中执行时，会创建变量对象的一个作用域链（作用域形成的链条）,由于变量的查找是沿着作用域链来实现的，所以也称**作用域链**为变量查找的机制。

- 作用域链的前端，始终都是当前执行的代码所在环境的变量对象
- 作用域链中的下一个对象来自于外部环境，而在下一个变量对象则来自下一个外部环境，一直到全局执行环境
- 全局执行环境的变量对象始终都是作用域链上的最后一个对象

> 内部环境可以通过作用域链访问所有外部环境，但外部环境不能访问内部环境的任何变量和函数。

### 1.3 内部原理

- **编译**

  以 var a = 2;为例，说明 javascript 的内部编译过程，主要包括以下三步：

  - 分词(tokenizing)

    把由字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元(token)

    var a = 2;被分解成为下面这些词法单元：var、a、=、2、;。这些词法单元组成了一个词法单元流数组

    ```js
    [
      "var": "keyword",
      "a": "identifier",
      "=": "assignment",
      "2": "integer",
      ";": "eos" (end of statement)
    ]
    ```

  - 解析(parsing)

    把词法单元流数组转换成一个由元素逐级嵌套所组成的代表程序语法结构的树，这个树被称为“抽象语法树” (Abstract Syntax Tree, AST)

    var a = 2;的抽象语法树中有一个叫 VariableDeclaration 的顶级节点，接下来是一个叫 Identifier(它的值是 a)的子节点，以及一个叫 AssignmentExpression 的子节点，且该节点有一个叫 Numericliteral(它的值是 2)的子节点

    ```js
    {
      operation: "=",
      left: {
        keyword: "var",
        right: "a"
      }
      right: "2"
    }
    ```

  - 代码生成

    将 AST 转换为可执行代码的过程被称为代码生成

    var a=2;的抽象语法树转为一组机器指令，用来创建一个叫作 a 的变量(包括分配内存等)，并将值 2 储存在 a 中

    实际上，javascript 引擎的编译过程要复杂得多，包括大量优化操作，上面的三个步骤是编译过程的基本概述

    任何代码片段在执行前都要进行编译，大部分情况下编译发生在代码执行前的几微秒。javascript 编译器首先会对 var a=2;这段程序进行编译，然后做好执行它的准备，并且通常马上就会执行它

- **执行**

  简而言之，编译过程就是编译器把程序分解成词法单元(token)，然后把词法单元解析成语法树(AST)，再把语法树变成机器指令等待执行的过程

  实际上，代码进行编译，还要执行。下面仍然以 var a = 2;为例，深入说明编译和执行过程

  - 编译

    - 编译器查找作用域是否已经有一个名称为 a 的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为 a

    - 编译器将 var a = 2;这个代码片段编译成用于执行的机器指令

    > 依据编译器的编译原理，javascript 中的重复声明是合法的

    ```js
    // test在作用域中首次出现，所以声明新变量，并将20赋值给test
    var test = 20;
    // test在作用域中已经存在，直接使用，将20的赋值替换成30
    var test = 30;
    ```

  - 执行

    - 引擎运行时会首先查询作用域，在当前的作用域集合中是否存在一个叫作 a 的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量

    - 如果引擎最终找到了变量 a，就会将 2 赋值给它。否则引擎会抛出一个异常

- **查询**

  在引擎执行的第一步操作中，对变量 a 进行了查询，这种查询叫做 LHS 查询。实际上，引擎查询共分为两种：LHS 查询和 RHS 查询

  从字面意思去理解，当变量出现在赋值操作的左侧时进行 LHS 查询，出现在右侧时进行 RHS 查询

  更准确地讲，RHS 查询与简单地查找某个变量的值没什么区别，而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值

  ```js
  function foo(a) {
    console.log(a); // 2
  }
  foo(2);
  ```

  这段代码中，总共包括 4 个查询，分别是：

  1、foo(...)对 foo 进行了 RHS 引用

  2、函数传参 a = 2 对 a 进行了 LHS 引用

  3、console.log(...)对 console 对象进行了 RHS 引用，并检查其是否有一个 log 的方法

  4、console.log(a)对 a 进行了 RHS 引用，并把得到的值传给了 console.log(...)

- **嵌套**

  在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域（也就是全局作用域）为止

  ```js
  function foo(a) {
    console.log(a + b);
  }
  var b = 2;
  foo(2); // 4
  ```

  行 RHS 引用，没有找到；接着，引擎在全局作用域中查找 b，成功找到后，对其进行 RHS 引用，将 2 赋值给 b

- **异常**

  为什么区分 LHS 和 RHS 是一件重要的事情？因为在变量还没有声明（在任何作用域中都无法找到变量）的情况下，这两种查询的行为不一样

  - RHS

    - 如果 RHS 查询失败，引擎会抛出 ReferenceError(引用错误)异常

    ```js
    // 对b进行RHS查询时，无法找到该变量。也就是说，这是一个“未声明”的变量
    function foo(a) {
      a = b;
    }
    foo(); // ReferenceError: b is not defined
    ```

    - 如果 RHS 查询找到了一个变量，但尝试对变量的值进行不合理操作，比如对一个非函数类型值进行函数调用，或者引用 null 或 undefined 中的属性，引擎会抛出另外一种类型异常：TypeError(类型错误)异常

    ```js
    function foo() {
      var b = 0;
      b();
    }
    foo(); // TypeError: b is not a function
    ```

  - LHS

    - 当引擎执行 LHS 查询时，如果无法找到变量，全局作用域会创建一个具有该名称的变量，并将其返还给引擎

    ```js
    function foo() {
      a = 1;
    }
    foo();
    console.log(a); // 1
    ```

    - 如果在严格模式中 LHS 查询失败时，并不会创建并返回一个全局变量，引擎会抛出同 RHS 查询失败时类似的 ReferenceError 异常

    ```js
    function foo() {
      "use strict";
      a = 1;
    }
    foo();
    console.log(a); // ReferenceError: a is not defined
    ```

- **原理**

  ```js
  function foo(a) {
    console.log(a);
  }
  foo(2);
  ```

  以上面这个代码片段来说明作用域的内部原理，分为以下几步：

  【1】引擎需要为 foo(...)函数进行 RHS 引用，在全局作用域中查找 foo。成功找到并执行

  【2】引擎需要进行 foo 函数的传参 a=2，为 a 进行 LHS 引用，在 foo 函数作用域中查找 a。成功找到，并把 2 赋值给 a

  【3】引擎需要执行 console.log(...)，为 console 对象进行 RHS 引用，在 foo 函数作用域中查找 console 对象。由于 console 是个内置对象，被成功找到

  【4】引擎在 console 对象中查找 log(...)方法，成功找到

  【5】引擎需要执行 console.log(a)，对 a 进行 RHS 引用，在 foo 函数作用域中查找 a，成功找到并执行

  【6】于是，引擎把 a 的值，也就是 2 传到 console.log(...)中

  【7】最终，控制台输出 2

## 词法作用域和动态作用域

### 2.1 词法作用域

编译器的第一个工作阶段叫作分词，就是把由字符组成的字符串分解成词法单元。这个概念是理解词法作用域的基础

简单地说，词法作用域就是定义在词法阶段的作用域，是由写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变

- **关系**

无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定

```js
function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2); // 2 4 12
```

在这个例子中有三个逐级嵌套的作用域。为了帮助理解，可以将它们想象成几个逐级包含的气泡

![image](https://user-gold-cdn.xitu.io/2020/3/12/170cc24dd94ba66e?w=905&h=563&f=png&s=12075)

作用域气泡由其对应的作用域块代码写在哪里决定，它们是逐级包含的

气泡 1 包含着整个全局作用域，其中只有一个标识符：foo

气泡 2 包含着 foo 所创建的作用域，其中有三个标识符：a、bar 和 b

气泡 3 包含着 bar 所创建的作用域，其中只有一个标识符：c

- **查找**

作用域气泡的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎用这些信息来查找标识符的位置

在代码片段中，引擎执行 console.log(...)声明，并查找 a、b 和 c 三个变量的引用。它首先从最内部的作用域，也就是 bar(...)函数的作用域开始查找。引擎无法在这里找到 a，因此会去上一级到所嵌套的 foo(...)的作用域中继续查找。在这里找到了 a，因此引擎使用了这个引用。对 b 来讲也一样。而对 c 来说，引擎在 bar(...)中找到了它

[注意]词法作用域查找只会查找一级标识符，如果代码引用了 foo.bar.baz，词法作用域查找只会试图查找 foo 标识符，找到这个变量后，对象属性访问规则分别接管对 bar 和 baz 属性的访问

```js
foo = {
  bar: {
    baz: 1,
  },
};
console.log(foo.bar.baz); // 1
```

- **遮蔽**

作用域查找从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止

在多层的嵌套作用域中可以定义同名的标识符，这叫作“遮蔽效应”，内部的标识符“遮蔽”了外部的标识符

```js
var a = 0;
function test() {
  var a = 1;
  console.log(a); // 1
}
test();
```

全局变量会自动为全局对象的属性，因此可以不直接通过全局对象的词法名称，而是间接地通过对全局对象属性的引用来对其进行访问

```js
var a = 0;
function test() {
  var a = 1;
  console.log(window.a); //0
}
test();
```

通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量如果被遮蔽了，无论如何都无法被访问到

### 2.2 动态作用域

javascript 使用的是词法作用域，它最重要的特征是它的定义过程发生在代码的书写阶段

那为什么要介绍动态作用域呢？实际上动态作用域是 javascript 另一个重要机制 this 的表亲。作用域混乱多数是因为词法作用域和 this 机制相混淆，傻傻分不清楚

动态作用域并不关心函数和作用域是如何声明以及在任何处声明的，只关心它们从何处调用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套

```js
var a = 2;
function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  foo();
}
bar();
```

【1】如果处于词法作用域，也就是现在的 javascript 环境。变量 a 首先在 foo()函数中查找，没有找到。于是顺着作用域链到全局作用域中查找，找到并赋值为 2。所以控制台输出 2

【2】如果处于动态作用域，同样地，变量 a 首先在 foo()中查找，没有找到。这里会顺着调用栈在调用 foo()函数的地方，也就是 bar()函数中查找，找到并赋值为 3。所以控制台输出 3

两种作用域的区别，简而言之，词法作用域是在定义时确定的，而动态作用域是在运行时确定的

## 执行上下文

> 理解 JavaScript 的执行上下文栈，可以应用堆栈信息快速定位问题

### 3.1 执行上下文

- 全局执行上下文： 这是默认的、最基础的执行上下文。不在任何函数中的代码都位于全局执行上下文中。它做了两件事：1. 创建一个全局对象，在浏览器中这个全局对象就是 window 对象。2. 将 this 指针指向这个全局对象。一个程序中只能存在一个全局执行上下文。
- 函数执行上下文： 每次调用函数时，都会为该函数创建一个新的执行上下文。每个函数都拥有自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在任意数量的函数执行上下文。每当一个新的执行上下文被创建，它都会按照特定的顺序执行一系列步骤，具体过程将在本文后面讨论。
- Eval 函数执行上下文： 运行在 eval 函数中的代码也获得了自己的执行上下文，但由于 Javascript 开发人员不常用 eval 函数，所以在这里不再讨论。

### 3.2 执行栈

执行栈，在其他编程语言中也被叫做调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。

当 JavaScript 引擎首次读取你的脚本时，它会创建一个全局执行上下文并将其推入当前的执行栈。每当发生一个函数调用，引擎都会为该函数创建一个新的执行上下文并将其推到当前执行栈的顶端。

引擎会运行执行上下文在执行栈顶端的函数，当此函数运行完成后，其对应的执行上下文将会从执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文。

让我们通过下面的代码示例来理解这一点：

```js
let a = "Hello World!";

function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}

function second() {
  console.log("Inside second function");
}

first();
console.log("Inside Global Execution Context");
```

![](https://user-gold-cdn.xitu.io/2020/3/12/170cc24dd97da3b9?w=550&h=98&f=png&s=11766)

当上述代码在浏览器中加载时，JavaScript 引擎会创建一个全局执行上下文并且将它推入当前的执行栈。当调用  `first()`  函数时，JavaScript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。

当在  `first()`  函数中调用  `second()`  函数时，Javascript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。当  `second()`  函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文，即  `first()`  函数的执行上下文。

当  `first()`  函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到全局执行上下文。一旦所有代码执行完毕，Javascript 引擎把全局执行上下文从执行栈中移除。

### 3.3 执行上下文是如何被创建的

到目前为止，我们已经看到了 JavaScript 引擎如何管理执行上下文，现在就让我们来理解 JavaScript 引擎是如何创建执行上下文的。

执行上下文分两个阶段创建： **1）创建阶段；** **2）执行阶段**

### 3.4 创建阶段

在任意的 JavaScript 代码被执行前，执行上下文处于创建阶段。在创建阶段中总共发生了三件事情：

- 确定  **this**  的值，也被称为  **This Binding** 。
- **LexicalEnvironment（词法环境）**  组件被创建。
- **VariableEnvironment（变量环境）**  组件被创建。

因此，执行上下文可以在概念上表示如下：

```js
ExecutionContext = {
  ThisBinding = <this value>,
  LexicalEnvironment = { ... },
  VariableEnvironment = { ... },
}
```

This Binding:

在全局执行上下文中， `this`  的值指向全局对象，在浏览器中， `this`  的值指向 window 对象。

在函数执行上下文中， `this`  的值取决于函数的调用方式。如果它被一个对象引用调用，那么  `this`  的值被设置为该对象，否则  `this`  的值被设置为全局对象或  `undefined` （严格模式下）。例如：

```js
let person = {
  name: "peter",
  birthYear: 1994,
  calcAge: function() {
    console.log(2018 - this.birthYear);
  },
};

person.calcAge();
// 'this' 指向 'person', 因为 'calcAge' 是被 'person' 对象引用调用的。

let calculateAge = person.calcAge;
calculateAge();
// 'this' 指向全局 window 对象,因为没有给出任何对象引用
```

#### 3.4.1 词法环境（Lexical Environment）

官方 ES6 文档将词法环境定义为：

词法环境是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义标识符与特定变量和函数的关联关系。词法环境由环境记录（environment record）和可能为空引用（null）的外部词法环境组成。

简而言之，词法环境是一个包含  **标识符变量映射**  的结构。（这里的  **标识符**  表示变量/函数的名称， **变量**  是对实际对象【包括函数类型对象】或原始值的引用）

在词法环境中，有两个组成部分：（1） **环境记录（environment record）** （2） **对外部环境的引用**

1.  **环境记录**  是存储变量和函数声明的实际位置。
2.  **对外部环境的引用**  意味着它可以访问其外部词法环境。

词法环境有两种类型：

- 全局环境（在全局执行上下文中）是一个没有外部环境的词法环境。全局环境的外部环境引用为  **null** 。它拥有一个全局对象（window 对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量， `this`  的值指向这个全局对象。
- 函数环境，用户在函数中定义的变量被存储在  **环境记录**  中。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。

注意：对于  **函数环境**  而言， **环境记录**  还包含了一个  `arguments`  对象，该对象包含了索引和传递给函数的参数之间的映射以及传递给函数的参数的  **长度（数量）** 。例如，下面函数的  `arguments`  对象如下所示：

```js
function foo(a, b) {
var c = a + b;
}
foo(2, 3);

// arguments 对象
Arguments: {0: 2, 1: 3, length: 2},
```

环境记录同样有两种类型（如下所示）：

- **声明性环境记录**  存储变量、函数和参数。一个函数环境包含声明性环境记录。
- **对象环境记录**  用于定义在全局执行上下文中出现的变量和函数的关联。全局环境包含对象环境记录。

抽象地说，词法环境在伪代码中看起来像这样：

```js
GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      outer: <null>
    }
  }
}

FunctionExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      outer: <Global or outer function environment reference>
    }
  }
}
```

#### 3.4.2 变量环境:

它也是一个词法环境，其  `EnvironmentRecord`  包含了由  **VariableStatements**  在此执行上下文创建的绑定。

如上所述，变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。

在 ES6 中， **LexicalEnvironment**  组件和  **VariableEnvironment**  组件的区别在于前者用于存储函数声明和变量（ `let`  和  `const` ）绑定，而后者仅用于存储变量（ `var` ）绑定。

让我们结合一些代码示例来理解上述概念：

```js
let a = 20;
const b = 30;
var c;

function multiply(e, f) {
  var g = 20;
  return e * f * g;
}

c = multiply(20, 30);
```

执行上下文如下所示：

```js
GlobalExectionContext = {
  ThisBinding: <Global Object>,
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {
  ThisBinding: <Global Object>,
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

注意：只有在遇到函数  `multiply`  的调用时才会创建函数执行上下文。

你可能已经注意到了  `let`  和  `const`  定义的变量没有任何与之关联的值，但  `var`  定义的变量设置为  `undefined` 。

这是因为在创建阶段，代码会被扫描并解析变量和函数声明，其中函数声明存储在环境中，而变量会被设置为  `undefined` （在  `var`  的情况下）或保持未初始化（在  `let`  和  `const`  的情况下）。

这就是为什么你可以在声明之前访问  `var`  定义的变量（尽管是  `undefined` ），但如果在声明之前访问  `let`  和  `const`  定义的变量就会提示引用错误的原因。

这就是我们所谓的变量提升。

### 3.5 执行阶段

这是整篇文章中最简单的部分。在此阶段，完成对所有变量的分配，最后执行代码。

注：在执行阶段，如果 Javascript 引擎在源代码中声明的实际位置找不到  `let`  变量的值，那么将为其分配  `undefined`  值。

### 3.6 错误堆栈的裁剪

Node.js 才支持这个特性，通过 Error.captureStackTrace 来实现，Error.captureStackTrace 接收一个 object 作为第 1 个参数，以及可选的 function 作为第 2 个参数。其作用是捕获当前的调用栈并对其进行裁剪，捕获到的调用栈会记录在第 1 个参数的 stack 属性上，裁剪的参照点是第 2 个参数，也就是说，此函数之前的调用会被记录到调用栈上面，而之后的不会。

让我们用代码来说明，首先，把当前的调用栈捕获并放到 myObj 上：

```js
const myObj = {};
function c() {}
function b() {
  // 把当前调用栈写到 myObj 上
  Error.captureStackTrace(myObj);
  c();
}
function a() {
  b();
}

// 调用函数 a
a();

// 打印 myObj.stack
console.log(myObj.stack);

// 输出会是这样
//    at b (repl:3:7) <-- Since it was called inside B, the B call is the last entry in the stack
//    at a (repl:2:1)
//    at repl:1:1 <-- Node internals below this line
//    at realRunInThisContextScript (vm.js:22:35)
//    at sigintHandlersWrap (vm.js:98:12)
//    at ContextifyScript.Script.runInThisContext (vm.js:24:12)
//    at REPLServer.defaultEval (repl.js:313:29)
//    at bound (domain.js:280:14)
//    at REPLServer.runBound [as eval] (domain.js:293:12)
//    at REPLServer.onLine (repl.js:513:10)
```

上面的调用栈中只有 a -> b，因为我们在 b 调用 c 之前就捕获了调用栈。现在对上面的代码稍作修改，然后看看会发生什么：

```js
const myObj = {};
function d() {
  // 我们把当前调用栈存储到 myObj 上，但是会去掉 b 和 b 之后的部分
  Error.captureStackTrace(myObj, b);
}
function c() {
  d();
}
function b() {
  c();
}
function a() {
  b();
}

// 执行代码
a();

// 打印 myObj.stack
console.log(myObj.stack);

// 输出如下
//    at a (repl:2:1) <-- As you can see here we only get frames before b was called
//    at repl:1:1 <-- Node internals below this line
//    at realRunInThisContextScript (vm.js:22:35)
//    at sigintHandlersWrap (vm.js:98:12)
//    at ContextifyScript.Script.runInThisContext (vm.js:24:12)
//    at REPLServer.defaultEval (repl.js:313:29)
//    at bound (domain.js:280:14)
//    at REPLServer.runBound [as eval] (domain.js:293:12)
//    at REPLServer.onLine (repl.js:513:10)
//    at emitOne (events.js:101:20)
```

在这段代码里面，因为我们在调用 Error.captureStackTrace 的时候传入了 b，这样 b 之后的调用栈都会被隐藏。

现在你可能会问，知道这些到底有啥用？如果你想对用户隐藏跟他业务无关的错误堆栈（比如某个库的内部实现）就可以试用这个技巧。

### 3.7 错误调试

#### 3.7.1 Error 对象和错误处理

当程序运行出现错误时, 通常会抛出一个 Error 对象. Error 对象可以作为用户自定义错误对象继承的原型.

Error.prototype 对象包含如下属性：

constructor–指向实例的构造函数

message–错误信息

name–错误的名字(类型)

上述是 Error.prototype 的标准属性, 此外, 不同的运行环境都有其特定的属性. 在例如 Node, Firefox, Chrome, Edge, IE 10+, Opera 以及 Safari 6+

这样的环境中, Error 对象具备 stack 属性, 该属性包含了错误的堆栈轨迹. 一个错误实例的堆栈轨迹包含了自构造函数之后的所有堆栈结构.

#### 3.7.2 如何查看调用栈

只查看调用栈：console.trace

```js
a();
function a() {
  b();
}
function b() {
  c();
}
function c() {
  let aa = 1;
}
console.trace();
```

#### 3.7.3 debugger 打断点形式

## this

> this 的原理以及几种不同使用场景的取值

### 4.1 作为对象方法调用

在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象

```js
var test = {
  a: 0,
  b: 0,
  get: function() {
    return this.a;
  },
};
```

### 4.2 作为函数调用

函数也可以直接被调用，此时 this 绑定到全局对象。在浏览器中，window 就是该全局对象。比如下面的例子：函数被调用时，this 被绑定到全局对象，

接下来执行赋值语句，相当于隐式的声明了一个全局变量，这显然不是调用者希望的。

```js
function makeNoSense(x) {
  this.x = x;
}
```

### 4.3 作为构造函数调用

javaScript 支持面向对象式编程，与主流的面向对象式编程语言不同，JavaScript 并没有类（class）的概念，而是使用基于原型（prototype）的继承方式。

相应的，JavaScript 中的构造函数也很特殊，如果不使用 new 调用，则和普通函数一样。作为又一项约定俗成的准则，构造函数以大写字母开头，

提醒调用者使用正确的方式调用。如果调用正确，this 绑定到新创建的对象上。

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
```

### 4.4 在 call 或者 apply，bind 中调用

让我们再一次重申，在 JavaScript 中函数也是对象，对象则有方法，apply 和 call 就是函数对象的方法。

这两个方法异常强大，他们允许切换函数执行的上下文环境（context），即 this 绑定的对象。

很多 JavaScript 中的技巧以及类库都用到了该方法。让我们看一个具体的例子：

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.moveTo = function(x, y) {
    this.x = x;
    this.y = y;
  };
}

var p1 = new Point(0, 0);
var p2 = { x: 0, y: 0 };
p1.moveTo(1, 1);
p1.moveTo.apply(p2, [10, 10]);
```

## 闭包

> 闭包的实现原理和作用，可以列举几个开发中闭包的实际应用

### 5.1 闭包的概念

- 指有权访问另一个函数作用域中的变量的函数，一般情况就是在一个函数中包含另一个函数。

### 5.2 闭包的作用

- 访问函数内部变量、保持函数在环境中一直存在，不会被垃圾回收机制处理

因为函数内部声明 的变量是局部的，只能在函数内部访问到，但是函数外部的变量是对函数内部可见的，这就是作用域链的特点了。

子级可以向父级查找变量，逐级查找，找到为止

因此我们可以在函数内部再创建一个函数，这样对内部的函数来说，外层函数的变量都是可见的，然后我们就可以访问到他的变量了。

```js
function bar() {
  //外层函数声明的变量
  var value = 1;

  function foo() {
    console.log(value);
  }
  return foo();
}
var bar2 = bar;
//实际上bar()函数并没有因为执行完就被垃圾回收机制处理掉
//这就是闭包的作用，调用bar()函数，就会执行里面的foo函数，foo这时就会访问到外层的变量
bar2();
```

foo（）包含 bar（）内部作用域的闭包，使得该作用域能够一直存活，不会被垃圾回收机制处理掉，这就是闭包的作用，以供 foo（）在任何时间进行引用。

### 5.3 闭包的优点

- 方便调用上下文中声明的局部变量
- 逻辑紧密，可以在一个函数中再创建个函数，避免了传参的问题

### 5.4 闭包的缺点

- 因为使用闭包，可以使函数在执行完后不被销毁，保留在内存中，如果大量使用闭包就会造成内存泄露，内存消耗很大

### 5.5 闭包在实际中的应用

```js
function addFn(a, b) {
  return function() {
    console.log(a + "+" + b);
  };
}
var test = addFn(a, b);
setTimeout(test, 3000);
```

一般 setTimeout 的第一个参数是个函数，但是不能传值。如果想传值进去，可以调用一个函数返回一个内部函数的调用，将内部函数的调用传给 setTimeout。内部函数执行所需的参数，外部函数传给他，在 setTimeout 函数中也可以访问到外部函数。

## 堆栈溢出和内存泄漏

> 理解堆栈溢出和内存泄漏的原理，如何防止

### 6.1 内存泄露

- 申请的内存执行完后没有及时的清理或者销毁，占用空闲内存，内存泄露过多的话，就会导致后面的程序申请不到内存。因此内存泄露会导致内部内存溢出

### 6.2 堆栈溢出

- 内存空间已经被申请完，没有足够的内存提供了

### 6.3 标记清除法

在一些编程软件中，比如 c 语言中，需要使用 malloc 来申请内存空间，再使用 free 释放掉，需要手动清除。而 js 中是有自己的垃圾回收机制的，一般常用的垃圾收集方法就是标记清除。

标记清除法：在一个变量进入执行环境后就给它添加一个标记：进入环境，进入环境的变量不会被释放，因为只要执行流进入响应的环境，就可能用到他们。当变量离开环境后，则将其标记为“离开环境”。

### 6.4 常见的内存泄露的原因

- 全局变量引起的内存泄露
- 闭包
- 没有被清除的计时器

### 6.5 解决方法

- 减少不必要的全局变量
- 减少闭包的使用（因为闭包会导致内存泄露）
- 避免死循环的发生

## 如何处理循环的异步操作

### 7.1 使用自执行函数

1、当自执行函数在循环当中使用时，自执行函数会在循环结束之后才会运行。比如你在自执行函数外面定义一个数组，在自执行函数当中给这个数组追加内容，你在自执行函数之外输出时，会发现这个数组当中什么都没有，这就是因为自执行函数会在循环运行完后才会执行。

2、当自执行函数在循环当中使用时，要是自执行函数当中嵌套 ajax，那么循环当中的下标 i 就不会传进 ajax 当中，需要在 ajax 外面把下标 i 赋值给一个变量，在 ajax 中直接调用这个变量就可以了。

例子：

```js
$.ajax({
  type: "GET",
  dataType: "json",
  url: "***",
  success: function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
      (function(i, abbreviation) {
        $.ajax({
          type: "GET",
          url: "/api/faults?abbreviation=" + encodeURI(abbreviation),
          dataType: "json",
          success: function(result) {
            //获取数据后做的事情
          },
        });
      })(i, data[i].abbreviation);
    }
  },
});
```

### 7.2 使用递归函数

所谓的递归函数就是在函数体内调用本函数。使用递归函数一定要注意，处理不当就会进入死循环。

```js
const asyncDeal = (i) = > {
    if (i < 3) {
        $.get('/api/changeParts/change_part_standard?part=' + data[i].change_part_name, function(res) {
            //获取数据后做的事情
            i++;
            asyncDeal(i);
        })
    } else {
        //异步完成后做的事情
    }
};
asyncDeal(0);
```

### 7.3 使用 async/await

- async/await 特点

async/await 更加语义化，async 是“异步”的简写，async function 用于申明一个 function 是异步的； await，可以认为是 async wait 的简写， 用于等待一个异步方法执行完成；

async/await 是一个用同步思维解决异步问题的方案（等结果出来之后，代码才会继续往下执行）

可以通过多层 async function 的同步写法代替传统的 callback 嵌套

- async function 语法

自动将常规函数转换成 Promise，返回值也是一个 Promise 对象

只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数

异步函数内部可以使用 await

- await 语法

await 放置在 Promise 调用之前，await 强制后面点代码等待，直到 Promise 对象 resolve，得到 resolve 的值作为 await 表达式的运算结果

await 只能在 async 函数内部使用,用在普通函数里就会报错

```js
const asyncFunc = function(i) {
  return new Promise(function(resolve) {
    $.get(url, function(res) {
      resolve(res);
    });
  });
};
const asyncDeal = async function() {
  for (let i = 0; i < data.length; i++) {
    let res = await asyncFunc(i);
    //获取数据后做的事情
  }
};
asyncDeal();
```

## 模块化

> 理解模块化解决的实际问题，可列举几个模块化方案并理解其中原理

### 8.1 CommonJS 规范（同步加载模块）

允许模块通过 require 方法来同步加载所要依赖的其他模块，然后通过 exports 或 module.exports 来导出需要暴露的接口。

使用方式：

```js
// 导入
require("module");
require("../app.js");
// 导出
exports.getStoreInfo = function() {};
module.exports = someValue;
```

优点：

- 简单容易使用
- 服务器端模块便于复用

缺点:

- 同步加载方式不适合在浏览器环境中使用，同步意味着阻塞加载，浏览器资源是异步加载的
- 不能非阻塞的并行加载多个模块

为什么浏览器不能使用同步加载，服务端可以？

- 因为模块都放在服务器端，对于服务端来说模块加载时
- 而对于浏览器端，因为模块都放在服务器端，加载的时间还取决于网速的快慢等因素，如果需要等很长时间，整个应用就会被阻塞。
- 因此，浏览器端的模块，不能采用"同步加载"（CommonJs），只能采用"异步加载"（AMD）。

参照 CommonJs 模块代表 node.js 的模块系统

### 8.2 AMD（异步加载模块）

采用异步方式加载模块，模块的加载不影响后面语句的运行。所有依赖模块的语句，都定义在一个回调函数中，等到加载完成之后，回调函数才执行。

使用实例：

```js
// 定义
define("module", ["dep1", "dep2"], function(d1, d2) {...});
// 加载模块
require(["module", "../app"], function(module, app) {...});
```

加载模块 require([module], callback);第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数 callback 是加载成功之后的回调函数。

优点：

- 适合在浏览器环境中异步加载模块
- 可以并行加载多个模块

缺点：

- 提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不顺畅
- 不符合通用的模块化思维方式，是一种妥协的实现

实现 AMD 规范代表 require.js

> RequireJS 对模块的态度是预执行。由于 RequireJS 是执行的 AMD 规范, 因此所有的依赖模块都是先执行;即 RequireJS 是预先把依赖的模块执行，相当于把 require 提前了

RequireJS 执行流程：

- require 函数检查依赖的模块，根据配置文件，获取 js 文件的实际路径
- 根据 js 文件实际路径，在 dom 中插入 script 节点，并绑定 onload 事件来获取该模块加载完成的通知。
- 依赖 script 全部加载完成后，调用回调函数

### 8.3 CMD 规范（异步加载模块）

CMD 规范和 AMD 很相似，简单，并与 CommonJS 和 Node.js 的 Modules 规范保持了很大的兼容性；在 CMD 规范中，一个模块就是一个文件。

定义模块使用全局函数 define，其接收 factory 参数，factory 可以是一个函数，也可以是一个对象或字符串；

factory 是一个函数，有三个参数，function(require, exports, module)：

- require 是一个方法，接受模块标识作为唯一参数，用来获取其他模块提供的接口：require(id)
- exports 是一个对象，用来向外提供模块接口
- module 是一个对象，上面存储了与当前模块相关联的一些属性和方法

实例：

```js
define(function(require, exports, module) {
  var a = require("./a");
  a.doSomething();
  // 依赖就近书写，什么时候用到什么时候引入
  var b = require("./b");
  b.doSomething();
});
```

优点：

- 依赖就近，延迟执行
- 可以很容易在 Node.js 中运行

缺点：

- 依赖 SPM 打包，模块的加载逻辑偏重
- 实现代表库 sea.js：SeaJS 对模块的态度是懒执行, SeaJS 只会在真正需要使用(依赖)模块时才执行该模块

### 8.4 AMD 与 CMD 的区别

- 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成了可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
- AMD 推崇依赖前置；CMD 推崇依赖就近，只有在用到某个模块的时候再去 require。

```js
// AMD
define(['./a', './b'], function(a, b) {  // 依赖必须一开始就写好
   a.doSomething()
   // 此处略去 100 行
   b.doSomething()
   ...
});
// CMD
define(function(require, exports, module) {
   var a = require('./a')
   a.doSomething()
   // 此处略去 100 行
   var b = require('./b')
   // 依赖可以就近书写
   b.doSomething()
   // ...
});
```

### 8.5 UMD

- UMD 是 AMD 和 CommonJS 的糅合
- AMD 以浏览器第一原则发展异步加载模块。
- CommonJS 模块以服务器第一原则发展，选择同步加载，它的模块无需包装。
- UMD 先判断是否支持 Node.js 的模块（exports）是否存在，存在则使用 Node.js 模块模式；在判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。

```js
(function(window, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(factory);
  } else {
    window.eventUtil = factory();
  }
})(this, function() {
  //module ...
});
```

### 8.6 ES6 模块化

- ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
- ES6 模块设计思想：尽量的静态化、使得编译时就能确定模块的依赖关系，以及输入和输出的变量（CommonJS 和 AMD 模块，都只能在运行时确定这些东西）。

使用方式：

```js
// 导入
import "/app";
import React from “react”;
import { Component } from “react”;
// 导出
export function multiply() {...};
export var year = 2018;
export default ...
...
```

优点：

- 容易进行静态分析
- 面向未来的 EcmaScript 标准
  缺点：
- 原生浏览器端还没有实现该标准
- 全新的命令字，新版的 Node.js 才支持。

### 8.7 回到问题“require 与 import 的区别”

require 使用与 CommonJs 规范，import 使用于 Es6 模块规范；所以两者的区别实质是两种规范的区别；

CommonJS：

- 对于基本数据类型，属于复制。即会被模块缓存；同时，在另一个模块可以对该模块输出的变量重新赋值。
- 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
- 当使用 require 命令加载某个模块时，就会运行整个模块的代码。
- 当使用 require 命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
- 循环加载时，属于加载时执行。即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

ES6 模块

- ES6 模块中的值属于【动态只读引用】。
- 对于只读来说，即不允许修改引入变量的值，import 的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到 import 命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
- 对于动态来说，原始值发生变化，import 加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。
- 循环加载时，ES6 模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。

最后：require/exports 是必要通用且必须的；因为事实上，目前你编写的 import/export 最终都是编译为 require/exports 来执行的。

## 感谢

- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
