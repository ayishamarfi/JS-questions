a =[4,5,6]
//o/p = [11,10,9]
sum=0
o=[]
for(item of a){
    sum+=item
}
for(item of a){
    o.push(sum-item)
}
console.log(o);
//----------------------------answer 2--------------------

//arr=[]
// sum=15

// for(i of a){//4
//     out=sum-i//11
//     arr.push(out)
//  }   
 
// console.log(arr);
