a = 5;
b = 7;

if (a == b) {
    console.log(`numbers are the same!`);
} else {
    console.log(`numbers are not the same!`);
}

c = 6
d = "6"

if (c == d) {
    console.log(`to our surprise, this is true!`)
}

if (c === d) {   //returns : how about now?!
    console.log(`to our surprise, this is true!`)
}
else {
    console.log(`how about now?!`)
}

e = 5
f = 5
g = 6
//ternary operator (3-pieces)
e == f ? console.log(`match`): console.log(`no match`);  // returns: match
e == g ? console.log(`match`): console.log(`no match`); // returns: no match

