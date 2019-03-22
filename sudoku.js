
var solution=[6,5,9,3,1,4,2,8,7,1,8,7,6,5,2,4,3,9,2,3,4,8,9,7,5,1,6,4,2,6,1,3,5,9,7,8,8,7,1,9,4,6,3,5,2,5,9,3,2,7,8,6,4,1,3,1,2,5,8,9,7,6,4,7,6,5,4,2,1,8,9,3,9,4,8,7,6,3,1,2,5]


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

function reset(){
	 if (confirm("Are you Sure you want to reset the game? You will lose all progress?")==true){
	 	document.getElementById("form").reset();

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

