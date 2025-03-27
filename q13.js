// w.a.p to display reverse of a given Number
// ip = 236
// o/p = 632
// 236%10 = 6 236/10 =23.6 
// to remove decimal -math floor
input = 236
lastDigit = 0
rev = 0

while (input > 0) {
    lastDigit = input % 10 //6 //3 //2
    rev = rev * 10 + lastDigit //6 //63 //632
    input = Math.floor(input / 10)  //23 //2 //0

}
console.log(rev);

