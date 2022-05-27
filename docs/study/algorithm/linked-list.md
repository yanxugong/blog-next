# 「重学算法」快速掌握链表题

## 前言

算法是**程序员必须修炼**的一门**内功**（例如：张无忌修炼九阳神功），更是阿里、腾讯、字节这些**大厂面试**考察的重中之重。为了攻克算法面试拿下心仪 Offer，很多程序员面试前都会在 LeetCode 上疯狂刷题备战面试。

然而面对**刷不完**的题目，我们很难在短时间内全部熟练掌握，那该如何**高效准备**，**快速掌握**刷题、解题技巧，**从容应对**即将到来的算法面试？

我们可以从以下几个方面出发：

- 数组、字符串、链表、队列、树、栈、队列、图、前缀树、分段树和树状数组等**数据结构**，逐个击破。
- 总结**常用算法**，归并、快排、拓扑，如何二分查找、递归、回溯，以及广度与深度优先、动态规划等。
- **刻意练习**，针对具有代表性的真题深入剖析，完善自己的算法知识体系。

> 温馨提示：本文主要说一说**链表类**题目的解决思路和代码。适合**算法初学者**、**社招准备面试**和**对算法感兴趣**的同学们。

![7.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/684d369a9cd5412b8b26317bb8dbdeea~tplv-k3u1fbpfcp-watermark.image)

## 206. 反转链表

### 题目

来源：[力扣（LeetCode）206 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

难度：简单

```
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:

你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
```

### 思路

假设存在链表 1 → 2 → 3 → ∅ ，我们想要把它改成 ∅ ← 1 ← 2 ← 3 。

- 在遍历列表时，将当前节点的 `next` 指针改为指向前一个元素。
- 由于节点没有引用其上一个节点，因此必须事先存储其前一个元素。
- 在更改引用之前，还需要另一个指针来存储下一个节点。
- 不要忘记在最后返回新的头引用！

### 代码

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let reverseList = (head) => {
  if (!head) {
    return null;
  }
  let pre = null;
  let cur = head;
  while (cur) {
    let nextCache = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nextCache;
  }
  return pre;
};
```

### 复杂度

- 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
- 空间复杂度：O(1)。

![6.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88b8cc83b2a146d693cdbe42a3eb834b~tplv-k3u1fbpfcp-watermark.image)

## 92. 反转链表 II

### 题目

来源：[力扣（LeetCode）92 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

难度：中等

```
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:

1 ≤ m ≤ n ≤ 链表长度。

示例:


输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

### 思路

假设我们需要反转下图中的蓝色区域。

![1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a3553ab27874975903863ff24285876~tplv-k3u1fbpfcp-watermark.image)

使用「`206. 反转链表`」的解法，反转 left 到 right 部分以后，再拼接起来。我们还需要记录 left 的前一个节点，和 right 的后一个节点。如图所示：

![2.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee87ed7a498749e0a62e466577c8eadd~tplv-k3u1fbpfcp-watermark.image)

算法逻辑：

- 先将待反转的区域反转。
- 把 `pre` 的 `next` 指针指向反转后的链表头节点，反转后的链表尾节点的 `next` 指针指向 `succ` 。

![3.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51c3c2b5769a49998192f1d71d6a1d95~tplv-k3u1fbpfcp-watermark.image)

> 温馨提示：可以自己画图理清思路，后面编码会更顺畅。

### 代码

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseBetween = function(head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next;
  let curr = rightNode.next;

  // 注意：切断链接
  pre.next = null;
  rightNode.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLinkedList(leftNode);

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};
```

### 复杂度

- 时间复杂度：O(n)，其中 n 是链表总节点数。最坏情况下，需要遍历整个链表。
- 空间复杂度：O(1)。只使用到常数个变量。

![4.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/270424920c0c44dd931c1eb5fbcfadaa~tplv-k3u1fbpfcp-watermark.image)

## 24. 两两交换链表中的节点

### 题目

来源：[力扣（LeetCode）24 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

难度：中等

```
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1：
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f877a8b4275420cbe68e92e9722d89e~tplv-k3u1fbpfcp-zoom-1.image)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：

输入：head = []
输出：[]

示例 3：

输入：head = [1]
输出：[1]

提示：

链表中节点的数目在范围 [0, 100] 内

