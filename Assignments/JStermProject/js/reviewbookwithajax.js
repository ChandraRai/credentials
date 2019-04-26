/*
      Term Project     

      Designed by: Chandra K. Rai, Timothy, Shukor, and Yunxiang      
      Title of Project: Online Books Sale
      Submitted to: Vinayagathas Vaithilingam   

      Filename: reviewbookwithajax.js
*/

	//Retrieve txt file using Ajax
	function BookBone(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/bone.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookSix(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/six.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookEasy(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/easy.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookCanada(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/canada.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookVilla(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/villa.txt", true);
		httpRequest.send();
	}

	//Retrieve txt file using Ajax
	function BookWindows(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/windows.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookBees(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/bees.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookWorld(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/world.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookMylife(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/Mylife.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function BookUnknown(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/Unknown.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function Bookheaven(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/heaven.txt", true);
		httpRequest.send();
	}
	
	//Retrieve txt file using Ajax
	function Bookdance(){
	var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {		
		document.getElementById("p1").innerHTML = this.responseText;
		} 
	};
		httpRequest.open("get", "ajax/dance.txt", true);
		httpRequest.send();
	}