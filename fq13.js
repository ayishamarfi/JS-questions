<<<<<<< HEAD
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
=======
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
>>>>>>> a905833c43fbe8a8bef1adc178fb02f912d51b46
console.log(op.length==0?'no duplicates':op)