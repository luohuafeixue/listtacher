# js对象介绍

格言,保持一份对技术的热爱

这篇这是介绍对象的基本知识

### 1概念

对象一个包含相关数据和方法的集合,由变量和方法组成,通常称为对象的属性和方法,比如

```js
let me = {
    name : 'pingan',
    eat: function(){
        console.log('eat eat eat!!!');
    }
}
```

其中的name就是me的属性,eat则是me的方法

访问对象的属性和方法如下

```js
let me = {
    name : 'pingan',
    eat: function(){
        console.log('eat eat eat!!!');
    }
}
   console.log(me.name);
   console.log(me.eat);
```

另外访问对象属性方法有如下两种方式

```js
let me = {
    name : 'pingan',
}
// 点表示法
me.name;   // me.name => "pingan"

// 括号表示法
me["name"];// me.name => "pingan"
```

括号中必须是字符串,若不是则报错

当然我们常常这么设置对象的属性

```js
let me = {
    name : 'pingan',
}
// 点表示法
me.name = "leo";   // me => {name: "leo"}

// 括号表示法
me["name"] = "leo";// me => {name: "leo"}
```

### 2简单的面向对象

这里简单介绍下js的面向对象oop

面向对象编程（Object Oriented Programming，OOP，面向对象程序设计）是一种计算机编程架构。OOP 的一条基本原则是计算机程序是由单个能够起到子程序作用的单元或对象组合而成。

![OOP1](C:\Users\76383\Desktop\OOP1.png)

我们这里定一个简单的对象模型,比如我的身上有可能有很多的信息(姓名, 年龄,身高)这个时候我们可以将这些信息给抽取出来 如下

```js
let me={
    name:"王星",
    age:23,
    sex:"男"
}
```

这样我们将抽取出来的信息用一个js对象来包装好,但会存在一个问题,因为这样包装,只能认定一个人呢? 那假如有100多个人呢,那我们应该怎么办呢.这个时候我们引入了构造函数这个思想,将相同的属性信息封装成通用的信息,实现定一次,可以无限使用,这就是面向对象的思想

```js
function daisbook(){
    let me={};
    me.name=name;
    me.disbookgood=function(){
       console.log(me.name);
    }
    return me
}
```

