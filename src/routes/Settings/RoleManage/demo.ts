class Site {
  name(): void {
    console.log("JavaScript")
  }
}
var obj = new Site();
obj.name();


let dw: string = "dudu";
let years: number = 5;
let words: string = `您好，今年是 ${dw} 发布 ${years + 1} 周年`;
console.log(words); // 您好，今年是 dudu 发布 6 周年

// 声明变量未数组
let arr: number[] = [1, 2];
console.log(arr);
// 或者使用数组泛型
let arr02: Array<number> = [1, 2, 3, 4];
console.log(arr02);


// let x: any = 4
// x = 'woshiyigeboy'
// x = false

// 检测类型
let x: any = 4
// x.ifItExists(); // 编译不通过 ifItExists 运行时可能存在，但这里不会检查
x.toFixed(); //

// 定义储存各种类型数据的数组
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100; // 重新定义数据类型
console.log(arrayList); // [ 1, 100, 'fine' ]


let n: null = null
let u: undefined = undefined
console.log('n', n)
console.log('u', u)


// let x: never;
// let y: number;  // never 类型可以赋值给数字类型
// x = (() => { throw new Error('exception') })();
// y = (() => { throw new Error('exception') })


let one: string;
console.log('1', one); // 声明变量没有赋值 为Undefined

// 声明变量（string类型）后没有赋值，可以为其设置任意类型的值
one = 123  // 或布尔值 false 等
console.log('2', one); // 声明变量没有赋值 为Undefined


let two: number = 1245;
console.log(two);



// 变量不要使用name命名 否则会与DOM中全局window对象的name重名
// TypeScript 遵循强类型 将不同的值强制赋值会报错
var num: number = 'hi'; // 报类型错误


// 类型断言

var bb = '1'; // 类型推断是 字符串
console.log('bb', bb);
var cc: number = <number><any>bb  //bb 现在是number 类型

// typeScript 类型推断 当类型没有给出时，typeScript编译器利用类型推断来推断类型


console.log('c', cc);
console.log('b', bb);


var global_num = 12 // 全局变量
class Numbers {
  num_val = 13; // 类变量
  static sval = 10; // 静态变量

  storeNum(): void {
    var local_num = 14; // 局部变量
  }
}
console.log("全局变量为: " + global_num)
console.log(Numbers.sval) // 静态变量
var obj = new Numbers();
console.log("类变量: " + obj.num_val)

var xx: number = 4
var yy = -xx;
console.log("x 值为: ", xx); // 输出结果 4
console.log("y 值为: ", yy); // 输出结果 -4
