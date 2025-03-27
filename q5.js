// second largest number among 3 and arrange in descending order
num1=12
num2=61
num3=9

    
// if((num2>num1 && num1>=num3 || num3>num1 && num1>=num2)){
//     console.log(`second largest is ${num1}`);
//     console.log(`${num1}${num1} ${num1}`);
    
// }
// else if((num1>num2 && num2>num3 || num3>num2 && num2>num1)){
//     console.log(`second largest is num2 ${num2}`);
// }
// else if((num2>num3 && num3>num2 || num3>num1 && num1>num2)){
//     console.log(`second largest is ${num3}`);
// }
// else{
//     console.log(`equal`);
    
// }
if (num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest is ${num2}`);
        console.log(`${num1}>${num2}>${num3}`);
        
    }
    else{
        console.log(`second largest is ${num3}`);
        console.log(`${num1}>${num3}>${num2}`);
    }
}
else if (num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest is ${num1}`);
        console.log(`${num2}>${num1}>${num3}`);
        
    }
    else{
        console.log(`second largest is ${num3}`);
        console.log(`${num2}>${num3}>${num1}`);
    }
}
 