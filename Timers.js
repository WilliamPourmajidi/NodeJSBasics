const waitTime = 5000;
const intervalTime = 500;
let currentTime = 0;

console.log(`We are going to setup a delay for ${waitTime / 1000} seconds`);
console.log(`We are showing a percentage indicator till the going to setup a delay for ${waitTime / 1000} seconds`);

const intervals = () => {
    currentTime += intervalTime;
    const percentage = Math.floor((currentTime / waitTime) * 100);
    // console.log(`I am an interval -- I am going to wait for ${currentTime / 1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ...${percentage}%`)

}

const timerFinished = () => {
    clearInterval(my_interval);  //ending the terminal check line #19
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Done`)

}

const my_interval = setInterval(intervals, intervalTime);  //declaring setInterval as a variable will allow us to end it!
setTimeout(timerFinished, waitTime);