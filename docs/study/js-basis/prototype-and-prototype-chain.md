# 「重学 JavaScript」原型和原型链

## 原型设计模式和原型规则

> 理解原型设计模式以及 JavaScript 中的原型规则

### 设计模式

- 工厂模式

在函数内创建一个对象，给对象赋予属性及方法再将对象返回

```js
function Person() {
  var People = new Object();
  People.name = "CrazyLee";
  People.age = "25";
  People.sex = function() {
    return "boy";
  };
  return People;
}

var a = Person();
console.log(a.name); // CrazyLee
console.log(a.sex()); // boy
```

- 构造函数模式

无需在函数内部重新创建对象，而是用 this 指代

```js
function Person() {
  this.name = "CrazyLee";
  this.age = "25";
  this.sex = function() {
    return "boy";
  };
}

var a = new Person();
console.log(a.name); // CrazyLee
console.log(a.sex()); // boy
```

- 原型模式

函数中不对属性进行定义，利用 prototype 属性对属性进行定义，可以让所有对象实例共享它所包含的属性及方法。

```js
function Parent() {
  Parent.prototype.name = "carzy";
  Parent.prototype.age = "24";
  Parent.prototype.sex = function() {
    var s = "女";
    console.log(s);
  };
}

var x = new Parent();
console.log(x.name); // crazy
console.log(x.sex()); // 女
```

- 混合模式

原型模式+构造函数模式。这种模式中，构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性

```js
function Parent() {
  this.name = "CrazyLee";
  this.age = 24;
}
Parent.prototype.sayname = function() {
  return this.name;
};

var x = new Parent();
console.log(x.sayname()); // Crazy&emsp;&emsp;
```

- 动态原型模式

将所有信息封装在了构造函数中，而通过构造函数中初始化原型，这个可以通过判断该方法是否有效而选择是否需要初始化原型。

```js
function Parent() {
  this.name = "CrazyLee";
  this.age = 24;
  if (typeof Parent._sayname == "undefined") {
    Parent.prototype.sayname = function() {
      return this.name;
    };
    Parent._sayname = true;
  }
}

var x = new Parent();
console.log(x.sayname());
```

### 原型规则

- 原型规则

1. 所有的引用类型（数组、对象、函数），都具有对象特征，即可自由扩展属性；

```js
var arr = [];
arr.a = 1;
```

2. 所有的引用类型，都有一个`__proto__` 属性（隐式原型），属性值是一个普通对象；
3. 所有函数，都具有一个 prototype（显式原型），属性值也是一个普通原型；
4. 所有的引用类型（数组、对象、函数），其隐式原型指向其构造函数的显式原型；`(obj.__proto__ === Object.prototype)`；
5. 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`（即它的构造函数的 prototype）中去寻找；

- 原型对象：prototype 在 js 中，函数对象其中一个属性：原型对象 prototype。普通对象没有 prototype 属性，但有`__proto__`属性。 原型的作用就是给这个类的每一个对象都添加一个统一的方法，在原型中定义的方法和属性都是被所有实例对象所共享的。

```js
var person = function(name){
    this.name = name
};
person.prototype.getName=function(){ // 通过person.prototype设置函数对象属性
    return this.name;
}
var crazy= new person(‘crazyLee’);
crazy.getName(); // crazyLee//crazy继承上属性
```

- 原型链：当试图得到一个对象 f 的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`（即它的构造函数的 prototype）`obj.__proto__`中去寻找；当 `obj.__proto__` 也没有时，便会在 `obj.__proto__.__proto__`（即 obj 的构造函数的 prototype 的构造函数的 prototype）中寻找；

## instanceof

> instanceof 的底层实现原理，手动实现一个 instanceof

```js
function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  L = L.__proto__; // 取 L 的隐式原型
  while (true) {
    if (L === null) return false;
    if (O === L)
      // 当 O 显式原型 严格等于  L隐式原型 时，返回true
      return true;
    L = L.__proto__;
  }
}
```

## 继承

> 实现继承的几种方式以及他们的优缺点

