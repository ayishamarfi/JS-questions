class Student{
    // stdRoll
    // stdName 
    // stdPlace

    constructor(roll , name , place){
        this.stdRoll = roll
        this.stdName = name
        this.stdPlace = place
        this.display()
    }
    display(){
        console.log(`student roll number is ${this.stdRoll},student  is ${this.stdName},student  place is ${this.stdPlace}`);
        
    }
}
const std1 = new Student(1 , 'athul' , 'kozhikode')