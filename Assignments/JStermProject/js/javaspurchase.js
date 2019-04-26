/*
      Term Project     

      Designed by: Chandra K. Rai, Timothy, Shukor, and Yunxiang      
      Title of Project: Online Books Sale
      Submitted to: Vinayagathas Vaithilingam   

      Filename: javaspurchase.js
*/

	function processQuantityInfo() {

		//adding item number to the cart
	var value = parseInt(document.getElementById('Total').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('Total').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Opening My Heart";
	var itemSummary = document.getElementById("items");	
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 29.95;
	var itemTax = parseInt(document.getElementById("Totaltax").value);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('Totaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("Totalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('Totalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQuantityInfoSecond() {

		//adding item number to the cart
	var value = parseInt(document.getElementById('Total').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('Total').value = value; 
    	
    	//adding items in cart 
	var delivInfo = "Goodnigh From London";
	var itemSummary = document.getElementById("items");
		itemSummary.innerHTML += delivInfo + "<br>" ;
		
		//Calculating tax of item
	var	price = 19.99;
	var itemTax = parseInt(document.getElementById("Totaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('Totaltax').value = itemTax.toFixed(2);
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("Totalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('Totalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQuantityInfoThird() {

		//adding item number to the cart
	var value = parseInt(document.getElementById('Total').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('Total').value = value; 
    	
    	//adding items in cart 
	var delivInfo = "Astrophysics For People <br> in a Hurry";
	var itemSummary = document.getElementById("items");
		itemSummary.innerHTML += delivInfo + "<br>" ;
		
		//Calculating tax of item
	var	price = 19.18;
	var itemTax = parseInt(document.getElementById("Totaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('Totaltax').value = itemTax.toFixed(2);
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("Totalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('Totalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQuantityInfofourth() {

		//adding item number to the cart
	var value = parseInt(document.getElementById('Total').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('Total').value = value; 
    	
    	//adding items in cart 
	var delivInfo = "Forces of Nature";
	var itemSummary = document.getElementById("items");
		itemSummary.innerHTML += delivInfo + "<br>" ;
		
		//Calculating tax of item
	var	price = 16.04;
	var itemTax = parseInt(document.getElementById("Totaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('Totaltax').value = itemTax.toFixed(2);
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("Totalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('Totalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQuantityInfive() {

		//adding item number to the cart
	var value = parseInt(document.getElementById('Total').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('Total').value = value; 
    	
    	//adding items in cart 
	var delivInfo = "Unshaken Study Guide and <br> Personal Reflections";
	var itemSummary = document.getElementById("items");
		itemSummary.innerHTML += delivInfo + "<br>" ;
		
		//Calculating tax of item
	var	price = 17.99;
	var itemTax = parseInt(document.getElementById("Totaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('Totaltax').value = itemTax.toFixed(2);
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("Totalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('Totalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtySecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Six Wakes";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 18.70;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondtoTaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtySsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "The Bone Season: A Novel";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 20.57;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyTsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Easy Windows 10";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 22.13;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyFsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Lonely Planet Canada";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 27.92;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyFisecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "The Villa";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 19.32;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtySisecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Windows 10 for Dummies";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 14.99;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtySesecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Computer Basics Absolute <br>Beginner's Guide";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 20.80;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyEsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Storey's Guide to<br>Keeping Honey bees";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 29.95;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyNsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Brave New World";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 16.95;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyTensecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "My Life on the Road";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 30.25;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyElsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "The You I've Never Known";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 25.99;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyTwsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Little Heaven";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 19.32;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value= itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyThsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "Dance of Fear";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 17.50;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}

	function processQtyFrsecond() {
	
		//adding item number to the cart
	var value = parseInt(document.getElementById('SecondTotal').value, 10);
    	value = isNaN(value) ? 0 : value;
    	value++;
    	document.getElementById('SecondTotal').value = value; 
    	
		//adding items in cart    
	var delivInfo = "How to Hang a Witch";
	var itemSummary = document.getElementById("seconditems");
		itemSummary.innerHTML += delivInfo + "<br>" ;
			
		//Calculating tax of item
	var	price = 24.50;
	var itemTax = parseInt(document.getElementById("SecondTotaltax").value,10);	
		itemTax = isNaN(itemTax) ? 0 : itemTax;	
		itemTax += price * 0.13;
		document.getElementById('SecondTotaltax').value = itemTax.toFixed(2); 	
		
		//Calculating total price with tax	
	var totalwithtax = parseInt(document.getElementById("SecondTotalwithtax").value,10);	
		totalwithtax = isNaN(totalwithtax) ? 0 : totalwithtax;	
		totalwithtax += price + itemTax;
		document.getElementById('SecondTotalwithtax').value = totalwithtax.toFixed(2);
		}