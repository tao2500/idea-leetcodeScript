// function matchesPattern(str) {
//   // 填写JavaScript
//   let regExp = new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}');
//   return regExp.test(str);
//   // return /^([0-9]{3}-){2}[0-9]{4}$/.test(str); // ai的
//   // return /[0-9]{3}-[0-9]{3}-[0-9]{4}/g.test(str); // 自己写的，不对
// }
//
// console.log(matchesPattern('800-555-0120'));

// 3.
// function _sqrt(number) {
//   // 填写JavaScript
//   console.log(Math.sqrt(number));
// };
// _sqrt(16);


// 4. rgb转16进制表示
// function rgb2hex(sRGB) {
//   let arr = [];
//   // 填写JavaScript
//   let num = 0;
//   // 找到颜色值
//   for(let i of sRGB){
//     if(/[0-9]/.test(i)) {
//       num = num * 10 + parseInt(i);
//     } else {
//       if(num !== 0){
//         arr.push(num);
//         num = 0;
//       }
//     }
//   }
//   // 转16进制
//   let ret = '#';
//   for(let i of arr) {
//     // 下面的转换方法没写出来，其他进制转10进制用parseInt(s, 16)，10进制转其他进制用toString(16)
//     ret += i.toString(16);
//   }
//   return ret;
// }
//
// console.log(rgb2hex('rgb(255, 155, 055)'));


// 2.
// function curryIt(fn) {
//   let arg = [];
//   let func = fn;
//   return function a (arg1 = null){
//     arg.push(arg1);
//     let length = 1;
//     return function b(arg2 = null) {
//       arg.push(arg2);
//       let length = 1;
//       return function c(arg3 = null) {
//         arg.push(arg3);
//         let length = 1;
//         return func(...arg);
//       }
//     }
//   }
// }
//
// console.log(curryIt((a, b, c) => {return a + b + c})(1)(2)(3) );


// 选择题
// 1 2 3
// for(var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// 0 1 2
// for (var i = 0; i < 3; i++){
//   console.log(i);
// }