### 原型链继承

原型链继承的基本思想是利用原型让**一个引用类型继承另一个引用类型的属性和方法**。

```js
function SuperType() {
  this.name = "yanxugong";
  this.colors = ["pink", "blue", "green"];
}

SuperType.prototype.getName = function() {
  return this.name;
};

function SubType() {
  this.age = 22;
}

SubType.prototype = new SuperType();
SubType.prototype.getAge = function() {
  return this.age;
};
SubType.prototype.constructor = SubType;

let instance1 = new SubType();
instance1.colors.push("yellow");
console.log(instance1.getName()); // 'yanxugong'
console.log(instance1.colors); // ["pink", "blue", "green", "yellow"]

let instance2 = new SubType();
console.log(instance2.colors); // ["pink", "blue", "green", "yellow"]
```

缺点：

- 通过原型来实现继承时，原型会变成另一个类型的实例，原先的实例属性变成了现在的原型属性，**该原型的引用类型属性会被所有的实例共享**。
- 在创建子类型的实例时，**没有办法**在不影响所有对象实例的情况下**给超类型的构造函数中传递参数**。

### 借用构造函数

借用构造函数的技术，其基本思想为:在子类型的构造函数中调用超类型构造函数。

```js
function SuperType(name) {
  this.name = name;
  this.colors = ["pink", "blue", "green"];
  this.getColors = function() {
    return this.colors;
  };
}

SuperType.prototype.getName = function() {
  return this.name;
};

function SubType(name) {
  SuperType.call(this, name);
  this.age = 22;
}

let instance1 = new SubType("yanxugong");
instance1.colors.push("yellow");
console.log(instancel.colors); // ['pink','blue','green','yellow']
console.log(instancel.getColors()); // ["pink", "blue", "green", "yellow"]
console.log(instancel.getName); // undefined

let instance2 = new SubType("Jack");
console.log(instance2.colors); // ['pink','blue','green']
console.log(instance2.getColors()); // ["pink", "blue", "green"]
console.log(instance2.getName); // undefined
```

优点:

- 可以向超类传递参数
- 解决了原型中包含引用类型值被所有实例共享的问题

缺点:

- 方法都在构造函数中定义，函数复用无从谈起，另外超类型原型中定义的方法对于子类型而言都是不可见的。

### 组合继承

组合继承指的是将原型链和借用构造函数技术组合到一块，从而发挥二者之长的一种继承模式。

基本思路：

使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承，既通过在原型上定义方法来实现了函数复用，又保证了每个实例都有自己的属性。

```js
function SuperType(name) {
  this.name = name;
  this.colors = ["pink", "blue", "green"];
}

SuperType.prototype.getName = function() {
  return this.name;
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  return this.age;
};

let instancel = new SubType("yanxugong", 20);
instancel.colors.push("yellow");
console.log(instancel.colors); // ['pink','blue','green','yellow']
console.log(instancel.sayAge()); // 20
console.log(instancel.getName()); // yanxugong

let instance2 = new SubType("Jack", 18);
console.log(instance2.colors); // ['pink','blue','green']
console.log(instance2.sayAge()); // 18
console.log(instance2.getName()); // Jack

console.log(new SuperType("po"));
```

缺点:

- 无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。

优点:

- 可以向超类传递参数
- 每个实例都有自己的属性
- 实现了函数复用

### 原型式继承

原型继承的基本思想：

借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
```

在 object()函数内部，新建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例，从本质上讲，object()对传入的对象执行了一次浅拷贝。

ECMAScript5 通过新增 Object.create()方法规范了原型式继承。这个方法接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象(可以覆盖原型对象上的同名属性)，在传入一个参数的情况下，Object.create()和 object()方法的行为相同。

```js
var person = {
  name: "yanxugong",
  hobbies: ["reading", "photography"],
};

var personl = Object.create(person);
personl.name = "jack";
personl.hobbies.push("coding");

var person2 = Object.create(person);
person2.name = "Echo";
person2.hobbies.push("running");

console.log(person.hobbies); // ["reading", "photography", "coding", "running"]
console.log(person.name); // yanxugong

