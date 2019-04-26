/*
      Term Project     

      Designed by: Chandra K. Rai, Timothy, Shukor, and Yunxiang      
      Title of Project: Online Books Sale
      Submitted to: Vinayagathas Vaithilingam   

      Filename: javasbooksale.js
*/


	//GLOBAL form STATE VALIDITY VARIABLE
	var formValidity = true;

 	//Setup country and regions 
	function updateRegion() {
    var currentCountryIndex = document.getElementById("country").selectedIndex;
    var regionSelect = document.getElementById("region");
    regionSelect.length = 0; //first empty the region list
    regionSelect.options[0] = new Option('Select a Province', ''); //default text has no value
    regionSelect.selectedIndex = 0;
    var regionArray = regionList[currentCountryIndex].split("|"); //get the regions for the currently selected country
    for (var i = 0; i < regionArray.length; i++) {
        regionSelect.options.add(new Option(regionArray[i], regionArray[i]));
       }
	}

	function setupCountry() {
    var countrySelect = document.getElementById("country");
    countrySelect.length = 0; //first empty the country list
    countrySelect.options[0] = new Option('Please Select', '') //default text has no value
    countrySelect.selectedIndex = 0;
    for (var i = 0; i < countryList.length; i++) {
        //value of a country is it's index starting at 0
        countrySelect.options.add(new Option(countryList[i], countryList[i]));
       }
	}
	
	function validatePersonalDetails() {
    var fieldSetValidity = true;
    var firstName = document.querySelector("#firstname");
    var lastName = document.querySelector("#lastname");
    var gender = document.querySelector("#gender");
    var inputPhoneNumber = document.querySelector("#phonenumber");
    var inputEmail = document.querySelector("#email");
    var errorDict = {};
    try {
        //validate #firstname no uppercase, not empty, and less 15 characters    
        if(!/[A-Z]/.test(firstName.value[0])){
        fieldSetValidity = false;
         errorDict[firstName.id] = "First letter must be uppercase.";
        } 
         
        if (/\d/.test(firstName.value) || /^\s*$/.test(firstName.value)) {
            fieldSetValidity = false;
            errorDict[firstName.id] = "Characters only";
        }
        
        if(firstName.value.length > 15) {        	
        	fieldSetValidity = false;
        	errorDict[firstName.id] = "Must be less than 15 characters"
        	firstName.value = "";
        }          
        
        //validate #lastname no uppercase, not empty, and less 15 characters    
        if(!/[A-Z]/.test(lastName.value[0])){
        fieldSetValidity = false;
         errorDict[lastName.id] = "First letter must be uppercase.";
        } 
        
        if (/\d/.test(lastName.value) || /^\s*$/.test(lastName.value)) {
            fieldSetValidity = false;
            errorDict[lastName.id] = "Characters only";
        } 
        
        if(lastName.value.length > 15) {        	
        	fieldSetValidity = false;
        	errorDict[lastName.id] = "Must be less than 15 characters";
        	lastName.value = "";
        }
        
        //validate #gender
        if (gender.value === '') {
            fieldSetValidity = false;
            errorDict[gender.id] = "Please select a gender";
        }
        
        //validate #phonenumber
        if (!/^(1-{0,1})?[(]{0,1}[0-9]{3}[)]{0,1}-{0,1}[0-9]{3}-{0,1}[0-9]{4}$/.test(inputPhoneNumber.value)) {
            fieldSetValidity = false;
            errorDict[inputPhoneNumber.id] = "Invalid phone number";
        }
                
        //validate #email
        if (inputEmail.value.search(/@/) === -1 || inputEmail.value.lastIndexOf(".") === -1) {
            fieldSetValidity = false;
            errorDict[inputEmail.id] = "Please provide a valid email address";
        }   
        
        if(fieldSetValidity == false){
            throw errorDict;
        }
    }
    catch (errorDict) {
        Object.keys(errorDict).forEach(function (x) {
            formValidity = false;
            insertErrorRow(document.getElementById(x), errorDict[x]);
        });
      }
	}

	function validateAddress(){
    var fieldSetValidity = true;
    var city = document.querySelector("#city");
    var street = document.querySelector("#street");
    var postalcode = document.querySelector("#postalcode");
    var country = document.querySelector("#country");
    var region = document.querySelector("#region");
    var errorDict = {};
    try {
        
        //validate #city
        if (/\d/.test(city.value) || /^\s*$/.test(city.value)) {
            fieldSetValidity = false;
            errorDict[city.id] = "Characters only";
        }
        //validate #street
        if (/^\s*$/.test(street.value)) {
            fieldSetValidity = false;
            errorDict[street.id] = "Characters only";
        }
        //validate #postalcode
        if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postalcode.value)) {
            fieldSetValidity = false;
            errorDict[postalcode.id] = "Invalid Postal code";
        }
        //validate #country
        if (country.value === '') {
            fieldSetValidity = false;
            errorDict[country.id] = "Please select a Country";
        }
        //validate #region
        if (region.value === '') {
            fieldSetValidity = false;
            errorDict[region.id] = "Please select a Province";
        }

        if(fieldSetValidity == false){
            throw errorDict;
        }
    }
    catch (errorDict) {
        Object.keys(errorDict).forEach(function (x) {
            formValidity = false;
            insertErrorRow(document.getElementById(x), errorDict[x]);
        });
      }
    }

	function validateApplicationInfo(){
    var fieldSetValidity = true;
    var previouseduc = document.querySelector("#previouseduc");
    var prefercampus = document.querySelector("#prefercampus");
    var programinterest = document.querySelector("#programinterest");
    var errorDict = {};
    try {
       
        //validate #prefercampus
        if (/^\s*$/.test(prefercampus.value)) {
            fieldSetValidity = false;
            errorDict[prefercampus.id] = "Must be filled";
        }
        //validate #programinterest
        if (/^\s*$/.test(programinterest.value)) {
            fieldSetValidity = false;
            errorDict[programinterest.id] = "Must be filled";
        }

        if(fieldSetValidity == false){
            throw errorDict;
        }
    }
    catch (errorDict) {
        Object.keys(errorDict).forEach(function (x) {
            formValidity = false;
            insertErrorRow(document.getElementById(x), errorDict[x]);
        });
      }
    }

	function validatePassword(){
    var fieldSetValidity = true;
    var password = document.querySelector("#password");
    var confirmpass = document.querySelector("#confirmpass");
    var errorDict = {};
    try {
        
        //validate #confirmpass
        if (password.value === "") {
            fieldSetValidity = false;
            errorDict[password.id] = "Insert password";
        }
        
        else if(password.value.length < 8) {
            fieldSetValidity = false;
            errorDict[password.id] = "Password is too short.";
        }

        else if(!/[A-Z]/.test(password.value)) {
            fieldSetValidity = false;
            errorDict[password.id] = "Must contain at least one uppercase";
        }
        
        else if(!/[0-9]/.test(password.value)) {
            fieldSetValidity = false;
            errorDict[password.id] = "Must contain at least one number";
        }
        
        else if(!/[.]/.test(password.value)) {
            fieldSetValidity = false;
            errorDict[password.id] = "Must include dot (.)";
        }
        
        else if(!/[/]/.test(password.value)) {
            fieldSetValidity = false;
            errorDict[password.id] = "Must include slash (/)";
        }
        
        if (password.value !== confirmpass.value) {
            fieldSetValidity = false;
            errorDict[confirmpass.id] = "Must match password";
        }

        if(fieldSetValidity == false){
            throw errorDict;
        }     
    }
    catch (errorDict) {
        Object.keys(errorDict).forEach(function (x) {
            formValidity = false;
            insertErrorRow(document.getElementById(x), errorDict[x]);
        });
      }
    }

	function insertErrorRow(el, errmsg) {
    el.className='errorStateCell';
    el.setAttribute("style", "border:1px solid red; color: red"); 
    var skeleton;
    if (el.parentNode.parentNode.nextSibling.className == "errorRow") {
        var tableRow = el.parentNode.parentNode.nextSibling
        skeleton = false;
    }
    else {
        //create skeleton and skeleton index
        var tableRow = el.parentNode.parentNode.cloneNode(true);
        tableRow.className = "errorRow";
        skeleton = true;
    }
    var index = Array.from(el.parentNode.parentNode.cells).findIndex(x => x.firstElementChild.id === el.id);
        //fill skeleton or real errorRow
    for (var j = 0, col; col = tableRow.cells[j]; j++) {
        col.innerHTML = skeleton ? "" : col.innerHTML
        col.style.paddingTop = 0;
        col.style.textAlign = "left";
        col.style.color = "red";
        if (j == index) {
            col.innerHTML = errmsg;            
            col.style.fontSize = "13px";
        }        
    }
    if (el.parentNode.parentNode.nextSibling.className !== "errorRow") {
        el.parentNode.parentNode.parentNode.insertBefore(tableRow, el.parentNode.parentNode.nextSibling);
      }
    }

	function clearErrorRows() {
    var errorRows = document.getElementsByClassName('errorRow');
    while(errorRows[0]) {
        errorRows[0].parentNode.removeChild(errorRows[0]);
    }
    var errorCells = document.getElementsByClassName('errorStateCell');
    while(errorCells[0]) {
        errorCells[0].setAttribute("style", "border: 0px none; color: black")
        errorCells[0].className = '';
      }
    }    
    
	function validateForm(evt) {
    evt.preventDefault();
    clearErrorRows();
    formValidity = true;
    validatePersonalDetails();
    validateAddress();
    validateApplicationInfo();
    validatePassword();    
    if(formValidity){
        document.getElementsByTagName("form")[0].submit();
        WriteCookie();            
      }   
    }

	function createEventListeners() {
    document.getElementById("country").addEventListener("change", updateRegion);
    document.getElementsByTagName("form")[0].addEventListener("submit", validateForm);
    }

	window.onload = function () {
    setupCountry();
    createEventListeners();    
    }
    
    //Write Cookie
 	function WriteCookie() {
    if( document.myform.Firstname.value == "" ){
      alert("Enter some value!");                  
    }
      cookievalue= escape(document.myform.Firstname.value) + " ";
      document.cookie="name=" + cookievalue;
      alert("Hi! " + cookievalue + "Welcome to Online Book Store." );
    }    