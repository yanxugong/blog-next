# 高频手写 JS（二）

## 前言

本文整理了前端面试**高频**出现的算法题。

如果对题解有啥**疑问**或者你有更好的**解法**，欢迎到评论区讨论交流。

现在的互联网行情，建议大家有空多刷刷题，有备无患。也祝大家**工作顺利**，早日实现**财富自由**。

## 反转链表

#### 描述

给定一个单链表的头结点 pHead(该头节点是有值的，比如在下图，它的 val 是 1)，长度为 n，反转该链表后，返回新链表的表头。
\
数据范围： 0≤n≤1000\
要求：空间复杂度  O(1) ，时间复杂度  O(n) 。\
\
如当输入链表{1,2,3}时，\
经反转后，原链表变为{3,2,1}，所以对应的输出为{3,2,1}。\
以上转换过程如下图所示：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/592f6c01134e434f8ff8b6c7dd87a761~tplv-k3u1fbpfcp-zoom-1.image)

#### 示例 1

```
输入：{1,2,3}
返回值：{3,2,1}
```

#### 示例 2

```
输入：{}
返回值：{}
说明：空链表则输出空
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
```

</details>

## 设计 LRU 缓存结构

#### 描述

设计 LRU(最近最少使用)缓存结构，该结构在构造时确定大小，假设大小为 capacity ，操作次数是 n ，并有如下功能:

1. Solution(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
2. get(key)：如果关键字 key 存在于缓存中，则返回 key 对应的 value 值，否则返回 -1 。
3. set(key, value)：将记录(key, value)插入该结构，如果关键字 key 已经存在，则变更其数据值 value，如果不存在，则向缓存中插入该组 key-value ，如果 key-value 的数量超过 capacity，弹出最久未使用的 key-value
   提示:\
   1.某个 key 的 set 或 get 操作一旦发生，则认为这个 key 的记录成了最常使用的，然后都会刷新缓存。\
   2.当缓存的大小超过 capacity 时，移除最不经常使用的记录。\
   3.返回的 value 都以字符串形式表达，如果是 set，则会输出"null"来表示(不需要用户返回，系统会自动输出)，方便观察\
   4.函数 set 和 get 必须以 O(1)的方式运行\
   5.为了方便区分缓存里 key 与 value，下面说明的缓存里 key 用""号包裹

数据范围:

1 ≤ capacity <= 10^5\
0 ≤ key, val ≤ 2×10^9 \
1 ≤ n ≤ 10^5

#### 示例 1

```
输入：["set","set","get","set","get","set","get","get","get"],[[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]],2
返回值：["null","null","1","null","-1","null","-1","3","4"]
说明：我们将缓存看成一个队列，最后一个参数为2代表capacity，所以
Solution s = new Solution(2);
s.set(1,1); //将(1,1)插入缓存，缓存是{"1"=1}，set操作返回"null"
s.set(2,2); //将(2,2)插入缓存，缓存是{"2"=2，"1"=1}，set操作返回"null"
output=s.get(1);// 因为get(1)操作，缓存更新，缓存是{"1"=1，"2"=2}，get操作返回"1"
s.set(3,3); //将(3,3)插入缓存，缓存容量是2，故去掉某尾的key-value，缓存是{"3"=3，"1"=1}，set操作返回"null"
output=s.get(2);// 因为get(2)操作，不存在对应的key，故get操作返回"-1"
s.set(4,4); //将(4,4)插入缓存，缓存容量是2，故去掉某尾的key-value，缓存是{"4"=4，"3"=3}，set操作返回"null"
output=s.get(1);// 因为get(1)操作，不存在对应的key，故get操作返回"-1"
output=s.get(3);//因为get(3)操作，缓存更新，缓存是{"3"=3，"4"=4}，get操作返回"3"
output=s.get(4);//因为get(4)操作，缓存更新，缓存是{"4"=4，"3"=3}，get操作返回"4"
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
/**
 * @param {number} capacity
 */
var Solution = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
Solution.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  const value = this.cache.get(key);
  // 确保它是最新的
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
Solution.prototype.set = function (key, value) {
  // 如果存在则删除
  if (this.cache.has(key)) this.cache.delete(key);

  // 将其存储在缓存中
  this.cache.set(key, value);

  // 将其存储在缓存中后，请确保不要超出最大范围
  if (this.cache.size > this.capacity) {
    const first = this.cache.keys().next().value;
    this.cache.delete(first);
  }
};

module.exports = {
  Solution: Solution,
};
```

</details>

## 实现二叉树先序，中序和后序遍历

#### 描述

给定一棵二叉树，分别按照二叉树先序，中序和后序打印所有的节点。

数据范围：0≤n≤1000，树上每个节点的 val 值满足  0≤val≤100

要求：空间复杂度  O(n)，时间复杂度  O(n)

样例解释：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a998fa571faa45e898d2e9047e38b3a3~tplv-k3u1fbpfcp-zoom-1.image)如图二叉树结构

