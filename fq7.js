weekday=['mon','tue','wed','thurs','fri']
console.log(weekday);// dispalys array
console.log(weekday[0]);// displays 'mon'
//displays all days one by one
for (i=0;i<=weekday.length-1;i++) {

    console.log(weekday[i]);
    
    
}
// for in
for(let i in weekday){
    console.log(weekday[i]);
    
}
//for of
for(let i of weekday){
    console.log(i);
    
}