console.log(personl.hobbies); // ["reading", "photography", "coding", "running"]
console.log(personl.name); // jack

console.log(person2.hobbies); // ["reading", "photography", "coding", "running"]
console.log(person2.name); // Echo
```

在没有必要创建构造函数，仅让一个对象与另一个对象保持相似的情况下，原型式继承是可以胜任的。

缺点:

- 同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

### 寄生式继承

寄生式继承是与原型式继承紧密相关的一种思路。寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该函数在内部已某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  var clone = object(original); // 通过调用函数创建一个新对象
  clone.sayHi = function() {
    // 以某种方式增强这个对象
    console.log("hi");
  };
  return clone; // 返回这个对象
}

var person = {
  name: "yanxugong",
  hobbies: ["reading", "photography"],
};

var personl = createAnother(person);
personl.sayHi(); // hi
personl.hobbies.push("coding");
console.log(personl.hobbies); // ["reading", "photography", "coding"]
console.log(person); // {hobbies:["reading", "photography", "coding"],name: "yanxugong"}
```

基于 person 返回了一个新对象 personl，新对象不仅具有 person 的所有属性和方法，而且还有自己的 sayHi()方法。在考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式。

缺点：

- 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而效率低下。
- 同原型链实现继承一样，包含引用类型值的属性会被所有实例共享。

### 寄生组合式继承

所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

基本思路：

不必为了指定子类型的原型而调用超类型的构造函数，我们需要的仅是超类型原型的一个副本，本质上就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。寄生组合式继承的基本模式如下所示：

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 指定对象
}
```

- 创建超类型原型的一个副本
- 为创建的副本添加 constructor 属性
- 将新创建的对象赋值给子类型的原型

至此，我们就可以通过调用 inheritPrototype 来替换为子类型原型赋值的语句：

```js
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 指定对象
}

function SuperType(name) {
  this.name = name;
  this.colors = ["pink", "blue", "green"];
}

SuperType.prototype.getName = function() {
  return this.name;
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
  return this.age;
};

let instancel = new SubType("yanxugong", 20);
instancel.colors.push("yellow");
console.log(instancel.colors); // ['pink','blue','green','yellow']
console.log(instancel.sayAge()); // 20
console.log(instancel.getName()); // yanxugong

let instance2 = new SubType("Jack", 18);
console.log(instance2.colors); // ['pink','blue','green']
console.log(instance2.sayAge()); // 18
console.log(instance2.getName()); // Jack

console.log(new SuperType("po"));
```

优点:

- 只调用了一次超类构造函数，效率更高。避免在 SuberType.prototype 上面创建不必要的、多余的属性，与其同时，原型链还能保持不变。
- 因此寄生组合继承是引用类型最理性的继承范式。

## 原型继承的案例

> 至少说出一种开源项目(如 Node)中应用原型继承的案例

### [Vue.extend( options )](https://cn.vuejs.org/v2/api/?#Vue-extend "Vue.extend( options )")

- 参数：

  - `{Object} options`

- 用法：

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

`data`  选项是特例，需要注意 - 在  `Vue.extend()`  中它必须是函数

```js
<div id="mount-point"></div>
```

```js
// 创建构造器
var Profile = Vue.extend({
  template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
  data: function() {
    return {
      firstName: "Walter",
      lastName: "White",
      alias: "Heisenberg",
    };
  },
});
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount("#mount-point");
```

结果如下：

```js
<p>Walter White aka Heisenberg</p>
```

### 为什么使用 extend

在 vue 项目中，我们有了初始化的根实例后，所有页面基本上都是通过 router 来管理，组件也是通过 `import` 来进行局部注册，所以组件的创建我们不需要去关注，相比 `extend` 要更省心一点点。但是这样做会有几个缺点：

- 组件模板都是事先定义好的，如果我要从接口动态渲染组件怎么办？
- 所有内容都是在 `#app` 下渲染，注册组件都是在当前位置渲染。如果我要实现一个类似于 `window.alert()` 提示组件要求像调用 JS 函数一样调用它，该怎么办？这时候，`Vue.extend + vm.$mount` 组合就派上用场了。

