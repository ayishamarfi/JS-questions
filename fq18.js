//w.a.p to find the highest number
a = [[2,4],[3,5],[7,9]]
 highest = a[0][0]
 for(item of a){
    for(num of item){
        if(highest<num)
            highest = num
    }
 }
 console.log(highest);
 


//find lowest number
lowest = a[0][0]
for(item of a){
   for(num of item){
       if(lowest>num)
           lowest = num
   }
}
console.log(lowest);
//sum of all numbers
sum = 0
for(item of a){
    for(num of item){
        sum+=num
    }
}
console.log(sum);

