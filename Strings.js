//Mixing quotation marks
var string_1 = 'Albert Einstein said "Problems can not be solved by the same level of thinking that has created them" and I totally agree with it'
console.log(string_1)

//Escape characters
var string_2 = 'Albert Einstein said \'Problems can not be solved by the same level of thinking that has created them\' and I totally agree with it'
console.log(string_2)
console.log(string_2.length)  //length of a string

//breaking long strings   (safer choice: use + sign between lines

var string_3 = 'This is going to be a very very very very very very very very' +
    ' very very very ' +
    ' very very very ' +
    ' long string '

console.log(string_3)

// Strings can be object too!
var string_4 = new String('This is a new string')    //an object
var string_5 = 'This is a new string'

console.log(string_4 == string_5)   //true because both have the same value
console.log(string_4 === string_5)  // false because although the same value, but they are from different types

//Finding a String in a String
var string_6 = 'This was a test string and we want to search something in it'
var position = string_6.indexOf('was')  //method returns the index of (the position of) the first occurrence of a specified text in a string
console.log(position)

// Searching for a String in a String
var string_7 = 'This was a test string and we want to search something in it'
var pos_1 = string_6.search('was')
var pos_2 = string_6.search('was not')

console.log(pos_1)
console.log(pos_2)  //returns -1 as it can not find 'was' in the given string

// The slice() Method
var string_7 = "MAC OS, Windows, Android, iOS ";
var sliced_1 = string_7.slice(8, 15);
var sliced_2 = string_7.slice(-4, -1);  //negative means start from the end of the string

console.log(sliced_1)   // Windows
console.log(sliced_2)   // iOS

//The substr() Method
//substr() is similar to slice() but the second parameter specifies the length of the extracted part
var string_8 = "MAC OS, Windows, Android, iOS ";
var substr = string_7.substr(17, 7);
console.log(substr)   // Android


//Converting a String to an Array
var string_9 = "MAC OS, Windows, Android, iOS ";
var my_array = string_9.split(",")
console.log(`I have an array and here it is ${my_array}`)
console.log(`Here is the type ${typeof (my_array)}`)
console.log(my_array[0]) //accessing the elements





