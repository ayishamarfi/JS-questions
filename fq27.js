car = {
    name :'baleno',
    model:'Match back',
    manufacturer:'maruti',
    price:'10 lakhs'
}
//display car name and manufacturer name
console.log(`${car.name} , ${car.manufacturer}`);

//check whether 'model' key is present or not ,if present display the value
  'model' in car?console.log(car.model):console.log( 'not pesent')
 
//add "variant" key to the car with values 'manual'
car['variant'] = ['manual']
console.log(car);

//update the new value 'automatic' to the car variant
 car['variant'].push('automatic')
 console.log(car);
 
//create a new key 'color' with values as 'red','blue' and green
car['color'] = ['red','green','blue']
console.log(car);
