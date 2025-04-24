// [1000,'Neel','developer','kochi',25000,3],
const employee ={
    empId:1000,
    empName:'Neel',
    empDesig:'developer'
}
console.log(employee);


console.log(employee['empName']);
console.log(employee.empName);
 
for(item in employee){
    console.log(employee[item]);
    
}



employee['empLoc'] = 'kochi'
console.log(employee);
Object.assign(employee,{empSal:25000})
console.log(employee);

employee['empSal'] +=1000
console.log(employee);

employee['empName']= 'Max'
console.log(employee);

delete employee.empId
console.log(employee);


