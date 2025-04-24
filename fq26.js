//check whether employee experience is present in the given object or not,if present print 'key is available',else add a new key value pair as empExp:3
const employee ={
    empId:1000,
    empName:'Neel',
    empDesig:'developer'
}
// isPresent = false
// for(item in employee){
//     if (item == 'empExp'){
//         isPresent = true
//     }
    
    
// } 
// isPresent?console.log('key is available'):(employee['empExp'] = 3,console.log(employee)
// )

 'empExp' in employee?console.log('key is available'):(employee['empExp'] = 3,console.log(employee)
)

