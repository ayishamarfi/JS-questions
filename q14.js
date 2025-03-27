// w.a.p to check whether a number is palindrome or Notification
input = 121
temp = input 
lastDigit = 0
rev = 0

while (input > 0) {
    lastDigit = input % 10 //6 //3 //2
    rev = rev * 10 + lastDigit //6 //63 //632
    input = Math.floor(input / 10) //23 //2 //0
}
console.log(temp==rev?'palindrome':'not palindrome');
