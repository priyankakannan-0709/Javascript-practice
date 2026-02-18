 var balance = 0;

 async function buyGold(amount,op){

    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("Taking time to buy gold");
        balance = balance + amount;
        console.log("Bought, Balance: "+balance)
        if(op==="+")
            resolve(amount+40);
        else
            resolve(amount-40);
    },2000); 
    })
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


console.log(balance);

await buyGold(200,"+")
sellGold(300)