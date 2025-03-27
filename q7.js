// w a p to print 'FIZZ' whwn a given number is divisible by 3.'BUZZ' if number is divisble by 5 and'FIZZBUZZ'.if number is divisible by 15
a=3
if(a%15==0){
    console.log('FIZZBUZZ');
    
}
else if(a%5==0){
    console.log('BUZZ');
    
}
else if(a%3==0){
    console.log('FIZZ');
    
}
else {
    console.log('not divisible 3,5,15');
}
// divisibilty rule of 15 is divisible by both 3 and 5