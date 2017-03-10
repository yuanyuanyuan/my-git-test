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

tag`First line\nSecond line`

function tag(strings) {
    console.log(strings.raw[0]);
    // "First line\\nSecond line"
}