#! /usr/bin/env node
//Simple calculator
import inquirer from "inquirer";

const answer = await inquirer.prompt([{
    message:"Enter the firstNumber", type: "number",name:"firstNumber"},
    {message:"Enter the secondNumber",type: "number",name:"secondNumber"},
    {message: "Select one of the operators to perform operation",
    type:"list", name:"operators",
    choices:["Addition", "Subtraction", "Multiplication", "Division"],
    },
])
    //conditional statement
    if(answer.operators === "Addition"){
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operators === "Subtraction"){
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if(answer.operators === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber);
        }
        else if(answer.operators === "Division"){
            console.log(answer.firstNumber / answer.secondNumber);
        }
        else{
            console.log("Please select valid operator");
        }