## new 操作符

> 可以描述 new 一个对象的详细过程，手动实现一个 new 操作符

先看看 new 操作符都干了什么事情，有哪些操作？通过下面的代码来进行思考：

```js
// 新建一个类（构造函数）
function Otaku(name, age) {
  this.name = name;
  this.age = age;
  // 自身的属性
  this.habit = "pk";
}
// 给类的原型上添加属性和方法
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() {
  console.log("I am " + this.name);
};
// 实例化一个person对象
const person = new Otaku("乔峰", 5000);
person.sayYourName(); // I am 乔峰
console.log(person); // 打印出构造出来的实例
```

![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/540740cc483644f787851a55226d0059~tplv-k3u1fbpfcp-zoom-1.image)

### 解析

从控制台打印出来的结果我们可以看出 new 操作符大概做了一下几件事情：

- 返回（产生）了一个新的对象
- 访问到了类 Otaku 构造函数里的属性
- 访问到 Otaku 原型上的属性和方法 并且设置了 this 的指向（指向新生成的实例对象）

通过上面的分析展示，可以知道 new 团伙里面一定有 Object 的参与，不然对象的产生就有点说不清了。 先来边写写：

```js
// 需要返回一个对象 借助函数来实现new操作
// 传入需要的参数： 类 + 属性
const person = new Otaku("乔峰", 5000);
const person1 = objectFactory(Otaku, "鸠摩智", 5000);

// 开始来实现objectFactory 方法
function objectFactory(obj, name, age) {}
// 这种方法将自身写死了 如此他只能构造以obj为原型，并且只有name 和 age 属性的 obj
// 在js中 函数因为arguments 使得函数参数的写法异常灵活，在函数内部可以通过arguments来获得函数的参数
function objectFactory() {
  console.log(arguements); //{ '0': [Function: Otaku], '1': '鸠摩智', '2': 5000 }
  // 通过arguments类数组打印出的结果，我们可以看到其中包含了构造函数以及我们调用objectfactory时传入的其他参数
  // 接下来就是要想如何得到其中这个构造函数和其他的参数
  // 由于arguments是类数组，没有直接的方法可以供其使用，我们可以有以下两种方法:
  // 1. Array.from(arguments).shift(); //转换成数组 使用数组的方法shift将第一项弹出
  // 2. [].shift().call(arguments); // 通过call() 让arguments能够借用shift方法
  const Constructor = [].shift.call(arguments);
  const args = arguments;
  // 新建一个空对象 纯洁无邪
  let obj = new Object();
  // 接下来的想法 给obj这个新生对象的原型指向它的构造函数的原型
  // 给构造函数传入属性，注意：构造函数的this属性
  // 参数传进Constructor对obj的属性赋值，this要指向obj对象
  // 在Coustructor内部手动指定函数执行时的this 使用call、apply实现
  let result = Constructor.apply(obj, arguments);
  //确保new出来的是一个对象
  return typeof result === "object" ? result : obj;
}
```

上面的代码注释太多，剔除注释以后的代码：

```js
function objectFactory() {
  let Constructor = [].shift.call(arguments);
  const obj = new Object();
  obj.__proto__ = Conctructor.prototype;
  let result = Constructor.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}
```

还有另外一种操作：

```js
function myNew(Obj, ...args) {
  var obj = Object.create(Obj.prototype); // 使用指定的原型对象及其属性去创建一个新的对象
  Obj.apply(obj, args); // 绑定 this 到obj, 设置 obj 的属性
  return obj; // 返回实例
}
```

## class 构造以及继承

> 理解 ES6 class 构造以及继承的底层实现原理

### ES6 class 使用

javascript 使用的是原型式继承，我们可以通过原型的特性实现类的继承，
ES6 为我们提供了像面向对象继承一样的语法糖。

