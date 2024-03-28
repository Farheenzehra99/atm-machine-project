import inquirer from "inquirer";
let myBalance = 20000; //dollar
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: `enter your pin`,
        type: "number",
    },
]);
console.log(pinAnswer);
if (pinAnswer.pin === myPin) {
    console.log(`your pin is correct`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: `plz select option`,
            type: "list",
            choices: [
                "withdraw",
                "check balance",
                "fast cash",
            ],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: `plz enter amount`,
                type: "number",
            },
        ]);
        if (withdrawAmount.amount > myBalance) {
            console.log(`insufficient balance`);
        }
        else {
            myBalance -= withdrawAmount.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "amount",
                message: `plz enter amount`,
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= fastCash.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log(`your pin is incorrect`);
}
