# json对象

json是按照js对象的对象的一种语法数据格式

### 1概念

json的概念有三点

1. jSONJavaScript对象表示法（JavaScript Object Notation）。
2. json是存储和交换文本信息的语法,类似于XML
3. json比xml传输更加稳定,更小,更容易解析

### 2语法

json在使用过程中可作为一个对象和或者字符串存在,作为对象时,可获取json的数据,作为字符串的时候常用于网络数据传输

  json的语法有三则

1. 数据在名称/值对中
2. 数据由逗号分隔
3. 花括号保存对象
4. 方括号保存数组

```json
"name":"明月几时有"
```

而json的值可以是

1. 数字(整数或浮点数)
2. 字符串
3. 布尔值
4. 数组
5. 对象
6. null

json常常有三种类型

1. 三种类型,简单之,对象和数组
2. 必须注意 json字符串必须是双括号,单括号会报错

### 3简单值

1简单值可以是字符串

```json
"你好世界"
```

2也可以是逻辑值

```json
1
```

### 4对象类型

内容是放在花括中是多个键值对

JSON对象 与 js 对象的三个区别：

1. json对象,必须包括双括号,而js对象属性名可以不加双括号
2. json对象没有变量声明,而js有变量声明
3. json对象没有分号的,而js对象有分好

```js
//js对象
 let aa={
    name:"cnrnvinvinivnivn",
    adin:"dscndnunurnvu
 };

//json对象
{
    "age"  : "25","
   "name" : "pingan",
       "boody":[
            "a","b","c"
       ]
    
}
```

### 5数组类型

内容是放在方括号中

```js
[
     {
        "name" : "leo",
        "age"  : 25,
        "box"  : ["a","b","c"]
    },
    {
        "name" : "pingan",
        "age"  : 25,
        "box"  : ["a","b","c"]
    }
    
    
    
]
```

### 6使用

json最常见的使用方式是从服务端获取数据 在将数据转换成JavaScrip对象然后使用,最常见的的两种方法是

  json对象有两个方法

1. `JSON.stringify()`： 序列化操作，将`JavaScript对象`转换成`JSON字符串`。
2. `JSON.prase()`：反序列化操作，将`JSON字符串`解析成`JavaScript值`。

序列化操作

 序列化操作常常使用JSON.stringify()

```js
let leo =  {
    name : "leo",
    age  : 25,
    box  : ["a","b","c"]
}
let pingan = JSON.stringify(leo);
console.log(pingan); // "{"name":"leo","age":25,"box":["a","b","c"]}"
```

注意事项

1. 默认情况下JSON.stringify()输出的字符串不包含任何空格字符或者缩进,因此结果就像哪样
2. 序列js对象时候,所有的函数以及原型对象成员都会被忽略,不体现在结果上
3. 值为undefined的任何属性都会被跳过

因此最终的值都是json数据类型的实例属性

反序列化操作

序列化操作常常使用的是JSON.parse()

```js
let copyPingan = JSON.parse(pingan);
copyPingan; // {name: "leo", age: 25, box: Array(3)}
```

如果传入json.parse()的字符串不是有效的json对象,则会抛出错误

### 7序列化选项

JSON.stringify()除了要传入序列化对象作为参数意外,还可以接受两个参数,用来指定序列化js对象方式

1.  过滤器:可以是数组,也可以是函数
2. 选项:表示是否在json字符串中保留**保留缩进**

过滤器

若过滤器的参数是数组,JSON.stringify()返回的结果将只包含数组中的属性

```js
var leo =  {
    name : "leo",
    age  : 25,
    box  : ["a","b","c"]
}
var pingan = JSON.stringify(leo,["name","age"]);
console.log(pingan); // "{"name":"leo","age":25}"
```

函数

若过滤器的参数是函数的话,则情况不一样,传入的函数需要两个参数(属性名和属性值)

```js
var leo =  {
    name : "leo",
    age  : 25,
    box  : ["a","b","c"]
}

var pingan=JSON.stringify(leo,function(value,key){
     switch(key){
        case "name":
            return "我叫" + value
        case "age":
            return value + "岁"
        default:
			return value
})

  console.log(pingan)
    // "{"name":"我叫leo","age":"25岁","box":["a","b","c"]}"
```

选项

在上述也说过JSON.stringify()第三个参数是选项控制结果中缩进和空白符

1若选项只有一个值，则表示每个级别缩进的空格数，最大值为`10`，超过`10`则只会是`10`。

```javascript
var leo =  {
    "name" : "leo",
    "age"  : 25,
    "box"  : ["a","b","c"]
}
var pingan = JSON.stringify(leo, null, 4);
console.log(pingan);
/*
"{
    "name": "leo",
    "age": 25,
    "box": [
        "a",
        "b",
        "c"
    ]
}"
```

### 8解析选项

JSON.parse()可以接收一个函数作为参数对每个键值调用,为了跟和JSON.stringify()区别,这个函数成为了还原函数,还原函数接收两个参数属性名和属性值

- 若还原函数返回`undefined`，则表示要从结果中删除对应的键。
- 若还原函数返回其他值，则将该值插入结果中。

举例，在日期字符串转换为Date对象中，经常要用到还原函数

```js
var leo =  {
    "name" : "leo",
    "age"  : 25,
    "date" : new Date(1993, 9, 9)
}
var pingan = JSON.stringify(leo);
var copy = JSON.parse(pingan,function (key, value){
    // return key == "date" ? new Date(value) : value;
    if(key == "date"){
        return new Date(value);
    }else{
        return value; 
    }
})
console.log(copy);
// "{"name":"leo","age":25,"date":"1993-10-08T16:00:00.000Z"}"
```

