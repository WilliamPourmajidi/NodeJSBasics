// second example

myNumbers = [1, 2, 3, 4];

function calcultateArithmatic(data, callback) {
  if (data) {
    if (typeof callback === "function") {
      let callback_result = callback(data);
      return callback_result;
    }
  }
}

let sum = calcultateArithmatic(myNumbers, () => {
  let totalSum = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    totalSum += myNumbers[i];
  }
  return totalSum;
});

let multiply = calcultateArithmatic(myNumbers, () => {
  let totalMultiply = 1;

  for (let i = 0; i < myNumbers.length; i++) {
    totalMultiply *= myNumbers[i];
  }

  return totalMultiply;
});

console.log(`Sum is ${sum}`);
console.log(`Multiply is ${multiply}`);

let standardDeviation = calcultateArithmatic(myNumbers, () => {
  console.log(`automatically running`);

  let sum = 0;
  let calculate_mean = function (myNumbers) {
    for (let i = 0; i < myNumbers.length; i++) {
      sum += myNumbers[i];
    }
    let mean = sum / myNumbers.length;
    console.log(`Mean of the data is ${mean}`);
    return mean;
  };
  let calculated_mean = calculate_mean(myNumbers);

  let calculate_std = function (myNumbers) {
    let variance = 0;
    let nominator = 0;

    for (let i = 0; i < myNumbers.length; i++) {
      nominator += (myNumbers[i] - calculated_mean) ** 2;
    }
    variance = nominator / (myNumbers.length - 1);
    let std = Math.sqrt(variance);
    return std;
  };
  let calculated_std = calculate_std(myNumbers);

  console.log(`Here are the stats ${calculated_mean} and ${calculated_std}`);
});
