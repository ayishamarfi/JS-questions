p=[10,11,12,20,30]
q=[11,20,25,30,33]
//print common numbers from the given array

p.sort((a,b)=>a-b)
q.sort((a,b)=>a-b)

 i = 0
 j = 0
 while(i<p.length && j<q.length){//0<5 && 0<5//1<5 && 0<5//2<5 && 1<5//3<5 && 1<5

    if(p[i]==q[j]){//10==11//11==11//12==20
        console.log(p[i]);
        i++
        j++
    }
    else if(p[i]>q[j]){//10>11//12>20
        j++
    }
    else{//10<11 //12<20
        i++
    }

        



 }