#### 示例 1

```
输入：{1,2,3}
返回值：[[1,2,3],[2,1,3],[2,3,1]]
说明：如题面图
```

#### 示例 2

```
输入：{}
返回值：[[],[],[]]
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
function threeOrders(root) {
  const pre = (cur, arr = []) => {
    if (!cur) return arr;
    arr.push(cur.val);
    pre(cur.left, arr);
    pre(cur.right, arr);
    return arr;
  };
  const mid = (cur, arr = []) => {
    if (!cur) return arr;
    mid(cur.left, arr);
    arr.push(cur.val);
    mid(cur.right, arr);
    return arr;
  };
  const next = (cur, arr = []) => {
    if (!cur) return arr;
    next(cur.left, arr);
    next(cur.right, arr);
    arr.push(cur.val);
    return arr;
  };
  return [pre(root), mid(root), next(root)];
}
```

</details>

## 最小的 K 个数

#### 描述

给定一个长度为 n 的可能有重复值的数组，找出其中不去重的最小的 k 个数。例如数组元素是 4，5，1，6，2，7，3，8 这 8 个数字，则最小的 4 个数字是 1，2，3，4(任意顺序皆可)。

数据范围：0 ≤ k，n ≤ 10000，数组中每个数的大小 0 ≤ val ≤ 1000

要求：空间复杂度  O(n)，时间复杂度  O(nlogn)

#### 示例 1

```
输入：[4,5,1,6,2,7,3,8],4
返回值：[1,2,3,4]
说明：返回最小的4个数即可，返回[1,3,2,4]也可以
```

#### 示例 2

```
输入：[1],0
返回值：[]
```

#### 示例 3

```
输入：[0,1,2,1,2],3
返回值：[0,1,1]
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
function GetLeastNumbers_Solution(input, k) {
  if (k === 0) return [];
  let arr = input.slice(0, k);
  for (let i = k; i < input.length; i++) {
    let max = 0;
    for (let j in arr) {
      max = arr[j] > arr[max] ? j : max;
    }
    arr[max] = arr[max] > input[i] ? input[i] : arr[max];
  }
  return arr;
}
```

</details>

## 求二叉树的层序遍历

#### 描述

给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）\
例如：\
给定的二叉树是{3,9,20,#,#,15,7},\
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0822cd7e526425096c6dc1e8b531a14~tplv-k3u1fbpfcp-zoom-1.image)\
该二叉树层序遍历的结果是：[[3],[9,20],[15,7]]

数据范围：二叉树的节点数满足  1 ≤ n ≤ 10^5

#### 示例 1

```
输入：{1,2}
返回值：[[1],[2]]
```

#### 示例 2

```
输入：{1,2,3,4,#,#,5}
返回值：[[1],[2,3],[4,5]]
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
function levelOrder(root) {
  function preOrder(root, level) {
    if (root == null) return;
    if (level >= res.length) res.push([]);
    res[level].push(root.val);
    preOrder(root.left, level + 1);
    preOrder(root.right, level + 1);
  }
  let res = [];
  preOrder(root, 0);
  return res;
}
```

</details>

## 寻找第 K 大

#### 描述

有一个整数数组，请你根据快速排序的思路，找出数组中第 k 大的数。\
给定一个整数数组 a ,同时给定它的大小 n 和要找的 k ，请返回第 k 大的数(包括重复的元素，不用去重)，保证答案存在。\
要求：时间复杂度 O(nlogn)，空间复杂度 O(1)\
数据范围：0 ≤ n ≤ 10^5， 1 ≤ K ≤ n，数组中每个元素满足 0 ≤ val ≤ 10000000

#### 示例 1

```
输入：[1,3,5,2,2],5,3
返回值：2
```

#### 示例 2

```
输入：[10,10,9,9,8,7,5,6,4,3,4,2],12,3
返回值：9
说明：去重后的第3大是8，但本题要求包含重复的元素，不用去重，所以输出9
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
function findKth(a, n, K) {
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
  const arr = quickSort(a);
  return arr[n - K];
}
```

</details>

## 大数相加

#### 描述

给定两个字符串形式的非负整数  num1 和 num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger），  也不能直接将输入的字符串转换为整数形式。

#### 示例 1：

```
输入：num1 = "11", num2 = "123"
输出："134"
```

