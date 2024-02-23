import inquirer from "inquirer";

const answer:{
    "NO1":number
    "NO2":number
    "operator":string
} = await inquirer.prompt([{
   
   type:"number",
   name:"NO1",
   message:"write your number here:" 


},
{
    type:"number",
    name:"NO2",
    message:"write your number here:" 
 
    
},

{
    type:"list",
    name:"operator",
    message:"select your operator:",
    choices:["+","*","/","-"] 
    
}

])

const{ NO1,NO2,operator}= answer
if (NO1 && NO2 && operator){

    let result:number = 0;
    if(operator == "+"){
         result = NO1 + NO2
    }else if (operator == "-"){
         result = NO1 - NO2
    }else if (operator == "/"){
         result = NO1 / NO2
    }else if (operator == "*"){
         result = NO1 * NO2
    } console.log("your result is" , result) 
   
}else{

    console.log("please select a valid operator:")
}





// console.log(answer)