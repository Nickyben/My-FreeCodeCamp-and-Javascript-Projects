function checkCashRegister(price, cash,drawerCash) {
  let cid=drawerCash;
	let change=cash-price;
  let ch=change+0.000001;
  //let remArr=[ch];
  let vals=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  let currValue = {
	"PENNY": 0.01,
  	"NICKEL": 0.05,
  	"DIME": 0.1,
  	"QUARTER": 0.25,
  	"ONE":1,
  	"FIVE": 5,
  	"TEN":10,
  	"TWENTY":20,
  	"ONE HUNDRED": 100
  };
  let cidTotal=cid.reduce((sum,eachArr)=>{
     return sum+eachArr[1];
  },0);
	cidTotal = Number((cidTotal).toFixed(2))

  let state= cidTotal>change? "OPEN": (cidTotal<change)?"INSUFFICIENT_FUNDS":(cidTotal==change)? "CLOSED":"NOTHING";
  let status = state;
  
  let chngArr= cid.reverse().map((drawerMoney)=>{
     //ch=remArr[0];
      

      if(status == "OPEN" || status == "CLOSED"){
	  if(status == "OPEN"){
			console.log("checking",ch,"and currency",currValue[drawerMoney[0]],"is it greater or equals?",ch>=currValue[drawerMoney[0]]);
	     if(ch>=currValue[drawerMoney[0]]){
		  if(ch==currValue[drawerMoney[0]] && ch>drawerMoney[1] ){
			return [drawerMoney[0], 0];
		  }else{
				console.log("checking",ch,"and in drawer",drawerMoney[1],"is it greater or equals",ch>=currValue[drawerMoney[0]]);
		     if(ch>drawerMoney[1]){
			ch=ch%drawerMoney[1]  ;//next change
			console.log(currValue[drawerMoney[0]],ch);
			return [drawerMoney[0], drawerMoney[1]];
		     }else if(ch<=drawerMoney[1]){
				
				let presentCh=ch;
				ch=ch%currValue[drawerMoney[0]] ;//next change
				console.log(currValue[drawerMoney[0]] ,ch);
				return [drawerMoney[0], (currValue[drawerMoney[0]] *Math.floor(presentCh/currValue[drawerMoney[0]]))];
      				
		     }else{
			return [drawerMoney[0], 0];
		     }
		  }
             }else{
		return [drawerMoney[0], 0];
	     }
	 }
	 
	 if(status == "CLOSED"){
	     if(ch>=currValue[drawerMoney[0]]){
		  if(ch==currValue[drawerMoney[0]] && ch>drawerMoney[1] ){
			[drawerMoney[0], drawerMoney[1]];
		  }else{
		     if(ch>drawerMoney[1]){
			ch=ch%drawerMoney[1] ;//next change
			console.log(ch);
			return [drawerMoney[0], drawerMoney[1]];
		     }else if(ch<=drawerMoney[1]){
			let presentCh=ch;
			ch=ch%currValue[drawerMoney[0]] ;//next change
			console.log(ch);
			return [drawerMoney[0], (currValue[drawerMoney[0]] *Math.floor(presentCh/currValue[drawerMoney[0]]))];
      				
		     }else{
			return [drawerMoney[0], drawerMoney[1]];
		     }
		  }
             }else{
		return [drawerMoney[0], drawerMoney[1]];
	     }
	  }
	  

      }else{
		return [drawerMoney[0], "NO CHANGE"] ;
      }
   });
  
  if(status=="CLOSED"){
	chngArr=chngArr.reverse();
  }


	let isEmpty= chngArr.filter((changeCurr)=>{
		console.log(changeCurr[1],"<=the change given");
		return changeCurr[1]!=0;
	    });

console.log(isEmpty,isEmpty.length==0);
	if(isEmpty.length==0){
		status= "INSUFFICIENT_FUNDS";
		chngArr=[];
	}else if(	status== "OPEN"){
			chngArr=isEmpty;
	}
 console.log("change=",change,"cidTotal=",cidTotal,status,"Eaual both=",
 (cidTotal==change));
  if(status== "INSUFFICIENT_FUNDS"){
	 chngArr=[];
 }
 return {
	 status: status,
	 change: chngArr
 };
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
