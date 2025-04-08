<<<<<<< HEAD
function a (){
    let parent_variable = 'parent'
    console.log('inside fn a');
    console.log(`hi ${parent_variable}`);
    console.log(`hi ${child_variable}`);//not accessable
    

    function b(){
        let child_variable = 'child'
        console.log('inside fn b');
        console.log(`hi ${parent_variable}`);
        console.log(`hi ${child_variable}`);
        
    }
    b()
}
=======
function a (){
    let parent_variable = 'parent'
    console.log('inside fn a');
    console.log(`hi ${parent_variable}`);
    console.log(`hi ${child_variable}`);
    

    function b(){
        let child_variable = 'child'
        console.log('inside fn b');
        console.log(`hi ${parent_variable}`);
        console.log(`hi ${child_variable}`);
        
    }
    b()
}
>>>>>>> a905833c43fbe8a8bef1adc178fb02f912d51b46
a()