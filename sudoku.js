
var solution=[6,5,9,3,1,4,2,8,7,1,8,7,6,5,2,4,3,9,2,3,4,8,9,7,5,1,6,4,2,6,1,3,5,9,7,8,8,7,1,9,4,6,3,5,2,5,9,3,2,7,8,6,4,1,3,1,2,5,8,9,7,6,4,7,6,5,4,2,1,8,9,3,9,4,8,7,6,3,1,2,5]
var easySolution=[7,2,3,8,4,6,1,5,9,6,1,5,3,9,2,4,7,8,8,4,9,7,1,5,6,3,2,3,7,8,6,5,4,9,2,1,1,9,4,2,8,7,3,6,5,2,5,6,9,3,1,8,4,7,5,6,1,4,7,9,2,8,3,4,8,7,1,2,3,5,9,6,9,3,2,5,6,8,7,1,4]
var hardSolution=[4,5,3,8,2,6,1,9,7,8,9,2,5,7,1,6,3,4,1,6,7,4,9,3,5,2,8,7,1,4,9,5,2,8,6,3,5,8,6,1,3,7,2,4,9,3,2,9,6,8,4,7,5,1,9,3,5,2,1,8,4,7,6,6,7,1,3,4,5,9,8,2,2,4,8,7,6,9,3,1,5]
var userInput=[]
var sum=0;

var startTime;
var endTime;

//check solution for medium game
function say(){
	var x=document.forms["form"];

	for (var i = 0; i <solution.length; i++) {
		userInput.push(x.elements[i].value);

		if (userInput[i]==solution[i]) {
			sum++;
		}
		else
		{
			sum+=0;
			// console.log(userInput[i])
		}
	}
	if (sum==81) {
		alert("You Won!")
	}
	else{
		alert("You Lost!")
	}

	end();
	
}

// function numbersOnly(){
// 	var number=document.getElementById("box").value
// 	if ((typeof number)==string) {}
// }


//check solution for hard game
function sayHard(){
	var x=document.forms["formHard"];

	for (var i = 0; i <hardSolution.length; i++) {
		userInput.push(x.elements[i].value);

		if (userInput[i]==hardSolution[i]) {
			sum++;
		}
		else
		{
			sum+=0;
			// console.log(userInput[i])
		}
	}
	if (sum==81) {
		alert("You Won!")
	}
	else{
		alert("You Lost!")
	}
	end();
	
}

//check solution for easy game
function sayEasy(){
	var x=document.forms["formEasy"];

	for (var i = 0; i <easySolution.length; i++) {
		userInput.push(x.elements[i].value);

		if (userInput[i]==easySolution[i]) {
			sum++;
		}
		else
		{
			sum+=0;
			// console.log(userInput[i])
		}
	}
	if (sum==81) {
		alert("You Won!")
	}
	else{
		alert("You Lost!")
	}
	console.log(sum);

	end();

	// endTime=new Date();

	// var totalTime=(endTime-startTime)/1000

	// console.log(totalTime);
	// // document.getElementById("time").innerHTML= "Total Time: " + Math.floor(totalTime) + " seconds" ;
	// if (totalTime<60) {
	// 	alert( "Total Time: " + Math.floor(totalTime) + " seconds" );

	// }
	// else if (totalTime>=60) {
	// 	minutes=totalTime/60;
	// 	seconds=totalTime%60;
	// 	if (Math.floor(minutes)==1) {
	// 		Msuffix= " minute "
	// 	}
	// 	else{
	// 		Msuffix=" minutes "
	// 	}

	// 	if (Math.floor(seconds==1)) {
	// 		SSuffix=" second "
	// 	}
	// 	else{
	// 		SSuffix = " seconds "
	// 	}
	// 		alert( "Total Time: " + Math.floor(minutes) + Msuffix + Math.floor(seconds) + SSuffix) 

	// }


	// startTime=new Date();
	

	
}

//calculate and print end time for timer
function end(){
	endTime=new Date();

	var totalTime=(endTime-startTime)/1000

	console.log(totalTime);
	// document.getElementById("time").innerHTML= "Total Time: " + Math.floor(totalTime) + " seconds" ;
	if (totalTime<60) {
		alert( "Total Time: " + Math.floor(totalTime) + " seconds" );

	}
	else if (totalTime>=60) {
		minutes=totalTime/60;
		seconds=totalTime%60;
		if (Math.floor(minutes)==1) {
			Msuffix= " minute "
		}
		else{
			Msuffix=" minutes "
		}

		if (Math.floor(seconds==1)) {
			SSuffix=" second "
		}
		else{
			SSuffix = " seconds "
		}
		alert( "Total Time: " + Math.floor(minutes) + Msuffix + Math.floor(seconds) + SSuffix) 

	}


	startTime=new Date();
	
}

//reset
// function clear(){
// 	document.getElementById("time").reset();

// }

//reset the easy game board
function resetE(){
	if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
		document.getElementById("formEasy").reset();

	}
	

}

//reset the medium game board
function resetM(){
	if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
		document.getElementById("form").reset();

	}
	
}

//reset the hard gameboard
function resetH(){
	if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
		document.getElementById("formHard").reset();

	}
	

}

//complete the desired functions for when starting the game
//set start time
//hide music options

function start(){
	startTime=new Date();
	var show=document.getElementById("audio");
	show.style.display="none"

}
// hide music or show music based on users click
var count=0;
function showMusic(){
	var show=document.getElementById("audio");

	if (count%2==1) {
		show.style.display="none"
		
	}
	if (count%2==0) {
		show.style.display="block"
	}
	count++

}

//change the background color based on user input
function changeBackground(){
	var color=document.getElementById("colorMe").value
	console.log(color)
	document.body.style.backgroundColor=color

}

// function hideMusic(){
// }



function userValidation(){
	var name = document.getElementById("userName").value;
	var pass = document.getElementById("password").value;
	var userEmail = document.getElementById("email").value;
	var creditCard = document.getElementById("Card").value;

	var creditCardLength=creditCard.toString().length
	// console.log(thename)
	


	
	var x=true
	var y=true
	var z=true
	var w=true
	var v=true

	
	if (name=="") //validates that there are no digits in name
	{
		alert("Please enter a username, it cannot be blank");
		z=false
	}

	// // if (confirmation != thename)
	// // {
	// // 	alert("Please make sure usernames match");
	// // 	return false;
	// // }

	if (pass == "")
	{
		alert("please Enter a Password");
		w=false
	}

	if (userEmail== "")
	{
		alert("Please enter an email");
		x=false
	}

	if (creditCard=="" || creditCardLength<16) //validates only numbers and not 
	{
		alert("Credit card number must be at least 16 digit long!");
		y=false

	}

	if (isNaN(creditCard)) {
		alert("Credit card must be numbers")
		v=false

	}
console.log(x)
console.log(y)

console.log(z)
console.log(y)

	if (x&&y&&z&&w&&v) {
		window.location.href="howToPlay.html"
	}

}

//testing, contribution, user stories


