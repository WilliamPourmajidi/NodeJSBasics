for (var i = 0; i < 10; i++) {
  console.log(i);
}

//iterating through an array and breaking on a condition

var my_array = [
  "William",
  "Sara",
  "John",
  "Rolf",
  "David",
  "Bill",
  "Adam",
  "Sandee",
];
for (var i = 0; i < my_array.length; i++) {
  console.log(my_array[i]);
  if (my_array[i] == "Bill") {
    break;
  }
}

my_array.forEach(function (item) {
  console.log(`The item in the array is ${item}`);
  console.log(
    `The item in the array shortened to 3 character is ${item.slice(0, 3)}`
  );
});
