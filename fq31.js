weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
 
 op ={}
 for(let data in weatherData){
    dist = data.district
    curtemp = data.weather
    if(dist in op){
        oldtemp = op[dist]
          if(oldtemp > curtemp){
            op[dist] = oldtemp
          }
          else{
            op[dist] =  curtemp
          }
    }
    else{
        op[dist] = curtemp
    }
 }
 console.log(op);
 