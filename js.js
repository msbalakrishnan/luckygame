// declaring the data and push into the date tag i html
const d = new Date();
const ans="finding your lucky in this day "+d.getDate()+" / "+d.getMonth()+" / "+d.getFullYear();
document.getElementById("h1").innerHTML =ans;
var ar=[];
// all the selected box num push into the array 
function fun1(s1,s2) {    
    if (ar.length < 3) {
        // dont select the more than 3 colomn so this condition 
    ar.push(s1);
    document.getElementById(s2).style.border=" 10px solid rgb(247, 156, 21)";
    document.getElementById(s2).style.boxShadow="0px 0px 60px #ec5a06";
    }
  if (ar.length==1) {
// enable the select again button , after one box selected 
    document.getElementById("a1").style.display="block";
  }
   
}
function find() {
var x = Math.floor((Math.random() * 9) + 1);
document.getElementById("c").innerHTML="Selected BOX are : "+ar[0]+" "+ar[1]+" "+ar[2]+" Rabbit Hole is:"+x;

// here find the result by combaring the selected num and random num 
if (ar.length==0) {
    document.getElementById("e").innerHTML="you did not select ...";
} else if (x == ar[0] || x==ar[1] || x==ar[2] ) {
    document.getElementById("e").innerHTML="you are won the lucky day..";
}else{
    document.getElementById("e").innerHTML="better luck next time ";
}
//  here putting the rabbit for random number
if (x==1) {
    document.getElementById("r1").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
    
} else if (x==2) {
    document.getElementById("r2").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r1").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
    
    
}else if (x==3) {
    document.getElementById("r3").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r2").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
    
    
}else if (x==4) {
    document.getElementById("r4").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png"; 
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
     
    
}else if (x==5) {
    document.getElementById("r5").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png"; 
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
     
    
}else if (x==6) {
    document.getElementById("r6").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
    
}else if (x==7) {
    document.getElementById("r7").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png"; 
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r9").src="";  
     
    
}else if (x==8) {
    document.getElementById("r8").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r1").src="";  
    document.getElementById("r9").src="";  
    
    
}else{
    document.getElementById("r9").src="https://pngimg.com/uploads/rabbit/rabbit_PNG96532.png";  
    document.getElementById("r2").src="";  
    document.getElementById("r3").src="";  
    document.getElementById("r4").src="";  
    document.getElementById("r5").src="";  
    document.getElementById("r6").src="";  
    document.getElementById("r7").src="";  
    document.getElementById("r8").src="";  
    document.getElementById("r1").src="";  
    

}

}


