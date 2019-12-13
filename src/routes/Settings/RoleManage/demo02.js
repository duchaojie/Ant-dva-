// 函数  是一组执行一个任务的语句
function test() {
  console.log("调用函数");
}
test(); // 调用函数
function oll() {
  return 'xiixixiixi';
}
function call() {
  const msg = oll();
  console.log(msg);
}
call();
// 参数和默认值
// 参数可选
// 计算 定义两个参数 和基本类型
function calculate(price, rate) {
  if (rate === void 0) { rate = 0.50; }
  const discount = price * rate;
  console.log("计算结果: ", discount);
}
calculate(1000); // 500
calculate(1000, 0.30); // 300
//  指定函数返回值的类型,一个函数只能有一个return语句，返回值的类型要和定义的一致
// 只有存在return语句时才需要定义返回值的类型
function du(num) {
  return num;
}
console.log(du(34));
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
//  可选参数 和默认参数  可以设置可选参数
function xun(n, u) {
  if (u)
    return `${u}${n}`;
  else
    return n;
}
const oneResult = xun('Bob'); //  当只有一个参数的时候 返回一个参数
const twoResult = xun('Bob', 'lili'); // 有两个参数的时候同时返回
console.log(oneResult);
console.log(twoResult);
// 打印出 0-9
for (let i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function (i) {
    setTimeout(() => { console.log(i); }, 100 * i);
  })(i);
}
// // 打印出十个10 for循环执行完毕执行setTimeout for循环结束后i的值为10
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }
function addNumbers() {
  const nums = [];
  for (let _i = 0; _i < arguments.length; _i++) {
    nums[_i] = arguments[_i];
  }
  let i;
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//  函数的自执行
// (fn())();

