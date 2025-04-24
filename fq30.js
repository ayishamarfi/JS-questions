pattern ='ABCBCAA'
//find the first recursive letter -B

text =  Array.from(pattern)
//text = pattern.split('')
//console.log(text);
o ={}
for (w of text){ 
     if (w in o){
         console.log(w);
         break // only first item is  needed
        
        
     }
     else{
        o[w]=1
     }
     
    
}
 

