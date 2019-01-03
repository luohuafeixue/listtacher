# Set和Map对象

本章节复习的是js中的Map和Set相关知识

##### 前置知识

Map和Set是es6中引入的，作为由key标记的容器

Map和Set对象承载的数据元素可以按照插入时的顺序，被迭代遍历

Set对象

set数据结构类似于数组，但所有成员的值都是唯一

```js
let a = new Set();
[1,2,2,1,3,4,5,4,5].forEach(x=>a.add(x));
for(let k of a){
    console.log(k)
};
```

#####  基础使用

```js
let a=new Set(1,2,3,4,5,6);
   console.log([.....6]);
   
   // 数组去重
[...new Set([1,2,3,4,4,4])];// [1,2,3,4]
```

`注意：往set添加值的时候是不会产生类型转换，5和'5'是不同的

##### 属性和方法

1属性

1. Set.prototype.constructor：构造函数，默认就是Set；
2. Set.prototype.size: 返回`Set`实例的成员总数

2操作方法

1. add 添加某一个值，返回的是Set本身
2. delete删除某个值。返回的是布尔类型，true删除成功，fasle删除失败
3. has 判断是不是Set成员的元素 返回的是布尔类型
4. clear，清除Set所有的成员。没有返回值

```js
let a=new Set()
   a.add(2,8) //a=>2,8
   a.delete(8)//a=>2
   a.has(2);        // true
   a.has(3);        // false
   a.clear()    已经清除
   
```

##### Set的应用

1数组去重

```js
let a=new Set([1,2,3,3,4,4,5,5,6,6,7,8])
  console.log(a)
  //es6去重最佳选择
```

2遍历和过滤

```js
let a=new Set([1,2,3,3,4,4,5,5,6,6,7,8])
let b=new Set([...........a.map(x =>x*2))])
et c = new Set([...a].filter(x =>(x%2) == 0)); // b => Set(2) {2,4}
```

3获取并集、交集和差集

```js
//获取并集
let a=new Set(1,2,3)
let b=new Set(3,4,5)
let c=new Set([..a,..b]) //1,2,3,4,5

// 获取交集
 et c2 = new Set([...a].filter(x => b.has(x))); // set {2,3}

// 差集
let c3 = new Set([...a].filter(x => !b.has(x))); // set {1}
```

4遍历方法

1. keys：返回键名遍历器
2. values：返回的是键值遍历器
3. entries：返回键值对的遍历器
4. forEach：遍历元素

```js
let aa=new Set([8,7,5,6,7])
for(let i of aa.keys()){
     console.log(i)//8,7,5,6,7
}
for(let i of aa.values()){
     console.log(i)//8,7,5,6,7
}
for(let i of aa.entries()){
     console.log(i)//[8,8]
}

```

5可以用for of 直接遍历Set

```js
let a = new Set(['a','b','c']);
for(let k of a){console.log(k)};   // 'a' 'b' 'c'
```

6`forEach`与数组相同，对每个成员执行操作，且无返回值

```js
let a = new Set(['a','b','c']);
a.forEach((v,k) => console.log(k + ' : ' + v));
```

### Map对象

由于传统的`JavaScript`对象只能用字符串当做键，给开发带来很大限制，se6增加了Map数据结构，使各种数据类型包括对象都可以做为键，`Map`结构提供了“**值—值**”的对应，是一种更完善的 Hash 结构实现

1基础使用

```js
let a=new Map();
   a.set(2)//2
   a.get(2)//2;
   a.size//返回Map成员的个数
   a.has()//查询是否存在
   a.delete(2)//删除某个值
   a.clear()清除Map所有的成员
```

注意：

1 传入数组作为参数，指定键值对的数组

```js
let a = new Map([
    ['name','leo'],
    ['age',18]
])
```

2如果对同一个键多次赋值，后者将覆盖前者

```
let a = new Map();
a.set(1,'aaa').set(1,'bbb');
a.get(1); //
```

3如果读取不知道的值返回的数据类型是undefined

```js
a.get('dscnidsnn')将返回的是undefined
```

4同样的值的两个实例，在 Map 结构中被视为两个键。

```js
    let a = new Map();
    let a1 = ['aaa'];
    let a2 = ['aaa'];
    a.set(a1,111).set(a2,222);
    a.get(a1); // 111
    a.get(a2); // 222
```

##### 遍历方法

1. `keys()`：返回键名的遍历器。
2. `values()`：返回键值的遍历器。
3. `entries()`：返回所有成员的遍历器。
4. `forEach()`：遍历 Map 的所有成员。

```js
let a = new Map([
    ['name','leo'],
    ['age',18]
])

for (let i of a.keys()){...};
for (let i of a.values()){...};
for (let i of a.entries()){...};
a.forEach((v,k,m)=>{
    console.log(`key:${k},value:${v},map:${m}`)
})
```

### Map数据结构和其他数据结构相互转化

##### map转数组

```js
let a = new Map().set(true,1).set({f:2},['abc']);
[...a]; // [[true:1], [ {f:2},['abc'] ]]
```

##### Map转对象

```js
function fun(s){
    let obg=Object.create(null);
    for(let [k,y] of s){
         obj[k] = v;
    }
}
const a = new Map().set('yes', true).set('no', false);

fun(a)
```

##### 对象转Map

```js
function fun(obj){
    let a=new Map();
    for(let k of Object.keys(obj)){
         a.set(k,obj[k])
    }
}

fun({yes: true, no: false})
```

##### Map 转 JSON

```js
function fun (s) {
    let obj = Object.create(null);
    for (let [k,v] of s) {
        obj[k] = v;
    }
    return JSON.stringify(obj)
}
let a = new Map().set('yes', true).set('no', false);
fun(a);
```

