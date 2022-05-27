# 「重学 JavaScript」变量和类型

> 前端工程师吃饭的家伙，深度、广度一样都不能差。

## 数据类型

7 种基本数据类型：`BigInt、Symbol、Undefined、Null、Boolean、Number 和 String`

1 种复杂数据类型：`Object`

## 底层数据结构

通过 V8 的源码尝试分析 Object 的实现：V8 里面所有的数据类型的根父类都是 Object，Object 派生 HeapObject，提供存储基本功能，往下的 JSReceiver 用于原型查找，再往下的 JSObject 就是 JS 里面的 Object，Array/Function/Date 等继承于 JSObject。左边的 FixedArray 是实际存储数据的地方。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99ab12533f2f44b9a5974b263e5c72b9~tplv-k3u1fbpfcp-zoom-1.image)
在创建一个 JSObject 之前，会先把读到的 Object 的文本属性序列化成 constant_properties ，如下的 data：

```js
var data = {
  name: "yin",
  age: 18,
  "-school-": "high school",
};
```

会被序列成：

../../v8/src/runtime/runtime-literals.cc 72 constant_properties:

```js
0xdf9ed2aed19: [FixedArray]

– length: 6

  [0]: 0x1b5ec69833d1 <String[4]: name>

  [1]: 0xdf9ed2aec51 <String[3]: yin>

  [2]: 0xdf9ed2aec71 <String[3]: age>

  [3]: 18

  [4]: 0xdf9ed2aec91 <String[8]: -school->

  [5]: 0xdf9ed2aecb1 <String[11]: high school>
```

它是一个 FixedArray，一共有 6 个元素，由于 data 总共是有 3 个属性，每个属性有一个 key 和一个 value，所以 Array 就有 6 个。第一个元素是第一个 key，第二个元素是第一个 value，第三个元素是第二个 key，第四个元素是第二个 key，依次类推。

Object 提供了一个 Print()的函数，把它用来打印对象的信息非常有帮助。上面的输出有两种类型的数据，一种是 String 类型，第二种是整型类型的。
FixedArray 是 V8 实现的一个类似于数组的类，它表示一段连续的内存。

