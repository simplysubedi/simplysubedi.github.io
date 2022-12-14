const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("What is your name? ", (name) => {
    console.log(`Welcome ${name}`);
    readline.question("What is your age? ", (age) => {
        console.log(
            age < 16
                ? "You’re notallowed to drive in Iowa"
                : "You’re allowed to get a drivers license inIowa"
        );
        readline.close();
    });
});
