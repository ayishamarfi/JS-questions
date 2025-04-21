//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
// for(item of employee){
    
//     console.log(item[1]);
// }
employee.forEach((a)=>console.log(a[1]));

 


//print total numbers of employee
 
//      console.log(employee.length);
     
        
        


    





// //print developer employee details

// for(item of employee){
//     if(item[2]=='developer'){

//         console.log(item);
        
//     }
// }
console.log(newArray = employee.filter((a)=> a[2]=='developer'));
 

  
// //print employee name whose salary > 30000
//  for(item of employee){
//     if(item[4]>30000){
//         console.log(item[1]);

//     }
//  }

 
  employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1]));
   



// // print details of employee Laisha
// for(item of employee){
//       if(item[4]=='laisha'){
//          console.log(item);
//          }


// }
a=employee.find((emp)=>emp[1]=='laisha');
console.log(a);

// //arrange employee based on their salary in descending order

employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

// //arrange employee based on their experience in ascending order
// employee.sort((emp1,emp2)=>emp2[5]-emp1[5])
// console.log(employee);
// print the employ name whose have the higest salary
// highest=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
 
// console.log(highest[0][1]);


//print employee details with lowest salary
lowest = employee.reduce((i,j)=>i[4]<j[4]?i:j);
console.log(lowest);



//find total salary expense of the company
total = employee.map((emp)=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);

