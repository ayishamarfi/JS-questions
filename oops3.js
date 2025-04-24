class Bank{
    //property
    accountsDetails = {
        1000 : {acno:1000,username:'user1', password:'user1',balance:5000},
        1001 : {acno:1001,username:'user2', password:'user2',balance:10000},
        1002 : {acno:1002,username:'user3', password:'user3',balance:6000},
        1003 : {acno:1003,username:'user4', password:'user4',balance:2000}
    }
    //w a method to validate an account
    //   validate(accountno){
    //    return accountno in this.accountsDetails ?true:false

    //   }
      


    //w a method to authenticate an account
     
    // authenticate(acno,pswd){
    //    if(this.validate(acno)){
    //     if(this.accountsDetails[acno].password == pswd){
    //         console.log('authentication successfull');
            
    //     }
    //     else{
    //         console.log('incorrect acno or password');
            
    //     }
    //    }
    //   else{
    //     console.log('no account exists');
        
    //    }

    // }
    // //w a method to check balance of an account
    balance(acno,pswd){
      if(this.validate(acno)){   
       if(this.accountsDetails[acno].password == pswd){
         console.log(this.accountsDetails[acno].balance);
         
       }
       else{
        console.log('incorrect acno or password');
        
       }
     }
     else{
        console.log('incorrect acno');
        
     }
    }

         
    // //w a method to transfer an amount from one account to another
    fundTransfer(fromacno,pswd,toacno,amount){
        if(this.validate(fromacno)&&this.validate (toacno)){
            if(this.accountsDetails[fromacno].password == pswd){
                if(this.accountsDetails[fromacno].balance >= amount){
                    console.log(`balance of${fromacno}is :${this.accountsDetails[fromacno].balance}and balance of ${toacno}is${this.accountsDetails[toacno].balance}before fund transfer`);

                       this.accountsDetails[fromacno].balance-=amount
                       this.accountsDetails[toacno].balance+=amount

                       console.log(`balance of${fromacno}is :${this.accountsDetails[fromacno].balance}and balance of ${toacno}is${this.accountsDetails[toacno].balance}after fund transfer`);
                    
                }
                else{
                    console.log('insufficient balance');
                    
                }
            }
            else{
                console.log('incorrect aacount no: or password');
                
            }
        }
        else{
            console.log('incorrect account details');
            
        }
    }
}
 const obj = new Bank()
console.log(obj.validate(1000)?'account exists':'account not exists')
// obj.authenticate(1000,'user1')
// obj.balance(1000,'user1')
// obj.fundTransfer(1000,'user1',1002,1000)
