// var s = '𠮷a';
//
// console.log(s.length); //3
// console.log(s.codePointAt(0)); // 134071
// console.log(s.codePointAt(1)); // 57271
// console.log(s.codePointAt(2)); // 97


// function is32Bit(c) {
// //超过2个字节组成的字符串都是大于0xFFFF
//     return c.codePointAt(0) > 0xFFFF;
// }
//
// console.log(is32Bit("𠮷")) // true
// console.log(is32Bit("a")) // false
// console.log(is32Bit("𠮷𠮷")) // true


// var s = '𠮷a';
// for (let ch of s) {
//     console.log(ch.codePointAt(0));
// }

// var text = String.fromCodePoint(0x20BB7);
//
// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }
// // " "
// // " "
//
// for (let i of text) {
//     console.log(i);
// }
// // "𠮷"

// var s = 'Hello world!';
// //第二个参数代表开始位置
// console.log(s.startsWith('world', 6))// true
// console.log(s.endsWith('Hello', 5)) // true
// console.log(s.includes('Hello', 6)) // false

// console.log('x'.repeat(3)) // "xxx"
// console.log('na'.repeat(0)) // ""
// console.log('na'.repeat(2.9)) // "nana"
// 'na'.repeat(Infinity)
// // RangeError
// 'na'.repeat(-1)
// // RangeError

// '1'.padStart(10, '0')

// console.log('1'.padStart(10, '0')); // "0000000001"
// console.log('12'.padStart(10, '0'))// "0000000012"
// console.log('123456'.padStart(10, '0')) // "0000123456"


// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
//
// //初始化需要处理的模板
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];
//
// console.log(tmpl(data));


// var template = `
// <ul>
//   <% for(var i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;
//
//
// function compile(template){
//     var evalExpr = /<%=(.+?)%>/g;
//     var expr = /<%([\s\S]+?)%>/g;
//
//     template = template
//         .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//         .replace(expr, '`); \n $1 \n  echo(`');
//
//     template = 'echo(`' + template + '`);';
//
//     var script =
//         `(function parse(data){
//     var output = "";
//
//     function echo(html){
//       output += html;
//     }
//
//     ${ template }
//
//     return output;
//   })`;
//
//     return script;
// }
//
// var parse = eval(compile(template));
// console.log(parse());

// console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));


// let tag = function(stringArr, value1, value2){
//     console.log(stringArr); //[ 'Hello ', ' world ', '' ]是一个数组
//     console.log(value1);//15
//     console.log(value2);//50
// }
//
// let a = 5;
// let b = 10;
// //这个tag是一个函数
// tag`Hello ${ a + b } world ${ a * b }`;


// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
//
// function passthru(literals) {
//     let result = '';
//     let i = 0;
//
//     while (i < literals.length) {
//         result += literals[i++];
//         console.log(result);
//         // if (i < arguments.length) {
//         //     result += arguments[i];
//         // }
//     }
//
//     return result;
// }
//
// console.log(msg) // "The total is 30 (31.5 with tax)"


// var message =
//     SaferHTML`<p>${sender} has sent you a message.</p>`;

// let SaferHTML = function (templateData) {
//     let s = templateData[0];//先将大括号外的第一个元素保存起来(即真正的参数之前的数据)
//     for (let i = 1; i < arguments.length; i++) { //对于大括号内的进行遍历处理
//         let arg = String(arguments[i]);
//
//         // Escape special characters in the substitution.
//         s += arg.replace(/&/g, "&amp;") //将处理完的模板字符串放回去返回结果里面
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");
//     }
//     //原例子的写法不太清晰,我改一下
//     //在将大括号外的第二个元素保存到返回结果(即真正参数之后的数据)
//     s += templateData[1];//
//     return s;
// }
//
// let sender = '<script>alert("abc")</script>'; // 恶意代码
// let message = SaferHTML`<p>${sender} has sent you a message.</p>`;
//
// console.log(message)
// //返回<p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

// tag`First line\nSecond line`
//
// function tag(strings) {
//     console.log(strings.raw[0]);
//     // "First line\\nSecond line"
// }

// console.log(Number.isFinite(15)); // true
// console.log(Number.isFinite(0.8)); // true
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(-Infinity)); // false
// console.log(Number.isFinite('foo')); // false
// console.log(Number.isFinite('15')); // false
// console.log(Number.isFinite(true)); // false

// Number.isNaN()用来检查一个值是否为NaN。

// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(15)) // false
// console.log(Number.isNaN('15')) // false
// console.log(Number.isNaN(true)) // false
// console.log(Number.isNaN(9/NaN)) // true
// console.log(Number.isNaN('true'/0)) // true
// console.log(Number.isNaN('true'/'true')) // true

// console.log(Number.isInteger(25)) // true
// console.log(Number.isInteger(25.0)) // true
// console.log(Number.isInteger(25.1)) // false
// console.log(Number.isInteger("15")) // false
// console.log(Number.isInteger(true)) // false

// function withinErrorMargin (left, right) {
//     return Math.abs(left - right) < Number.EPSILON;
// }
// console.log(withinErrorMargin(0.1 + 0.2, 0.3))
// // true
// console.log(withinErrorMargin(0.2 + 0.2, 0.3))
// // false

// console.log(Math.pow(2, 53)); // 9007199254740992
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) + 1)//false
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1) //true

// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)) // false
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false

// Math.trunc方法用于去除一个数的小数部分，返回整数部分

// console.log(Math.trunc(4.1)) // 4
// console.log(Math.trunc(4.9)) // 4
// console.log(Math.trunc(-4.1)) // -4
// console.log(Math.trunc(-4.9)) // -4
// console.log(Math.trunc(-0.1234)) // -0


// console.log(Math.sign(-5)) // -1
// console.log(Math.sign(5)) // 1
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(-0)) // -0
// console.log(Math.sign(NaN)) // NaN
// console.log(Math.sign('foo')); // NaN
// console.log(Math.sign());      // NaN

// console.log(2 ** 2) // 4
// console.log(2 ** 3) // 8
//
// //数运算符可以与等号结合，形成一个新的赋值运算符（**=）
// let a = 2;
// console.log(a **= 2);
// 等同于 a = a * a;

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
//
// // ES5的写法
// var arr1 = [].slice.call(arrayLike);
// console.log(arr1);// ['a', 'b', 'c']
// // ES6的写法
// let arr2 = Array.from(arrayLike);
// console.log(arr2);// ['a', 'b', 'c']



// // arguments对象
// function foo() {
//     var args = Array.from(arguments);
//     return args;
// }
//
// console.log(foo(1,2,'a')); //[ 1, 2, 'a' ]

console.log(Array.from('hello')) //字符串有Iterator接口
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b']) //Set结构的也有Iterator接口
console.log(Array.from(namesSet)) // ['a', 'b']