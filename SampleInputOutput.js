const questions = [
    "What is your name?",
    "What would you like to do here?",
    "Which programming language do you prefer?"
];


const ask = (i = 0) => {
    process.stdout.write(questions[i]);
    process.stdout.write(` > `);
}

ask();
const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    console.log(`typeof(answers)`, typeof (answers));
    const [name, activity, language] = answers;
    console.log(`typeof(name)`, typeof (name));
    console.log(`Thank you ${name}, we know that you like ${activity} and you know how to write code in ${language}`);
});


