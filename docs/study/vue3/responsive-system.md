响应式数据基本实现：

```js
// 存储副作用函数的桶
const bucket = new Set();

// 原始数据
const data = { text: "hello world" };
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 effect 添加到存储副作用函数的桶中
    bucket.add(effect);
    // 返回属性值
    return target[key];
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal;
    // 把副作用函数从桶里取出并执行
    bucket.forEach((fn) => fn());
    // 返回 true 代表设置操作成功
    return true;
  },
});

// 副作用函数
function effect() {
  document.body.innerText = obj.text;
}
// 执行副作用函数，触发读取
effect();
// 1 秒后修改响应式数据
setTimeout(() => {
  obj.text = "hello vue3";
}, 1000);
```

设计一个完善的响应系统：

```js
// 存储副作用函数的桶
const bucket = new Set();

// 原始数据
const data = { text: "hello world" };

// 用一个全局变量存储被注册的副作用函数
let activeEffect;
// effect 函数用于注册副作用函数
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数 fn 赋值给 activeEffect
  activeEffect = fn;
  // 执行副作用函数
  fn();
}

const obj = new Proxy(data, {
  get(target, key) {
    // 将 activeEffect 中存储的副作用函数收集到 “桶” 中
    if (activeEffect) {
      bucket.add(activeEffect);
    }
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    bucket.forEach((fn) => fn());
    return true;
  },
});

effect(
  // 一个匿名的副作用函数
  () => {
    console.log("effect run");
    document.body.innerText = obj.text;
  }
);

setTimeout(() => {
  // 副作用函数中并没有读取 notExist 属性的值
  obj.notExist = "hello vue3";
}, 1000);
```
