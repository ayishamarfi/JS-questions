number =[10,20,30,20,40,50,50,60,10]
//find the number count
 
 
o ={}
for (w of number){ 
     if (w in o){
        o[w]+=1
     }
     else{
        o[w]=1 
     }
    
}
console.log(o);
// number.forEach((w)=>w in o?o[w]+=1:o[w]=1)
// console.log(o);
