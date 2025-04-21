//w a p to print all the items from the given array
a=[1 , 2, 3, 4]
for(let num of a){
    console.log(num);
    
}
console.log('--------------------');

a.forEach((num)=>console.log(num));

console.log('--------------------');

//w a p to find square of all the elements in a given array

a.forEach((num)=>console.log(num**2));

console.log('--------------------');

sq = a.map((num)=>(num**2))
console.log(sq);

console.log('--------------------');

// w a p to create a new array with number <= 3 then increment by 1 else decrement by 1

newArray = a.map((num)=>num<=3?num+1:num-1)
console.log(newArray);

console.log('--------------------');

highest = a.reduce((num1,num2)=>num1>num2?num1:num2)//in the first loop num1 and num2 will be 1,bcz there is no previous value
console.log(highest);

 lowest = a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log( lowest);

sum =  a.reduce((num1,num2)=>num1+num2)
console.log(sum);









    

