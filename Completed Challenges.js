
var fibn=(val)=>{
  if(val<=2){
    return 1;
  }else{
     return fibn(val-2)+fibn(val-1);
  }
}

function sumFibs(num) {
 let sum = 0;
  for(let i = 1;fibn(i)<=num;i++){
    if(fibn(i)%2>0 && fibn(i)<= num ){
      sum+=fibn(i);
    }
  }
  return sum;
}

sumFibs(4);



//SUM PRIMES
let isPrime=(val)=>{
  let bool= true;
  for(let i=2;i<val;i++  ){
    if(val%i==0){
        bool =false;
        break;
    }
  }
  return bool;
};

function sumPrimes(num) {
  let sum=0;
   for(let i=2;i<=num;i++  ){
    if(isPrime(i)){
        sum+=i;
    }
  }
  return sum;
}
sumPrimes(10);


//LCM
function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let lcm = 0;
  for(let n =max;;n+=max){
    let bool=1;
    for(let fac=min; fac<=max; fac++){
        if(n%fac==0){
          bool*=1;
        }else{
          bool*=0;
        }
    }
    if(bool){
      lcm = n;
      break;
    }
  }
return lcm;

}


smallestCommons([2, 10])


//FLATEN ARRAY(try it)
function isArr(elem){
  let bool= false;
  if(typeof elem=="object" && elem.length!=null){
    bool=true;
  }
  return  bool;
}
function loopThrough(arr,emptyArr){
  for(let i=0;i<arr.length;i++){
    if(isArr(arr[i])){
        emptyArr.push(loopThrough(arr[i],emptyArr)[i]);
       
    }else{
        emptyArr.push(arr[i]);
    }
  }
  return emptyArr;
}

function steamrollArray(arr) 
{let empty=[]
 empty=loopThrough(arr,empty);
 return empty;
}

steamrollArray([1, [2], [3, [[4]]]]);
//loopThrough([1, [2], [3, [[4]]]],[]);

function isArr(elem){
  let bool= false;
  if(typeof elem=="object" && elem.length!=null){
    bool=true;
  }
  return  bool;
}
function loopThrough(arr,emptyArr){
  for(let i=0;i<arr.length;i++){
    if(isArr(arr[i])){
        emptyArr.push(loopThrough(arr[i],emptyArr)[i]);
        return loopThrough(arr[i],emptyArr);
       
    }else{
        emptyArr.push(arr[i]);
    }
  }
 // return emptyArr;
}

function isArr(elem){
  let bool= false;
  if(typeof elem=="object" && elem.length!=null){
    bool=true;
  }
  return  bool;
}
function loopThrough(arr,emptyArr){
  for(let i=0;i<arr.length;i++){
    if(isArr(arr[i])){
        emptyArr.push(loopThrough(arr[i],emptyArr)[i]);
        return loopThrough(arr[i],emptyArr);
       
    }else{
        emptyArr.push(arr[i]);
    }
  }
 // return emptyArr;
}



function steamrollArray(arr) {
  let empty=[];
      let str=arr.toString();
      let strAr=str.split(",");
      for(let i=0;i<strAr.length;i++){
        switch(strAr[i].toString()){
          case "[object Object]":{
             empty.push({});
             break;
          }
          case (strAr[i]):
            if(Number(strAr[i])){
              empty.push(Number(strAr[i])) ; 
            }else{
              if(strAr[i]!=""){
               empty.push(strAr[i]);
              }
            }
        }
      }

    return empty;
}

steamrollArray([1, [2], [3, [[4]]]]);
//loopThrough([1, [2], [3, [[4]]]],[]);

//
function binaryAgent(str) {
  let binArr=str.split(" ");
  let strAr=[];
  for(let i=0;i<binArr.length;i++){
    let c= String.fromCharCode(parseInt(binArr[i],2));

  }
  return str;
}
binArr.map(()=>{
  
});

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



//function addTogether(...args) {
  let a=[...args];
  function secdFunc(secd){
      return (typeof secd!="number")?undefined:a[0]+secd;
  }
  if(a.length==2){
      if(typeof a[0]!= "number" || typeof a[1]!="number"){
          return undefined;
      }else{
        return  a[0]+a[1];
      }
    }

   if(a.length==1){
    if(typeof a[0]!="number"){
      return undefined;
    }else{
      return secdFunc;
    }
  }
  
  

addTogether(2,3);


//
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFirstName = function() {
    return "";
  };

  this.getLastName = function() {
    return "";
  };
  this.getFullName = function() {
    return "";
  };
  this.setFirstName = function() {
    return "";
  };
  this.setLastName = function() {
    return "";
  };
  this.setFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();



