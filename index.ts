#! /usr/bin/env node 
import inquirer from "inquirer"

const currency :any= {
    usd: 1,//base currency
    EUR: 0.91,
    Gap:0.76,
    ind:74.57,
    pkr:260
};
let user_answer  = await inquirer.prompt(
    [
    {
     name:"from",
     message:"Enter from currency",
     type:"list",
     choices:["usd","EUR","ind","pkr","Gap"]
    },
    {
        name:"to",
    message:"Enter to currency",
     type:"list",
     choices:["usd","EUR","ind","pkr","Gap"]
    },
    {
    name:'amount',
    message:"Enter your amount",
     type:"number",
    },

    ]
);
// console.log(user_answer)
let fromAmount =  currency [user_answer.from]
let toAmount = currency [user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);