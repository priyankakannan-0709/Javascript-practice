 var balance = 0;

 function buyGold(callback,amount,op){
    setTimeout(()=>{
        console.log("Taking time to buy gold");
        balance = balance + amount;
        console.log("Bought, Balance: "+balance)
        if(op==="+")
            callback(amount+40);
        else
            callback(amount-40);
    },2000); 
 }

 function sellGold(amount){
    if(balance - amount<0){
        console.log("Insufficient balance: Buy Gold first");
        buyGold(sellGold,amount,"-")
    }
    else
    {    balance = balance - amount;
        console.log("Gold sold Balance: "+balance);
    }
 }


buyGold(sellGold,200,"+")

console.log(balance);