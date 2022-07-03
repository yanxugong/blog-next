# 高频手写 JS（一）

## 前言

大家好，我是`gyx_这个杀手不太冷静`，今天给大家带来的是**高频手写 JS**。

面试过程中，不少公司会在考察理论知识的同时考察候选人**手写代码**的能力。

现在马上到**金三银四**的好日子，大家可以提前拿这篇文章的题目**练练手**。

希望可以给大家一点小小的帮助。

## 1. 数组扁平化

数组扁平化是将类似 `[1, [2, [3, [4]]]]` 这种多维数组转化为 `[1, 2, 3, 4]` 这种一维数组。

### Array.prototype.flat()

```js
[1, [2, [3, [4]]]].flat(3); // [ 1, 2, 3, 4 ]
```

### 递归

```js
// 一种写法
function flatten(arr) {
  let res = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      res = [...res, ...flatten(el)];
    } else {
      res.push(el);
    }
  });
  return res;
}

// 另一种写法
function flatten(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return [
      ...accumulator,
      ...(Array.isArray(currentValue) ? flatten(currentValue) : [currentValue]),
    ];
  }, []);
}
```

## 2. 数组去重

实现代码如下：

```js
// 一种写法
function unique(arr) {
  // array 调用了 filter 的数组本身
  let res = arr.filter((item, index, array) => {
    // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
    return array.indexOf(item) === index;
  });
  return res;
}

// 另一种写法
const unique = (arr) => [...new Set(arr)];
```

## 3. 深拷贝

简单版：只考虑普通对象属性，不考虑内置对象和函数。

```js
function cloneDeep(obj) {
  if (typeof obj !== "object") return;
  let res = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach((key) => {
    res[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  });
  return res;
}
```

复杂版：基于简单版的基础上，还考虑了内置对象比如: Date、RegExp 等对象和函数以及解决了循环引用的问题。

```js
function cloneDeep(obj, cache = new WeakMap()) {
  // 防止循环引用
  if (cache.get(obj)) return cache.get(obj);
  // 函数类型
  if (Object.prototype.toString.call(obj) === "[object Function]") {
    return function () {
      return obj.apply(this, argument);
    };
  }
  // 时间类型
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return new Date(obj);
  }
  // 正则类型
  if (Object.prototype.toString.call(obj) === "[object RegExp]") {
    // 一个正则对象可以大致分成两部分，源码(source) 和修饰符(flags)
    return new RegExp(obj.source, obj.flags);
  }
  let res = Array.isArray(obj) ? [] : {};
  // 缓存克隆的对象，用于处理循环引用的情况
  cache.set(obj, res);
  Object.keys(obj).forEach((key) => {
    res[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  });
  return res;
}
```

## 4. 防抖节流

实现代码如下：

```js
// 防抖
function debounce(fn, wait) {
  let timeout = null;
  return function () {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

// 节流
function throttle(fn, wait) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, wait);
  };
}
```

## 5. new

原理：

- 创建一个空对象，并将对象的 `__proto__` 指向构造函数的 `prototype`
- 执行构造函数，并将 `this` 指向新创建的对象
- 判断返回值的类型，如果是一个对象，我们就返回这个对象

实现代码如下：

```js
function myNew(fn, ...args) {
  const obj = new Object();
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, args);
  return typeof result === "object" ? result : obj;
}
```

## 6. instanceof

原理：用于检测构造函数的  `prototype`  属性是否出现在某个实例对象的原型链上。

实现代码如下：

```js
function myInstanceof(left, right) {
  if (typeof left !== "object" || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
```

## 7. 函数原型方法

### bind

原理：

- `bind()` 除了 `this` 外，还可传入多个参数
- `bind` 创建的新函数可能传入多个参数
- 新函数可能被当做构造函数调用

实现代码如下：

```js
Function.prototype.myBind = function (context) {
  let fn = this;
  const args = [...arguments].slice(1);
  const result = function () {
    const resultArg = [...arguments];
    const ctx = this instanceof result ? this : context;
    fn.apply(ctx, [...args, ...resultArg]);
  };
  result.prototype = Object.create(fn.prototype);
  return result;
};
```

### call

实现代码如下：

```js
Function.prototype.myCall = function (context) {
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
```

### apply

和 `call` 一样，唯独传参方式不同，一个传入不确定个数的参数，`apply` 传入数组。

实现代码如下：

```js
Function.prototype.myApply = function (context, arr) {
  context.fn = this;
  const result = arr ? context.fn(arr) : context.fn();
  delete context.fn;
  return result;
};
```

## 8. 数组原型方法

### forEach

实现代码如下：

```js
Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
};
```

### map

和 `forEach` 差不多。

```js
Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");
  const O = Object(this);
  const len = O.length >>> 0;
  // 最后需要返回 res
  let k = 0,
    res = [];
  while (k < len) {
    if (k in O) {
      res[k] = callback.call(thisArg, O[k], k, O);
    }
    k++;
  }
  return res;
};
```

### filter

参考 `forEach` 实现。

```js
Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0,
    res = [];
  while (k < len) {
    if (k in O) {
      // 增加条件判断
      if (callback.call(thisArg, O[k], k, O)) {
        res.push(O[k]);
      }
    }
    k++;
  }
  return res;
};
```

### some

参考 `forEach` 实现。

```js
Array.prototype.mySome = function (callback, thisArg) {
  if (this == null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      // 判断后返回布尔值
      if (callback.call(thisArg, O[k], k, O)) {
        return true;
      }
    }
    k++;
  }
  return false;
};
```

### reduce

```js
Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) throw new TypeError("this is null or not defined");
  if (typeof callback !== "function")
    throw new TypeError(callback + " is not a function");
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0,
    acc;
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    // 没传入初始值的时候，取数组中第一个非 empty 的值为初始值
    while (k < len && !(k in O)) {
      k++;
    }
    if (k > len)
      throw new TypeError("Reduce of empty array with no initial value");
    acc = O[k++];
  }
  while (k < len) {
    if (k in O) {
      acc = callback(acc, O[k], k, O);
    }
    k++;
  }
  return acc;
};
```

## 9. 排序算法

### 冒泡排序

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### 快速排序

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

### 插入排序

```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
```

### 归并排序

```js
function merge(leftArr, rightArr) {
  const result = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) result.push(leftArr.shift());
    // 把最小的最先取出，放到结果集中
    else result.push(rightArr.shift());
  }
  return result.concat(leftArr).concat(rightArr); // 合并
}

function mergeSort(array) {
  if (array.length == 1) return array;
  const middle = Math.floor(array.length / 2); // 求出中点
  const left = array.slice(0, middle); // 分割数组
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right)); // 递归合并与排序
}
```

## 相关推荐

- [找工作神器，面试高频榜单（一）](#) 🔥
- [找工作神器，面试高频榜单（二）](https://juejin.cn/post/7091860870413680671) 🔥

**感谢你花费宝贵的时间阅读本文，如果本文给了你一点点帮助或者启发，请不要吝啬你的赞![[赞]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e8670b55996420f93984b417e28c88d~tplv-k3u1fbpfcp-zoom-1.image)和关注![[爱心]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da9131f78f6c4a95a0e04b856bee77bf~tplv-k3u1fbpfcp-zoom-1.image)，你的支持是作者持续创作的动力。![[比心]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c25ecd10da141ab8969de0aca60e615~tplv-k3u1fbpfcp-zoom-1.image)**

欢迎关注，敬请期待～
