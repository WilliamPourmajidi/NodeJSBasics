
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

console.log(string_4==string_5)   //true because both have the same value
console.log(string_4===string_5)  // false because although the same value, but they are from different types

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






