a = [12 , 41 , 6 , 5 , 22]
//w a p to print all even numbers from the given array
o = a.filter((num)=>num%2==0)
console.log(o);

//odd

o = a.filter((num)=>num%2!=0)//num%2==1 also gives odd
console.log(o);
//some()
o = a.some((num)=>num%2!=0)//num%2==1 also gives odd
console.log(o?'yes':'no');
//find()
o = a.find((num)=>num%2!=0)//num%2==1 also gives odd
console.log(o?'yes':'no');