//ORBITAL PERIOD
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthsRadius = 6367.4447;
  
  let obitalPeriodArr=arr.map((satelite)=>{
      let altitude = satelite.avgAlt;
      return {
        name: satelite.name,
        orbitalPeriod: Math.round(2*Math.PI*Math.sqrt(((altitude +earthsRadius )**3)/(GM)))
      }

  });
 return obitalPeriodArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//PALINGDROME
function palindrome(str) {
  let cArr = str.replace(/s/g,"").split(/[^a-zA-Z0-9]/g).join("").toLowerCase();
  let bool=1;
  for(let i=0,j=cArr.length-1;i<cArr.length,j>=0;i++,j--){
    if(cArr[i]==cArr[j] ){
        console.log(cArr[i],i,cArr[j],j,true);
        bool*1;
    }else{
        //if(cArr[i]==undefined||cArr[j]==undefined){
          // bool*1;
           //console.log(cArr[i],cArr[j],false);
       // }else{
          console.log(cArr[i],i,cArr[j],jfalse);
          bool*=0;
       // }
      
    }
  }
  return bool==1?true:false;
}



palindrome("eye");



//ROMAN NUMERALS
function RNum(n){
    let I='I',V='V',X='X',L='L',C='C',D='D',M='M';
    let ans="";
    switch(true){
      case n<1:
        ans ="";
        break;
      case n<4:
        ans = I.repeat(n);
        break;
      case n<5:
        ans =I+V;
        break
      case n<9:
        ans = V+RNum(n%5);
        break;
      case n<10:
        ans =I+X;
        break;
      case n<40:
        ans = X.repeat(Math.floor(n/10))+RNum(n%10);
        break;
      case n<50:
        ans =X+L+RNum(n%40);
        break;
      case n<90:
        ans = L+RNum(n%50);
        break;
      case n<100:
        ans =X+C+RNum(n%90);
        break;
      case n<400:
        ans = C.repeat(Math.floor(n/100))+RNum(n%100);
        break;
      case n<500:
        ans =C+D+RNum(n%400);
        break;
      case n<900:
        ans = D+RNum(n%500);
        break;
      case n<1000:
        ans =C+M+RNum(n%900);
        break;
      case n>=1000:
        ans = M.repeat(Math.floor(n/1000))+RNum(n%1000);
        break;
      
      
    }
    return ans;
}
function convertToRoman(num) {
 return RNum(num);
}

convertToRoman(36);



//ROT 13
function rot13(str) {
  let abc="ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  let myStr=str;
  let final = [];

  for(let c=0;c<myStr.length;c++){
    if(myStr[c]== abc[abc.indexOf(myStr[c])]){
      console.log(myStr[c],abc[abc.indexOf(myStr[c])+13]);
      final.push(abc[abc.indexOf(myStr[c])+13])
    }else{
      final.push(myStr[c]);
    }
  }
  return final.join("");
}
rot13("SERR PBQR PNZC");



//TELEPHONE CHECK
function telephoneCheck(str) {
  let bool= false;
  let testStr = str;
  let failedCntTest =   /[^()\d\s-]+/.test(str)
  let firstCharTest=   /^[^\d]+/.test(str)
  let flatStr= str.replace(/[^()\d]/g,"");
  let flatterStr= str.replace(/[^\d]/g,"");
  let counCodeTest = flatterStr[0]==1 && flatterStr.length<=11;
  let lenTest = (10 <=flatterStr.length)&&(flatterStr.length)<=11 ;
  let bracTest = (flatStr.indexOf(")")>=flatStr.indexOf("(") )&& !(flatStr.indexOf(")")>0 && flatStr.indexOf("(")==-1);
  if(!failedCntTest){  
      if(!firstCharTest){  
        if(bracTest){
              if(lenTest){
                  if(flatterStr.length==11){
                      if(counCodeTest){
                        bool=true;
                      }else{
                        
                      }
                  }else{//for 10
                    bool=true;
                  }

                  
              }else{
                bool=false
              }
        }else{
          bool=false;
        }
      }else{
          if(lenTest&& testStr[1]=="5"&& bracTest){
            bool=true;
            }else{
               bool=false;}
         
      }
  }else{
    bool=false;
  }
  return bool;
}


//str="1435554248884"; /(\d{10}||\d{11})/.test(str)

telephoneCheck("555-555-5555");


// CHECK CASH REGISTER
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

