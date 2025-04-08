for(row = row<=5;row++){
    str =""
    for(spa = 1;spa<=5-row;spa++){
        str = str+"  "


    }
    for(col=1;col<=2*row-1;col++){
        str=str+variable++
    }
    console.log(str);
    
}