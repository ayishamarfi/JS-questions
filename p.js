 
 // w.a.p to find the pairs whose sum is 6
a = [2,3,4,5] 
found=false//o/p=(2,4)
for (i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]+a[j]==6){
            found=true
        }
       
    
    }
         
}
console.log(found?`(${a[i]},${a[j]})`:'no pairs');
    


  
 



    
      
        
    

  