参考自：[https://www.rrfed.com/2017/04/04/chrome-object/](https://www.rrfed.com/2017/04/04/chrome-object/)

## Symbol

> Symbol 类型在实际开发中的应用、可手动实现一个简单的 Symbol

### 3.1 使用 Symbol 来作为对象属性名(key)

在这之前，我们通常定义或访问对象的属性时都是使用字符串，比如下面的代码：

```js
let obj = {
  abc: 123,
  hello: "world",
};

obj["abc"]; // 123
obj["hello"]; // 'world'
```

而现在，Symbol 可同样用于对象属性的定义和访问：

```js
const PROP_NAME = Symbol();
const PROP_AGE = Symbol();

let obj = {
  [PROP_NAME]: "一斤代码",
};
obj[PROP_AGE] = 18;

obj[PROP_NAME]; // '一斤代码'
obj[PROP_AGE]; // 18
```

随之而来的是另一个非常值得注意的问题：就是当使用了 Symbol 作为对象的属性 key 后，在对该对象进行 key 的枚举时，会有什么不同？在实际应用中，我们经常会需要使用 Object.keys() 或者 for...in 来枚举对象的属性名，那在这方面，Symbol 类型的 key 表现的会有什么不同之处呢？来看以下示例代码：

```js
let obj = {
  [Symbol("name")]: "一斤代码",
  age: 18,
  title: "Engineer",
};

Object.keys(obj); // ['age', 'title']

for (let p in obj) {
  console.log(p); // 分别会输出：'age' 和 'title'
}

Object.getOwnPropertyNames(obj); // ['age', 'title']
```

由上代码可知，Symbol 类型的 key 是不能通过 Object.keys()或者 for...in 来枚举的，它未被包含在对象自身的属性名集合 (property names) 之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。

也正因为这样一个特性，当使用 JSON.stringify() 将对象转换成 JSON 字符串的时候，Symbol 属性也会被排除在输出内容之外：

```js
JSON.stringify(obj); // {"age":18,"title":"Engineer"}
```

我们可以利用这一特点来更好的设计我们的数据对象，让“对内操作”和“对外选择性输出”变得更加优雅。

然而，这样的话，我们就没办法获取以 Symbol 方式定义的对象属性了么？非也。还是会有一些专门针对 Symbol 的 API，比如：

```js
// 使用Object的API
Object.getOwnPropertySymbols(obj); // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj); // [Symbol(name), 'age', 'title']
```

### 3.2 使用 Symbol 来替代常量

先来看一下下面的代码，是不是在你的代码里经常会出现？

```js
const TYPE_AUDIO = "AUDIO";
const TYPE_VIDEO = "VIDEO";
const TYPE_IMAGE = "IMAGE";

function handleFileResource(resource) {
  switch (resource.type) {
    case TYPE_AUDIO:
      playAudio(resource);
      break;
    case TYPE_VIDEO:
      playVideo(resource);
      break;
    case TYPE_IMAGE:
      previewImage(resource);
      break;
    default:
      throw new Error("Unknown type of resource");
  }
}
```

如上面的代码中那样，我们经常定义一组常量来代表一种业务逻辑下的几个不同类型，我们通常希望这几个常量之间是唯一的关系，为了保证这一点，我们需要为常量赋一个唯一的值（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多，你可能还得花点脑子好好为他们取个好点的名字。

现在有了 Symbol，我们大可不必这么麻烦了：

```js
const TYPE_AUDIO = Symbol();
const TYPE_VIDEO = Symbol();
const TYPE_IMAGE = Symbol();
```

这样定义，直接就保证了三个常量的值是唯一的了！是不是挺方便的呢。

### 3.3 使用 Symbol 定义类的私有属性/方法

我们知道在 JavaScript 中，是没有如 Java 等面向对象语言的访问控制关键字 private 的，类上所有定义的属性或方法都是可公开访问的。因此这对我们进行 API 的设计时造成了一些困扰。

而有了 Symbol 以及模块化机制，类的私有属性和方法才变成可能。例如：

在文件 a.js 中

```js
const PASSWORD = Symbol();

class Login {
  constructor(username, password) {
    this.username = username;
    this[PASSWORD] = password;
  }

  checkPassword(pwd) {
    return this[PASSWORD] === pwd;
  }
}

export default Login;
```

在文件 b.js 中

```js
import Login from "./a";

const login = new Login("admin", "123456");

login.checkPassword("123456"); // true

login.PASSWORD; // oh!no!
login[PASSWORD]; // oh!no!
login["PASSWORD"]; // oh!no!
```

由于 Symbol 常量 PASSWORD 被定义在 a.js 所在的模块中，外面的模块获取不到这个 Symbol，也不可能再创建一个一模一样的 Symbol 出来（因为 Symbol 是唯一的），因此这个 PASSWORD 的 Symbol 只能被限制在 a.js 内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。

### 3.4 手动实现 Symbol

```js
(function() {
  var root = this;

  var generateName = (function() {
    var postfix = 0;
    return function(descString) {
      postfix++;
      return "@@" + descString + "_" + postfix;
    };
  })();

  var SymbolPolyfill = function Symbol(description) {
    if (this instanceof SymbolPolyfill)
      throw new TypeError("Symbol is not a constructor");

    var descString =
      description === undefined ? undefined : String(description);

    var symbol = Object.create({
      toString: function() {
        return this.__Name__;
      },
      valueOf: function() {
        return this;
      },
    });

    Object.defineProperties(symbol, {
      __Description__: {
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      __Name__: {
        value: generateName(descString),
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });

    return symbol;
  };

  var forMap = {};

  Object.defineProperties(SymbolPolyfill, {
    for: {
      value: function(description) {
        var descString =
          description === undefined ? undefined : String(description);
        return forMap[descString]
          ? forMap[descString]
          : (forMap[descString] = SymbolPolyfill(descString));
      },
      writable: true,
      enumerable: false,
      configurable: true,
    },
    keyFor: {
      value: function(symbol) {
        for (var key in forMap) {
          if (forMap[key] === symbol) return key;
        }
      },
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });

  root.SymbolPolyfill = SymbolPolyfill;
})();
```

## 变量在内存中的具体存储形式

### 4.1 栈内存和堆内存

JavaScript 中的变量分为基本类型和引用类型：

- 基本类型是保存在栈内存中的简单数据段，它们的值都有固定的大小，保存在栈空间，通过按值访问
- 引用类型是保存在堆内存中的对象，值大小不固定，栈内存中存放的该对象的访问地址指向堆内存中的对象，JavaScript 不允许直接访问堆内存中的位置，因此操作对象时，实际操作对象的引用

### 4.2 结合代码与图来理解

```js
let a1 = 0; // 栈内存
let a2 = "this is string"; // 栈内存
let a3 = null; // 栈内存
let b = { x: 10 }; // 变量b存在于栈中，{ x: 10 }作为对象存在于堆中
let c = [1, 2, 3]; // 变量c存在于栈中，[1, 2, 3]作为对象存在于堆中
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eaa1b673a1104ccaad9ef6588a0ccbfe~tplv-k3u1fbpfcp-zoom-1.image)

当我们要访问堆内存中的引用数据类型时:

- 从栈中获取该对象的地址引用
- 再从堆内存中取得我们需要的数据

### 4.3 基本类型发生复制行为

```js
let a = 20;
let b = a;
b = 30;
console.log(a); // 20
```

结合下面图进行理解：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8838e95fbd6a434eaa49af59b5c89784~tplv-k3u1fbpfcp-zoom-1.image)

在栈内存中的数据发生复制行为时，系统会自动为新的变量分配一个新值，最后这些变量都是相互独立互不影响的。

### 4.4 引用类型发生复制行为

```js
let a = { x: 10, y: 20 };
let b = a;
b.x = 5;
console.log(a.x); // 5
```

- 引用类型的复制，同样为新的变量 b 分配一个新的值，保存在栈内存中，不同的是，这个值仅仅是引用类型的一个地址指针
- 他们两个指向同一个值，也就是地址指针相同，在堆内存中访问到的具体对象实际上是同一个
- 因此改变 b.x 时，a.x 也发生了变化，这就是引用类型的特性

结合下图理解：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c391391df9d94aafb63cbd3659db0171~tplv-k3u1fbpfcp-zoom-1.image)

总结：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91c6e3aa5b5948de830d66198daaa064~tplv-k3u1fbpfcp-zoom-1.image)

## 内置对象和装箱拆箱操作

### 5.1 JS 中的内置函数（对象）

String()、Number()、Boolean()、RegExp()、Date()、Error()、Array()、Function()、Object()、symbol();类似于对象的构造函数

- 这些内置函数构造的变量都是封装了基本类型值的对象如：

```js
var a = new String("abb"); // typeof(a)=object
```

除了利用 Function() 构造的变量通过 typeof 输出为 function 外其他均为 object

- 为了知道构造的变量的真实类型可以利用：

```js
Object.prototype.toString.call([1, 2, 3]); // "[object,array]"
```

后面的一个值即为传入参数的类型

- 如果有常量形式（即利用基本数据类型）赋值给变量就不要用该方式来定义变量

### 5.2 装箱

就是把基本类型转变为对应的对象。装箱分为隐式和显示

- 隐式装箱： 每当读取一个基本类型的值时，后台会创建一个该基本类型所对应的对象。在这个基本类型上调用方法，其实是在这个基本类型对象上调用方法。这个基本类型的对象是临时的，它只存在于方法调用那一行代码执行的瞬间，执行方法后立刻被销毁。

```js
let num = 123;
num.toFixed(2); // '123.00'//上方代码在后台的真正步骤为
var c = new Number(123);
c.toFixed(2);
c = null;
```

1. 创建一个 Number 类型的实例。

2. 在实例上调用方法。

3. 销毁实例。

- 显式装箱: 通过内置对象 Boolean、Object、String 等可以对基本类型进行显示装箱。

```js
var obj = new String("123");
```

### 5.3 拆箱

拆箱与装箱相反，把对象转变为基本类型的值。拆箱过程内部调用了抽象操作 ToPrimitive 。该操作接受两个参数，第一个参数是要转变的对象，第二个参数 PreferredType 是对象被期待转成的类型。第二个参数不是必须的，默认该参数为 number，即对象被期待转为数字类型

- Number 转化为对象

  1. 先调用对象自身的 valueOf 方法。如果返回原始类型的值，则直接对该值使用 Number 函数，返回结果。

  2. 如果 valueOf 返回的还是对象，继续调用对象自身的 toString 方法。如果 toString 返回原始类型的值，则对该值使用 Number 函数，返回结果。

  3. 如果 toString 返回的还是对象，报错。

```js
Number([1]); //1
转换演变：
[1].valueOf(); // [1];
[1].toString(); // '1';Number('1'); //1
```

- String 转化为对象

  1. 先调用对象自身的 toString 方法。如果返回原始类型的值，则对该值使用 String 函数，返回结果。

  2. 如果 toString 返回的是对象，继续调用 valueOf 方法。如果 valueOf 返回原始类型的值，则对该值使用 String 函数，返回结果。

  3. 如果 valueOf 返回的还是对象，报错。

```js
String([1,2]) //"1,2"
转化演变：
[1,2].toString();  //"1,2"
String("1,2");  //"1,2"
```

- Boolean 转化对象

  Boolean 转换对象很特别，除了以下六个值转换为 false，其他都为 true

```js
undefined  null  false  0(包括+0和-0)  NaN  空字符串('')
Boolean(undefined) //false
Boolean(null)        //false
Boolean(false)       //false
Boolean(0)           //false
Boolean(NaN)         //false
Boolean('')          //false
 Boolean([]) //true
Boolean({})          //true
Boolean(new Date())  //true
```

## 值类型和引用类型

### 6.1 声明变量时不同的内存分配

- 原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。

这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。

- 引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。

这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。
地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

### 6.2 不同的内存分配机制也带来了不同的访问机制

- 在 JS 中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。

- 而原始类型的值则是可以直接访问到的。

### 6.3 复制变量时的不同

- 原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的值而已，彼此都是独立的。

- 引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。（复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了）

### 6.4 参数传递的不同（把实参复制给形参的过程）

首先我们应该明确一点：ECMAScript 中所有函数的参数都是按值来传递的。
但是为什么涉及到原始类型与引用类型的值时仍然有区别呢？还不就是因为内存分配时的差别。

- 原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。

- 引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！

因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。

## null 和 undefined 的区别

### 7.1 定义

Null 类型：Null 类型也只有一个特殊的值——null。从逻辑角度来看，null 值表示一个空对象指针。

Undefined 类型：Undefined 类型只有一个值，即特殊的 undefined。在使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined。

### 7.2 null 和 undefined 的应用场景

null 表示"没有对象"，即该处不应该有值。典型用法是：

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

```js
console.log(null instanceof Object); // false
```

undefined 表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

- 变量被声明了，但没有赋值时，就等于 undefined。
- 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
- 对象没有赋值的属性，该属性的值为 undefined。
- 函数没有返回值时，默认返回 undefined。

### 7.3 Number 转换的值

Number(null) 输出为 0, Number(undefined) 输出为 NaN

## 判断数组类型

> 至少可以说出三种判断 JavaScript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

### 8.1 typeof

- 适用场景

`typeof` 操作符可以准确判断一个变量是否为下面几个原始类型：

```js
typeof "ConardLi"; // string
typeof 123; // number
typeof true; // boolean
typeof Symbol(); // symbol
typeof undefined; // undefined
```

你还可以用它来判断函数类型：

```js
typeof function() {}; // function
```

- 不适用场景

  当你用 `typeof` 来判断引用类型时似乎显得有些乏力了：

```js
typeof []; // object
typeof {}; // object
typeof new Date(); // object
typeof /^\d*$/; // object
```

除函数外所有的引用类型都会被判定为 `object` 。

另外 `typeof null === 'object'` 也会让人感到头痛，这是在 `JavaScript` 初版就流传下来的 `bug` ，后面由于修改会造成大量的兼容问题就一直没有被修复...

### 8.2 instanceof

`instanceof` 操作符可以帮助我们判断引用类型具体是什么类型的对象：

```js
[] instanceof Array; // true
new Date() instanceof Date; // true
new RegExp() instanceof RegExp; // true
```

我们先来回顾下原型链的几条规则：

1. 所有引用类型都具有对象特性，即可以自由扩展属性
2. 所有引用类型都具有一个 `__proto__` （隐式原型）属性，是一个普通对象
3. 所有的函数都具有 `prototype` （显式原型）属性，也是一个普通对象
4. 所有引用类型 `__proto__` 值指向它构造函数的 `prototype`
5. 当试图得到一个对象的属性时，如果变量本身没有这个属性，则会去他的 `__proto__` 中去找

`[] instanceof Array` 实际上是判断 `Array.prototype` 是否在 `[]` 的原型链上。
所以，使用 `instanceof` 来检测数据类型，不会很准确，这不是它设计的初衷：

```js
[] instanceof Object // true
function(){}  instanceof Object // true
```

另外，使用 `instanceof` 也不能检测基本数据类型，所以 `instanceof` 并不是一个很好的选择。

### 8.3 toString

上面我们在拆箱操作中提到了 `toString` 函数，我们可以调用它实现从引用类型的转换。

> 每一个引用类型都有 `toString` 方法，默认情况下， `toString()` 方法被每个 `Object` 对象继承。如果此方法在自定义对象中未被覆盖， `toString()` 返回 `"[object type]"` ，其中 `type` 是对象的类型。

```js
const obj = {};
obj.toString(); // [object Object]
```

注意，上面提到了 `如果此方法在自定义对象中未被覆盖` ， `toString` 才会达到预想的效果，事实上，大部分引用类型比如 `Array、Date、RegExp` 等都重写了 `toString` 方法。

我们可以直接调用 `Object` 原型上未被覆盖的 `toString()` 方法，使用 `call` 来改变 `this` 指向来达到我们想要的效果。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6efc4803d3a46b5a753f4e3fea83d4c~tplv-k3u1fbpfcp-zoom-1.image)

### 8.4 jquery

我们来看看 `jquery` 源码中如何进行类型判断：

```js
var class2type = {};
jQuery.each(
  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
    " "
  ),
  function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  }
);

