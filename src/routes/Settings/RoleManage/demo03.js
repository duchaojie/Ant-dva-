"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//  元组  数组存的数据都是类型相同的，当数据类型不同的时候 使用元组存储数据。
// 声明一个元组 并初始化
var yaunzu = [10, 'dtring']; // 创建元组
console.log(yaunzu);
console.log(yaunzu[0]);
console.log(yaunzu[1]);
// 联合类型  可以通过管道（|）将变量设置多种类型，赋值时可以根据设置的类型来赋值
//  只能赋值指定的类型，赋值其他类型报错
var val; //  给一个变量多种类型
val = 2;
console.log('number', val);
val = 'hhhhhhhhas';
console.log('string', val);
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp('aaaaa');
// console.log()
disp(['q', 'w', 'd', 's']);
// 数组声明为联合类型
var arr;
var i;
arr = [1, 2, 3];
console.log(arr);
console.log("**数字数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["JavaScript", "Google", "Taobao"];
console.log("**字符串数字**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee 对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
// commandline 是字符串
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
// commandline 是字符串数组
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
// commandline 是一个函数表达式
options = { program: "test1", commandline: function () { return "**Hello World**"; } };
var fn = options.commandline;
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
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("函数中显示发动机型号 : " + this.engine); // 函数调用后展示
    };
    return Car;
}());
// 创建一个对象  创建实例化对象
var obj = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 : " + obj.engine); // 先打印
// 访问方法
obj.disp();
// 读取发动机型号 : XXSY1
// 函数中显示发动机型号 : XXSY1
// 类的继承
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积: " + this.Area);
    };
    return Circle;
}(Shape));
var obj = new Circle(223);
obj.disp();
var Shaps = /** @class */ (function () {
    function Shaps(a) {
        this.Areas = a; // 指定类型为number
    }
    return Shaps;
}());
var Discont = /** @class */ (function (_super) {
    __extends(Discont, _super);
    function Discont() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Discont.prototype.aa = function () {
        console.log('打印继承的类', this.Areas);
    };
    return Discont;
}(Shaps));
var obja = new Discont(435);
obja.aa();
