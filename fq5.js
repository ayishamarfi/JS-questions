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
a()