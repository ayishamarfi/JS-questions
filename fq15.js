a = [11, 10 , 12 , 3 , 2 , 4]
// 1)start
// 2)the given array should be sorted in ascending order
a.sort((a,b)=>a-b)
mid = 0
searchItem = 5
low = 0
up = a.length-1
isPresent = false
// 5)repeat step 3 until low and up coincides .Math 
while(low<=up){
   // 3)find the mid value by using the formula 
//                    mid =Math.floor(low + up/2) - inorder to remove decimal points
mid = Math.floor((low+up)/2)
// 4)compare the value sorted in mid with the search item
//                   a)mid value == search item
//                    - print search item present
     if(a[mid]==searchItem){
        isPresent = true
        break
     }
    //  b)mid value < search item
    //                - low = mid + 1
     else if(a[mid]< searchItem){
        low = mid + 1
     }
    //  c)mid value > search item 
    //  - up = mid - 1
     else {
        up = mid - 1
     }
         
}

 console.log(isPresent?'present':'not present');
//  6)end