type: (obj) => {
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
};

isFunction: (obj) => {
  return jQuery.type(obj) === "function";
};
```

原始类型直接使用 `typeof` ，引用类型使用 `Object.prototype.toString.call` 取得类型。
判断数组类型可以用 `Array.isArray(value)` 或者 `Object.prototype.toString.call(value)` 。

## 隐式类型转换

> 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

因为 `JavaScript` 是弱类型的语言，所以类型转换发生非常频繁，上面我们说的装箱和拆箱其实就是一种类型转换。

类型转换分为两种，隐式转换即程序自动进行的类型转换，强制转换即我们手动进行的类型转换。

强制转换这里就不再多提及了，下面我们来看看让人头疼的可能发生隐式类型转换的几个场景，以及如何转换：

### 9.1 类型转换规则

如果发生了隐式转换，那么各种类型互转符合下面的规则：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad7436edb972419c8cdf3364e738e1c4~tplv-k3u1fbpfcp-zoom-1.image)

### 9.2 if 语句和逻辑语句

在 `if` 语句和逻辑语句中，如果只有单个变量，会先将变量转换为 `Boolean` 值，只有下面几种情况会转换成 `false` ，其余被转换成 `true` ：

```js
null;
undefined;
("");
NaN;
0;
false;
```

### 9.3 各种运数学算符

我们在对各种非 `Number` 类型运用数学运算符(`- * /`)时，会先将非 `Number` 类型转换为 `Number` 类型;

```js
1 - true; // 0
1 - null; //  1
1 * undefined; //  NaN
2 * ["5"]; //  10
```

注意 `+` 是个例外，执行 `+` 操作符时：

- 当一侧为 `String` 类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
- 当一侧为 `Number` 类型，另一侧为原始类型，则将原始类型转换为 `Number` 类型。
- 当一侧为 `Number` 类型，另一侧为引用类型，将引用类型和 `Number` 类型转换成字符串后拼接。

```js
123 + "123"; // 123123   （规则1）
123 + null; // 123    （规则2）
123 + true; // 124    （规则2）
123 + {}; // 123[object Object]    （规则3）
```

### 9.4 ==

使用 `==` 时，若两侧类型相同，则比较结果和 `===` 相同，否则会发生隐式转换，使用 `==` 时发生的转换可以分为几种不同的情况（只考虑两侧类型不同）：

- NaN

  `NaN` 和其他任何类型比较永远返回 `false` (包括和他自己)。

```js
NaN == NaN; // false
```

- Boolean

  `Boolean` 和其他任何类型比较， `Boolean` 首先被转换为 `Number` 类型。

```js
true == 1; // true
true == "2"; // false
true == ["1"]; // true
true == ["2"]; // false
```

> 这里注意一个可能会弄混的点：`undefined、null` 和 `Boolean` 比较，虽然 `undefined、null` 和 `false` 都很容易被想象成假值，但是他们比较结果是 `false` ，原因是 `false` 首先被转换成 `0` ：

```js
undefined == false; // false
null == false; // false
```

- String 和 Number

  `String` 和 `Number` 比较，先将 `String` 转换为 `Number` 类型。

```js
123 == "123"; // true
"" == 0; // true
```

- null 和 undefined

  `null == undefined` 比较结果是 `true` ，除此之外， `null、undefined` 和其他任何结果的比较值都为 `false` 。

```js
null == undefined; // true
null == ""; // false
null == 0; // false
null == false; // false
undefined == ""; // false
undefined == 0; // false
undefined == false; // false
```

- 原始类型和引用类型

  当原始类型和引用类型做比较时，对象类型会依照 `ToPrimitive` 规则转换为原始类型:

```js
"[object Object]" == {}; // true
"1,2,3" == [1, 2, 3]; // true
```

来看看下面这个比较：

```js
[] == ![]; // true
```

`!` 的优先级高于 `==` ， `![]` 首先会被转换为 `false` ，然后根据上面第三点， `false` 转换成 `Number` 类型 `0`，左侧 `[]` 转换为 `0` ，两侧比较相等。

```js
([null] == false[undefined]) == // true
  false; // true
