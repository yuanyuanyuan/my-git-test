// function * fibs() { //函数有* 是因为他是一个Generator,暂时忽略
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
//
// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(sixth) // 5

// let [foo = true] = [];
// console.log(foo) // true
//
// let [x, y = 'b'] = ['a'];
// console.log(x);
// console.log(y);// x='a', y='b'

// let [x, y = 'b'] = ['a', undefined];
// console.log(x);
// console.log(y);// x='a', y='b'


// let [x, y, ...z] = ['a'];
// console.log(x); //a
// console.log(y); // undefined
// console.log(z);//[]
//
// let [x = 1] = [undefined];
// console.log(x) // 1
//
// let [y = 1] = [null];
// console.log(y) // null

// function f() {
//     console.log('aaa');
// }
//
// let [x = f()] = [1];
// console.log(x);//1
//
// let [x = 1, y = x] = [];
// console.log(x)
// console.log(y)// x=1; y=1
//
// let [x = 1, y = x] = [2];
// console.log(x)
// console.log(y)// x=2; y=2

// let [x = 1, y = x] = [1, 2];
// console.log(x,y)// x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// let { bar, foo } = { foo: "aaa", bar: "bbb" };
// console.log(foo) // "aaa"
// console.log(bar) // "bbb"
// console.log(baz) // undefined,并且报错

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj; //这里的first就是原来的属性,现在要提取值到新的变量f,要这样写
// console.log(f) // 'hello'
// console.log(l) // 'world'

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
//
// let { p: [x, { y }] } = obj;
// console.log(x) // "Hello"
// console.log(y) // "World"
// console.log(p) // p is not defined

// let obj = {};
// let arr = [];
//
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
//
// console.log(obj) // {prop:123}
// console.log(arr) // [true]


// let {x = 3} = {};
// console.log(x) // 3
//
// let {x, y = 5} = {x: 1};
// console.log(x) // 1
// console.log(y) // 5
// //
// let { message: msg = 'Something went wrong' } = {};
// console.log(msg) // "Something went wrong"
//
//
// // 报错
// let {foo: {bar}} = {baz: 'baz'};


// //对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
//
// let { log, sin, cos } = Math;
// console.log(log(10));//2.302585092994046
// console.log(sin(10));//-0.5440211108893698
//
//
//     let arr = [1, 2, 3];
//     let {0 : first, [arr.length - 1] : last} = arr;
//     console.log(first) // 1
//     console.log(last) // 3

// const [a, b, c] = 'hello';
// console.log(a); //h
// console.log(b); //e
// console.log(c); //l

// let {toString: s} = 123;
// console.log(s === Number.prototype.toString )// true
// console.log(s)

// let {toString: s} = true;
// console.log(s === Boolean.prototype.toString) // true
// console.log(s)

// function add([x, y]){
//     return x + y;
// }
//
// console.log(add([1, 2])); // 3
//
// let test = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// console.log(test) // [ 3, 7 ]

// [//这里只是普通的嵌套数组
//     [1, 2], //每个子数组元素都是一个数组
//     [3, 4]
// ].map(//对他们使用map函数
//     //这里传入了一个函数,并且参数是自动解析参数数组的,相当于每次处理都是一整个子数组
//     ([a, b]) => a + b //并且因为能够对应得到析构模式,所以直接解析这个子数组
// );
//
// function move({x = 0, y = 0} = {}) {
//     return [x, y];
// }
//
// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, 0]
// console.log(move({})); // [0, 0]
// console.log(move()); // [0, 0]
//
// function move({x, y} = { x: 0, y: 0 }) {
//     return [x, y];
// }
//
// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, undefined]
// console.log(move({})); // [undefined, undefined]
// console.log(move()); // [0, 0]
//
//
// [1, undefined, 3].map((x = 'yes') => x);
// // [ 1, 'yes', 3 ]


// // 返回一个数组
//
// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// console.log([a, b, c]); //[ 1, 2, 3 ]
//
// // 返回一个对象
//
// function example1() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let { foo, bar } = example1();
// console.log({ foo, bar }) //{ foo: 1, bar: 2 }


// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };
//
// let { id, status, data: number } = jsonData;
//
// console.log(id, status, number);
// // 42, "OK", [867, 5309]


var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// first is hello
// second is world