#### 示例 2：

```
输入：num1 = "456", num2 = "77"
输出："533"
```

#### 示例 3：

```
输入：num1 = "0", num2 = "0"
输出："0"
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
function addStrings(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    // charAt 字符串中的字符从左向右索引
    const x = Number(num1.charAt(i));
    const y = Number(num2.charAt(j));
    const result = x + y + add;
    ans.push(result % 10);
    add = Math.floor(result / 10);
    i = i - 1;
    j = j - 1;
  }
  // reverse() 方法将数组中元素的位置颠倒
  return ans.reverse().join("");
}
```

</details>

## 合并两个排序的链表

#### 描述

输入两个递增的链表，单个链表的长度为 n，合并这两个链表并使新链表中的节点仍然是递增排序的。\
数据范围： 0 \le n \le 10000≤n≤1000，-1000 \le 节点值 \le 1000−1000≤ 节点值 ≤1000\
要求：空间复杂度  O(1)O(1)，时间复杂度  O(n)O(n)\
\
如输入{1,3,5},{2,4,6}时，合并后的链表为{1,2,3,4,5,6}，所以对应的输出为{1,2,3,4,5,6}，转换过程如下图所示：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d06ddcaa09543e49b5fd521affd509e~tplv-k3u1fbpfcp-zoom-1.image)\
\
或输入{-1,2,4},{1,3,4}时，合并后的链表为{-1,1,2,3,4,4}，所以对应的输出为{-1,1,2,3,4,4}，转换过程如下图所示：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86f62bc4e2bc446c86e1d3b7856b4655~tplv-k3u1fbpfcp-zoom-1.image)

#### 示例 1

```
输入：{1,3,5},{2,4,6}
返回值：{1,2,3,4,5,6}
```

#### 示例 2

```
输入：{},{}
返回值：{}
```

#### 示例 3

```
输入：{-1,2,4},{1,3,4}
返回值：{-1,1,2,3,4,4}
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
/**
 * 解法二：递归
 * 思路：
 * （1）每次比较两个链表当前结点的值，然后取较小值的链表指针往后，另一个不变送入递归中。
 * （2）递归回来的结果我们要加在当前较小值的结点后面，相当于不断在较小值后面添加结点。
 * （3）递归的终止是两个链表为空。
 * 时间复杂度: O(n)，最坏相当于遍历两个链表每个结点一次
 * 空间复杂度: O(n), 递归栈长度最大为 n
 */
function Merge(pHead1, pHead2) {
  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;
  if (pHead1.val <= pHead2.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead2.next, pHead1);
    return pHead2;
  }
}
```

</details>

## 用两个栈实现队列

#### 描述

用两个栈来实现一个队列，使用 n 个元素来完成 n 次在队列尾部插入整数(push)和 n 次在队列头部删除整数(pop)的功能。 队列中的元素为 int 类型。保证操作合法，即保证 pop 操作时队列内已有元素。

数据范围： n≤1000

要求：存储 n 个元素的空间复杂度为  O(n) ，插入与删除的时间复杂度都是  O(1)

#### 示例 1

```
输入：["PSH1","PSH2","POP","POP"]
返回值：1,2
说明："PSH1":代表将1插入队列尾部
     "PSH2":代表将2插入队列尾部
     "POP“:代表删除一个元素，先进先出=>返回1
     "POP“:代表删除一个元素，先进先出=>返回2
```

#### 示例 2

```
输入：["PSH2","POP","PSH1","POP"]
返回值：2,1
```

<details>
<summary><b>点击显示题解👇</b></summary>

```js
var stack1 = [];
var stack2 = [];

function push(node) {
  // 入栈时stack1存入元素
  stack1.push(node);
}

function pop() {
  // 如果stack2没有元素，则将stack1中元素pop出再push存入stack2
  if (!stack2.length) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  // stack2弹出元素
  return stack2.pop();
}
```

</details>

## 相关推荐

- [找工作神器，面试高频榜单（一）](https://juejin.cn/post/7062529649061920805) 🔥
- [找工作神器，面试高频榜单（二）](#) 🔥

**感谢你花费宝贵的时间阅读本文，如果本文给了你一点点帮助或者启发，请不要吝啬你的赞![[赞]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e8670b55996420f93984b417e28c88d~tplv-k3u1fbpfcp-zoom-1.image)和关注![[爱心]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da9131f78f6c4a95a0e04b856bee77bf~tplv-k3u1fbpfcp-zoom-1.image)，你的支持是作者持续创作的动力。![[比心]](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c25ecd10da141ab8969de0aca60e615~tplv-k3u1fbpfcp-zoom-1.image)**
