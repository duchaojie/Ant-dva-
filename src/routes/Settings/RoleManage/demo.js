var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("JavaScript");
    };
    return Site;
}());
var obj = new Site();
obj.name();
var dw = "dudu";
var years = 5;
var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + dw + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
console.log(words); // 您好，今年是 dudu 发布 6 周年
// 声明变量未数组
var arr = [1, 2];
console.log(arr);
// 或者使用数组泛型
var arr02 = [1, 2, 3, 4];
console.log(arr02);
// let x: any = 4
// x = 'woshiyigeboy'
// x = false
// 检测类型
var x = 4;
// x.ifItExists(); // 编译不通过 ifItExists 运行时可能存在，但这里不会检查
x.toFixed(); //
// 定义储存各种类型数据的数组
var arrayList = [1, false, 'fine'];
arrayList[1] = 100; // 重新定义数据类型
console.log(arrayList); // [ 1, 100, 'fine' ]
var n = null;
var u = undefined;
console.log('n', n);
console.log('u', u);
// let x: never;
// let y: number;  // never 类型可以赋值给数字类型
// x = (() => { throw new Error('exception') })();
// y = (() => { throw new Error('exception') })
var one;
console.log('1', one); // 声明变量没有赋值 为Undefined
// 声明变量（string类型）后没有赋值，可以为其设置任意类型的值
one = 123; // 或布尔值 false 等
console.log('2', one); // 声明变量没有赋值 为Undefined
var two = 1245;
console.log(two);
// 变量不要使用name命名 否则会与DOM中全局window对象的name重名
// TypeScript 遵循强类型 将不同的值强制赋值会报错
var num = 'hi'; // 报类型错误
// 类型断言
var bb = '1'; // 类型推断是 字符串
console.log('bb', bb);
var cc = bb; //bb 现在是number 类型
// typeScript 类型推断 当类型没有给出时，typeScript编译器利用类型推断来推断类型
console.log('c', cc);
console.log('b', bb);
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 类变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("类变量: " + obj.num_val);
var xx = 4;
var yy = -xx;
console.log("x 值为: ", xx); // 输出结果 4
console.log("y 值为: ", yy); // 输出结果 -4
console.log("x 值为: ", xx); //
