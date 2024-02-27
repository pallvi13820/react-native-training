import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const arraymethod = () => {
  return (
    <View>
      <Text>arraymethod</Text>
    </View>
  );
};

export default arraymethod;

const styles = StyleSheet.create({});

//array method
//1.Array length
// let array = [1,2,3,4,5];
// let size = array.length;
// console.log('size', size);

//2.Array toString()
// let array = ["apple","banana","orange","mango"];
// let arr = array.toString();
// console.log('arr', arr);

//3.Array at()
// let fruits = ["apple","banana","orange","mango"];
// let arr = fruits.at[2];
// console.log('arr', arr);

// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits[2];
// console.log('element', element);

//4.Array join()
// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits.join("*");
// console.log('element', element);

//5.Array pop()
// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits.pop();
// console.log('element', element);
// console.log('fruits', fruits);

//6.Array push()
// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits.push("strawberry");
// console.log('fruits', fruits);

//7.shift() Method
//The shift() method removes the first element of an array (and "shifts" the other elements to the left):
// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits.shift();
// console.log('fruits', fruits);

//8.unshift() Method
//The unshift() method adds new elements to the beginning of an array:
// let fruits = ["apple", "banana", "orange", "mango"];
// let element = fruits.unshift("lemon");
// console.log('fruits', fruits);

//9.concat() Method
//The concat() method merges (concatenates) arrays:
// let myGirls = ["Cecilie", "Lone"];
// let myBoys = ["Emil", "Tobias", "Linus"];
// let myChildren = myGirls.concat(myBoys);
// console.log('myChildren', myChildren);

//10.copyWithin() Method
//copyWithin() copies array elements to another position in an array, overwriting existing values:
//Copy to index 2, all elements from index 0:
// let fruits = ["apple", "banana", "orange", "mango"];
// fruits.copyWithin(2, 0);
// console.log('fruits', fruits);

//11.flat() method
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// let myArr = [[1,2],[3,4],[5,6]];
// let element = myArr.flat();
// console.log('element', element);

//12.Array splice()
//The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log('fruits', fruits);

// //array.splice()//change actual array//used for delete
// let partsplice = array.splice(2,1); //delete one value from second index
// console.log('partsplice', partsplice);
// console.log('array', array);
// partsplice = array.splice(2,3); //(2)2 to end
// console.log('array', array);

//13.array.slice()//not change actual array//used to create a shallow copy
//  let array = [1,2,3,4,5];
// console.log('array', array);
// //let partofarray = array.slice(2,4); //(2)2 to end
// //console.log('partofarray', partofarray)
// let partofarray = array.slice(-3);
// console.log('partofarray', partofarray);

//array search

//14.indexOf()
//The indexOf() method searches an array for an element value and returns its position.
// let fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Mango") ;
// console.log('position', position);

//15.lastIndexOf()
//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;
// console.log('position', position);

//16.includes()
//Array.includes() to arrays. This allows us to check if an element is present in an array
// let fruits = ["Apple", "Orange", "Apple", "Mango"];
// let find = fruits.includes("Mango"); // is true
// console.log('find', find);

//17.find()
//The find() method returns the value of the first array element that passes a test function.
//This example finds (returns the value of) the first element that is larger than 18:
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// console.log('first', first);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//18.findIndex()
//The findIndex() method returns the index of the first array element that passes a test function.
//This example finds the index of the first element that is larger than 18:
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);
// console.log('first', first);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//19.findLast() Method
//the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
// let temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// console.log('high', high);

// Array.prototype.findLast = function(callback) {
//   for (let i = this.length - 1; i >= 0; i--) {
//     if (callback(this[i])) {
//       return this[i];
//     }
//   }
//   return undefined;
// };

// let temp = [27, 28, 30, 40, 42, 35, 30,50];
// let high = temp.findLast(x => x > 40);
// console.log('high', high);

//20.findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.

// Array.prototype.findLastIndex = function(callback) {
//   for (let i = this.length - 1; i >= 0; i--) {
//       if (callback(this[i])) {
//           return i;
//       }
//   }
//   return -1; // Return -1 if no element satisfies the condition
// };

// let temp = [27, 28, 30, 40, 42, 35, 30,50];
// let highIndex = temp.findLastIndex(x => x > 40);
// console.log('highIndex', highIndex);