0 <= Node.val <= 100
```

### 思路

可以通过递归的方式实现两两交换链表中的节点。

递归的终止条件是链表中没有节点，或者链表中只有一个节点，此时无法进行交换。

如果链表中至少有两个节点，则在两两交换链表中的节点之后，原始链表的头节点变成新的链表的第二个节点，原始链表的第二个节点变成新的链表的头节点。链表中的其余节点的两两交换可以递归地实现。在对链表中的其余节点递归地两两交换之后，更新节点之间的指针关系，即可完成整个链表的两两交换。

用 `head` 表示原始链表的头节点，新的链表的第二个节点，用 `newHead` 表示新的链表的头节点，原始链表的第二个节点，则原始链表中的其余节点的头节点是 `newHead.next`。令 `head.next = swapPairs(newHead.next)`，表示将其余节点进行两两交换，交换后的新的头节点为 `head` 的下一个节点。然后令 `newHead.next = head`，即完成了所有节点的交换。最后返回新的链表的头节点 `newHead`。

### 代码

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};
```

### 复杂度

- 时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。
- 空间复杂度：O(n)，其中 n 是链表的节点数量。

![5.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2835e03638542f491831a64fff60fc2~tplv-k3u1fbpfcp-watermark.image)

## 25. K 个一组翻转链表

### 题目

来源：[力扣（LeetCode）25 K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

难度：困难

```
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

- 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
- 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 

示例 1：
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1541f4c7b514d338ff390c5adc99976~tplv-k3u1fbpfcp-zoom-1.image)

```
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]

示例 2：
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36638d1e37e64e58968d3136d7230d6c~tplv-k3u1fbpfcp-zoom-1.image)

```
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]

示例 3：

输入：head = [1,2,3,4,5], k = 1
输出：[1,2,3,4,5]

示例 4：

输入：head = [1], k = 1
输出：[1]

提示：

- 列表中节点的数量在范围 sz 内
- 1 <= sz <= 5000
- 0 <= Node.val <= 1000
- 1 <= k <= sz
```

### 思路

本题主要考查面试者设计的能力。

我们需要把链表节点按照 `k` 个一组分组，所以可以使用一个指针 `head` 依次指向每组的头节点。这个指针每次向前移动 `k` 步，直至链表结尾。对于每个分组，我们先判断它的长度是否大于等于 `k`。若是，我们就翻转这部分链表，否则不需要翻转。

接下来的问题就是如何翻转一个分组内的子链表。翻转一个链表并不难，过程可以参考「`206. 反转链表`」。但是对于一个子链表，除了翻转其本身之外，还需要将子链表的头部与上一个子链表连接，以及子链表的尾部与下一个子链表连接。如下图所示：

![4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5aa9b754654ebe83c95cf35752e6b3~tplv-k3u1fbpfcp-watermark.image)

因此，在翻转子链表的时候，我们不仅需要子链表头节点 `head`，还需要有 `head` 的上一个节点 `pre`，以便翻转完后把子链表再接回 `pre`。

但是对于第一个子链表，它的头节点 `head` 前面是没有节点 `pre` 的。太麻烦了！难道只能特判了吗？答案是否定的。没有条件，我们就创造条件；没有节点，我们就创建一个节点。我们新建一个节点，把它接到链表的头部，让它作为 `pre` 的初始值，这样 `head` 前面就有了一个节点，我们就可以避开链表头部的边界条件。这么做还有一个好处，下面我们会看到。

反复移动指针 `head` 与 `pre`，对 `head` 所指向的子链表进行翻转，直到结尾，我们就得到了答案。下面我们该返回函数值了。

有的同学可能发现这又是一件麻烦事：链表翻转之后，链表的头节点发生了变化，那么应该返回哪个节点呢？照理来说，前 `k` 个节点翻转之后，链表的头节点应该是第 `k` 个节点。那么要在遍历过程中记录第 `k` 个节点吗？但是如果链表里面没有 `k` 个节点，答案又还是原来的头节点。我们又多了一大堆循环和判断要写，太崩溃了！

等等！还记得我们创建了节点 `pre` 吗？这个节点一开始被连接到了头节点的前面，而无论之后链表有没有翻转，它的 `next` 指针都会指向正确的头节点。那么我们只要返回它的下一个节点就好了。至此，问题解决。

### 代码

```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
    const nex = p.next;
    p.next = prev;
    prev = p;
    p = nex;
  }
  return [tail, head];
};
var reverseKGroup = function(head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const nex = tail.next;
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
};
```

### 复杂度

- 时间复杂度：O(n)，其中 n 为链表的长度。head 指针会在 O(n/k) 个节点上停留，每次停留需要进行一次 O(k) 的翻转操作。
- 空间复杂度：O(1)，我们只需要建立常数个变量。

## 参考文章

- [力扣 (LeetCode) - 题库](https://leetcode-cn.com/problemset/all/)

## 感谢

如果本文对你有帮助 😘，就点个赞 👍 支持下吧！感谢阅读。

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a10ab9f539ae4a18a1262c6d273fa15f~tplv-k3u1fbpfcp-watermark.image)
