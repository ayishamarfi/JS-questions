// w.a.p to find given 3 digit number is armstrong or Notification
// armstrong -153= 1**3 + 5**3+ 4**3 =153 -sum of nth power of the numbers of the given number with length n is equal to  the number
input = 124
temp = num
num = 0
rem = 0
sum = 0

while(num>0){
    num = input % 10 //4
    sum =sum + (rem**3)
    num = Math.floor(num/10)

  }  

    console.log(sum==temp?'Armstrong':'not Armstrong');
    