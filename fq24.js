//w.a.p to check whether a string is palindrome or not
str = 'mlayalam'
 
pal =''
for(i=str.length-1;i>=0;i--){
    pal +=str[i]
}
console.log(pal==str?'yes':'no');
