  /*
      Client Side Web Development
      Assignment#3
      Author: Chandra K. Rai
      Student No: 300890510
      Date: 2017.02.07  

      Filename: tablesheet123.js
   */
   
//multiplication loop
function openPage(){
	var user = document.getElementById("userinput").value;
    var user1 = document.getElementById("userinput1").value; 
	for (var i = 1; i <= user1; i++){
		    	
	    document.write("<table style = 'background-color: #41568D; margin-left:700px' border = '1px'>");	    
	    document.write("<tr>");	
	    document.write("<td style='font-size:23px; color: white'>"+ user + " " + "x" +" "+ i +" " + "=" + " " + user*i +"</td>");
 		document.write("</tr>"); 			
 		document.write("</table>");	
 	}		
 }

//clear exception message
function clearScreen(){
	var x = "";
	document.getElementById("message1").innerHTML = x;
}

//event listener for new window
if (window.addEventListener) {
   window.addEventListener("load", openPage, false);
 } else if (window.attachEvent) {
   window.attachEvent("onload", openPage);
}

//Exception handling function
function testFormComplete() {
var c = document.getElementById('userinput').value;
var s = document.getElementById('userinput1').value;
   if (c > 0 && s > 0) {
      openPage();
      }
   var message, x, y;
    message = document.getElementById("message1");
    message.innerHTML = "";
    x = document.getElementById("userinput").value;
    y = document.getElementById("userinput1").value;
    try { 
    	if(isNaN(x) || isNaN(y)) throw "not a number!";
        if(x == "" || y == "") throw "empty!";        
        x = Number(x);
        y = Number(y);
        if(x <= 0 || y <= 0) throw "too low!";        
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }      
  }  
   
   
   
   
   
   
   
   
   
   
   
   
   
   