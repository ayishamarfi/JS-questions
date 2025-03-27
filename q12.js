// print the given o/p corresponding to a given i/p
// i/p = 2 3 4
// o/p = 24 369 4936
// 2*12 3*123 4*1234
input=4
i=1
str=""
while(i<=input){
    str=str+i
//  str=0
// while(i<=input){
//     str=str*10+i  
    
i++
}
console.log(str*input);

// 2+22 3+33+333 
input=3
i=1
pro=0
while(i<=input){
    pro = pro*10+input
    sum =sum+pro
    i++

}
console.log(sum);
