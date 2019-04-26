//Percentage calculations
function fivePercentCalculate(){
	var year = 25;	
	var mortgageAmount = document.getElementById('mortgageAmount').value;
	var downPayment = ((mortgageAmount * 5)/100).toFixed(2);
	document.getElementById('downPayment').value = downPayment;
	document.getElementById('amortization').value = year;	
}
function tenPercentCalculate(){	
    var year = 25;
	var mortgageAmount = document.getElementById('mortgageAmount').value;
	var downPayment = ((mortgageAmount * 10)/100).toFixed(2);
	document.getElementById('downPayment').value = downPayment;
	document.getElementById('amortization').value = year;
}
function fifteenPercentCalculate(){	
	var year = 25;
	var mortgageAmount = document.getElementById('mortgageAmount').value;
	var downPayment = ((mortgageAmount * 15)/100).toFixed(2);
	document.getElementById('downPayment').value = downPayment;
	document.getElementById('amortization').value = year;
}
function twentyPercentCalculate(){	
	var year = 30;
	var mortgageAmount = document.getElementById('mortgageAmount').value;
	var downPayment = ((mortgageAmount * 20)/100).toFixed(2);
	document.getElementById('downPayment').value = downPayment;
	document.getElementById('amortization').value = year;
}
function twentyfivePercentCalculate(){	
	var year = 30;
	var mortgageAmount = document.getElementById('mortgageAmount').value;
	var downPayment = ((mortgageAmount * 25)/100).toFixed(2);
	document.getElementById('downPayment').value = downPayment;
	document.getElementById('amortization').value = year;
}
//Calculation of loan amount after down payment
function loanAmount(){
	var totalCost = document.getElementById('mortgageAmount').value;
	var amountPaid = document.getElementById('downPayment').value;
	return totalCost - amountPaid;
}
//Calcualtion of interest rate of loan amount
function interestRate(){
	var interest = document.getElementById('interestRate').value;
	return (interest/12)/100;
}
//Converting length of years into months
function yearsToMonths(){
	var time = document.getElementById('amortization').value;
	return time * 12;
}
//Calculation of mortgage amount /month
function calculateMortgage(){	
	var p = loanAmount();
	var r = interestRate();
	var n = yearsToMonths();
	var monthlyPayment = (r * p) / (1 - (Math.pow((1 + r), (-n))));
	document.getElementById('total').innerHTML = "$"+" "+ monthlyPayment.toFixed(2);	
}
//colors
function white(){
document.getElementById('allPage').style.color = 'white'
}
function yellow(){
document.getElementById('allPage').style.color = 'yellow'
}
function green(){
document.getElementById('allPage').style.color = 'Green'
}
function blue(){
document.getElementById('allPage').style.color = 'Blue'
}
function red(){
document.getElementById('allPage').style.color = 'Red'
}
function violet(){
document.getElementById('allPage').style.color = 'Violet'
}
function black(){
document.getElementById('allPage').style.color = 'Black'
}