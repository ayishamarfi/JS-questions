class A{
    methoda(){
        console.log('print a');
        
    }
    methoda(num){
        console.log(`print b is ${num}`);
        
    }
}
const obj = new A()
obj.methoda()
// method with argument only is working.so not supporting

//rest operator
class Sum{
    sumofnumbers(...arg){
        console.log(arg);
        let total = arg.reduce((n1,n2)=>n1+n2)
        console.log(`sum is ${total}`);
        
    }
}
const obj1 = new Sum()
obj1.sumofnumbers(1,2,3,4)