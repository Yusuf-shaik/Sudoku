
var solution=[6,5,9,3,1,4,2,8,7,1,8,7,6,5,2,4,3,9,2,3,4,8,9,7,5,1,6,4,2,6,1,3,5,9,7,8,8,7,1,9,4,6,3,5,2,5,9,3,2,7,8,6,4,1,3,1,2,5,8,9,7,6,4,7,6,5,4,2,1,8,9,3,9,4,8,7,6,3,1,2,5]
var easySolution=[7,2,3,8,4,6,1,5,9,6,1,5,3,9,2,4,7,8,8,4,9,7,1,5,6,3,2,3,7,8,6,5,4,9,2,1,1,9,4,2,8,7,3,6,5,2,5,6,9,3,1,8,4,7,5,6,1,4,7,9,2,8,3,4,8,7,1,2,3,5,9,6,9,3,2,5,6,8,7,1,4]
var hardSolution=[4,5,3,8,2,6,1,9,7,8,9,2,5,7,1,6,3,4,1,6,7,4,9,3,5,2,8,7,1,4,9,5,2,8,6,3,5,8,6,1,3,7,2,4,9,3,2,9,6,8,4,7,5,1,9,3,5,2,1,8,4,7,6,6,7,1,3,4,5,9,8,2,2,4,8,7,6,9,3,1,5]
var userInput=[]
var sum=0;

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
	
}


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
	
}


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
	
}


function resetE(){
	 if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
	 	document.getElementById("formEasy").reset();

	 }
	

}

function resetM(){
	 if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
	 	document.getElementById("form").reset();

	 }
	

}
function resetH(){
	 if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
	 	document.getElementById("formHard").reset();

	 }
	

}


// function count(){
// 	for (var i =0; i <9; i++) {
// 		if (users[i]==solution[i]) {
// 			console.log("true")
// 		}
// 	}
// }

// function loadGame(){
// 	for (var i =0; i <9; i++) {
// 		// document.getElementById("hey").innerHTML=i;
// 	}
// }


// // function count(){
// // 	for (var i = 0; i < cars.length; i++) {
// // 		console.log(cars[i])
// // 	}
// // }

