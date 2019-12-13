import { string, number } from "prop-types";

//  元组  数组存的数据都是类型相同的，当数据类型不同的时候 使用元组存储数据。
// 声明一个元组 并初始化

var yaunzu = [10, 'dtring']; // 创建元组
console.log(yaunzu);
console.log(yaunzu[0]);
console.log(yaunzu[1]);

// 联合类型  可以通过管道（|）将变量设置多种类型，赋值时可以根据设置的类型来赋值
//  只能赋值指定的类型，赋值其他类型报错
var val: string | number;//  给一个变量多种类型
val = 2;
console.log('number', val);
val = 'hhhhhhhhas';
console.log('string', val);


function disp(name: string | string[]) {
  if (typeof name == "string") {
    console.log(name);
  } else {
    var i;
    for (i = 0; i < name.length; i++) {
      console.log(name[i])
    }
  }
}

disp('aaaaa');
// console.log()
disp(['q', 'w', 'd', 's']);

// 数组声明为联合类型

var arr: number[] | string[];
var i: number;
arr = [1, 2, 3];
console.log(arr);
console.log("**数字数组**")
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
arr = ["JavaScript", "Google", "Taobao"]
console.log("**字符串数字**")
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}


// 接口
// 一系列方法的声明，一些方法特征的集合，这些方法都是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象的方法调用，让具体的类执行具体的方法。
// 定义
// interface names { }

interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: () => string
}
var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => { return "Hi there" }
}
console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())
var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => { return "Hello!!!" }
}
console.log("Employee 对象 ")
console.log(employee.firstName)
console.log(employee.lastName)


// 联合类型和接口

interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}
// commandline 是字符串
var options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline)
// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式
options = { program: "test1", commandline: () => { return "**Hello World**"; } };
var fn: any = options.commandline;
console.log(fn());

// 接口和数组 【不明白】

// interface arrList {
//   [index: number]: string
// }
// var list2: arrList = ['d', '2', 'b']
// interface ages {
//   [index: string]: number
// }
// var ageslist: ages;
// ageslist['John']
// ageslist[2]


// 类 描述所创建的对象共同的属性和方法
// class Person {
// }

// class Car {
//   // 字段
//   engine: string;
//   // 构造函数
//   constructor(engine: string) {
//     this.engine = engine
//   }
//   // 方法
//   disp(): void {
//     console.log("发动机为 : " + this.engine)
//   }
// }

class Car {
  // 字段
  engine: string;
  // 构造函数
  constructor(engine: string) {
    this.engine = engine
  }
  // 方法
  disp(): void {
    console.log("函数中显示发动机型号 : " + this.engine) // 函数调用后展示
  }
}
// 创建一个对象  创建实例化对象
var obj = new Car("XXSY1")
// 访问字段
console.log("读取发动机型号 : " + obj.engine) // 先打印
// 访问方法
obj.disp()

// 读取发动机型号 : XXSY1
// 函数中显示发动机型号 : XXSY1


// 类的继承
class Shape {
  Area: number
  constructor(a: number) {
    this.Area = a
  }
}
class Circle extends Shape {
  disp(): void {
    console.log("圆的面积: " + this.Area)
  }
}
var obj = new Circle(223);
obj.disp()



class Shaps {
  constructor(a: number) {
    this.Areas = a // 指定类型为number
  }
}

class Discont extends Shaps {
  aa(): void {
    console.log('打印继承的类', this.Areas)
  }
}
var obja = new Discont(435);
obja.aa()
