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

