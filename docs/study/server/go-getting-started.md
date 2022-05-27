# Go 快速入门指南

## 前言

Go（又称 Golang）是 [Google](https://baike.baidu.com/item/Google/86964) 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种静态强类型、编译型语言。Go 语言语法与 [C](https://baike.baidu.com/item/c%E8%AF%AD%E8%A8%80/105958?fromtitle=c&fromid=7252092) 相近，但功能上有：内存安全，垃圾回收，结构形态及 [CSP-style](https://baike.baidu.com/item/CSP/9076083?fr=aladdin) 并发计算。

> 温馨提示：由于本文偏基础，所以这里**适用对象**包括：对 Go 感兴趣的**前端开发工程师**和没有接触过这门语言的**JAVA 开发工程师**。这是一门非常年轻的语言，希望大家能通过本文了解 Go 的基本玩法。如果还能**玩的开心**那就再好不过了。

## 初识 Go 语言

### 特色

- 简洁、快速、安全
- 并行、有趣、开源
- 内存管理、数组安全、编译迅速

### 用途

- 服务器编程
- 分布式系统、数据库代理器、中间件
- 网络编程，Web 应用、API 应用、下载应用
- 数据库操作
- 开发云平台

## 环境安装

支持的系统：

- Linux
- FreeBSD
- Mac OS
- Windows

### Mac 系统下安装

1. 下载二进制包：[go1.15.darwin-amd64.tar.gz](https://golang.google.cn/dl/)
2. 将下载的二进制包解压至 `/usr/local` 目录

```go
tar -C /usr/local -xzf go1.15.darwin-amd64.tar.gz
```

3. 将 `/usr/local/go/bin` 目录添加至 PATH 环境变量：

```go
export PATH=$PATH:/usr/local/go/bin
```

> 温馨提示：MAC 系统下你可以使用 **.pkg** 结尾的安装包直接双击来完成安装，安装目录在 **/usr/local/go/** 下

### Windows 系统下安装

然后说说 Windows 平台，Windows 系统可以直接下载 [go1.15.windows-amd64.msi](https://golang.google.cn/dl/) 安装包来安装。（安装包窗口，连续点击下一步即可）

默认情况下，安装文件会安装在 `C:\Go` 目录下。

新建 `test.go` 文件，输入以下示例代码：

```go
/* test.go */
package main
import "fmt"
func main()  {
	fmt.Println("Hello, World!")
}
```

命令行执行代码输出结果如下：

```go
Microsoft Windows [版本 10.0.18363.959]
(c) 2019 Microsoft Corporation。保留所有权利。

D:\Workspace>go run test.go
Hello, World!
```

## 语言结构

Go 语言的基础组成：

- 包声明
- 引入包
- 函数
- 变量
- 语句 & 表达式
- 注释

看下 `test.go` 的各个部分：

1. `package main` 定义了包名。你必须在源文件中非注释的第一行指明这个文件属于哪个包，如：`package main`。
2. `import "fmt"` 告诉 Go 编译器这个程序需要使用 `fmt` 包（的函数，或其他元素），`fmt` 包实现了格式化 `IO`（输入/输出）的函数。
3. `func main()` 是程序开始执行的函数。main 函数是每一个可执行程序所必须包含的，一般来说都是在启动后第一个执行的函数（如果有 `init()` 函数则会先执行该函数）。
4. `fmt.Println("Hello, World!")` 可以将字符串输出到控制台。
5. 当标识符（包括常量、变量、类型、函数名、结构字段等等）以一个大写字母开头，如：`Group1`，那么使用这种形式的标识符的对象就可以被外部包的代码所使用（客户端程序需要先导入这个包），这被称为导出（像面向对象语言中的 `public`）；标识符如果以小写字母开头，则对包外是不可见的，但是他们在整个包的内部是可见并且可用的（像面向对象语言中的 `protected` ）。

## 数据类型

| 类型       | 描述                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 布尔型     | 布尔型的值只可以是常量 `true` 或者 `false`。一个简单的例子：`var b bool = true`。                                                              |
| 数字类型   | 整型 `int` 和浮点型 `float32`、`float64`，Go 语言支持整型和浮点型数字，并且支持复数，其中位的运算采用补码。                                    |
| 字符串类型 | 字符串就是一串固定长度的字符连接起来的字符序列。Go 的字符串是由单个字节连接起来的。Go 语言的字符串的字节使用 `UTF-8` 编码标识 `Unicode` 文本。 |
| 派生类型   | 包括：指针类型（Pointer）、数组类型、结构化类型(struct)、Channel 类型、函数类型、切片类型、接口类型（interface）、Map 类型                     |

## 变量

Go 语言变量名由字母、数字、下划线组成，其中首个字符不能为数字。

声明变量的一般形式是使用 `var` 关键字。

### 变量声明

指定变量类型，如果没有初始化，则变量默认为零值。

```go
package main
import "fmt"
func main() {

    /* 声明一个变量并初始化 */
    var a = "hello"
    fmt.Println(a) /* hello */

    /* 没有初始化就为零值 */
    var b int
    fmt.Println(b) /* 0 */

    /* bool 零值为 false */
    var c bool
    fmt.Println(c) /* false */
}
```

也可以根据值自行判定变量类型。

```go
package main
import "fmt"
func main() {
    var d = true
    fmt.Println(d) /* true */
}
```

还有一种声明方式，省略 `var`, 注意 `:=` 左侧如果没有声明新的变量，就产生编译错误，格式：

```go
package main
import "fmt"
func main() {
    f := "hello" /* var f string = "hello" */
    fmt.Println(f)
}
```

> 注意：当变量类型为引用类型，且存在赋值操作（例如：`a = b`）时，只有引用（地址）被复制。

## 指针

变量是一种使用方便的占位符，用于引用计算机内存地址。

Go 语言的取地址符是 `&`，放到一个变量前使用就会返回相应变量的内存地址。

```go
package main
import "fmt"
func main()  {
    var a int = 100
    fmt.Printf("变量的内存地址: %x\n", &a  )
}

/* 输出 */
变量的内存地址: c000010080
```

### 什么是指针

一个指针变量指向了一个值的内存地址。

```go
var ip *int        /* 指向整型 */
var fp *float32    /* 指向浮点型 */
```

### 如何使用指针

使用流程：

- 定义指针变量
- 为指针变量赋值
- 访问指针变量中指向地址的值

在指针类型前面加上 `*` 号（前缀）来获取指针所指向的内容。

```go
package main
import "fmt"
func main() {
   var a int = 10   /* 声明实际变量 */
   var ip *int        /* 声明指针变量 */

   ip = &a  /* 指针变量的存储地址 */

   fmt.Printf("a 变量的地址是: %x\n", &a  )

   /* 指针变量的存储地址 */
   fmt.Printf("ip 变量储存的指针地址: %x\n", ip )

   /* 使用指针访问值 */
   fmt.Printf("*ip 变量的值: %d\n", *ip )
}

/* 输出 */
a 变量的地址是: c000010080
ip 变量储存的指针地址: c000010080
*ip 变量的值: 10
```

### 空指针

当一个指针被定义后没有分配到任何变量时，它的值为 `nil`。

`nil` 指针也称为空指针。

`nil` 在概念上和其它语言的 `null、None、nil、NULL` 一样，都指代零值或空值。

一个指针变量通常缩写为 `ptr`。

## 结构体

Go 语言中数组可以存储同一类型的数据，但在结构体中我们可以为不同项定义不同的数据类型。

结构体是由一系列具有相同类型或不同类型的数据构成的数据集合。

### 定义结构体

结构体定义需要使用 `type` 和 `struct` 语句。`struct` 语句定义一个新的数据类型，结构体中有一个或多个成员。`type` 语句设定了结构体的名称。

实例:

```go
package main
import "fmt"
type Games struct {
   name string
   url string
   class string
   game_id int
}


func main() {

    // 创建一个新的结构体
    fmt.Println(Games{"英雄联盟", "https://lol.qq.com/main.shtml", "MOBA", 666666})

    // 也可以使用 key => value 格式
    fmt.Println(Games{name: "英雄联盟", url: "https://lol.qq.com/main.shtml", class: "MOBA", game_id: 666666})

    // 忽略的字段为 0 或 空
   fmt.Println(Games{name: "英雄联盟", url: "https://lol.qq.com/main.shtml"})
}

/* 输出 */
{英雄联盟 https://lol.qq.com/main.shtml MOBA 666666}
{英雄联盟 https://lol.qq.com/main.shtml MOBA 666666}
{英雄联盟 https://lol.qq.com/main.shtml  0}
```

### 访问结构体成员

如果要访问结构体成员，需要使用点号 `.` 操作符，格式为：

```go
结构体.成员名
```

实例：

```go
package main
import "fmt"
type Games struct {
   name string
   url string
   class string
   game_id int
}

func main() {
   var LOL Games /* 声明 LOL 为 Games 类型 */

   /* LOL 描述 */
   LOL.name = "英雄联盟"
   LOL.url = "https://lol.qq.com/main.shtml"
   LOL.class = "MOBA"
   LOL.game_id = 666666

   /* 打印 LOL 信息 */
   fmt.Printf( "LOL name : %s\n", LOL.name)
   fmt.Printf( "LOL url : %s\n", LOL.url)
   fmt.Printf( "LOL class : %s\n", LOL.class)
   fmt.Printf( "LOL game_id : %d\n", LOL.game_id)
}

/* 输出 */
LOL name : 英雄联盟
LOL url : https://lol.qq.com/main.shtml
LOL class : MOBA
LOL game_id : 666666
```

### 结构体指针

如果想在函数里面改变结果体数据内容，需要传入指针：

```go
package main
import "fmt"
type Games struct {
   name string
   url string
   class string
   game_id int
}

func changeGame(game *Games) {
    game.name = "云顶之弈"
}

func main() {
    var LOL Games
    LOL.name = "英雄联盟"
   	LOL.url = "https://lol.qq.com/main.shtml"
   	LOL.class = "MOBA"
   	LOL.game_id = 666666
    changeGame(&LOL)
    fmt.Println(LOL)
}

/* 输出 */
{云顶之弈 https://lol.qq.com/main.shtml MOBA 666666}
```

## 切片( Slice )

Go 语言切片是对数组的抽象。

Go 数组的长度不可改变，在特定场景中这样的集合就不太适用，Go 中提供了一种灵活，功能强悍的内置类型切片("动态数组"),与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大。

### 定义切片

```go
/* 声明一个未指定大小的数组来定义切片 */
var identifier []type

/* 使用 make() 函数来创建切片 */
var slice1 []type = make([]type, len)
/* 简写 */
slice1 := make([]type, len)

/* 也可以指定容量，其中 capacity 为可选参数 */
make([]T, length, capacity)
```

这里 `len` 是数组的长度并且也是切片的初始长度。

### 切片初始化

```go
s :=[] int {1, 2, 3}
```

直接初始化切片，`[]`表示是切片类型，`{1,2,3}`初始化值依次是`1,2,3`。这里`cap=len=3`

```go
s := arr[:]
```

初始化切片 `s` ,是数组 `arr` 的引用

```go
s := arr[startIndex:endIndex]
```

将 `arr` 中从下标 `startIndex` 到 `endIndex-1` 下的元素创建为一个新的切片

```go
s := arr[startIndex:]
```

将 `arr` 中从下标 `startIndex` 到最后一个元素（默认 `endIndex` 情况）

```go
s := arr[:endIndex]
```

将表示从 `arr` 的第一个元素开始（默认 `startIndex` 情况），到下标 `endIndex` 下的元素

```go
s1 := s[startIndex:endIndex]
```

通过切片 `s` 初始化切片 `s1`

```go
s :=make([]int, len, cap)
```

通过内置函数 `make()` 初始化切片 `s`，`[]int` 标识为其元素类型为 `int` 的切片

### len() 和 cap() 函数

切片是可索引的，并且可以由 `len()` 方法获取长度。

切片提供了计算容量的方法 `cap()` 可以测量切片最长可以达到多少。

```go
package main
import "fmt"
func main() {
   var numbers = make([]int, 3, 10)

   printSlice(numbers)
}

func printSlice(x []int){
   fmt.Printf("len=%d cap=%d slice=%v\n",len(x),cap(x),x)
}

/* 输出 */
len=3 cap=10 slice=[0 0 0]
```

## 范围( Range )

Go 语言中 `range` 关键字用于 `for` 循环中迭代数组( array )、切片( slice )、通道( channel )或集合( map )的元素。在数组和切片中它返回元素的索引和索引对应的值，在集合中返回 `key-value` 对。

```go
package main
import "fmt"
func main() {
    /* 这是我们使用 range 去求一个 slice 的和。使用数组跟这个很类似 */
    nums := []int{1, 2, 3}
    sum := 0
    for _, num := range nums {
        sum += num
    }
    fmt.Println("sum:", sum)
    /* 在数组上使用 range 将传入 index 和值两个变量。上面那个例子我们不需要使用该元素的序号，所以我们使用空白符"_"省略了。有时侯我们确实需要知道它的索引 */
    for i, num := range nums {
        if num == 3 {
            fmt.Println("index:", i)
        }
    }
    /* range 也可以用在 map 的键值对上 */
    kvs := map[string]string{"a": "apple", "b": "banana"}
    for k, v := range kvs {
        fmt.Printf("%s -> %s\n", k, v)
    }
    /* range 也可以用来枚举 Unicode 字符串。第一个参数是字符的索引，第二个是字符（Unicode 的值）本身 */
    for i, c := range "go" {
        fmt.Println(i, c)
    }
}

/* 输出 */
sum: 6
index: 2
a -> apple
b -> banana
0 103
1 111
```

## Map (集合)

`Map` 是一种无序的键值对的集合。`Map` 最重要的一点是通过 `key` 来快速检索数据，`key` 类似于索引，指向数据的值。

`Map` 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，`Map` 是无序的，我们无法决定它的返回顺序，这是因为 `Map` 是使用 `hash` 表来实现的。

### 定义 Map

可以使用内建函数 `make` 也可以使用 `map` 关键字来定义 `Map`:

```go
/* 声明变量，默认 map 是 nil */
var map_variable map[key_data_type]value_data_type

/* 使用 make 函数 */
map_variable := make(map[key_data_type]value_data_type)
```

如果不初始化 `map`，那么就会创建一个 `nil map`。`nil map` 不能用来存放键值对

下面实例演示了创建和使用 `map`:

```go
package main
import "fmt"
func main() {
    var cnNameMap map[string]string /* 创建集合 */
    cnNameMap = make(map[string]string)

    /* map 插入 key-value 对,各个英文对应的中文名 */
    cnNameMap [ "Ashe" ] = "寒冰射手·艾希"
    cnNameMap [ "Annie" ] = "黑暗之女·安妮"
    cnNameMap [ "Alistar" ] = "牛头酋长·阿利斯塔"
    cnNameMap [ "Twisted" ] = "卡牌大师·崔斯特"

    /* 使用键输出中文名 */
    for cn := range cnNameMap {
        fmt.Println(cn, "中文名是", cnNameMap [cn])
    }

    /* 查看元素在集合中是否存在 */
    name, ok := cnNameMap [ "Sivir" ] /* 如果确定是真实的,则存在,否则不存在 */
    /* fmt.Println(name) */
    /* fmt.Println(ok) */
    if (ok) {
        fmt.Println("Sivir 的中文名是", name)
    } else {
        fmt.Println("Sivir 的中文名不存在")
    }
}

/* 输出 */
Annie 中文名是 黑暗之女·安妮
Alistar 中文名是 牛头酋长·阿利斯塔
Twisted 中文名是 卡牌大师·崔斯特
Ashe 中文名是 寒冰射手·艾希
Sivir 的中文名不存在
```

### delete() 函数

`delete()` 函数用于删除集合的元素, 参数为 `map` 和其对应的 `key`。

实例如下：

```go
package main
import "fmt"
func main() {
    /* 创建 map */
    cnNameMap := map[string]string{
    	"Annie": "黑暗之女·安妮",
        "Alistar": "牛头酋长·阿利斯塔",
        "Twisted": "卡牌大师·崔斯特",
        "Ashe": "寒冰射手·艾希",
    	"Sivir": "战争女神·希维尔",
    }

    fmt.Println("英雄联盟")

    /* 打印中文名 */
    for cn := range cnNameMap {
    	fmt.Println(cn, "中文名是", cnNameMap [ cn ])
    }

    /* 删除元素 */ delete(cnNameMap, "Alistar")
    fmt.Println("牛头酋长·阿利斯塔被删除")

    fmt.Println("删除元素后英雄联盟")

    /*打印中文名*/
    for cn := range cnNameMap {
    	fmt.Println(cn, "中文名是", cnNameMap [ cn ])
    }
}

/* 输出 */
英雄联盟
Annie 中文名是 黑暗之女·安妮
Alistar 中文名是 牛头酋长·阿利斯塔
Twisted 中文名是 卡牌大师·崔斯特
Ashe 中文名是 寒冰射手·艾希
Sivir 中文名是 战争女神·希维尔
牛头酋长·阿利斯塔被删除
删除元素后英雄联盟
Ashe 中文名是 寒冰射手·艾希
Sivir 中文名是 战争女神·希维尔
Annie 中文名是 黑暗之女·安妮
Twisted 中文名是 卡牌大师·崔斯特
```

## 类型转换

类型转换用于将一种数据类型的变量转换为另外一种类型的变量。Go 语言类型转换基本格式如下：

`类型(表达式)`

以下实例中将整型转化为浮点型

```go
package main
import "fmt"
func main() {
   var sum int = 10
   var count int = 3
   var mean float32

   mean = float32(sum)/float32(count)
   fmt.Printf("mean 的值为: %f\n",mean)
}

/* 输出 */
mean 的值为: 3.333333
```

## 接口

Go 语言提供了另外一种数据类型即接口，它把所有的具有共性的方法定义在一起，任何其他类型只要实现了这些方法就是实现了这个接口。

```go
package main
import (
    "fmt"
)

type Phone interface {
    call()
}

type AndroidPhone struct {
}

func (androidPhone AndroidPhone) call() {
    fmt.Println("I am Android, I can call you!")
}

type IPhone struct {
}

func (iPhone IPhone) call() {
    fmt.Println("I am iPhone, I can call you!")
}

func main() {
    var phone Phone

    phone = new(AndroidPhone)
    phone.call()

    phone = new(IPhone)
    phone.call()
}

/* 输出 */
I am Android, I can call you!
I am iPhone, I can call you!
```

例子中，我们定义了一个接口 `Phone`，接口里面有一个方法 `call()`。然后我们在 `main` 函数里面定义了一个 `Phone` 类型变量，并分别为之赋值为 `AndroidPhone` 和 `IPhone` 。

## 错误处理

Go 语言通过内置的错误接口提供了非常简单的错误处理机制。

`error` 类型是一个接口类型，这是它的定义：

```go
type error interface {
    Error() string
}
```

函数通常在最后的返回值中返回错误信息。使用 `errors.New` 可返回一个错误信息：

```go
func Sqrt(f float64) (float64, error) {
    if f < 0 {
        return 0, errors.New("math: square root of negative number")
    }
}
```

实例：

```go
package main
import "fmt"
/* 定义一个 DivideError 结构 */
type DivideError struct {
    dividee int
    divider int
}

/* 实现 `error` 接口 */
func (de *DivideError) Error() string {
    strFormat := `
    Cannot proceed, the divider is zero.
    dividee: %d
    divider: 0
`
    return fmt.Sprintf(strFormat, de.dividee)
}

/* 定义 `int` 类型除法运算的函数 */
func Divide(varDividee int, varDivider int) (result int, errorMsg string) {
    if varDivider == 0 {
        dData := DivideError{
            dividee: varDividee,
            divider: varDivider,
        }
        errorMsg = dData.Error()
        return
    } else {
        return varDividee / varDivider, ""
    }
}

func main() {
    /* 正常情况 */
    if result, errorMsg := Divide(100, 10); errorMsg == "" {
    	fmt.Println("100/10 = ", result)
    }
    /* 当除数为零的时候会返回错误信息 */
    if _, errorMsg := Divide(100, 0); errorMsg != "" {
    	fmt.Println("errorMsg is: ", errorMsg)
    }
}

/* 输出 */
100/10 =  10
errorMsg is:
    Cannot proceed, the divider is zero.
    dividee: 100
    divider: 0
```

## 并发

Go 语言支持并发，我们只需要通过 `go` 关键字来开启 `goroutine` 即可。

`goroutine` 是轻量级线程，`goroutine` 的调度是由 Golang 运行时进行管理的。

例如：

`go f(a, b, c)`

开启一个新的 `goroutine`:

`f(a, b, c)`

同一个程序中的所有 `goroutine` 共享同一个地址空间。

```go
package main
import (
	"fmt"
	"time"
)
func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}

func main() {
	go say("hi")
	say("hello")
}

/* 输出 */
hi
hello
hello
hi
hello
hi
hello
hi
hello
```

## 参考文章

- [Go 语言教程](https://www.runoob.com/go/go-tutorial.html)

## 感谢

- 本文就 Go 语言作了初步介绍，希望能起到抛砖引玉的效果。
- 文中如有错误，欢迎在评论区指正。
- 如果本文对你有帮助，就点个 [Star](https://github.com/yanxugong/blog) 支持下吧！感谢阅读。
