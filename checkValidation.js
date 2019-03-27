function userValidation()
{
	var name = document.getElementById("name").value;
	var telephone = document.getElementById("cell").value;
	var collectionDate = document.getElementById("collectionDate").value;
	var deliveryDate = document.getElementById("deliveryDate").value;

	if (name==""|| !isNaN(name)) //validates that there are no digits in name
	{
		alert("Please re-enter your name");
		return false;
	}
	 
	if (telephone<10 || isNaN(telephone)|| telephone=="") 
	{
		alert("The contact number must be at least 10 digit long!");
		return false;
	}

	if (Email== "")
	{
		alert("Please enter a collection date for your items");
		return false;
	}

	if (Card== "")
	{
		alert("Please enter a delivery date for your items");
		return false;
	}

	if (deliveryDate<collectionDate)
	{
		alert("Please enter a valid collection and delivery date for your clothing");
		return false;
	}

	else //if user puts in everything correct 
	{
		return true;
	}
}