```

根据数组的 `ToPrimitive` 规则，数组元素为 `null` 或 `undefined` 时，该元素被当做空字符串处理，所以 `[null]、[undefined]` 都会被转换为 `0` 。
所以，说了这么多，推荐使用 `===` 来判断两个值是否相等...

### 9.5 一道有意思的面试题

一道经典的面试题，如何让： `a == 1 && a == 2 && a == 3` 。
根据上面的拆箱转换，以及 `==` 的隐式转换，我们可以轻松写出答案：

```js
const a = {
  value: [3, 2, 1],
  valueOf: function() {
    return this.value.pop();
  },
};
```

## 小数精度

> 出现小数精度丢失的原因，JavaScript 可以存储的最大数字、最大安全数字，JavaScript 处理大数字的方法、避免精度丢失的方法

### 10.1 出现小数精度丢失的原因

计算机的二进制实现和位数限制有些数无法有限表示。就像一些无理数不能有限表示，如 圆周率 3.1415926...，1.3333... 等。JS 遵循  [IEEE 754](https://link.jianshu.com/?t=https://en.wikipedia.org/wiki/IEEE_floating_point)  规范，采用双精度存储（double precision），占用 64 bit。如图
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70ab8f14f1c642ec94b39e12bb19f435~tplv-k3u1fbpfcp-zoom-1.image)

1 位用来表示符号位

11 位用来表示指数

52 位表示尾数

浮点数，比如

1

2

0.1 >> 0.0001 1001 1001 1001…（1001 无限循环）

0.2 >> 0.0011 0011 0011 0011…（0011 无限循环）

此时只能模仿十进制进行四舍五入了，但是二进制只有 0 和 1 两个，于是变为 0 舍 1 入。这即是计算机中部分浮点数运算时出现误差，丢失精度的根本原因。
JS 的最大和最小安全值可以这样获得:

```js
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
```

对于整数，前端出现问题的几率可能比较低，毕竟很少有业务需要需要用到超大整数，只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度。如果实在是超过最大安全数字了，那就用 BigInt(Number)计算。

对于小数，前端出现问题的几率还是很多的，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数），也就是说，尽量在业务中避免处理小数。

## 感谢

- 图片来源网络。
- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助 😘，就点个[Star 👍](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
