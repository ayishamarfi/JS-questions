//*
//* * 
//* * *
//* * * *
//* * * * *
//* * * * 
//* * * 
//* * 
//* 
// for(i=1;i<=5;i++){
//     str=""
//     for(j=1;j<=i;j++){
//         str=str+"* "
//     }
//     console.log(str);
    
// }
// for(i=4;i>=1;i--) {
//     str=""
//     for(j=1;j<=i;j++){
//         str=str+"* "
//     }
//     console.log(str);
    
// }
n = 5
for(i=1;i<=2*n-1;i++){//1
    str=""
    let starsCount = i <= n ? i : 2 * n - i;
    
    for(j=1;j<=starsCount;j++){
      str=str+"* "
    }
    console.log(str);
    
}
