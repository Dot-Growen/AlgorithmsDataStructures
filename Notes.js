// indexOf() Method
// Definition - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// arr.indexOf(searchElement[, fromIndex])

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

///////////////////////////////////////////////////////////////

// splice() Method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

///////////////////////////////////////////////////////////////

// slice() Method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// arr.slice([start[, end]]) 
//START - anything before this index is not included in the new array
//END - anything after this index is not included in the new array

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

///////////////////////////////////////////////////////////////

// concat() Method
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

///////////////////////////////////////////////////////////////

// toFixed() Method
// The toFixed() method formats a number using fixed-point notation.

console.log(financial(123.456));
// expected output: "123.46"

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial('1.23e+5'));
// expected output: "123000.00"

///////////////////////////////////////////////////////////////

// repeat() Method
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

///////////////////////////////////////////////////////////////

// sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////

// (...)
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 
//  ["head", "shoulders", "knees", "and", "toes"]

///////////////////////////////////////////////////////////////

// Math.max()
// The Math.max() function returns the largest of the zero or more numbers given as input parameters.

console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3

///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////

// OR operator "||"
//x || y;
// returns x when x is truthy
// returns y when x is not truthy

///////////////////////////////////////////////////////////////

// For/Of Loop
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
for (variable of iterable) {
    // code block to be executed
}
//Array
var cars = ['BMW', 'Volvo', 'Mini'];
for (let x of cars) {
    document.write(x + "<br >");
}
//String
var txt = 'JavaScript';
for (let x of txt) {
    document.write(x + "<br >");
}


// For/In Loop
// The JavaScript for/in statement loops through the properties of an object:
var person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
for (let x in person) {
    text += person[x];
}