```js
class Parent {
  constructor(a) {
    this.filed1 = a;
  }
  filed2 = 2;
  func1 = function() {};
}

class Child extends Parent {
  constructor(a, b) {
    super(a);
    this.filed3 = b;
  }

  filed4 = 1;
  func2 = function() {};
}
```

下面我们借助 `babel` 来探究 ES6 类和继承的实现原理。

### class 的实现

转换前：

```js
class Parent {
  constructor(a) {
    this.filed1 = a;
  }
  filed2 = 2;
  func1 = function() {};
}
```

转换后：

```js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Parent = function Parent(a) {
  _classCallCheck(this, Parent);

  this.filed2 = 2;

  this.func1 = function() {};

  this.filed1 = a;
};
```

可见 class 的底层依然是构造函数：

- 调用\_classCallCheck 方法判断当前函数调用前是否有 new 关键字。

> 构造函数执行前有 new 关键字，会在构造函数内部创建一个空对象，将构造函数的 `proptype` 指向这个空对象的`__proto__`,并将 this 指向这个空对象。如上，\_classCallCheck 中：this instanceof Parent 返回 true。

> 若构造函数前面没有 new 则构造函数的 proptype 不会不出现在 this 的原型链上，返回 false。

- 将 class 内部的变量和函数赋给 this。

- 执行 constuctor 内部的逻辑。

- return this (构造函数默认在最后我们做了)。

### 继承实现

转换前：

```js
class Child extends Parent {
  constructor(a, b) {
    super(a);
    this.filed3 = b;
  }

  filed4 = 1;
  func2 = function() {};
}
```

转换后：

我们先看 Child 内部的实现，再看内部调用的函数是怎么实现的：

```js
var Child = (function(_Parent) {
  _inherits(Child, _Parent);

  function Child(a, b) {
    _classCallCheck(this, Child);

    var _this = _possibleConstructorReturn(
      this,
      (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, a)
    );

    _this.filed4 = 1;

    _this.func2 = function() {};

    _this.filed3 = b;
    return _this;
  }

  return Child;
})(Parent);
```

- 调用`_inherits` 函数继承父类的 proptype。

`_inherits` 内部实现：

```js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
```

1. 校验父构造函数。

2. 典型的寄生继承：用父类构造函数的 proptype 创建一个空对象，并将这个对象指向子类构造函数的 proptype。

3. 将父构造函数指向子构造函数的`__proto__`（这步是做什么的不太明确，感觉没什么意义。）

- 用一个闭包保存父类引用，在闭包内部做子类构造逻辑。

- new 检查。

- 用当前 this 调用父类构造函数。

```js
var _this = _possibleConstructorReturn(
  this,
  (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, a)
);
```

这里的 `Child.proto || Object.getPrototypeOf(Child)`实际上是父构造函数(\_inherits 最后的操作)，然后通过 call 将其调用方改为当前 this，并传递参数。（这里感觉可以直接用参数传过来的 Parent）

```js
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}
```

校验 this 是否被初始化，super 是否调用，并返回父类已经赋值完的 this。

- 将行子类 class 内部的变量和函数赋给 this。

- 执行子类 constuctor 内部的逻辑。

可见，ES6 实际上是为我们提供了一个“组合寄生继承”的简单写法。

### super

super 代表父类构造函数。

`super.fun1()` 等同于 `Parent.fun1()` 或 `Parent.prototype.fun1()`。

`super()` 等同于 `Parent.prototype.construtor()`

当我们没有写子类构造函数时：

```js
var Child = (function(_Parent) {
  _inherits(Child, _Parent);

  function Child() {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(
      this,
      (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments)
    );
  }

  return Child;
})(Parent);
```

可见默认的构造函数中会主动调用父类构造函数，并默认把当前 `constructor` 传递的参数传给了父类。

所以当我们声明了 `constructor` 后必须主动调用 `super()`,否则无法调用父构造函数，无法完成继承。

典型的例子就是 React 的 Component 中，我们声明 `constructor` 后必须调用 `super(props)`，因为父类要在构造函数中对 props 做一些初始化操作。

## 感谢

- 文中如有错误，欢迎在评论区批评指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
