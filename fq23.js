sentence = 'good morning all'
//w a p to print all vowels from the given string
// oooia
vowels = ['a','e','i','o','u']
newArray = Array.from(sentence)
console.log(newArray);
o=[]
for(let char of newArray){
    if(vowels.includes(char)){
        o.push(char);
    }
}
console.log(o);
//-----------------------
Array.from(sentence).filter((char)=>vowels.includes(char)).forEach((item)=>console.log(item));