///JavaScript Sorting Arrays

//21.Array sort()
//The sort() method sorts an array alphabetically:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log('fruits', fruits);

//22.Array reverse()
//The reverse() method reverses the elements in an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log('fruits', fruits);

//23.Sorting Objects
//Even if objects have properties of different data types, the sort() method can be used to sort the array.
// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// const variale = cars.sort(function(a, b){return a.year - b.year});
// console.log('variale', variale);

//24.Numeric Sort
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
//If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//Because of this, the sort() method will produce incorrect result when sorting numbers.
//You can fix this by providing a compare function:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log('points', points);

//25.Random Sort
//Using a sort function, like explained above, you can sort an numeric array in random order
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log('points', points);

//26.Math.min()
//You can use Math.min.apply to find the lowest number in an array:
// const points = [40, 100, 1, 5, 25, 10];
// console.log('first', myArrayMin(points))

// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }

//27.Math.max()
//You can use Math.max.apply to find the highest number in an array:
// const points = [40, 100, 1, 5, 25, 10];
// console.log('first', myArrayMin(points))

// function myArrayMin(arr) {
//   return Math.max.apply(null, arr);
// }

//Array Iteration Methods

//28.Array forEach
//

//29.Array map()
//The map() method creates a new array by performing a function on each array element.
//The map() method does not execute the function for array elements without values.
//The map() method does not change the original array.
//This example multiplies each array value by 2:

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);
// console.log('first', numbers2);
// function myFunction(value, index, array) {
//   return value * 2;
// }
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.map((x) => x * 2);
// console.log('newArr', newArr);

//30.Array flatMap()
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log('newArr', newArr);

//31. Array filter()
//The filter() method creates a new array with array elements that pass a test.
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// console.log('over18', over18);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//32.Array reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method works from left-to-right in the array. See also reduceRight().
//reduce()
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// let arr = [8,2,3,5,4,6];
// let sum = arr.reduce((accum , curr)=> {
//     return accum+curr;  //accumlator//current value
// })
// console.log('sum', sum)

// let arr =[8,2,5,5]
// let avg = arr.reduce((accum,currval,index,array)=>
// {
//   let total = accum+=currval;
//   if(index===array.length-1)
//   {
//     return total/array.length;
//   }
//   return total;

// })
// console.log('avg', avg)

// var voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ];
// // let length = voters.reduce(accum => accum + 1, 0);
// // console.log(`length of given array -> ${length}`);

// let sum = voters.reduce((accum , curr)=> {
//        return accum+curr.age;
//   },0)
//    console.log('sum', sum)

//33.Array reduceRight()
//The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
//The reduceRight() works from right-to-left in the array. See also reduce().
//The reduceRight() method does not reduce the original array.

//34.Array every()
//The every() method checks if all array values pass a test.
//This example checks if all array values are larger than 18:

// const numbers = [15, 14, 29, 26, 25];
// let allOver18 = numbers.every(myFunction);
// console.log('allOver18', allOver18);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//35.Array some()
//The some() method checks if some array values pass a test.
//This example checks if some array values are larger than 18:

// const numbers = [1,2,3,4,36];
// let allOver18 = numbers.some(myFunction);
// console.log('allOver18', allOver18);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//36.Array from()
//The Array.from() method returns an Array object from any object with a length property or any iterable object.
// let newArr = Array.from("ABCDEFG");
// console.log('newArr', newArr);

//37.Array keys()
//The Array.keys() method returns an Array Iterator object with the keys of an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.keys();

// for (let x of f) {
//  console.log('x', x);
// }

//38.Array entries()
//Create an Array Iterator, and then iterate over the key/value pairs:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (let x of f) {
//  console.log('x', x);
// }

//39.Array with()
//the Array with() method as a safe way to update elements in an array without altering the original array.
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]

//40.Array Spread (...)
//The ... operator expands an iterable (like an array) into more elements:
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log('year', year);

///////////////////////////////////////
//JavaScript String Methods

//1.String Length
//The length property returns the length of a string:
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log('length', length);

//2.String charAt()
//The charAt() method returns the character at a specified index (position) in a string:
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log('char', char);

//3.String charCodeAt()
//The charCodeAt() method returns the code of the character at a specified index in a string:
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log('char', char);

