text ='hai hello all hello world all'
//w a p to get the word count from the given text
//o/p = { hai:1 , hello:2 , all:2 ,world:1}
text1 = text.split (' ') 
console.log(text1);
o ={}
for (w of text1){//hai//hello//all//hello
     if (w in o){
        o[w]+=1//o[hello]=2
     }
     else{
        o[w]=1//o[hai]=1,o[hello]=1,o[all]=1
     }
    
}
console.log(o);

text.split(' ').forEach((w)=>w in o?o[w]+=1 : o[w]=1)
console.log(o);
//pattern =ABCBCAA
//find the first recursive letter -B



