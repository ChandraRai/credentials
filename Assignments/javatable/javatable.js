/*
      Assignment#3     

      Designed by: Chandra K. Rai
      Student ID No: 300890510 
      Submitted to: Vinayagathas Vaithilingam   

      Filename: javatable.js
*/

function table(){
		//create title
		document.title = "Assignment-3";
    var body = document.getElementsByTagName('body')[0];    	
     	body.style.backgroundColor = "#25C28A";
     	
 	    //create table  
    var tbl = document.createElement('table');     	 
        body.appendChild(tbl);  
    	tbl.style.width = "30%";   
    	tbl.style.textAlign = 'center';    	
    	tbl.setAttribute('border','1');  
    	tbl.style.color = 'white';
    	tbl.style.border = 'green';
    	tbl.style.fontSize = '20px';  
    	tbl.style.fontFamily = "Arial";  	     
    	tbl.align = 'center';
    	
    	//create table caption    	
        tbl.createCaption().innerHTML = "<h3>Car Model - 2017</h3>";         
        
		//create table head   	
    var thead = document.createElement('thead');
    	tbl.appendChild(thead);
    	
    	//create first row
    var tr = document.createElement('tr');
    	tr.bgColor = "#34495E";
    	thead.appendChild(tr);
	var td = document.createElement('td');
	var brand = document.createTextNode("Brand");
		td.appendChild(brand);
		tr.appendChild(td);
		
	var td1 = document.createElement('td');
	var model = document.createTextNode("Model");
		td1.appendChild(model);
		tr.appendChild(td1);
		
	var td2 = document.createElement('td');
	var price = document.createTextNode("Price");
		td2.appendChild(price);
		tr.appendChild(td2);
	
		//create table body
	var tbody = document.createElement('tbody');
		tbl.appendChild(tbody);
		
		//create second table row
	var td3 = document.createElement('td');
	var tr1 = document.createElement('tr');
		tbody.appendChild(tr1);
	var honda = document.createTextNode("Honda");
		td3.appendChild(honda);		
		tr1.appendChild(td3);
			
	var td4 = document.createElement('td');
	var civic = document.createTextNode("Civic");
		td4.appendChild(civic);		
		tr1.appendChild(td4);

	var td5 = document.createElement('td');
	var cost = document.createTextNode("$17,460");	
		td5.appendChild(cost);	
		tr1.appendChild(td5);		
		
		//create third table row
	var tr2 = document.createElement('tr');
		tbody.appendChild(tr2);	
	var td6 = document.createElement('td');
	var ford = document.createTextNode("Ford");
		td6.appendChild(ford);
		tr2.appendChild(td6);

	var td7 = document.createElement('td');
	var focus = document.createTextNode("Focus");
		td7.appendChild(focus);
		tr2.appendChild(td7);

	var td8 = document.createElement('td');
	var cost1 = document.createTextNode("$25,540");
		td8.appendChild(cost1);
		tr2.appendChild(td8);
		
		//create fourth row
	var tr3 = document.createElement('tr');
		tbody.appendChild(tr3);	
	var td9 = document.createElement('td');
	var ford = document.createTextNode("Toyota");
		td9.appendChild(ford);
		tr3.appendChild(td9);

	var td10 = document.createElement('td');
	var focus = document.createTextNode("Corolla");
		td10.appendChild(focus);
		tr3.appendChild(td10);

	var td11 = document.createElement('td');
	var cost2 = document.createTextNode("$18,540");
		td11.appendChild(cost2);
		tr3.appendChild(td11);	    		
		
		//create fifth row
	var tr4 = document.createElement('tr');
		tbody.appendChild(tr4);	
	var td12 = document.createElement('td');
	var ford = document.createTextNode("Ferrari");
		td12.appendChild(ford);
		tr4.appendChild(td12);

	var td13 = document.createElement('td');
	var focus = document.createTextNode("LaFerrari");
		td13.appendChild(focus);
		tr4.appendChild(td13);

	var td14 = document.createElement('td');
	var cost3 = document.createTextNode("$1,416,362");
		td14.appendChild(cost3);
		tr4.appendChild(td14);
		
		//create sixth row
	var tr5 = document.createElement('tr');
		tbody.appendChild(tr5);	
	var td15 = document.createElement('td');
	var ford = document.createTextNode("Lexus");
		td15.appendChild(ford);
		tr5.appendChild(td15);

	var td16 = document.createElement('td');
	var focus = document.createTextNode("Lexus Lx");
		td16.appendChild(focus);
		tr5.appendChild(td16);

	var td17 = document.createElement('td');
	var cost3 = document.createTextNode("$89,880");
		td17.appendChild(cost3);
		tr5.appendChild(td17);		
				
		//create table footer
	var tfoot = document.createElement('tfoot');
		tbl.appendChild(tfoot);
	var tr7 = document.createElement('tr');
		tfoot.appendChild(tr7);	
    var th = document.createElement('th');	
    	tfoot.textAlign = 'center'; 
    	th.bgColor = "grey"; 
    	th.colSpan = '4';	  	  
    var msg = document.createTextNode("Car Financing Service is available!");    	
    	th.appendChild(msg);
    	tr7.appendChild(th);    	
    	
    var th1 = document.createElement('th');
    	tfoot.appendChild(th1);
    var t = document.createTextNode("Submitted to: Professor Vinayagathas Vaithilingam, Designed by: Chandra K. Rai, Student ID No: 300890510");    
    	th1.appendChild(t);
    	th1.bgColor = "#34495E";
    	th1.style.fontSize = "14px";
    	th1.style.fontFamily = "Consolas"; 
    	th1.colSpan = '4';    	
    	
    	//create delete button for first row
	var tdbt = document.createElement('td');			
	var btn = document.createElement('button');	   	
	var text = document.createTextNode('Delete Row');	
		btn.appendChild(text);		
		tdbt.appendChild(btn);	
		tr1.appendChild(tdbt);		
	    btn.addEventListener("click", deleteRow1);
	    btn.addEventListener("click", myAlert);		
	    
	    //create delete button for second row
	var tdbt1 = document.createElement('td');			
	var btn1 = document.createElement('button');	   	
	var text1 = document.createTextNode('Delete Row');	
		btn1.appendChild(text1);		
		tdbt1.appendChild(btn1);	
		tr2.appendChild(tdbt1);		
	    btn1.addEventListener("click", deleteRow2);
	    btn1.addEventListener("click", myAlert);
	    
	    //create delete button for third row
	var tdbt2 = document.createElement('td');
		tr3.appendChild(tdbt2);			
	var btn2 = document.createElement('button');	   	
	var text2 = document.createTextNode('Delete Row');	
		btn2.appendChild(text2);		
		tdbt2.appendChild(btn2);			
	    btn2.addEventListener("click", deleteRow3);
	    btn2.addEventListener("click", myAlert);	    
	    
	    //create delete button for fourth row
	var tdbt3 = document.createElement('td');
		tr4.appendChild(tdbt3);			
	var btn3 = document.createElement('button');	
	   	tdbt3.appendChild(btn3);
	var text3 = document.createTextNode('Delete Row');	
		btn3.appendChild(text3);					
	    btn3.addEventListener("click", deleteRow4);
	    btn3.addEventListener("click", myAlert);
	    
		//create delete button for fifth row
	var tdbt4 = document.createElement('td');
		tr5.appendChild(tdbt4);			
	var btn4 = document.createElement('button');	
	   	tdbt4.appendChild(btn4);
	var text4 = document.createTextNode('Delete Row');	
		btn4.appendChild(text4);					
	    btn4.addEventListener("click", deleteRow5);
	    btn4.addEventListener("click", myAlert);    	
    	    	
		//create function to delete rows
  	function deleteRow1(){   	 	
    	tbl.deleteRow(1);
    	}
    function deleteRow2(){     	   
    	tbl.deleteRow(1);
    	}
     function deleteRow3(){ 
    	tbl.deleteRow(1);
    	}
	 function deleteRow4(){		 
    	tbl.deleteRow(1);
    	}
	 function deleteRow5(){	 
    	tbl.deleteRow(1);
    		}
		}

		//Add event listener for window onload    
	if (window.addEventListener) {
   		window.addEventListener("load", table, false);
		} else if (window.attachEvent) {
   		window.attachEvent("onload", table);
		}
	
		//create row delete alert message
    function myAlert(){
    	alert("You deleted a row!");
    	}
    
    
    
    
    
    
    
    
    
    

