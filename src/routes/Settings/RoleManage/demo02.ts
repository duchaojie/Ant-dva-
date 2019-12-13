
// 函数  是一组执行一个任务的语句



function test() { // 函数定义
  console.log("调用函数")
}
test() // 调用函数

function oll(): string {
  return 'xiixixiixi'
}

function call() {
  var msg = oll();
  console.log(msg);
}
call();

// 参数和默认值

// 参数可选


// 计算 定义两个参数 和基本类型
function calculate(price: number, rate: number = 0.50) {
  var discount = price * rate;
  console.log("计算结果: ", discount);
}
calculate(1000) // 500
calculate(1000, 0.30) // 300


//  指定函数返回值的类型,一个函数只能有一个return语句，返回值的类型要和定义的一致
// 只有存在return语句时才需要定义返回值的类型

function du(num: number): number {
  return num;
}
console.log(du(34));

function add(x: number, y: number): number {
  return x + y
}
console.log(add(1, 2))

//  可选参数 和默认参数  可以设置可选参数
function xun(n: string, u?: string) {
  if (u)
    return u + '' + n;
  else
    return n
}

let oneResult = xun('Bob');  //  当只有一个参数的时候 返回一个参数
let twoResult = xun('Bob', 'lili'); // 有两个参数的时候同时返回
console.log(oneResult)
console.log(twoResult)


// 打印出 0-9
// for (var i = 0; i < 10; i++) {
//   // capture the current state of 'i'
//   // by invoking a function with its current value
//   (function (i) {
//     setTimeout(function () { console.log(i); }, 100 * i);
//   })(i);
// }

// // 打印出十个10 for循环执行完毕执行setTimeout for循环结束后i的值为10
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }


function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("和为：", sum)
}
addNumbers(1, 2, 3) // 6
addNumbers(10, 10, 10, 10, 10) // 50

//  函数的自执行
// (fn())();

//  构造函数
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x); // 12

// 递归
function digui(number) {
  if (number <= 0) {
    return 1;
  } else {
    return (number * digui(number - 1));// 调用自己
  }
}
console.log(digui(10)); // 3628800


// 函数重载 重载就是函数名字相同，但是参数不同，返回类型可以相同也可以不同，每个重载的方法（或者构造函数），都必须有一个独一无二的参数类型列表
function disp(s1: string): void;
function disp(n1: number, s1: string): void;
function disp(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
disp("abc")
disp(1, "xyz");

// 数组
var sites: string[] = new Array("Google", "JavaScript", "Taobao", "Facebook")
function disp(arr_sites: string[]) {
  for (var i = 0; i < arr_sites.length; i++) {
    console.log(arr_sites[i])
  }
}
disp(sites);


var s: string[] = new Array('D', "J", "k");
function di(arr: string[]) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

}
di(s);
// concat()

var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric);    // a,b,c,1,2,3

// splice  从数组中添加或删除
var ar = ["orange", "mango", "banana", "sugar", "tea"];
var removed = ar.splice(2, 0, "water");
console.log("After adding 1: " + ar);    // orange,mango,water,banana,sugar,tea
console.log("removed is: " + removed);

removed = ar.splice(3, 1);
console.log("After removing 1: " + ar);  // orange,mango,water,sugar,tea
console.log("removed is: " + removed);  // banana


