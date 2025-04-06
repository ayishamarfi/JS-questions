p=[10,11,12,20,30]
q=[11,20,25,30,33]
//print common numbers from the given array
//-----------answer 1-----------------
o=[]

for(i=0;i<=p.length-1;i++){
    for(j=0;j<=q.length-1;j++){
        if(p[i]==q[j]){
            o.push(p[i])
            
        }
    }
}
console.log(o.length==0?'no duplicates':o)
//------------------answer 2----------------------
op=[]
for(i of p){
    for(j of q){
        if(i==j){
            op.push(i)
        }
    }
}
console.log(op.length==0?'no duplicates':op)