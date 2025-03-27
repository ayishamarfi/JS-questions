// w.a.p to print a given number is prime or not
// prime -factor = 1,number itself
// num%1 == 0 num%num==0
// one is factor of all numbers so i=2
num = 7
isPrime = true
if ( num==1) {
    console.log('neither prime nor composite');
    
}
else if ( num<0) {
    console.log('Not prime');
    
    
}
else{
for(i=2;i<=num;i++){
    if (num%i==0) {
        isPrime = false;
        
        
    }
     
}
}
console.log(isPrime==true?'prime':'not prime');
 
