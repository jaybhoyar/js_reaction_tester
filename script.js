var table = document.getElementById("myTable");
let shape = document.getElementById("shape");
const ul = document.querySelector("ul");
// let average = document.getElementById("average");
var start = new Date().getTime();

var start = new Date().getTime();

function getrandomColor() {
	var letters = "0123456789ABCDEF".split("");
	var color = "#";

	for (i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 15)];
	}
	return color;
}

function makeShapeAppear() {
	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var width = Math.random() * 100 + 100;

	if (Math.random() > 0.5) {
		shape.style.borderRadius = "50%";
	} else {
		shape.style.borderRadius = "0";
	}

	shape.style.backgroundColor = getrandomColor();
	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.width = width + "px";
	shape.style.display = "block";
	start = new Date().getTime();
}

function AppearAfterDelay() {
	setTimeout(makeShapeAppear, Math.random() * 2000);
}
AppearAfterDelay();

var count = 0;
var sum = 0;
var numArray = [];

function calculate() {
	shape.style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
	let li = document.createElement("li");
	let p = document.createElement("p");
	cell2.innerHTML = timeTaken + "s"; //inserting reacting time in table

	sum = sum + timeTaken;
	var avg = sum / ++count;
	average.innerHTML = "Average is = " + avg.toFixed(2) + "s";

	numArray.push(timeTaken);
	numArray.sort();

	// $("#button").click(function() {
	// 	$("#myTable")
	// 		.find("tr")
	// 		.remove();
	// });

	document.getElementById("button").onclick = function() {
		for (var i = 0; i < numArray.length; i++) {
			var table = document.getElementById("myTable");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell2.innerHTML = numArray[i] + "s";
			//alert(numArray);

			if (avg < 1) {
				greeting = "Excellent Reaction Time";
			} else if (avg > 1 && avg < 1.6) {
				greeting = "Good Reaction Time";
			} else {
				greeting = "Weak Reaction Time";
			}
			document.getElementById("demo").innerHTML = greeting;
		}
	}; // Onclick ending
	function refresh() {
		location.reload();
	}

	AppearAfterDelay();
}
shape.addEventListener("click", calculate);
