# js介绍对象

### 1概念

对象是包含相关数据和方法的集合。由变量和方法组成。我们通常称之为对象上的属性和和方法。来看个简单的列子

```js
 let name={
    name:"王星",
    sax:function(){
        console.log('fniern ')
    }
    
}
```

  其中name是name的方法。反之sax是name的方法

访问对象属性如下

```js
let name={
    name:"王星",
    sax:function(){
        console.log('fniern ')
    }
    
}

console.log(name.name,name.sax())
```

​     当然在对象中我们写方法可以直接写成这样，不需要后面跟着function 在es6是可以这样写的

```js
let name={
    name:"王星",
    sax(){
        console.log('fniern ')
    }
    
}
console.log(name.name,name.sax())
```

### 2简单的介绍面向对象

面向对象编程（Object Oriented Programming，OOP，面向对象程序设计）是一种计算机编程架构。OOP 的一条基本原则是计算机程序是由单个能够起到子程序作用的单元或对象组合而成。 —— 百度百科

我们可以简单的定义个模型。比如我的身上可能有很多的信息（姓名，年龄。身高等等）这个时候我们可以把这些共同信息给抽取出来

```js
let aa={
    name:"王星",
    sax:24,
    age:'男'
}
```

这样我们就将我的信息抽取成一个JS的对象了，但是这样有个局限性，这样定义的话，一次只能定义一个人，如果这时候，有一百个人，那么我们就需要定义一百个这样的对象，显然这是不可取的。
所以，这里就引入一个重要的函数——**构造函数**，**将相同的特性封装成通用的对象**，实现定义一次，其他地方都可以使用，这也是OOP的核心思想：

```js
function myList(name,sax,age){
    let me={};
    me.name=name;
    me.sax=sax;
    me.age=age;
    me.doSomething=function(){
        console.log(me.name);
    }
    return me;
}
 
```

  我们写了个方法假如有很多相同的属性，那么我们直接调用就行

```js
let myList('网',25,'男')
  myList('网',25,'男')
   myList('网',25,'男')
    myList('网',25,'男')
```

但是似乎`myList`对象的定义，显得不够精简，因为还要定义一个**空对象**来接收各个属性和方法，幸好JavaScrip在构造函数中提供一个便捷的方法，我们将代码改造下：

```js
function myList(name,sax,age){
    this.name=name;
    this.sax=sax;
    this.age=age;
    this.doSomething=function(){
        console.log(me.name);
    }
    return me;
}
```

对于this关键字即无论那个实列被构造函数给创建他的new属性都是参数name的值doSomething方法使用的参数也得name，简单的来说this指的就是myList，接下来通过new字符使用前面所创建的构造函数

```js
let aa=new myList('网',25,'男')
```

然后一个简单的构造函数就写好了，通常在开发的时候，可能会有很多的参数：

```js
function Man(name, age, height, weight){
    this.name = name;
    this.age = age + '岁';
    this.HeightAndWeight = {
        height,
        weight
    };
    this.doSomething = function (){
        console.log(`
            ${this.name}: height:${this.HeightAndWeight.height}m, 
            weight:${this.HeightAndWeight.weight}Kg!!`
        );
    };
}

let leo = new Man("leo",25,1.8,68);
leo.doSomething();  // leo: height:1.8m, weight:68Kg!!
```

### js的原形

1原形的理解

这里要了解下js中的function和Object都是自带的函数Object继承自己，function继承自己，相互继承对方换句话说function和Object是对象又是函数

```js
console.log(Function instanceof Object); // true
console.log(Object instanceof Function); // true
```

Object是function的实列而function又是自己的实列

```js
console.log(Function.prototype); // ƒ () { [native code] }
console.log(Object.prototype);  // Object
```

另外只有通过函数所创建的才是函数对象，其他的都是普通对象

```js
function f1(){};
typeof f1 //"function"
 
 
var o1 = new f1();
typeof o1 //"object"
 
var o2 = {};
typeof o2 //"object"
```

2理论知识

js常被描述为基于原形的语言(prototype-based language)每个对象都拥有一个原形对象，对象以原形为模板从原形上继承方法和属性，原形对象也有可能拥有原形并从中继承方法和属性一层一层的类推，这种关系被称之为原形链它解释了为何一个对象会拥有定义在其他对象中的属性和方法。准确的来说这些属性和方法定义在Object的构造器函数(constructor functions)之上的`prototype`属性上，而非对象实例本身

个人理解

js中的所有函数对象都有一个prototype对应当前原形但普通对象是没有的，而`prototype`属性下还有一个`constructor`，指向这个函数。

```js
var p = {};
p.prototype;         // undefined
p instanceof Object; // true

function f (){}; 
f.prototype;         // object {constructor: ƒ}
f === f.prototype.constructor;           // true
Object === Object.prototype.constructor; // true
```

S中所有的对象，都有一个`_proto_`属性，指向**实例对象的构造函数原型**（由于`_proto_`是个非标准属性，因此只有**ff**和**chrome**两个浏览器支持，标准方法是`Object.getPrototypeOf()`）。

```js
var p = new Person(); 
p._proto === Person.prototype;  //true
```

有的时候我们也会修改原形

```js
function Person (name){
    this.name = name;
}
// 添加一个getName方法
Person.prototype.getName = function(){
    return "名字：" + this.name;
}
var p = new Person("leo"); 
p.getName();   // "名字：leo"
```

