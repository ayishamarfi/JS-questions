// w.a.p to find the pairs whose sum is 6
a = [2,3,4,5] //o/p=(2,4)
o=[]
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]+a[j]==6){
            o.push(a[i],a[j]);
            
        }
    }

}
console.log(o.length==0?'no pairs':o);

//----------------------------------------
sum=6
found =false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]+a[j]==sum){
            console.log(`(${a[i]},${a[j]})`);
            found = true
        }
    }
}
!found && console.log('no pair');


