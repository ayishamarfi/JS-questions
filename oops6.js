//hierarchial inheritance
class A {
    methoda(){
        console.log('inside method a');
        
    }
}
class B extends A {
    methodb(){
        console.log('inside method b');
        
    }
}
class C extends A{
    methodc(){
        console.log('inside method c');
        
    }
}
const obj = new C()
obj.methodc()
 
obj.methoda()
const obj1 = new B()
obj1.methodb()
 
obj1.methoda()