//4.String at()
//Property Access [ ]
//its count space as well
// let text = "HELLO WORLD";
// let char = text[6];
// console.log('char', char);

//5.String slice()
//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 16);
// console.log('part', part);

//6.String substring()
//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 14);
// console.log('part', part);

//7.String substr()
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log('part', part);

//8.String toUpperCase()
//A string is converted to upper case with toUpperCase():
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log('text2', text2);

//9.String toLowerCase()
//A string is converted to lower case with toLowerCase():
// let text1 = "HELLO WORLD!";
// let text2 = text1.toLowerCase();
// console.log('text2', text2);

//10.String concat()
//concat() joins two or more strings:
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ",text2);
// console.log('text3', text3);

//11.String trim()
//The trim() method removes whitespace from both sides of a string:
// let text1 = '      Hello World!      ';
// let text2 = text1.trim();
// let text3 = text2;
// console.log('text2', text2);
// console.log('text1.length', text1.length);
// console.log('text2.length', text2.length);

//12.String trimStart()
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// let text1 = "     Hello World!     hie";
// let text2 = text1.trimStart();
// console.log('text2', text2);
// console.log('text1.length', text1.length);
// console.log('text2.length', text2.length);

//13.String trimEnd()
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// console.log('text2', text2);
// console.log('text1.length', text1.length);
// console.log('text2.length', text2.length);

//14.String padStart()
//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.
// let text = "5";
// let padded = text.padStart(6,"4");
// console.log('padded', padded);

//15.String padEnd()
//The padEnd() method pads a string from the end.
//It pads a string with another string (multiple times) until it reaches a given length.
// let text = "5";
// let padded = text.padEnd(8,"0");
// console.log('padded', padded);

//16.String repeat()
//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.
// let text = "Hello world!";
// let result = text.repeat(5);
// console.log('result', result);

//17.Replacing String Content
//The replace() method replaces a specified value with another value in a string:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log('newText', newText);

//18.String ReplaceAll()
//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// let text =  "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// console.log('text', text);

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// text = text.replace(/Cats/g, "Dogs");
// console.log('text', text);

//19.String split()
//A string can be converted to an array with the split() method:
//If the separator is omitted, the returned array will contain the whole string in index [0].
//If the separator is "", the returned array will be an array of single characters:
// let text = "Hello";
// const myArr = text.split(" , ");
// console.log('myArr',myArr[0]);

//////String Search Methods
//20.String indexOf()
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// let text = " hello where 'locate' how occurs!";
// let index = text.indexOf("locate");
// console.log('index', index);

//21.String lastIndexOf()
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// let text = "Please locate where occurs 'locate'!";
// let index = text.lastIndexOf("locate");
// console.log('index', index);

//22.String search()
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// console.log('index', index);

//23.String match()
//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// let text = "The rain in SPAIN stays mainly in the plain";
// let find = text.match("gybhvbhbh");
// let element = text.match("ai");
// console.log('find', find);
// console.log('element', element);

//24.String matchAll()
//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
// let text = "I love very cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log('iterator', Array.from(iterator));

//25.String includes()
//The includes() method returns true if a string contains a specified value.
//Otherwise it returns false.
// let text = "Hello world, welcome to the universe.";
// let find = text.includes("world");
// console.log('find', find);

//26.String startsWith()
//The startsWith() method returns true if a string begins with a specified value.
//Otherwise it returns false:
// let text = "Hello world, welcome to the universe.";
// let first = text.startsWith("Hello");
// console.log('first', first);

//27.String endsWith()
//The endsWith() method returns true if a string ends with a specified value.
//Otherwise it returns false:
// let text = "John Doe";
// let last = text.endsWith("Doe");
// console.log('last', last);






// //chatgpt gyan
// const mergedArray = [...new Set(a.concat(b))];
// utilizes a Set to automatically remove duplicates. A Set is a built-in object in JavaScript that only allows unique values. By converting the concatenated array [...new Set(a.concat(b))] to a Set, duplicate values are automatically removed because a Set can only contain unique elements.

// Here's a breakdown of the process:

// a.concat(b): This concatenates arrays a and b.
// new Set(a.concat(b)): This converts the concatenated array to a Set, which automatically removes duplicates.
// [...new Set(a.concat(b))]: This converts the Set back to an array.
// So, the resulting mergedArray contains unique values from the concatenation of arrays a and b.



