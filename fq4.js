function greet (name ,callback){
    console.log(`Hi ${name}`);
    callback()
    
}
function fsec(){
    console.log('Iam Ayisha Marfi');
    
}
greet('peter',fsec)