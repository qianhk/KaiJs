let text = '哈哈Good <pink>好</end> a你<b>好blue</end>好，再来<pink>一段</end>文字';

// let found = text.match(/\<\w+\>(.+?)\<\/end\>+/g);
// console.log(found);
// if (found && found.index >= 0) {
//   console.log('found');
// }

const re = /\<\w+\>(.+?)\<\/end\>+/g;
const myArray = text.match(re);
console.log(myArray);
console.log(re.lastIndex);

// let result;
// while ((result = re.exec(text)) != null) {
//   document.write(result);
//   document.write("<br />");
//   document.write(re.lastIndex);
// }

// myArray2 = text.match(re);
// console.log(myArray2);
// console.log(re.lastIndex);

// var regex1 = RegExp('foo*', 'g');
// var str1 = 'table football, foosball';
// var array1;
//
// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }

// ECMAScript正则表达式6个最新特性
// https://blog.fundebug.com/2018/08/30/ecmascript-regular-expression-new-features/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

const pattern1 = /(\d{4})-(\d{2})-(\d{2})/u;
const result1 = pattern1.exec('2017-01-25');
console.log(result1[0]); // 打印"2017-01-25"
console.log(result1[1]); // 打印"2017"
console.log(result1[2]); // 打印"01"
console.log(result1[3]); // 打印"25"


const pattern2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result2 = pattern2.exec('2017-01-25');
console.log(result2.groups.year); // 打印"2017"
console.log(result2.groups.month); // 打印"01"
console.log(result2.groups.day); // 打印"25"

for (let value of result1) {  // weex的sdk js环境不支持这个写法
  console.log(`result1_value=${value}`);
}

let {foo, bar} = {foo: "aaa", bar: "bbb"};
console.log(`foo=${foo} baz=${bar}`);

let {foo: baz} = {foo: "aaa", bar: "bbb"};
console.log(`foo={foo} baz=${baz}`); // "aaa"  // foo is not defined

let person = {
  name: "张三"
};

let proxy = new Proxy(person, {
  get: function(target, property) {
    if (property === 'name') {
      return "李四";
    } else {
      return "你猜";
    }
  }
});

console.log(`${person.name}, ${proxy.name}, ${proxy.age}`); //张三, 李四, 你猜

setTimeout(function() {
  console.log(1);
}, 0);
console.log(2);


let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

const total = [0, 1, 2, 3].reduce(function(sum, currentValue) {
  return sum + currentValue;
}, 0);
console.log('total=' + total);

